module.exports = async (z) => {
  try {
    z.reply(1, { text: `Berikut menu sertifikat pada bot ini
> /scantik
> /sganteng
> /shitam
> /smiskin
> /skaya
> /sbaik
> /smarah
> /ssabar
> /ssakiti
> /skeren
> /smisterius
> /ssantai
> /ssombong
> /slucu
> /sgila`, parse: true, mark: true });       
  } catch(e) {
    z.errorLog(e);
  }
}
