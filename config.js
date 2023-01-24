import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import moment from "moment-timezone"

/*Oᴡɴᴇʀ number*/
global.owner = [
  ["6282195322106"],
  ["6282195322106", "️𝐎𝐰𝐧𝐞𝐫", true]
]
global.mods = ["6282195322106"]
global.prems = ["6282195322106"]

/*Website*/
global.APIs = {
 amel : "https://melcanz.com",
 bg : "http://bochil.ddns.net",
 dhnjing : "https://dhnjing.xyz",
 dzx : "https://api.dhamzxploit.my.id",
 fdci : "https://api.fdci.se",
 hardianto : "https://hardianto.xyz",
 lolhuman : "https://api.lolhuman.xyz",
 neoxr : "https://api.neoxr.my.id",
 pencarikode : "https://pencarikode.xyz",
 violetics : "https://violetics.pw",
 xcdr : "https://api-xcoders.site",
 xteam : "https://api.xteam.xyz",
 zeks : "https://api.zeks.xyz",
 zenz : "https://zenzapis.xyz"
}

/*Apikey*/
global.APIKeys = {
 "https://api.neoxr.my.id" : "5VC9rvNx",
 "https://api.lolhuman.xyz" : "zulfikarbot",
 "https://api.xteam.xyz" : "HIRO",
 "https://api.zeks.xyz" : "apivinz",
 "https://hardianto.xyz" : "hardianto",
 "https://melcanz.com" : "manHkmst",
 "https://pencarikode.xyz" : "pais",
 "https://violetics.pw" : "beta",
 "https://api-xcoders.site" : "7iyNa0qA",
 "https://zenzapis.xyz" : "f9fccfcff1"
}

/*Lolhuman*/
global.lolkey = "zulfikarbot"
/*OpenAi*/
global.openaikey = "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"

/*List Key
-Lolhuman-
327a6596e4c4baa20c756132
bukanitucuy14315195
85faf717d0545d14074659ad
ed78c137a46873c5b8e5fe3b
zulfikarbot

-XTEAM-
5bd33b276d41d6b4
NezukoTachibana281207
HIRO

-Neoxr-
5VC9rvNx

*/

/*Number*/
global.nomorbot = "6285171216276"
global.nomorown = "6282195322106"
global.namebot = "ʜɪɴᴀᴛᴀ-ʙᴏᴛ"
global.nameown = "「 𝐖𝐮𝐝𝐲𝐒𝐨𝐟𝐭 」"

/* Random */
global.pmenus = pickRandom(["◈","➭","ଓ","⟆•","⳻⳻","•","↬","◈▻","⭑","ᯬ","◉","᭻","»","〆","々","⛥","✗","⚜","⚚","♪"])
global.htjava = pickRandom(["⛶","❏","⫹⫺","☰","⎔","✦","⭔","⬟","⛊","⚝"])

/*Watermark*/
global.wm = "                「 ʜɪɴᴀᴛᴀ-ʙᴏᴛ あ⁩ 」"
global.wm2 = "꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷"
global.wm3 = htjava + " ʜɪɴᴀᴛᴀ-ʙᴏᴛ"
global.botdate = `${htjava} Date :  ${moment.tz("Asia/Jakarta").format("DD/MM/YY")}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}`
global.titlebot = `${htjava} Time Sever : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}\n⫹⫺ Date Server :  ${moment.tz("Asia/Jakarta").format("DD/MM/YY")}`

/*Thumbnail*/
global.giflogo = "https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4"
global.fla = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text="
global.flaaa = [
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
"https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="]

/*Link*/
global.sig = "https://www.instagram.com/wudysoft"
global.sgh = "https://www.github.com/wudysoft"
global.sgc = "https://chat.whatsapp.com/LqJoQr4IdBLAXsxd1PkNph"
global.sdc = "https://www.discord.com/wudysoft"
global.snh = "https://www.tiktok.com/@upload_file"
global.sfb = "https://www.facebook.com/"
global.syt = "https://www.youtube.com/"

/*Nsfw*/
global.premnsfw = true

/*Type*/
global.dpptx = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
global.ddocx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
global.dxlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
global.dpdf = "application/pdf"
global.drtf = "text/rtf"

