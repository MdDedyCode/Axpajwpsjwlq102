module.exports = async (z) => {
  try {
    if (!z.query) return z.reply(1, { text: 'Id?', mark: true });           
    z.reply(1, { text: 'Shoot Users?', button: [
      [{ text: '🔫', callback_data: 'shoot#' + z.query + '#' + z.from }]
    ] });
  } catch(e) {
    z.errorLog(e);
  }
}
