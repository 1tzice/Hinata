import axios from 'axios'
import { instagramdlv3, savefrom } from '@bochilteam/scraper'
import instagramGetUrl from 'instagram-url-direct'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (args[0] && /(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(args[0])) { /* IG Post || Reel || TV */
		await m.reply('_In progress, please wait..._')
		let data = await ig.downloadv4(args[0]).catch(async _ => await ig.download(args[0])).catch(async _ => await ig.downloadv2(args[0])).catch(async _ => await ig.downloadv3(args[0]))
		let urlLength = data?.media?.length || data?.url?.length || data?.insBos?.length || data?.length
		for (let x = 0; x < urlLength; x++) {
			let caption = x == 0 ? data?.caption || data?.insBos?.[0]?.desc : ''
			let url = data?.media?.[x] || data?.url?.[x] || data?.insBos?.[x]?.url || data?.[x]?.url
			await conn.sendFile(m.chat, url, '', caption, m)
		}
	} else if (args[0] && /\/s\/([^\s&]+)/.test(args[0])) { /* IG Highlights */
		let mediaId = args[0].split('story_media_id=')[1].split('_')[0]
		if (!mediaId) throw 'Media id not found'
		await m.reply('_In progress, please wait..._')
		let data = await ig.downloadv2(args[0])
		data = data.insBos.find(x => x.id == mediaId)
		if (!data) throw 'Can\'t download highlight'
		await conn.sendFile(m.chat, data.url, '', data.desc, m)
	} else if (args[0] && /\/stories\/([^\s&]+)/.test(args[0])) { /* IG Story */
		await m.reply('_In progress, please wait..._')
		let ig = await savefrom(args[0]).catch(console.log)
		if (!ig) throw 'Story not found'
		let url = ig.url.length > 1 ? ig.url.find(v => v?.quality?.isNumber())?.url : ig.url[0].url
		await conn.sendFile(m.chat, url, '', ig.meta?.title, m)
	} else if (args[0] && /(?:\/p\/|\/reel\/|\/tv\/|\/stories\/|\/s\/)([^\s&]+)/.test(args[0])) { /* IG Story */
		await m.reply('_In progress, please wait..._')
		let results = (await instagramGetUrl(args[0])).url_list[0]
		conn.sendFile(m.chat, results, 'instagram.mp4', `*INSTAGRAM DOWNLOADER*`, m)
	} else throw 'Invalid URL'
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler

class Instagram {
	async getSession() {
		let res = await axios.get('https://sssinstagram.com/en')
		let cookie = res.headers['set-cookie']
		return {
			cookie: `${cookie[0]}; ${cookie[1]}`,
			token: cookie[0].split`;`[0].replace('XSRF-TOKEN=','').replace('%3D', '')
		}
	}
	
	async download(link) {
		let session = await this.getSession()
		let { data: { data } } = await axios({
			url: 'https://sssinstagram.com/id/request',
			method: 'post',
			headers: {
				'cookie': session.cookie,
				'x-xsrf-token': session.token,
				'content-type': 'application/json' 
			},
			data: JSON.stringify({ link })
		})
		if (data.message) throw data.message
		let obj = { caption: '', url: [] }
		if (/Image/.test(data.type)) {
			obj.caption = data.image.title
			obj.url.push(data.image.photos.sort((a, b) => a.width - b.width).pop().url)
		} else if (/Video/.test(data.type)) {
			obj.caption = data.video.title
			obj.url.push(data.video.video_url)
		} else if (/Sidecar/.test(data.type)) {
			for (let x of data.items) {
				if (/Video/.test(x.type)) obj.url.push(x.video.video_url)
				else obj.url.push(x.image.photos.sort((a, b) => a.width - b.width).pop().url)
			}
		}
		return obj
	}
	
	async downloadv2(url) {
		let data = (await axios.get(`https://api.sssgram.com/st-tik/ins/dl?url=${url}&timestamp=${Date.now()}`)).data.result
		if (!data.count) throw 'Can\'t download post'
		return data
	}
	
	async downloadv3(url) {
		let data = await instagramdlv3(url).catch(console.log)
		if (!data) throw 'Can\'t download post'
		return data
	}
	
	async downloadv4(url) {
		let data = await axios.get(API('lolhuman', '/api/instagram2', { url }, 'apikey')).catch(_ => _)
		if (!data) throw 'Can\'t download post'
		return data.data.result
	}
	
	async stalk(user) {
		let data = (await axios.get(`https://api.sssgram.com/st-tik/ins/dlprofile?url=https://instagram.com/${user}&timestamp=${Date.now()}`)).data.result 
		if (!data.status) throw 'An error occurred'
		return data
	}
}

export let ig = new Instagram