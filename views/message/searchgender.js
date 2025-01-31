const modelsUsers = require('../database/users.js');

module.exports = async (z) => {
  try { 
    if (z.Users.teman.status == 'berteman') return z.reply(1, { text: 'Kamu sudah berteman sebelumnya\n> /stop : *Berhenti berteman*', mark: true, parse: true });  
    if (z.Users.teman.status == 'true') return z.reply(1, { text: 'Bot telah mencarikan kamu teman sebelumnya. tunggu sampai bot menemukan teman untuk kamu.', mark: true });  
    
    z.reply(1, { text: '> Premium\nSilahkan pilih gender teman\nyang kamu cari', parse: true, button: [
      [{ text: 'Cowok', callback_data: 'search#cowok' },
      { text: 'Cewek', callback_data: 'search#cewek' }]
    ] });  
    
  } catch(e) {
    z.errorLog(e);
  }
}