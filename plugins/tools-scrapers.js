import cheerio from 'cheerio';
import got from 'got';

let handler = async (m, { text, args, usedPrefix, command }) => {
let kueri =  'Masukkan Query\nEx. ' + usedPrefix + command + ' go |buku\n\n*List*\n-yts\n-tik\n-mf\n-go\n-gen\n-wik\n-gi'
let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  if (!one) throw kueri
  if (args[0] == 'yts') {
  let res = await youtubeSearch(one)
  let dapet = res.result.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video 🎥', usedPrefix + 'ytv ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url],
          ['Audio 🎧', usedPrefix + 'yta ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 YT Search 🔎 ' + htka, `⚡ Silakan pilih YouTube Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ YouTube Search Disini ☂️`, listSections, m)
  }
  if (args[0] == 'tik') {
  let res = await tiktokdl(one)
  let dapet = res.result.download
    let listSections = []
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['NO WM', usedPrefix + 'get ' + dapet.nowm, author],
          ['WM', usedPrefix + 'get ' + dapet.wm, author],
          ['MUSIC', usedPrefix + 'get ' + dapet.music, author]
        ]])
	return conn.sendList(m.chat, htki + ' 📺 TIK 🔎 ' + htka, `${dapet.music_info}⚡ Silakan pilih Tik di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ YouTube Search Disini ☂️`, listSections, m)
  }
  if (args[0] == 'mf') {
  let res = await mediafiredl(one)
  let cap = `Name: ${res.result.filename}\nUrl: ${res.result.url}\nType: ${res.result.filetype}\nExt: ${res.result.ext}\nUp: ${res.result.aploud}\nSize: ${res.result.filesizeH}`
  m.reply(cap)
  }
  if (args[0] == 'go') {
  let res = await googleImage(one)
  let ky = res.result
  let listSections = []
	Object.keys(ky).map((v, index) => {
	listSections.push(["Result [ " + ++index + ' ]', [
          [ky[v].slice(10, 20), usedPrefix + "get " + ky[v], "➥"]
        ]])
	})
	return conn.sendList(m.chat, htki + " 📺 RESULT 🔎 " + htka, `⚡ Silakan pilih result di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ I M A G E S ☂️", listSections, m)
  }
  if (args[0] == 'gen') {
  let res = await genius(one)
  let cap = `*${res.result.song.artist_names}*\n${res.result.song.full_title}\n\n*Lirik:*\n${res.result.lyrics}`
  m.reply(cap)
  }
  if (args[0] == 'wik') {
  let res = await wikipedia(one)
  let cap = `*${res.result.judul}*\n\n${res.result.isi}`
  m.reply(cap)
  }
  if (args[0] == 'gi') {
  let res = await googleIt(one)
  throw res.result.articles[0]
  }
  
  }
handler.command = ['tsc']

export default handler
/*
async function function_name(argument) {
	try {
	// body...
		return  {
			status: true,
			result: res
		}
	} catch (e) {
		return { status: false, result: e }
	}
}
*/

async function youtubeSearch(query) {
	try {
		const body = await got('https://www.youtube.com/results', {
			headers: {
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
			},
			searchParams: {
				search_query: query
			}
		}).text();
		const $ = cheerio.load(body);
		let sc;
		$('script').map(function () {
			const el = $(this).html();
			let regex;
			if ((regex = /var ytInitialData = /gi.exec(el || ''))) {
				sc = JSON.parse(regex.input.replace(/^var ytInitialData = /i, '').replace(/;$/, ''));
			}
			return regex && sc;
		});
		const results = { video: [], channel: [], playlist: [] };
		sc.contents.twoColumnSearchResultsRenderer.primaryContents
		.sectionListRenderer.contents[0].itemSectionRenderer.contents.forEach((v) => {
			var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
			const typeName = Object.keys(v)[0];
			const result = v[typeName];
			if (['horizontalCardListRenderer', 'shelfRenderer'].includes(typeName)) {
				return;
        } // Todo: add this result as results
        const isChannel = typeName === 'channelRenderer';
        const isVideo = typeName === 'videoRenderer';
        const isMix = typeName === 'radioRenderer';
        if (isVideo) {
        	const durationMultipliers = {
        		1: {
        			0: 1
        		},
        		2: {
        			0: 60,
        			1: 1
        		},
        		3: {
        			0: 3600,
        			1: 60,
        			2: 1
        		}
        	};
        	const view = ((_a = result.viewCountText) === null || _a === void 0 ? void 0 : _a.simpleText) ||
        	((_b = result.shortViewCountText) === null || _b === void 0 ? void 0 : _b.simpleText) ||
        	((_d = (_c = result.shortViewCountText) === null || _c === void 0 ? void 0 : _c.accessibility) === null || _d === void 0 ? void 0 : _d.accessibilityData.label);
        	const _duration = (_f = (_e = result.thumbnailOverlays) === null || _e === void 0 ? void 0 : _e.find((v) => Object.keys(v)[0] === 'thumbnailOverlayTimeStatusRenderer')) === null || _f === void 0 ? void 0 : _f.thumbnailOverlayTimeStatusRenderer.text;
        	const videoId = result.videoId;
        	const duration = ((_g = result.lengthText) === null || _g === void 0 ? void 0 : _g.simpleText) || (_duration === null || _duration === void 0 ? void 0 : _duration.simpleText);
        	let durationS = 0;
        	(_h = ((duration === null || duration === void 0 ? void 0 : duration.split('.').length) && duration.indexOf(':') === -1
        		? duration.split('.')
        		: duration === null || duration === void 0 ? void 0 : duration.split(':'))) === null || _h === void 0 ? void 0 : _h.forEach((v, i, arr) => (durationS +=
        		durationMultipliers[arr.length]['' + i] * parseInt(v)));
        		results.video.push({
        			authorName: (_l = (((_j = result.ownerText) === null || _j === void 0 ? void 0 : _j.runs) ||
        				((_k = result.longBylineText) === null || _k === void 0 ? void 0 : _k.runs) ||
        				[])[0]) === null || _l === void 0 ? void 0 : _l.text,
        			authorAvatar: (_p = (_o = (_m = result.channelThumbnailSupportedRenderers) === null || _m === void 0 ? void 0 : _m.channelThumbnailWithLinkRenderer.thumbnail.thumbnails) === null || _o === void 0 ? void 0 : _o.filter(({ url }) => url)) === null || _p === void 0 ? void 0 : _p.pop().url,
        			videoId,
        			url: encodeURI('https://www.youtube.com/watch?v=' + videoId),
        			thumbnail: result.thumbnail.thumbnails.pop().url,
        			title: (_t = (((_r = (_q = result.title) === null || _q === void 0 ? void 0 : _q.runs.find((v) => v.text)) === null || _r === void 0 ? void 0 : _r.text) ||
        				((_s = result.title) === null || _s === void 0 ? void 0 : _s.accessibility.accessibilityData.label))) === null || _t === void 0 ? void 0 : _t.trim(),
        			description: (_y = (_x = (_w = (_v = (_u = result.detailedMetadataSnippets) === null || _u === void 0 ? void 0 : _u[0]) === null || _v === void 0 ? void 0 : _v.snippetText.runs) === null || _w === void 0 ? void 0 : _w.filter(({ text }) => text)) === null || _x === void 0 ? void 0 : _x.map(({ text }) => text)) === null || _y === void 0 ? void 0 : _y.join(''),
        			publishedTime: (_z = result.publishedTimeText) === null || _z === void 0 ? void 0 : _z.simpleText,
        			durationH: ((_0 = result.lengthText) === null || _0 === void 0 ? void 0 : _0.accessibility.accessibilityData.label) ||
        			(_duration === null || _duration === void 0 ? void 0 : _duration.accessibility.accessibilityData.label),
        			durationS,
        			duration,
        			viewH: view,
        			view: (_1 = (((view === null || view === void 0 ? void 0 : view.indexOf('x')) === -1
        				? view === null || view === void 0 ? void 0 : view.split(' ')[0]
        				: view === null || view === void 0 ? void 0 : view.split('x')[0]) || view)) === null || _1 === void 0 ? void 0 : _1.trim(),
        			type: typeName.replace(/Renderer/i, '')
        		});
        	}
        	if (isChannel) {
        		const channelId = result.channelId;
        		results.channel.push({
        			channelId,
        			url: encodeURI('https://www.youtube.com/channel/' + channelId),
        			channelName: result.title.simpleText ||
        			((_5 = (_4 = result.shortBylineText) === null || _4 === void 0 ? void 0 : _4.runs.find((v) => v.text)) === null || _5 === void 0 ? void 0 : _5.text),
        			avatar: 'https:' +
        			((_6 = result.thumbnail.thumbnails
        				.filter(({ url }) => url)) === null || _6 === void 0 ? void 0 : _6.pop().url),
        			isVerified: ((_7 = result.ownerBadges) === null || _7 === void 0 ? void 0 : _7.pop().metadataBadgeRenderer.style) ===
        			'BADGE_STYLE_TYPE_VERIFIED',
        			description: (_13 = (_12 = (_11 = (_10 = result.descriptionSnippet) === null || _10 === void 0 ? void 0 : _10.runs) === null || _11 === void 0 ? void 0 : _11.filter(({ text }) => text)) === null || _12 === void 0 ? void 0 : _12.map(({ text }) => text)) === null || _13 === void 0 ? void 0 : _13.join(''),
        			type: typeName.replace(/Renderer/i, '')
        		});
        	}
        	if (isMix) {
        		results.playlist.push({
        			playlistId: result.playlistId,
        			title: result.title.simpleText,
        			thumbnail: result.thumbnail.thumbnails.pop().url,
        			video: result.videos.map(({ childVideoRenderer }) => {
        				return {
        					videoId: childVideoRenderer.videoId,
        					title: childVideoRenderer.title.simpleText,
        					durationH: childVideoRenderer.lengthText.accessibility
        					.accessibilityData.label,
        					duration: childVideoRenderer.lengthText.simpleText
        				};
        			}),
        			type: 'mix'
        		});
        	}
        })
return {
	status: true,
	result: results
}
} catch (e) {
	return { status: false, result: e }
}
}

async function tiktokdl(url) {
	//@xct007/tiktok-scraper
	try {
		function API_URL(aweme) {
			return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
		};
		async function getAwemeId(url) {
    // any :/
			let result;
			const Konto1 = /video\/([\d|\+]+)?\/?/;
			const valid = url.match(Konto1);
			if (valid) {
				return valid[1];
			}
			else {
				try {
					const data = await got
					.get(url, {
						headers: {
							'Accept-Encoding': 'deflate',
						},
						maxRedirects: 0,
					})
					.catch((e) => e.response.headers.location);
					const _url = data;
					const _valid = _url.match(Konto1);
					if (_valid) {
						result = _valid[1];
					}
				}
				catch (error) {
            // console.log(error)
					result = false;
				}
			}
			return result;
		};
		const valid = await getAwemeId(url);
        //if (!valid) return false // result = false
		const data = await got
		.get(API_URL(valid), {
			headers: {
				'Accept-Encoding': 'deflate',
				'User-Agent': 'okhttp/3.14.9',
			},
		})
		.catch((e) => e.response);
        //if (!data) return false // result = false
		const body = JSON.parse(data.body);
		const obj = body.aweme_list.find((o) => o.aweme_id === valid)
		const results = {
			aweme_id: obj.aweme_id,
			region: obj.region,
			desc: obj.desc,
			create_time: obj.create_time,
			author: {
				uid: obj.author.uid,
				unique_id: obj.author.unique_id,
				nickname: obj.author.nickname,
				birthday: obj.author.birthday,
			},
			duration: obj.music.duration,
			download: {
				nowm: obj.video.play_addr.url_list[0],
				wm: obj.video.download_addr.url_list[0],
				music: obj.music.play_url.url_list[0],
				music_info: {
					id: obj.music.id,
					title: obj.music.title,
					author: obj.music.author,
					is_original: obj.music.is_original,
					cover_hd: obj.music.cover_hd.url_list[0],
					cover_large: obj.music.cover_large.url_list[0],
					cover_medium: obj.music.cover_medium.url_list[0],
				},
			},
		};
		return {
			status: true,
			result: results
		}
	} catch (e) {
		return { status: false, result: e }
	}
}

async function mediafiredl(url) {
	try {
		var _a, _b;
		const data = await got(url).text();
		const $ = cheerio.load(data);
		const Url = ($('#downloadButton').attr('href') || '').trim();
		const url2 = ($('#download_link > a.retry').attr('href') || '').trim();
		const $intro = $('div.dl-info > div.intro');
		const filename = $intro.find('div.filename').text().trim();
		const filetype = $intro.find('div.filetype > span').eq(0).text().trim();
		const ext = ((_b = (_a = /\(\.(.*?)\)/.exec($intro.find('div.filetype > span').eq(1).text())) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.trim()) || 'bin';
		const $li = $('div.dl-info > ul.details > li');
		const aploud = $li.eq(1).find('span').text().trim();
		const filesizeH = $li.eq(0).find('span').text().trim();
		const filesize = parseFileSize(filesizeH);
		return {
			status: true,
			result: {
				url: Url || url2,
				url2,
				filename,
				filetype,
				ext,
				aploud,
				filesizeH,
				filesize
			}
		};
	} catch (e) {
		return { status: false, result: e }
	}
}

function parseFileSize(size) {
	return parseFloat(size) * (/GB/i.test(size)
		? 1000000
		: /MB/i.test(size)
		? 1000
		: /KB/i.test(size)
		? 1
		: /bytes?/i.test(size)
		? 0.001
		: /B/i.test(size)
		? 0.1
		: 0);
}

async function googleImage(query) {
	try {
		const data = await got(`https://www.google.com/search?q=${query}&tbm=isch`, {
			headers: {
				accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
				'accept-encoding': 'gzip, deflate, br',
				'accept-language': 'en-US,en;q=0.9,id;q=0.8',
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
			}
		}).text();
		const $ = cheerio.load(data);
		const pattern = /\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm;
		const matches = $.html().matchAll(pattern);
		const decodeUrl = (url) => decodeURIComponent(JSON.parse(`"${url}"`));
		return {
			status: true,
			result: [...matches]
			.map(({ groups }) => decodeUrl(groups === null || groups === void 0 ? void 0 : groups.url))
			.filter((v) => /.*\.jpe?g|png$/gi.test(v))
		}
	} catch (e) {
		return { status: false, result: e }
	}
}

