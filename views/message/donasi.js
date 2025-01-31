module.exports = async (z) => {
  try {
    z.reply(1, { text: 'Bantu donasi ya! Minimal Rp1000:)\nhttps://saweria.co/MdSync', mark: true });       
  } catch(e) {
    z.errorLog(e);
  }
}
