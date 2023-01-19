import AI2D from "@arugaz/ai2d";

let handler = async(m, { conn, usedPrefix, text, command }) => {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!/image/g.test(mime)) throw `Balas/Kirim Gambar Dengan Perintah ${usedPrefix + command}!`
    m.reply(wait)
    let image = await q.download()
    let buff = await AI2D(image, {
  proxy: {
    url: "http://27.115.36.154:9002",
    chinese: true,
    image: false,
  }
})
await conn.sendFile(m.chat, buff, '', author, m)
}
handler.help = ['ai2d'].map(v => v + ' (Balas foto)')
handler.tags = ['tools']
handler.command = /^ai2d|arugaz$/i
handler.limit = true
export default handler
