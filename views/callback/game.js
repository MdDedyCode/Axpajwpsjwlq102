module.exports = async (z) => {
  try {
    z.ctx.deleteMessage().catch(e => { });
    async function reset(){
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
      } 
      if (z.cekTime(z.Users.game.playTime) !== false) {     
        return z.reply(1, { text: `> Game\nSebelumnya kamu telah bermain game ${z.Users.game.play}, Selesaikan terlebih dahulu atau tunggu satu menit untuk riset game`, parse: true});      
      }      
    }
        
    if (z.data.split('#')[2] == 'n'){
      z.reply(1, { text: `> Game dibatalkan\nKamu menolak bermain game`, parse: true});
      return z.reply(3, { to: z.Users.teman.id, text: `> Game dibatalkan\nTeman menolak bermain game`, parse: true});
    }
    
    if (z.data.split('#')[2] == 'y'){
      const kuisJson = require(`../dataJson/kuis/${z.data.split('#')[1]}.json`);
      const { medaliKuis } = require(`../dataJson/medaliKuis.js`);
      const kuis = kuisJson[Math.floor(Math.random() * kuisJson.length)];

      let button = [];
      
      if (kuis.pilihanJawaban.length == 5){
        button = [
          [{ text: kuis.pilihanJawaban[0], callback_data: 'gamejawaban#' + kuis.pilihanJawaban[0] }],
          [{ text: kuis.pilihanJawaban[1], callback_data: 'gamejawaban#' + kuis.pilihanJawaban[1] }],
          [{ text: kuis.pilihanJawaban[2], callback_data: 'gamejawaban#' + kuis.pilihanJawaban[2] }],
          [{ text: kuis.pilihanJawaban[3], callback_data: 'gamejawaban#' + kuis.pilihanJawaban[3] }],
          [{ text: kuis.pilihanJawaban[4], callback_data: 'gamejawaban#' + kuis.pilihanJawaban[4] }],
        ]
      }
      if (kuis.pilihanJawaban.length == 3){
        button = [
          [{ text: kuis.pilihanJawaban[0], callback_data: 'gamejawaban#' + kuis.pilihanJawaban[0] }],
          [{ text: kuis.pilihanJawaban[1], callback_data: 'gamejawaban#' + kuis.pilihanJawaban[1] }],
          [{ text: kuis.pilihanJawaban[2], callback_data: 'gamejawaban#' + kuis.pilihanJawaban[2] }]
        ]
      }
      
      z.reply(1, { text: `Kamu menyetujui bermain game, Ayo mulai sekarang!\n\n${z.setting.simbol} Soal: ${kuis.soal}`, button: button });  
      z.reply(3, { to: z.Users.teman.id, text: `Teman menyetujui bermaim game, Ayo mulai sekarang!\n\n${z.setting.simbol} Soal: ${kuis.soal}`, button: button });        
      const play = z.data.split('#')[1];
      await z.setUsers(z.from, { 
        game: {
          play: play,
          playTime: z.addTimeS(new Date, 60),         
          soal: kuis.index
        }
      });
      await z.setUsers(z.Users.teman.id, { 
        game: {
          play: play,
          playTime: z.addTimeS(new Date, 60),         
          soal: kuis.index
        }
      });
    }
  } catch(e) {
    z.errorLog(e);
  }
}
