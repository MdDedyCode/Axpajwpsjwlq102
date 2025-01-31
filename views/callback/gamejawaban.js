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
      
    const kuisJson = require(`../dataJson/kuis/${z.Users.game.play}.json`);
    const { medaliKuis } = require(`../dataJson/medaliKuis.js`);
    const kuis = kuisJson[z.Users.game.soal];
    const medali = medaliKuis(z.Users.game.play);
    
    const Temans = await z.cekUsers(z.Users.teman.id);
    const Users = await z.cekUsers(z.from);
    
    if (Users.game.jawaban !== 'false') return z.reply(1, { text: `> Game\nKamu telah menjawab game ini, Tunggu jawaban teman`, parse: true});      
    if (Users.game.jawaban == 'false' && Temans.game.jawaban == 'false'){
      z.reply(1, { text: `> Berhasil menjawab game\nSilahkan tunggu jawaban teman`, parse: true });      
      z.reply(3, { to: Users.teman.id, text: `> Teman menjawab game\nSekarang giliran kamu`, parse: true });
      await z.setUsers(z.from, { 
        game: {         
          jawaban: z.data.split('#')[1].toLowerCase().replace(/\s+/g, '')
        }
      }); 
    }
    if (Users.game.jawaban == 'false' && Temans.game.jawaban !== 'false'){
      const jawaban1 = `${kuis.jawaban}`;
      const jawaban = jawaban1.toLowerCase().replace(/\s+/g, '');
      const jawabanKamu = z.data.split('#')[1].toLowerCase().replace(/\s+/g, '');
      const jawabanTeman = Temans.game.jawaban;
      let hasilKamu = false;
      let hasilTeman = false;
      let textKamu = '';
      let textTeman = '';
      
      if (jawabanKamu == jawaban && jawabanTeman == jawaban){
        textKamu = `Berhasil memilih jawaban\n> Kamu : *Benar*\n> Teman : *Benar*\nHasil seri, Masing masing dari kalian mendapatkan ${medali} Medali`;                
        textTeman = `Teman memilih jawaban\n> Kamu : *Benar*\n> Teman : *Benar*\nHasil seri, Masing masing dari kalian mendapatkan ${medali} Medali`;        
        await z.setUsers(Users.teman.id, { medaliP: medali });
        await z.setUsers(z.from, { medaliP: medali });
      }
      if (jawabanKamu !== jawaban && jawabanTeman !== jawaban){
        textKamu = `Berhasil memilih jawaban\n> Kamu : *Salah*\n> Teman : *Salah*\nTidak ada yang menang`;        
        textTeman = `Teman memilih jawaban\n> Kamu : *Salah*\n> Teman : *Salah*\nTidak ada yang menang`;
      }
      if (jawabanKamu == jawaban && jawabanTeman !== jawaban){
        textKamu = `Berhasil memilih jawaban\n> Kamu : *Benar*\n> Teman : *Salah*\nKamu menang dan mendapatkan ${medali} Medali`;                        
        textTeman = `Teman memilih jawaban\n> Kamu : *Salah*\n> Teman : *Benar*\nKamu kalah dan tidak mendapatkan medali`;       
        await z.setUsers(z.from, { medaliP: medali });
      }
      if (jawabanKamu !== jawaban && jawabanTeman == jawaban){
        textKamu = `Berhasil memilih jawaban\n> Kamu : *Salah*\n> Teman : *Benar*\nKamu kalah dan tidak mendapatkan medali`;         
        textTeman = `Teman memilih jawaban\n> Kamu : *Benar*\n> Teman : *Salah*\nKamu menang dan mendapatkan ${medali} Medali`;               
        await z.setUsers(Users.teman.id, { medaliP: medali });        
      }
            
      z.reply(1, { text: textKamu, parse: true });
      z.reply(3, { to: Users.teman.id, text: textTeman, parse: true });
      
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
      await z.setUsers(Users.teman.id, { 
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
  } catch(e) {
    z.errorLog(e);
  }
}
