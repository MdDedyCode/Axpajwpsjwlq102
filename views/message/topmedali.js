module.exports = async (z) => {
  try {
    const allUsers = await z.modelsUsers.find({ });
  
    if (allUsers.length < 10) return z.reply(1, { text: `Leaderboard belum tersedia saat ini!`, mark: true });

    let txt = ``;
   
    allUsers.sort((a, b) => b.medali - a.medali);
    
    for (let i = 0; i < 10; i++) {    
      var UsersTop = await z.ctx.telegram.getChatMember(allUsers[i].id, allUsers[i].id);
      txt += `${z.setting.simbol} [${i + 1}]. ${UsersTop.user.first_name}, Medali: ${allUsers[i].medali}\n`
    }
    
    z.reply(1, { text: 'Top Medali paling banyak:\n' + txt, mark: true });
    
  } catch(e) {
    z.errorLog(e);
  }
}

