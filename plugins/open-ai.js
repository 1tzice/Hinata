/* Recode By Wudysoft */

import { Configuration, OpenAIApi } from "openai"
import cp, { exec as _exec } from "child_process"
import { promisify } from "util"
let exec = promisify(_exec).bind(cp)
import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "input text\nEx. .aiworld naruto\n<command> <tex>\n\nCommand:\n-ai\n-aicute\n-aianime\n-aitextimg\n-aitextgen\n-aidiff\n-aisent\n-ai3d\n-aipunk\n-aiworld\n-aidalle\n-aimodel"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]
  let three = urut[2]
  
  const configuration = new Configuration({
				apiKey: openaikey,
			});
			const openai = new OpenAIApi(configuration);
			
	if (command == "aicute") {
		m.reply(wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/cute-creature-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aianime") {
		m.reply(wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/anime-portrait-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aitextimg") {
		m.reply(wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/text2img")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aitextgen") {
		m.reply(wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/text-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, str.output, logo, [
				[emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aidiff") {
		m.reply(wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/stable-diffusion")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aisent") {
		m.reply(wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/sentiment-analysis")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "ai3d") {
		m.reply(wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/3d-character-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aipunk") {
		m.reply(wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/steampunk-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aiworld") {
		m.reply(wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/anime-world-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aidalle") {
		m.reply(wait)
		try {
		let res = await fetch(`https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${encodeURIComponent(text)}`)
		let anu = Buffer.from(await res.arrayBuffer())
		if (Buffer.byteLength(anu) < 22000) throw Error(`[!] Error : Buffer not found.`)
		await conn.sendMessage(m.chat, { image: anu, caption: `Open AI Dall E :\n${text}` }, { quoted: m })
	} catch (e) {
		let url = "https://dalle-mini.amasad.repl.co/gen/" + text
			await conn.sendButton(m.chat, author, "[ Input ]\n" + text, url, [
			[emojis + " M E N U", ".menulist"]
		], m)
	}
	}
	
	if (command == "ai") {
		try {
			const response = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: text,
				temperature: 0.3,
				max_tokens: 3000,
				top_p: 1.0,
				frequency_penalty: 0.0,
				presence_penalty: 0.0
			});
			m.reply('*Result:*' + response.data.choices[0].text + '\n\n' + '*Made by:* ' + 'OpenAi')
		} catch (e) {
			let op = await fetch(global.API('lolhuman', '/api/openai', { text: text }, 'apikey'))
			let ai = await op.json()
			if (!ai.result) throw eror
			m.reply('*Result:*\n' + ai.result + '\n\n' + '*Made by:* ' + global.API('lolhuman'))
		}
	}
	
	if (command == "aimodel") {
	if (!text) throw query
	let lm = await openai.listModels();
	let listSections = []
	Object.values(lm.data.data).map((v, index) => {
	listSections.push(["Model [ " + ++index + ' ]', [
          [v.id.toUpperCase(), usedPrefix + command + "get " + v.id + "|" + text, "➥"]
        ]])
	})
	return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
	}
	
	if (command == "aimodelget") {
	try {
			let res = await openai.createCompletion({
				model: one,
				prompt: two,
				temperature: 0.3,
				max_tokens: 3000,
				top_p: 1.0,
				frequency_penalty: 0.0,
				presence_penalty: 0.0
			});
			m.reply('*Result:*' + res.data.choices[0].text + '\n\n' + '*Made by:* ' + 'OpenAi')
		} catch (e) {
			let op = await fetch(global.API('lolhuman', '/api/openai', { text: text }, 'apikey'))
			let ai = await op.json()
			if (!ai.result) throw eror
			m.reply('*Result:*\n' + ai.result + '\n\n' + '*Made by:* ' + global.API('lolhuman'))
		}
	}
	
}
handler.help = ["ai"]
handler.tags = ["info"]
handler.command = /^ai(text(gen|img)|(dall|cut)e|anime|world|diff|punk|model|modelget|sent|3d)?$/i
export default handler