async function genius(query) {
	try {
		const res = await got('https://genius.com/api/search/song?per_page=5&q=' + encodeURIComponent(query), {
			headers: {
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
			},
		}).text();
		const parsed = JSON.parse(res)
		const reduce = parsed.response.sections.reduce((pv, x) => [...pv, ...x.hits], [])
		const result = reduce.filter((s) => s.type === "song")
		const firstSong = result[0]
		const url = firstSong.result.url
		const data = await got(url, {
			headers: {
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
			},
		}).text();
		const $ = cheerio.load(data);
		const container = $("div[class*='Lyrics__Container']")
		.toArray()
		.map((x) => {
			const ele = $(x);
			ele.find("br").replaceWith("\n");
			return ele.text();
		})
		.join("\n")
		.trim()
		return {
			status: true,
			result: {
				song: firstSong.result,
				lyrics: container.replace(/\[[^\]]+\]\n?/g, "")
			}
		}
	} catch (e) {
		return { status: false, result: e }
	}
}

async function wikipedia(querry) {
	try {
		const link = await got.get(`https://id.wikipedia.org/wiki/${querry}`)
		const $ = cheerio.load(link.body)
		let judul = $("#firstHeading").text().trim();
		let isi = [];
		$("#mw-content-text > div.mw-parser-output").each(function (rayy, Ra) {
			let penjelasan = $(Ra).find("p").text().trim();
			isi.push(penjelasan);
		});
		for (let i of isi) {
			return  {
				status: true,
				result: {
					judul: judul,
					isi: i,
				}
			}
		}
	} catch (e) {
		return { status: false, result: e }
	}
}

