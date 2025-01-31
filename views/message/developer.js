module.exports = async (z) => {
  try {
    z.reply(1, { text: `Developer yang membuat bot ini @${z.setting.admin}`, mark: true });       
  } catch(e) {
    z.errorLog(e);
  }
}
