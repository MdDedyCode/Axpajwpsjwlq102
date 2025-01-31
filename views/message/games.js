module.exports = async (z) => {
  try { 
   
    async function reset (){
      await z.setUsers(z.from, {
        game: {
          play: 'false',
          playTime: 'false',
          name: 'false',
          soal: 0,
          jawaban: 'false',
          query: 'false',
          pilihan: 'false'    
        }
      });
    }
    
    if (z.Users.teman.status !== 'berteman') return z.reply(1, { text: `Untuk bermain game harus memiliki teman\n> /search : *Mencari teman*`, parse: true});
    if (z.Users.game.play !== 'false'){
      if (z.cekTime(z.Users.game.playTime) == false) {
        await reset();
      } else {
        return z.reply(1, { text: `> Game\nSebelumnya kamu telah bermain game ${z.Users.game.play}, Selesaikan terlebih dahulu atau tunggu satu menit untuk riset game`, mark: true, parse: true});
      }      
    }    
    
    z.reply(1, { text: `> Game : *${z.command}*\nMengundang teman untuk bermain game ${z.command}, Silahkan tunggu persetujuan teman`, parse: true});
    z.reply(3, { to: z.Users.teman.id, text: `> Game : *${z.command}*\nTeman menantang kamu bermain game ${z.command}, Apakah kamu mau bermain`, parse: true, button: [
      [{ text: 'Iya', callback_data: 'game#' + z.command +  '#y#' },
      { text: 'Tidak', callback_data: 'game#' + z.command +  '#n#' }]
    ] });  
    
  } catch(e) {
    z.errorLog(e);
  }
}
