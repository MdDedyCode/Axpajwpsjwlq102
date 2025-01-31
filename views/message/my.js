module.exports = async (z) => {
  try {
    z.reply(1, { text: `Informasi tentang kamu
${z.setting.simbol} Id: ${z.Users.id}
${z.setting.simbol} Name: ${z.Users.name}
${z.setting.simbol} Gender: ${z.Users.gender}
${z.setting.simbol} Umur: ${z.Users.umur}
${z.setting.simbol} Bintang: ${z.Users.bintang}⭐️
${z.setting.simbol} Medali: ${z.Users.medali}
${z.setting.simbol} Like: ${z.Users.like}
${z.setting.simbol} Dislike: ${z.Users.dislike}
${z.setting.simbol} Rating: ${z.Users.rating}
${z.setting.simbol} Invite: ${z.Users.invite.length}
${z.setting.simbol} Banned: ${z.cekTime(z.Users.status.banned)}
${z.setting.simbol} Premium: ${z.cekTime(z.Users.status.premium)}`, mark: true });       
  } catch(e) {
    z.errorLog(e);
  }
}

