module.exports = async (z) => {
  const _ = process.cwd();
  try { 
    const Jimp = require('jimp');
        
    if (!z.query) return z.reply(1, { text: `Berikan nama kamu\n> Contoh : /${z.command} Jokowi`, mark: true, parse: true });
    if (z.query.length > 25) return z.reply(1, { text: `Nama terlalu panjang, Max 25 Huruf!`, mark: true });
 
    z.reply(1, { text: `Loading...`, mark: true });
    
    await z.ctx.replyWithPhoto({ url: `https://mdsay.xyz/api/v1?key=md&api=${z.command.substring(1)}&nama=${z.query}` }, {
      caption: `Selesai`,
      reply_to_message_id: z.ctx.message.message_id
    }).catch(e => { z.errorLog(e) });
   
  } catch(e) {
    z.errorLog(e);
  }
}
