const { Extra, Markup } = require ("telegraf");

module.exports = async (z) => {
  try {
     var query = z.ctx.message.caption.split(" ").slice(1).join(" ");
     if (!query) return z.reply(1, { text: 'Berikan text', mark: true, parse: true });  
    
    const dataUsr = await z.modelsUsers.find({ });
    let length = 0;            
    
    for (let i = 10000; i < dataUsr.length; i++) {       
      await z.ctx.telegram.sendPhoto(dataUsr[i].id, z.ctx.message.photo[0].file_id, { caption: `[ PESAN-SIARAN ]\n`
      + `${query}` }).catch(async e => {             
        if (z.cekTime(z.Users.status.banned) == false){
          await z.modelsUsers.deleteOne({ id: dataUsr[i].id }, function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log(`Users id ${dataUsr[i].id} berhasil dihapus`);
            }
          });
        }             
      });      
      length++;
      console.log(length);
    } 
     
    await z.reply(1, { text: `Sukses Bc Image ke ${length} Users`, mark: true });
  } catch(e) {
    z.errorLog(e);
  }
}