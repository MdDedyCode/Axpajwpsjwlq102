module.exports = async (z) => {
  try {
    z.reply(1, { text: `Berikut menu gombalan pada bot ini
> /gsad
> /grandom
> /gpdkt
> /gmaut
> /gkocak
> /git
> /gislam
> /gipa
> /gips
> /gbola`, parse: true, mark: true });       
  } catch(e) {
    z.errorLog(e);
  }
}
