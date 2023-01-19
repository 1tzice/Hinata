
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let str = `*[ Source Code ]*
- My Github:
${sgh}`
await conn.sendPayment(m.chat, fsizedoc, 'USD', str, '0@s.whatsapp.net', logo, m)
}
handler.command = /^sc(ript(bot)?|bot)?$/i
export default handler
