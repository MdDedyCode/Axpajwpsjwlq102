const { Extra, Markup } = require ("telegraf");

module.exports = async (z) => {
  try {
     //if (!z.query) return z.reply(1, { text: 'Berikan text', mark: true, parse: true });  
    const modelsUsersOld = require('../database/usersOld.js');
        
    const dataUsr = await modelsUsersOld.find({ });
    let length = 0;            
    
    for (let i = 0; i < dataUsr.length; i++) {       
      await z.ctx.telegram.sendMessage(dataUsr[i].id, `Join group bot yukk!`, Markup.inlineKeyboard([Markup.button.url("Groups Bot🩷", 'https://t.me/MdGroupsPublic')]) ).catch(e => { });
      length++
    } 
     
    await z.reply(1, { text: `Sukses Bc Riwayat ke ${length} Users`, mark: true });
  } catch(e) {
    z.errorLog(e);
  }
}