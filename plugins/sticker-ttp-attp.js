let handler = async (m, { conn, args, command }) => {
	let text = args.join` `
	if (m.quoted?.text) {
		let res = await conn.getFile(API('lolhuman', `/api/${command}`, { text: m.quoted?.text }, 'apikey'))
		if (!/webp/.test(res.ext)) throw 'An error occurred.'
		await conn.sendMessage(m.chat, { sticker: res.data }, { quoted: m })
	} else if (text) {
		let res = await conn.getFile(API('lolhuman', `/api/${command}`, { text }, 'apikey'))
		if (!/webp/.test(res.ext)) throw 'An error occurred.'
		await conn.sendMessage(m.chat, { sticker: res.data }, { quoted: m })
	} else throw 'Input teks'
}
handler.tags = ['general']
handler.help = handler.command = ['ttp', 'attp', 'attp2']

export default handler