module.exports = async (z) => {
  try {
    if (!z.query) return z.reply(1, { text: 'Id?', mark: true });           
    z.reply(1, { text: 'Sukses!', mark: true });
    await z.setUsers(z.query, { status: { banned: new Date() }});
    
  } catch(e) {
    z.errorLog(e);
  }
}