/*Fake*/
global.fsizedoc = "10".repeat(10)
global.fpagedoc = "10".repeat(5)

  /* Hiasan */
		global.dmenut = htjava + "═┅─『"
		global.dmenub = "│" + pmenus
		global.dmenub2 = "│" + pmenus
		global.dmenuf = "╰–━═━––━═━–⳹"
		global.dashmenu = "☰ *D A S B O A R D* ☰"
		global.htki = htjava + "═┅─『"
		global.htka = "』─┅═" + htjava
		
  /* Thumbnail */
		global.hwaifu = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.hbeach = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.thumbnailUrl = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.hoppai = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.hloli = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.hyuri = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.hneko = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.hLokun = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.hbunny = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.thumbs = ["https://cerdasin.netlify.app/img/thumbnail.jpg",
"https://cerdasin.netlify.app/img/thumbnail1.jpg",
"https://cerdasin.netlify.app/img/thumbnail2.jpg",
"https://cerdasin.netlify.app/img/thumbnail3.jpg",
"https://cerdasin.netlify.app/img/thumbnail4.jpg",
"https://cerdasin.netlify.app/img/thumbnail5.jpg"]
		global.thumb = "https://cerdasin.netlify.app/img/thumbnail3.jpg"
		global.imagebot = "https://cerdasin.netlify.app/img/thumbnail2.jpg"
		global.thumbdoc = "https://cerdasin.netlify.app/img/thumbnail1.jpg"
		global.logo = "https://cerdasin.netlify.app/img/thumbnail.jpg"
		
  /* Begin */
		global.ucapan = Pagi()
		global.ephemeral = "86400"
		
  /* Global Random */
		global.doc = pickRandom(["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"])
		global.fakes = Fakes()
		global.knimg = "https://cerdasin.netlify.app/img/thumbnail1.jpg"
		
/*Watermark*/
global.lopr = "🅟"
global.lolm = "Ⓛ"
global.cmenut = htjava + "═┅─『"
global.cmenuh = "』─┅═" + htjava
global.cmenub = "│" + pmenus
global.cmenuf = "╰–━═━––━═━–⳹"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
global.emojis = pickRandom(["👑", "🎗", "️🗿", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭", "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"])
global.packname = "𝗠𝗮𝗱𝗲 𝗕𝘆"
global.stickpack = packname
global.author = "𝗛𝗶𝗻𝗮𝘁𝗮 乂 𝘄𝘂𝗱𝘆𝘀𝗼𝗳𝘁"
global.stickauth = author + "\nwa.me/" + nomorbot
global.multiplier = 69

/*Pesan*/
global.eror = "*E R R O R*"
global.wait = "*W A I T*"
global.render = "*R E N D E R*"
global.webs = "https://s.id/Cerdasin62"
global.gcwangsaf = "https://chat.whatsapp.com/LqJoQr4IdBLAXsxd1PkNph"

/*Donasi*/
global.saweria = "https://saweria.com/wudysoft"
global.dana = "0887435373103"
global.pulsa = "082195322106"
global.trakteer = "https://trakteer.id/wudysoft"
global.paypal = "wudysoft@mail.com"
global.gopay = "082195322106"
global.pdana = "0887435373103"
global.povo = "082195322106"
global.pgopay = "082195322106"
global.ppulsa = "082195322106"
global.ppulsa2 = "082195322106"
global.psaweria = "https://saweria.com/Wudysoft"

/* Fake adReplyS*/
		global.adReplyS = {
		fileLength: "999", seconds: "999",
			contextInfo: {
				forwardingScore: "999",
				externalAdReply: {
						showAdAttribution: true,
						title: "👋 " + Sapa() + Pagi(),
						body: author,
						mediaUrl: sgc,
						description: "WudySoft",
						previewType: "PHOTO",
						thumbnail: await fs.readFileSync("./thumbnail.jpg"),
						sourceUrl: "https://github.com/wudysoft",
				}
			}
		}
  /* Fake adReply */
		global.adReply = {
		fileLength: "999", seconds: "999",
			contextInfo: {
				forwardingScore: "999",
				externalAdReply: {
						body: author,
						containsAutoReply: true,
						mediaType: 1,
						mediaUrl: sgc,
						renderLargerThumbnail: true,
						showAdAttribution: true,
						sourceId: "WudySoft",
						sourceType: "PDF",
						previewType: "PDF",
						sourceUrl: sgc,
						thumbnail: await fs.readFileSync("./thumbnail.jpg"),
						thumbnailUrl: logo,
						title: "👋 " + Sapa() + Pagi()
				}
			}
		}
  /* Fake IG */
		global.fakeig = {
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sig,
						mediaType: "VIDEO",
						description: "Follow: " + sig,
						title: "👋 " + Sapa() + Pagi(),
						body: author,
						thumbnailUrl: logo,
						sourceUrl: sgc
					}
				}
			}
  /* Fake FB */
			global.fakefb = {
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sfb,
						mediaType: "VIDEO",
						description: "Follow: " + sig,
						title: "👋 " + Sapa() + Pagi(),
						body: author,
						thumbnailUrl: logo,
						sourceUrl: sgc
					}
				}
			}
  /* Fake TT */
			global.faketik = {
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: snh,
						mediaType: "VIDEO",
						description: "Follow: " + sig,
						title: "👋 " + Sapa() + Pagi(),
						body: author,
						thumbnailUrl: logo,
						sourceUrl: sgc
					}
				}
			}
  /* Fake YT */
			global.fakeyt = {
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: syt,
						mediaType: "VIDEO",
						description: "Follow: " + sig,
						title: "👋 " + Sapa() + Pagi(),
						body: author,
						thumbnailUrl: logo,
						sourceUrl: sgc
					}
				}
			}

