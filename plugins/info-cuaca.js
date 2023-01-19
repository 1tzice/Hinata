import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let namemu = await conn.getName(who)

if(!args[0]) throw "Masukkan Nama Lokasi"
        let response = axios.get('https://api.weatherapi.com/v1/current.json?key=897dba35c1d94f4cbea134758220207&q=' + text)
        let res = await response
        let { name, region, country, lat, lon, tz_id, localtime_epoch, localtime } = res.data.location
        let { last_updated_epoch, last_updated, temp_c, temp_f, is_day, wind_mph, wind_kph, wind_degree, wind_dir, pressure_mb, pressure_in, precip_mm, precip_in, humidity, cloud, feelslike_c, feelslike_f, vis_km, vis_miles, uv, gust_mph, gust_kph } = res.data.current
        
        let caption = `
*[ CONDITION ]*
${res.data.current.condition.text}

name: ${name}
region: ${region}
country: ${country}
lat: ${lat}
lon: ${lon}
tz_id: ${tz_id}
localtime_epoch: ${localtime_epoch}
localtime: ${localtime}

*[ DETAILED ]*
last_updated_epoch: ${last_updated_epoch}
last_updated: ${last_updated}
temp_c: ${temp_c}
temp_f: ${temp_f}
is_day: ${is_day}
wind_mph: ${wind_mph}
wind_kph: ${wind_kph}
wind_degree: ${wind_degree}
wind_dir: ${wind_dir}
pressure_mb: ${pressure_mb}
pressure_in: ${pressure_in}
precip_mm: ${precip_mm}
precip_in: ${precip_in}
humidity: ${humidity}
cloud: ${cloud}
feelslike_c: ${feelslike_c}
feelslike_f: ${feelslike_f}
vis_km: ${vis_km}
vis_miles: ${vis_miles}
uv: ${uv}
gust_mph: ${gust_mph}
gust_kph: ${gust_kph}
        `.trim()
        
        conn.sendButton(m.chat, caption, author, await(await fetch('https:' + res.data.current.condition.icon)).buffer(), [['🎀 Menu', '/menu']], m )
}

handler.help = ['infocuaca <city>']
handler.tags = ['info']
handler.command = /^infocuaca|weather$/i
handler.limit = true

export default handler