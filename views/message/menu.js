module.exports = async (z) => {
  try {
    z.reply(1, { text: `Berikut adalah menu pada bot ini
> */start* : Memulai bot
> */search* : Mencari teman random
> */stop* : Berhenti berteman
> */next* : Berhenti dan Mencari teman baru
> */swapbintang* : Menukar bintang
> */invite* : Mengundang teman ke bot
> */getprem* : Menjadi user Premium
> */rules* : Aturan yang berlaku
> */donasi* : Membantu bot
> */developer* : Contact Admin bot
> */game* : List game dan kuis
> */my* : Informasi tentang kamu
> */topmedali* : Medali paling banyak
> */topinvite* : Mengundang orang terbanyak
> */toplike* : Users yang paling disukai
> */topdislike* : Users yang tidak di sukai
> */setgender* : Mengubah gender kamu

Fitur hiburan 
> */texttosticker* : Mengubah text ke sticker
> */ttc* : Mengubah text ke sticker v2
> */gombalan* : Dapat gombalan random

Fitur khusus Users Premium
> */searchgender* : Mencari teman gender
> */image* : Membuat image query
> */tts* : Mengubah text menjadi suara
> */sertifikat* : Membuat sertifikat keren
       `, parse: true, mark: true });
  } catch(e) {
    z.errorLog(e);
  }
}