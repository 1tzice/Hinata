
import uploadImage from "../lib/uploadImage.js"
import { sticker } from "../lib/sticker.js"

let handler = async (m, { conn, text, command }) => {
 try {
 
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ""
  if (!mime) throw "Tidak ada foto"
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download?.()
  let url = await uploadImage(img)
  let kay = "http://keyapi.ml/" + command + "?avatar=" + url
  let stiker = await sticker(null, kay, packname, author)
  conn.sendFile(m.chat, stiker, "kay.webp", "", m)
  
 } catch (e) {
   m.reply("Conversion Failed")
  }
}
handler.help = ["jail",
"skulls",
"gay",
"rgb",
"god",
"penguin",
"fakeperson",
"hitler",
"megamind",
"oogway",
"gun"].map(v => v + ' *<Reply Media>*')
handler.tags = ["sticker"]
handler.command = ["jail",
"skulls",
"gay",
"rgb",
"god",
"penguin",
"fakeperson",
"hitler",
"megamind",
"oogway",
"gun"]

export default handler
