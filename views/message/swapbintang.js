module.exports = async (z) => {
  try {    
    z.reply(1, { text: `${z.setting.simbol} Bintang kamu adalah: ⭐️${z.Users.bintang}\n\nSilahkan pilih.`, button: [
      [{ text: '⭐️1 = 1 Hari Premium', callback_data: 'swapbintang#1' }],
      [{ text: '⭐️3 = 5 Hari Premium', callback_data: 'swapbintang#2' }],
      [{ text: '⭐️7 = 15 Hari Premium', callback_data: 'swapbintang#3' }],
      [{ text: '⭐️10 = 25 Hari Premium', callback_data: 'swapbintang#4' }]
    ] });  
  } catch(e) {
    z.errorLog(e);
  }
}
