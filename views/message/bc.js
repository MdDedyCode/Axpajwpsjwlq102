const { Extra, Markup } = require ("telegraf");

module.exports = async (z) => {
  try {
     if (!z.query) return z.reply(1, { text: 'Berikan text', mark: true, parse: true });  
    
    const dataUsr = await z.modelsUsers.find({ });
    let length = 0;            
    
    for (let i = 0; i < dataUsr.length; i++) {       
      await z.ctx.telegram.sendMessage(dataUsr[i].id, `Haii ada pesan buat kamu nih!`,
      Markup.inlineKeyboard([Markup.button.url("Buka pesan", z.query)])).catch(e => { });
      
      /*await z.ctx.telegram.sendMessage(dataUsr[i].id, `[ PESAN-SIARAN ]\nKabar gembira!! Khusus Hari ini harga untuk berlangganan atau menjadi user premium hanyalah Rp5.000!`,
      Markup.inlineKeyboard([Markup.button.url("Berlangganan", "https://t.me/MdSync?text=Saya+ingin+berlangganan+premium")])).catch(e => { });
 */
      length++
      console.log(length);
    } 
    
    await z.reply(1, { text: `Sukses Bc ke ${length} Users`, mark: true });
  } catch(e) {
    z.errorLog(e);
  }
}