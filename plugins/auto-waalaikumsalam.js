import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { usedPrefix }) => {
let info = ` 📚 *Wa'alaikumsalam*`
await this.send2ButtonDoc(m.chat, `${htki} ᴜ s ᴇ ʀ s ${htka}`, info, 'ℹ️ Sapa', usedPrefix + 'tts id Waalaikumsalam', 'ℹ️ Menu', usedPrefix + 'menu', fakes, adReply)
await this.sendMessage(m.chat, {
          react: {
            text: '🙏',
            key: m.key,
          }})
}
handler.customPrefix = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i
handler.command = new RegExp

export default handler