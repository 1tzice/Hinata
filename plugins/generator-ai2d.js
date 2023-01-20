import AI2D from "@arugaz/ai2d";

let handler = async(m, { conn, usedPrefix, text, command }) => {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!/image/g.test(mime)) throw `Balas/Kirim Gambar Dengan Perintah ${usedPrefix + command}!`
    m.reply(wait)
    let image = await q.download()
    let buff = await AI2D(image, {
  proxy: {
    url: "socks5://60.165.35.64:7302", //"socks5://27.184.2.115:23456/",
    chinese: true,
    image: false,
  },// support http & socks
crop: "SINGLE",
})
await conn.sendFile(m.chat, buff, '', author, m)
}
handler.help = ['ai2d'].map(v => v + ' (Balas foto)')
handler.tags = ['tools']
handler.command = /^ai2d|arugaz$/i
handler.limit = true
export default handler
