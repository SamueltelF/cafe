const menu = (prefixo, pushname, nomebot) => {
    return `
╭───────[ * ${nomebot} * ]───────┐
│ 👤 Usuário: ${pushname}
├───────────────
│ 📜 * Menus *
│ ✦ ${prefixo} menu1 - Comandos Gerais
│ ✦ ${prefixo} menu2 - Informações
│ ✦ ${prefixo} menu3 - Básicos
├───────────────
│ ℹ️ * Informações *
│ ✦ ${prefixo} info - Sobre o bot
│ ✦ ${prefixo} ping - Velocidade
│ ✦ ${prefixo} status - Status do bot
├───────────────
│ ⚙️ * Básicos *
│ ✦ ${prefixo}wame
│ ✦ ${prefixo}tagme
│ ✦ ${prefixo}dono
╰───────────────────────────┘
> ☕ * CAFE - BOT * - Sempre pronto para ajudar!`

}
exports.menu = menu