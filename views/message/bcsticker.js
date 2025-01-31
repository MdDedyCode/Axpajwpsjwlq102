const { Extra, Markup } = require ("telegraf");

module.exports = async (z) => {
  try {     
    const dataUsr = await z.modelsUsers.find({ });
    let length = 0;            
    
    for (let i = 0; i < dataUsr.length; i++) {       
      await z.ctx.telegram.sendMessage(dataUsr[i].id, `[ BROADCAST ]\n`
        + `Kamu bisa pake sticker ini:)`,
      Markup.inlineKeyboard([[Markup.button.url("Sticker1 (Anime)", 'https://t.me/addstickers/MdXyzBotGroups')], [Markup.button.url("Sticker2 (Text)", 'https://t.me/addstickers/MdSecretBot')]])).catch(e => { });
      length++
    } 
     
    await z.reply(1, { text: `Sukses Bc Sticker ke ${length} Users`, mark: true });
  } catch(e) {
    z.errorLog(e);
  }
}