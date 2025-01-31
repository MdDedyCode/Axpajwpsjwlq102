module.exports = async (z) => {
  try {    
    z.ctx.deleteMessage().catch(e => { });
    z.reply(1, { text: `> Sukses\nMengganti gender ke ${z.data.split('#')[1]}`, parse: true });  
    await z.setUsers(z.from, { gender: z.data.split('#')[1] });           
          
  } catch(e) {
    z.errorLog(e);
  }
}
