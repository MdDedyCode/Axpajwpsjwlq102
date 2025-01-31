module.exports = async (z) => {
  try {
    z.reply(1, { text: `Berikut adalah game pada bot ini
> /tebakpulau
> /asahotak
> /siapaaku
> /tebakbendera
> /tebakhewan 
> /tebakkalimat
> /tebakkata
> /tebaklirik
> /tebaksurah
> /tebaktebakan 
> /matematika
> /artikata
> /tebaklogika
> /tebakkuliner
> /tebakmakanan`, mark: true, parse: true });       
  } catch(e) {
    z.errorLog(e);
  }
}
