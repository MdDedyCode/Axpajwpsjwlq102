module.exports = async (z) => {
  try {
    if (z.data.split('#').length == 3){
      if (z.data.split('#')[1] == "like"){
        z.setUsers(z.data.split('#')[2], { likeP: 1 });
        z.ctx.editMessageReplyMarkup({
          inline_keyboard: [
            [
              { text: 'Memberi like 👍', callback_data: `#`}, 
            ]        
          ]
        }).catch(e => { z.errorLog(e) });
      }      
      if (z.data.split('#')[1] == "dislike"){
        z.setUsers(z.data.split('#')[2], { dislikeP: 1 });
        z.ctx.editMessageReplyMarkup({
          inline_keyboard: [
            [
              { text: 'Memberi dislike 👎', callback_data: `#`}, 
            ]        
          ]
        }).catch(e => { z.errorLog(e) });
      }      
      if (z.data.split('#')[1] == "report"){
        z.ctx.editMessageReplyMarkup({
          inline_keyboard: [
            [{ text: 'Pornografi', callback_data: `reaksi#report#${z.data.split('#')[2]}#pornografi`}],
            [{ text: 'Rasis', callback_data: `reaksi#report#${z.data.split('#')[2]}#rasis`}],
            [{ text: 'Kekerasan', callback_data: `reaksi#report#${z.data.split('#')[2]}#kekerasan`}],
            [{ text: 'Promosi', callback_data: `reaksi#report#${z.data.split('#')[2]}#promosi`}],
            [{ text: 'Spam', callback_data: `reaksi#report#${z.data.split('#')[2]}#spam`}],
            [{ text: 'Pedofil', callback_data: `reaksi#report#${z.data.split('#')[2]}#pedofil`}],
          ]
        }).catch(e => { z.errorLog(e) });
      }      
    } 
    if (z.data.split('#').length == 4){
      z.ctx.editMessageReplyMarkup({
        inline_keyboard: [
          [
            { text: 'Sukses melaporkan Users!', callback_data: `#`}, 
          ]        
        ]
      }).catch(e => { z.errorLog(e) });
      z.reply(3, { to: z.setting.idAdmin, text: `Laporan users\n> *Pelapor* : @${z.userName}\n> *Gender* : ${z.Users.gender}\n\n> User yang terlapor\n> *Id* : ${z.data.split('#')[2]}\n> *Alasan* : ${z.data.split('#')[3]}`, parse: true, button: [
        [{ text: 'Banned', callback_data: 'shoot#' + z.data.split('#')[2] + '#' + z.from }]
      ] });
    }   
  } catch(e) {
    z.errorLog(e);
  }
}