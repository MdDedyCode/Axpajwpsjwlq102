module.exports = async (z) => {
  try {
    if (!z.query) return z.reply(1, { text: 'Id?', mark: true, parse: true });  
    
    const Users = await z.cekUsers(z.query);
    
    if (Users == null) return z.reply(1, { text: 'false', mark: true, parse: true });  
    
    z.reply(1, { text: `Informasi tentang kamu
${z.setting.simbol} Id: ${Users.id}
${z.setting.simbol} Name: ${Users.name}
${z.setting.simbol} Teman: ${Users.teman.id}
${z.setting.simbol} Gender: ${Users.gender}
${z.setting.simbol} Umur: ${Users.umur}
${z.setting.simbol} Bintang: ${Users.bintang}⭐️
${z.setting.simbol} Medali: ${Users.medali}
${z.setting.simbol} Like: ${Users.like}
${z.setting.simbol} Dislike: ${Users.dislike}
${z.setting.simbol} Rating: ${Users.rating}
${z.setting.simbol} Invite: ${Users.invite.length}
${z.setting.simbol} Banned: ${z.cekTime(Users.status.banned)}
${z.setting.simbol} Premium: ${z.cekTime(Users.status.premium)}`, mark: true });       
  } catch(e) {
    z.errorLog(e);
  }
}

