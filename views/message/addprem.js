module.exports = async (z) => {
  try {
    if (!z.query) return z.reply(1, { text: 'Id?', mark: true });           
    z.reply(1, { text: 'Sukses!', mark: true });
    await z.setUsers(z.query, { status: { premium: z.addTime(new Date(), 30) }});
    
    z.reply(3, { to: z.query, text: '> Premium\nKamu sekarang adalah user premium\n> /my : *Informasi tentang kamu*\n> /menu : *Menampilkan menu bot* ', parse: true });
  } catch(e) {
    z.errorLog(e);
  }
}