/*Emoji*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      Fox: "🦊",
      agility: "🤸‍♂️",
      anggur: "🍇",
      apel: "🍎",
      aqua: "🥤",
      arc: "🏹",
      armor: "🥼",
      bank: "🏦",
      batu: "🧱",
      berlian: "💎",
      bibitanggur: "🍇",
      bibitapel: "🍎",
      bibitjeruk: "🍊",
      bibitmangga: "🥭",
      bibitpisang: "🍌",
      botol: "🍾",
      bow: "🏹",
      bull: "🐃",
      cat: "🐈",
      centaur: "🎠",
      chicken: "🐓",
      coal: "⚱️",
      common: "📦",
      cow: "🐄",
      crystal: "🔮",
      darkcrystal: "♠️",
      diamond: "💎",
      dog: "🐕",
      dragon: "🐉",
      eleksirb: "🧪",
      elephant: "🐘",
      emasbatang: "🪙",
      emasbiasa: "🥇",
      emerald: "💚",
      exp: "✉️",
      fishingrod: "🎣",
      foodpet: "🍱",
      fox: "🦊",
      gardenboc: "🗳️",
      gardenboxs: "📦",
      gems: "🍀",
      giraffe: "🦒",
      gold: "👑",
      griffin: "🦒",
      health: "❤️",
      healtmonster: "❤‍🔥",
      horse: "🐎",
      intelligence: "🧠",
      iron: "⛓️",
      jeruk: "🍊",
      kaleng: "🥫",
      kardus: "📦",
      kayu: "🪵",
      ketake: "💿",
      keygold: "🔑",
      keyiron: "🗝️",
      knife: "🔪",
      koinexpg: "👛",
      kucing: "🐈",
      kuda: "🐎",
      kyubi: "🦊",
      legendary: "🗃️",
      level: "🧬",
      limit: "🌌",
      lion: "🦁",
      magicwand: "⚕️",
      makanancentaur: "🥗",
      makanangriffin: "🥙",
      makanankyubi: "🍗",
      makanannaga: "🍖",
      makananpet: "🥩",
      makananphonix: "🧀",
      mana: "🪄",
      mangga: "🥭",
      money: "💵",
      mythic: "🗳️",
      mythic: "🪄",
      naga: "🐉",
      pancingan: "🎣",
      pet: "🎁",
      petFood: "🍖",
      phonix: "🦅",
      pickaxe: "⛏️",
      pisang: "🍌",
      pointxp: "📧",
      potion: "🥤",
      rock: "🪨",
      rubah: "🦊",
      sampah: "🗑️",
      serigala: "🐺",
      snake: "🐍",
      stamina: "⚡",
      strength: "🦹‍♀️",
      string: "🕸️",
      superior: "💼",
      sword: "⚔️",
      tiger: "🐅",
      tiketcoin: "🎟️",
      trash: "🗑",
      umpan: "🪱",
      uncommon: "🎁",
      upgrader: "🧰",
      wood: "🪵"
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
    if (!results.length) return ""
    else return emot[results[0][0]]
  }
 }

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update config.js"))
  import(`${file}?update=${Date.now()}`)
})

/* Selamat Pagi */
function Pagi() {
	let waktunya = moment.tz("Asia/Jakarta").format("HH")
	let ucapin = "Selamat malam 🌙"
	if(waktunya >= 1) {
		ucapin = "Selamat Pagi 🗿"
	}
	if(waktunya >= 4) {
		ucapin = "Selamat pagi 🌄"
	}
	if(waktunya > 10) {
		ucapin = "Selamat siang ☀️"
	}
	if(waktunya >= 15) {
		ucapin = "Selamat sore 🌅"
	}
	if(waktunya >= 18) {
		ucapin = "Selamat malam 🌙"
	}
	if(waktunya >= 24) {
		ucapin = "Selamat Begadang 🗿"
	}
	return ucapin
}

/* Randomizer */
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
  
  /* Apa Kabar */