async function googleIt(query) {
	try {
		const body = await got('https://www.google.com/search', {
			searchParams: {
				q: query
			},
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
			}
		}).text();
		const $ = cheerio.load(body);
		const infoEl = $('div.I6TXqe > div.osrp-blk');
		const info = {
			title: infoEl.find('h2.qrShPb > span').text().trim(),
			type: infoEl.find('div.SPZz6b > div.wwUB2c > span').text().trim(),
			description: '',
			image: []
		};
		infoEl
		.find('div.LuVEUc > div.UDZeY > div.wDYxhc[data-attrid]:not(.NFQFxe)')
		.each(function () {
			const desc = $(this).text().trim();
			if (desc)
				info.description += desc + '\n';
		});
		infoEl
		.find('div[jscontroller=M0hWhd] > div[jscontroller=ABJeBb] > div.eA0Zlc[jsname=dTDiAc]')
		.each(function () {
			var _a, _b;
			const img = (_a = $(this)
				.find('a > g-img.BA0A6c > img.rISBZc')
            .attr('src')) === null || _a === void 0 ? void 0 : _a.trim(); // you can make buffer using function fromBase64ToString
			if (img)
				(_b = info.image) === null || _b === void 0 ? void 0 : _b.push(img);
		});
		info.image = [...new Set(info.image)];
		const articles = [];
		$('div.tF2Cxc').each(function () {
			const el = $(this);
			const header = el.find('cite.iUh30').text();
			const title = el.find('div.yuRUbf > a > h3').text();
			const url = el.find('div.yuRUbf > a[href]').attr('href');
			const description = el.find('div.VwiC3b > span').text() || el.find('div.VwiC3b').text();
			if (el.length && url) {
				articles.push({
					header: header,
					title: title,
					url,
					description: description
				});
			}
		});
		const res = {
			info,
			articles
		};
		return  {
			status: true,
			result: res
		}
	} catch (e) {
		return { status: false, result: e }
	}
}
