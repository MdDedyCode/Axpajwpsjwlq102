module.exports = async (z) => {
  try {
    const allUsers = await z.modelsUsers.find({ });
  
    if (allUsers.length < 10) return z.reply(1, { text: `Leaderboard belum tersedia saat ini!`, mark: true });

    let txt = ``;
   
    allUsers.sort((a, b) => b.like - a.like);
    
    for (let i = 0; i < 10; i++) {    
      var UsersTop = await z.ctx.telegram.getChatMember(allUsers[i].id, allUsers[i].id);
      txt += `${z.setting.simbol} [${i + 1}]. ${UsersTop.user.first_name}, Like: ${allUsers[i].like}\n`
    }
    
    z.reply(1, { text: 'Top Paling disukai teman:\n' + txt, mark: true });
    
  } catch(e) {
    z.errorLog(e);
  }
}

