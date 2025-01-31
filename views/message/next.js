const modelsUsers = require('../database/users.js');

module.exports = async (z) => {
  try { 
    if (z.Users.teman.status == 'true') return z.reply(1, { text: 'Bot telah mencarikan kamu teman sebelumnya. Tidak dapat berhenti sekarang.', mark: true });  
    if (z.Users.teman.status == 'false') return z.reply(1, { text: 'Kamu belum memiliki teman\n> /search : *Mencari teman*', mark: true, parse: true });  
        
    await z.reply(1, { text: 'Berhasil berhenti berteman & Mencarikan kamu teman baru', button: [
      [{ text: '👍', callback_data: 'reaksi#like#' + z.Users.teman.id },
      { text: '👎', callback_data: 'reaksi#dislike#' + z.Users.teman.id }],
      [{ text: 'Laporkan', callback_data: 'reaksi#report#' + z.Users.teman.id }],      
    ] });  
    await z.reply(3, { to: z.Users.teman.id, text: 'Teman memutuskan perteman\n> /search : *Mencari teman baru*', parse: true, button: [
      [{ text: '👍', callback_data: 'reaksi#like#' + z.from },
      { text: '👎', callback_data: 'reaksi#dislike#' + z.from }],
      [{ text: 'Laporkan', callback_data: 'reaksi#report#' + z.from }],      
    ] });  
    
    await z.setUsers(z.Users.teman.id, { 
      teman: {
        id: 'false',
        status: 'false',
        request: 'false'
      }          
    });
    await z.setUsers(z.from, { 
      teman: {
        id: 'false',
        status: 'false',
        request: 'false'
      }              
    });            
    
    
    let sg = "cowok";    
    if (z.Users.gender == "cewek"){
      sg = "cewek";
    }
    
    let teman = await modelsUsers.findOneAndUpdate({ "teman.status": "true", "teman.request": { $ne: sg }, "id": { $ne: z.from } }, { $set: { "teman.status": "berteman" } }, { new: true });            
    
    if (teman){
      await z.reply(1, { text: 'teman telah ditemukan\n> /stop : *Berhenti berteman*\n> /game : *Bermain game*\nAyo mulai mengobroll', parse: true });
      await z.reply(3, { to: teman.id, text: 'Teman telah ditemukan\n> /stop : *Berhenti berteman*\n> /game : *Bermain game*\nAyo mulai mengobroll', parse: true });
      
      await z.setUsers(z.from, { 
        teman: {
          id: teman.id,
          status: 'berteman',
          request: 'false'
        },
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
      await z.setUsers(teman.id, { 
        teman: {
          id: z.from,
          status: 'berteman',
          request: 'false'
        },
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
    } else {
      await z.setUsers(z.from, { 
        teman: {
          status: 'true',
          request: 'false'
        }
      });
    }                
  } catch(e) {
    z.errorLog(e);
  }
}