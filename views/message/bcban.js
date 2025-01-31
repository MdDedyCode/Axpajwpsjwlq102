const { Extra, Markup } = require ("telegraf");
const dataBanned = require('../dataJson/banned.json');
    
module.exports = async (z) => {
  try {
    let length = 0;
    
    for (let i = 0; i < dataBanned.length; i++) {       
      await z.ctx.telegram.sendMessage(dataBanned[i], `Khusus minggu ini kamu hanya membayar Rp4.999 Untuk menebus banned!`,
      Markup.inlineKeyboard([Markup.button.url("Bayar sekarang!", "https://t.me/MdSync?text=Saya+ingin+membeli+paket+premium")])).catch(e => { });
      length++
    } 
     
    await z.reply(1, { text: `Sukses Bc ke ${length} Users`, mark: true });
  } catch(e) {
    z.errorLog(e);
  }
}