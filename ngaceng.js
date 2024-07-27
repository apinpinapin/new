let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '120363313255786174@newsletter',
"newsletterName": '𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: qio.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈༻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈\n𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈\",\"id\":\".killtod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}

qio.relayMessage(m.chat, msg, {});

> let target = m.chat

async function ngaceng() {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '120363313255786174@newsletter',
"newsletterName": '𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: qio.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈༻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈\n𝙰𝙻𝙵𝙸𝙽 𝙵𝙰𝚁𝙸𝙳𝙷 𝚃𝙰𝚄𝙵𝙸𝚀𝙸𝚈\",\"id\":\".killtod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}), { userJid: target, quoted: m })
await qio.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

ngaceng()