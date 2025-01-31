module.exports = async (z) => {
  try {
    
    z.reply(1, { text: '> Ganti gender\nSilahkan pilih gender kamu', parse: true, button: [
      [{ text: 'Cowok', callback_data: 'setgender#cowok' },
      { text: 'Cewek', callback_data: 'setgender#cewek' }]
    ] });
      
  } catch(e) {
    z.errorLog(e);
  }
}