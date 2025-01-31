module.exports = async (z) => {
  try {
    z.reply(1, { text: `Berikut adalah list font sticker
> /bignoodle
> /cuprum
> /hwtgoth
> /teddy
> /screamblood
> /rulingpen
> /joylinenotes
> /iIyalah
> /hackons
> /creativeover`, mark: true, parse: true });       
  } catch(e) {
    z.errorLog(e);
  }
}
