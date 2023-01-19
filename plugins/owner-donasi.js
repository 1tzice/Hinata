import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let str = `${conn.getName(m.sender)}
Want Support Bot?

*[ PAYMENT METHOD ]*

- Pulsa/pulse(Telkomsel): *${pulsa}*
- Dana/ovo: *${dana}*
- Paypal: *${paypal}*
- Saweria: *${saweria}*
- Trakteer: *${trakteer}*

Setelah melakukan donasi kirim bukti pembayaran ke owner
`
await conn.sendPayment(m.chat, fsizedoc, 'USD', str, '0@s.whatsapp.net', logo, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
