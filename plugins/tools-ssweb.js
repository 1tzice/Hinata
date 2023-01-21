import axios from 'axios'
import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
	if (!args[0]) throw 'Input URL'
	m.reply(wait)
	let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
	let st = await ssweb(url, /f$/i.test(command), args[1])
	let ss = st
	let ss2 = await ssweb2(url)
	let lis = [
'https://shot.screenshotapi.net/screenshot?token=WCCYKR0-X5CMMV0-JB4G5Z5-P6SPC8R&url=' + args[0] + '&full_page=true&fresh=true&output=image&file_type=jpg',
'https://api.popcat.xyz/screenshot?url=' + args[0],
'https://api.apiflash.com/v1/urltoimage?access_key=7eea5c14db5041ecb528f68062a7ab5d&wait_until=page_loaded&url=' + args[0],
'https://image.thum.io/get/fullpage/' + args[0],
ss,
ss2
]
let liss = [
'shot.screenshotapi',
'api.popcat',
'api.apiflash',
'image.thum.io',
'screenshotmachine.com',
'urlbox.io'
]
let row = Object.keys(lis, liss).map((v, index) => ({
		title: 'By ' + liss[v],
		description: 'Bot ' + author,
		rowId: usedPrefix + 'get ' + lis[v]
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}
handler.help = ['ss', 'ssf']
handler.tags = ['tools']
handler.command = /^ss(web)?f?$/i

export default handler

export async function ssweb(url = '', full = false, type = 'desktop') {
	type = type.toLowerCase()
	if (!['desktop', 'tablet', 'phone'].includes(type)) type = 'desktop'
	let form = new URLSearchParams()
	form.append('url', url)
	form.append('device', type)
	if (!!full) form.append('full', 'on')
	form.append('cacheLimit', 0)
	let res = await axios({
		url: 'https://www.screenshotmachine.com/capture.php',
		method: 'post',
		data: form
	})
	let cookies = res.headers['set-cookie']
	let buffer = await axios({
		url: 'https://www.screenshotmachine.com/' + res.data.link,
		headers: {
			'cookie': cookies.join('')
		},
		responseType: 'arraybuffer' 
	})
	return Buffer.from(buffer.data)
}

export async function ssweb2(url) {
	let data = await axios.post('https://www.urlbox.io/api/render', { url })
	return data.data.screenshotUrl
}