const { downloadContentFromMessage, prepareWAMessageMedia, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger } = require('@whiskeysockets/baileys');

const { axios, cheerio, colors, fs, ffmpeg, fetch, isUrl, ms, moment, os, exec, spawn, speed, execSync } = require('./connect');
const { prefixo, nomebot, nomedono, numerodono, apikey } = require('./dono/config.json');
const { getBuffer, getFileBuffer, fetchJson, getGroupAdmins } = require('./arquivos/banner');
const resposta = require('./dono/message');
const vcard = require('./dono/message.js')
const { match } = require('assert');
var API_KEY_ALEATORY = 'dest'

//arquivos
const mensagem = require('./arquivos/mensagem.js');
var msg = mensagem[Math.floor(Math.random() * mensagem.length)];

//botoes
const { sendButton, sendListB, sendRoulette, sendPayment, GenerateQRpix, sendRouletteButton } = require(`./arquivos/botoes/button.js`)

//var seloctt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ... {} }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } } }

//coneção ao servidor
async function connectToWhatsApp() {
    module.exports = cafe = async (cafe, pastacode) => {
        module.exports = upsert = async (upsert, cafe) => {

            async function WhatsappUpsert() {
                const timestamp = speed()
                const latensi = speed() - timestamp

                var hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
                var data = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

                for (const info of upsert?.messages || []) {

                    const from = info.key.remoteJid;

                    if (!info.message) return;
                    if (upsert.type == "append") return;
                    const baileys = require('@whiskeysockets/baileys');
                    const content = JSON.stringify(info.message);
                    const nome = info.pushName ? info.pushName : '';
                    const quoted = info.quoted ? info.quoted : info;
                    const type = baileys.getContentType(info.message);
                    if (info.message) {
                        await cafe.readMessages([info.key]);
                    } else {
                        if (from == "status@broadcast") return;
                    }
                    //menus
                    const { menu } = require("./dono/menus/menu.js")
                    var menus = ["https://i.pinimg.com/736x/1c/4c/40/1c4c40fc0eabe8b336769cb0066453b7.jpg", "https://i.pinimg.com/736x/71/51/a8/7151a84bde6fc6b208f70969dfdecbc4.jpg", "https://i.pinimg.com/736x/19/15/29/19152901efc314e73a4e5f3146ae3fbe.jpg"]
                    var menugif = menus[Math.floor(Math.random() * menus.length)]


                    var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || (info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson ? JSON.parse(info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson)?.id : null) || info?.text || "";
                    var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

                    //Const isGroup, etc...
                    const isGroup = from.endsWith('@g.us');
                    const sender = isGroup ? info.key.participant : info.key.remoteJid
                    const groupMetadata = isGroup ? await cafe.groupMetadata(from) : ''
                    const groupName = isGroup ? groupMetadata.subject : ''
                    const groupDesc = isGroup ? groupMetadata.desc : ''
                    const groupMembers = isGroup ? groupMetadata.participants : ''
                    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
                    const messagesC = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
                    const isCmd = body.startsWith(prefixo)
                    const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null;
                    const args = body.trim().split(/ +/).slice(1)
                    const q = args.join(' ')
                    const mime = (quoted.info || quoted).mimetype || "";
                    const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }
                    const mentions = (teks, memberr, id) => {
                        (id == null || id == undefined || id == false) ? cafe.sendMessage(from, { text: teks.trim(), mentions: memberr }) : cafe.sendMessage(from, { text: teks.trim(), mentions: memberr })
                    }

                    //Outras const...
                    const isBot = info.key.fromMe ? true : false;
                    const isOwner = numerodono.includes(sender);
                    const BotNumber = cafe.user.id.split(':')[0] + '@s.whatsapp.net';
                    const isGroupAdmins = groupAdmins.includes(sender) || false;
                    const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false;
                    const pushname = info.pushName ? info.pushName : ""

                    const enviar = (texto) => {
                        cafe.sendMessage(from, { text: texto }, { quoted: info })
                    }
                    //Const isQuoted.
                    const isImage = type == "imageMessage"
                    const isVideo = type == "videoMessage"
                    const isAudio = type == "audioMessage"
                    const isVisu = type == 'viewOnceMessageV2'
                    const isSticker = type == "stickerMessage"
                    const isContact = type == "contactMessage"
                    const isLocation = type == "locationMessage"
                    const isProduct = type == "productMessage"
                    const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
                    typeMessage = body.substr(0, 50).replace(/\n/g, "")
                    if (isImage) typeMessage = "Image"
                    else if (isVideo) typeMessage = "Video"
                    else if (isAudio) typeMessage = "Audio"
                    else if (isSticker) typeMessage = "Sticker"
                    else if (isContact) typeMessage = "Contact"
                    else if (isLocation) typeMessage = "Location"
                    else if (isProduct) typeMessage = "Product"

                    const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
                    const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
                    const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
                    const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
                    const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
                    const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
                    const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
                    const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
                    const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

                    const chalk = require('chalk'); // Importar o chalk

                    // Função para logs formatados
                    const log = (tipo, dados) => {
                        console.log(`\n╭────────────────────────`);
                        Object.entries(dados).forEach(([key, value]) => {
                            console.log(`│ ${chalk.redBright(key)}: ${chalk.yellowBright(value)}`);
                        });
                        console.log('╰─────────────────────────\n');
                    };

                    // Registros de logs
                    if (!isGroup && !info.key.fromMe) {
                        log('MENSAGEM NO PV', { Remetente: sender.split('@')[0], Nome: pushname, Hora: hora, Mensagem: body });
                        if (isCmd) {
                            log('COMANDO NO PV', { Remetente: sender.split('@')[0], Nome: pushname, Hora: hora, Comando: comando });
                        }
                    } else if (!isGroup) {
                        if (isCmd) {
                            log('COMANDO NO PV', { Remetente: sender.split('@')[0], Nome: pushname, Hora: hora, Comando: comando });
                        }
                    } else if (isGroup && !info.key.fromMe) {
                        log('MENSAGEM NO GRUPO', { Grupo: groupName, Remetente: sender.split('@')[0], Nome: pushname, Hora: hora, Mensagem: body });
                        if (isCmd) {
                            log('COMANDO NO GRUPO', { Grupo: groupName, Remetente: sender.split('@')[0], Nome: pushname, Hora: hora, Comando: comando });
                        }
                    } else if (isGroup) {
                        if (isCmd) {
                            log('COMANDO NO GRUPO', { Grupo: groupName, Remetente: sender.split('@')[0], Nome: pushname, Hora: hora, Comando: comando });
                        }
                    }

                    const reply = (content, type, options = {}) => {
                        const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
                        const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
                        options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? { url: content } : content;
                        return cafe.sendMessage(from, options, { quoted: info }).catch(e => {
                            reply("Erro ao enviar a mensagem..");
                        })
                    }

                    cafe.sendInteractiveIMG = async (imageDir, ChatID, definedText = '', footer = '', contextMessageInfo = {}, buttonsParams = {}) => {
                        try {
                            create = await prepareWAMessageMedia({ image: fs.readFileSync(imageDir) }, { upload: cafe.waUploadToServer });
                            imageCreate = create.imageMessage;
                            await cafe.relayMessage(ChatID, { interactiveMessage: { header: { hasMediaAttachment: true, imageMessage: imageCreate }, headerType: 'IMAGE', body: { text: definedText }, footer: { text: footer }, contextInfo: contextMessageInfo, nativeFlowMessage: buttonsParams } }, {});
                        } catch (errorMessage) {
                            return reply(String(errorMessage));
                        }
                    }
                    switch (comando) {
                        //login
                        case 'login': {
                            if (!q) {
                                return reply('Fale seu sistema operacional (Android, iPhone ou Web)\n> Exemplo: /login android');
                            }

                            let sistema = args[0].toLowerCase();
                            if (!['android', 'iphone', 'web'].includes(sistema)) {
                                return reply('*Sistema inválido!*');
                            }

                            let dadosUsuario = {
                                id: sender,
                                nome: pushname,
                                sistema: sistema.toUpperCase()
                            };

                            try {
                                const axios = require("axios");
                                const fs = require("fs");
                                // Atualizando o JSON local
                                let registro = JSON.parse(fs.readFileSync('./datab/jsons/registro/registro.json', 'utf-8'));
                                let userIndex = registro.findIndex(user => user.id === sender);

                                if (userIndex === -1) {
                                    registro.push(dadosUsuario);
                                } else {
                                    registro[userIndex].sistema = dadosUsuario.sistema;
                                }
                                fs.writeFileSync('./datab/jsons/registro/registro.json', JSON.stringify(registro, null, 2));
                                // Enviando para a API
                                await axios.post("https://cosette.cloud/api/usuario/client", dadosUsuario);// Simulando carregamento
                                let download = [
                                    "ʟᴏᴀᴅɪɴɢ〘▒▒▒▒▒▒▒▒▒▒〙0%",
                                    "ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%",
                                    "ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%",
                                    "ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%",
                                    "ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%",
                                    "ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%",
                                    "ʟᴏᴀᴅɪɴɢ〘██████████〙100%",
                                    "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
                                ];

                                let { key } = await destiny.sendMessage(from, { text: "Iniciando login..." }, { quoted: selo });
                                await sleep(2000);
                                for (let i = 0; i < download.length; i++) {
                                    await destiny.sendMessage(from, { text: download[i], edit: key }, { quoted: selo });
                                    await sleep(500);
                                }
                                // Pegando a contagem de usuários do JSON local
                                let androidUsers = registro.filter(user => user.sistema === 'ANDROID').length;
                                let iphoneUsers = registro.filter(user => user.sistema === 'IPHONE').length;
                                let webUsers = registro.filter(user => user.sistema === 'WEB').length;
                                // Resposta final confirmando o logi
                                reply(`*✅ LOGIN FEITO COM SUCESSO!*\n\n📊 *Usuários registrados: ${registro.length}*\n\n📱 Contagem de usuários:\n✅ Android: ${androidUsers}\n🍏 iPhone: ${iphoneUsers}\n💻 Web: ${webUsers}`);
                            } catch (erro) {
                                console.error("Erro ao registrar usuário:", erro.response?.data || erro.message);
                                reply("❌ Ocorreu um erro ao registrar seu login. Tente novamente mais tarde.");
                            }
                        }
                            break;

                        //menus
                        case 'menu':
                            cafe.sendMessage(from, { image: { url: menugif }, caption: menu(prefixo, pushname, nomebot), mentions: [sender] }, { quoted: info })
                            break

                        case 'menu': case 'menulist':
                            Lrows = []
                            Lrows.push({ title: `👺𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻👺`, description: ` ${nomebot} `, id: `${prefixo}imagem` },
                                { title: `👺𝙼𝙴𝙽𝚄 𝙱𝙰𝚂𝙸𝙲𝙾👺`, description: `${nomebot}`, id: `${prefixo}menubasico` })
                            cafe.sendInteractiveIMG('./arquivos/cafe.jpg', from, `𝙼𝙴𝙽𝚄 𝙱𝙰𝚂𝙸𝙲𝙾`, "cafe", { participant: sender, quotedMessage: info.message }, { buttons: [{ name: "single_select", buttonParamsJson: JSON.stringify({ title: "𝙼𝙴𝙽𝚄 𝙻𝙸𝚂𝚃", sections: [{ title: `cafe`, highlight_label: "", rows: Lrows }] }) }] });
                            break

                        case 'teste':
                            sendButton(from, { text: 'ola', footer: `Selecione uma das opções abaixo...` }, cafe, sender, [{ type: `cmd`, text: `teste`, command: `teste` }, { type: `cmd`, text: `teste`, command: `teste` }], info)
                            break;


                        //comandos basicos
                        case 'wame':
                            //if (contaId === undefined && !isGroup) return reply(login)
                            reply(`Olá ${pushname}, segue o link\nLink: wa.me/${sender.split("@")[0]}\nGrupo: ${groupName}\nNumero: ${sender.split("@")[0]}`)
                            break

                        case 'tagme':
                            //if (contaId === undefined && !isGroup) return reply(login)
                            const tagme = `@${sender.split("@")[0]} ✔️`
                            await mentions(tagme, [sender], true)
                            break

                        case 'emoji-mix':
                        case 'emojimix':
                            //if (contaId === undefined && !isGroup) return reply(login)
                            if (!q.includes("+")) return reply(`Olá, está faltando o "+" na separação dos emojis.\nExemplo: *${prefixo + command} 👿+😇*`)
                            var [emoji1, emoji2] = q.trim().split("+")
                            try {
                                reply(msg)
                                let apiUrl = `https://cosette.cloud/api/aleatorios/emojimix?emoji1=${encodeURI(emoji1)}&emoji2=${encodeURI(emoji2)}&apikey=dest`
                                const response = await axios({
                                    url: apiUrl,
                                    responseType: 'arraybuffer' // Evita salvar no disco
                                })
                                let sti = Buffer.from(response.data) // Converte para Buffer
                                console.log(response.headers['content-type'])

                                await cafe.sendMessage(from, { sticker: sti }, { quoted: info })
                            } catch (e) {
                                console.error("Erro geral:", e)
                                reply('*Ops! Não foi possível fazer esse mix de emoji ou ocorreu um problema no sistema...*')
                            }
                            break

                        case 'emoji2':
                        case 'semoji':
                            try {
                                if (!q.trim()) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
                                var [emoji, nm] = q.split("/")
                                ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/emoji?q=${emoji}/${nm?.toLowerCase() || "whatsapp"}&apikey=` + API_KEY_ALEATORY)
                                sendStickerFromUrl(from, ABC.rst)
                            } catch {
                                return reply("Erro..")
                            }
                            break

                        case 'emoji-mix2':
                        case 'emojimix':
                            var [emj1, emj2] = q.trim().split("+")
                            if (!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefixo + comando} 👿+😇`)
                            try {
                                reply(Res_Aguarde)
                                sendStickerFromUrl(from, `https://api.bronxyshost.com.br/api-bronxys/emojimix?emoj=${encodeURI(emj1)}&emoj2=${encodeURI(emj2)}&apikey=dest`)
                            } catch (e) {
                                reply('*Ops não foi possivel fazer esse mix de emoji / Ou ocorreu algum problema no sistema..*')
                            }
                            break

                        case 'dono': {
                            //if (contaId === undefined && !isGroup) return reply(login)
                            reply('Já enviei no pv')
                            await cafe.sendMessage(from, { contacts: { displayName: `${nomebot}`, contacts: [{ vcard }] } })
                            await delay(1500)
                            Saikyo = `Aqui está o contato do meu titular\ncaso você use imune, acesse por este link:\nwa.me/${numerodono}\n`
                            let buttonMessage = {
                                text: Saikyo,
                                caption: Saikyo,
                                footer: `${nomebot}`,
                                headerType: 4,
                            }
                            cafe.sendMessage(sender, buttonMessage)
                        }
                            break
                        default:

                            if (body.startsWith('>')) {
                                try {
                                    if (!isOwner) return
                                    result = eval(body.slice(2))
                                    let response = typeof result === 'object' ? JSON.stringify(result) : String(result);
                                    if (response === '{}') return
                                    return cafe.sendMessage(from, { text: response }).catch(e => {
                                        enviar(String(e))
                                    })
                                } catch (e) {
                                    enviar(String(e))
                                }
                            }

                            if (budy === prefixo) {
                                await cafe.sendMessage(from, { text: `Se desejar visualizar o menu, por favor, digite ${prefixo}menu` }, { quoted: info });
                            } else if (budy.startsWith(prefixo)) {
                                await cafe.sendMessage(from, { text: `Desculpe, esse comando não existe.` }, { quoted: info });
                            }
                    }
                }
            }
            WhatsappUpsert().catch(async (e) => {
                if (String(e).includes("this.isZero")) {
                    file = require.resolve("./cafe.js");
                    delete require.cache[file]
                    require(file)
                } else {
                    return console.log(e);
                }
            });
        }
    }
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(colors.bold(`\n\n• O arquivo "${__filename}" foi atualizado.\n`));
    delete require.cache[file]
    require(file)
});
connectToWhatsApp().catch(async (e) => {
    console.log(colors.red(`Erro no arquivo: "./index.js": ` + e));
});