function Sapa() {
  let Apa = pickRandom(["Apa kabar ", "Halo ", "Hai "])
  return Apa
  }
  
  /* Fake Reply */
  function Fakes() {
let Org = pickRandom(["0", "628561122343", "6288906250517"])
let Hai = pickRandom(["Apa kabar ", "Halo ", "Hai "])
let Sarapan = "👋 " + Hai + Pagi()
let Thum = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEYARgMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEGAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAADEnCzTm0o6l9dSQ2tZIqAZp3lgW3R0F84n1eWZAxdnDpHLdVh6N6pToxM0GdmXql5xOhCOrw0bnmvQzTeRomNX7G5edD0dcDD9EE2UwlzkBrmwBf/EACkQAAICAQMDAwMFAAAAAAAAAAECAAMRBCExEBJBBRMiIFFhIzIzQnH/2gAIAQEAAT8AlaF2xDUi4UcmfFBtExx5j1r3DbmPRvsYylTg9UsFagDmG5i2YXc+YLHByDPefIJgvyRkSwrYCR9HY2cAGNRZ2rhDFpfO6njrkjrp0V3+XgRbFf8AbU0pwUG0tQdhjCr+1bH8y3HeSvHQdNE4S9SYtiZyvBilQISCIzDtAwJ6iEUIEAmDjPiDpQ3bah/M9pTuJgKIVyJ7GeZ6hhbVQcAQsBUF8k5i9MzQ6lbqgCfkIQTBmOyopYzVWi21mHRYnppx+o2DL9AKaO7OTKLyrVqowc7mLZ94bV8TVtmlsmFecbgQROJzfPUiRSJQM3J/vXXfwGaMhmNZGzS1PbtZfsZUJ//EABgRAAMBAQAAAAAAAAAAAAAAAAABETAg/9oACAECAQE/AEVFHMbi+P/EABwRAAEEAwEAAAAAAAAAAAAAACAAAQIREBIxQf/aAAgBAwEBPwA6CorWL+gwxT8z/9k="
		let fpayment = {
				key: {
					participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
				},
				message: {
					requestPaymentMessage: {
						currencyCodeIso4217: "USD",
						amount1000: "1000",
						requestFrom: Org + "@s.whatsapp.net",
						noteMessage: {
							extendedTextMessage: {
								text: Sarapan
							}
						},
						expiryTimestamp: "1000",
						amount: {
							value: "1000",
							offset: "1000",
							currencyCode: "USD"
						}
					}
				}
			}
			let fpoll = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				pollCreationMessage: {
					name: Sarapan
				}
			}
		}
		let ftroli = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					itemCount: "1000",
					status: 1,
					surface: 1,
					message: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
					orderTitle: Sarapan,
					sellerJid: Org + "@s.whatsapp.net"
				}
			}
		}
		let fkontak = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				contactMessage: {
					displayName: Sarapan,
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${Sarapan},;;;\nFN:${Sarapan},\nitem1.TEL;waid=${nomorown.split("@")[0]}:${nomorown.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
					jpegThumbnail: Thum,
					thumbnail: Thum,
					sendEphemeral: true
				}
			}
		}
		let fvn = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				audioMessage: {
					mimetype: "audio/ogg; codecs=opus",
					seconds: "1000",
					ptt: true
				}
			}
		}
		let fvid = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				videoMessage: {
					title: Sarapan,
					h: Sarapan,
					seconds: "1000",
					caption: Sarapan,
					jpegThumbnail: Thum
				}
			}
		}
		let ftextt = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				extendedTextMessage: {
					text: Sarapan,
					title: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
					jpegThumbnail: Thum
				}
			}
		}
		let fliveLoc = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				liveLocationMessage: {
					caption: Sarapan,
					h: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
					jpegThumbnail: Thum
				}
			}
		}
		let ftoko = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				productMessage: {
					product: {
						productImage: {
							mimetype: "image/jpeg",
							jpegThumbnail: Thum
						},
						title: Sarapan,
						description: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
						currencyCode: "USD",
						priceAmount1000: "1000",
						retailerId: "Ghost",
						productImageCount: 1
					},
					businessOwnerJid: Org + "@s.whatsapp.net"
				}
			}
		}
		let fdocs = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				documentMessage: {
					title: Sarapan,
					jpegThumbnail: Thum
				}
			}
		}
		let fgif = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				videoMessage: {
					title: Sarapan,
					h: Sarapan,
					seconds: "1000",
					gifPlayback: true,
					caption: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
					jpegThumbnail: Thum
				}
			}
		}
		return pickRandom([fdocs, fgif, fkontak, fliveLoc, fpayment, fpoll, ftextt, ftoko, ftroli, fvid, fvn])
		}