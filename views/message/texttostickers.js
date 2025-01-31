module.exports = async (z) => {
  try {  
    const fetch = require('node-fetch');
    if (!z.query) return z.reply(1, { text: `Berikan text, Misal:\n> ${z.setting.simbol} /${z.command} Aku hebat`, mark: true, parse: true });      
    if (z.query.length > 50) return z.reply(1, { text: `Text max 50 huruf!`});      
    
    //reply(1, { text: "Loading...", mark: true });
    
    z.ctx.replyWithSticker({ url: `https://mdsay.xyz/api/v1?key=md&api=${z.command}&text=${z.query}` }, { reply_to_message_id: z.ctx.message.message_id  });         
                    
  } catch(e){
    z.errorLog(e);
  }
}