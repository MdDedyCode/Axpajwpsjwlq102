const modelsUsers = require('../database/users.js');

module.exports = async (z) => {
  try {
    z.ctx.deleteMessage().catch(e => { });    
    if (z.Users.teman.status == 'berteman') return z.reply(1, { text: 'Kamu sudah berteman sebelumnya\n> /stop : *Berhenti berteman*', parse: true });  
    if (z.Users.teman.status == 'true') return z.reply(1, { text: 'Bot telah mencarikan kamu teman sebelumnya. tunggu sampai bot menemukan teman untuk kamu.'});  
    
    z.reply(1, { text: '> Search\nMencarikan kamu teman ' + z.data.split('#')[1], parse: true });  
       
    let sg = "cowok";    
    if (z.Users.gender == "cewek"){
      sg = "cewek";
    }
    
    let teman = await modelsUsers.findOneAndUpdate({ 'teman.status': 'true', 'gender': z.data.split('#')[1], "teman.request": { $ne: sg }, 'id': { $ne: z.from } }, { $set: { "teman.status": "berteman" } }, { new: true });    
    
    if (teman){ 
      console.log(teman);  
      z.reply(1, { text: 'teman telah ditemukan\n> /stop : *Berhenti berteman*\n> /game : *Bermain game*\nAyo mulai mengobrolll', parse: true });
      z.reply(3, { to: teman.id, text: 'Teman telah ditemukan\n> /stop : *Berhenti berteman*\n> /game : *Bermain game*\nAyo mulai mengobrolll', parse: true });
      
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