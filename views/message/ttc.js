const { Extra, Markup } = require ("telegraf");

module.exports = async (z) => {
  try {
    if (!z.query) return z.reply(1, { text: `Berikan query ttc, Misal:\n> ${z.setting.simbol} /ttc selamat malam`, mark: true, parse: true }); 
    if (z.query.length > 200) return z.reply(1, { text: `Text kebanyakan, max 200 text!`, mark: true }); 
   
    const photos = await z.ctx.telegram.getUserProfilePhotos(z.from);
    
    let fileLink = "false";
    let name = "Tanpa nama";
    
    if (z.ctx.update.message?.from?.first_name){
      name = z.ctx.update.message.from.first_name;
    }
    
    if (photos.total_count > 0) {
      const fileId = photos.photos[0][0].file_id;
      fileLink = await z.ctx.telegram.getFileLink(fileId);
    } else {
      fileLink = "https://i.postimg.cc/sXNWJNsz/profile-picture.png";
    }
    
    z.ctx.replyWithSticker({ url: `https://mdsay.xyz/api/v1?key=md&api=chat&text=${z.query}&nama=${name}&img=${fileLink}` }, { reply_to_message_id: z.ctx.message.message_id  });         
                    
  } catch(e) {
    z.errorLog(e);
  }
}