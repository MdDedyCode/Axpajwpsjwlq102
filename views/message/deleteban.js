module.exports = async (z) => {
  try {    
    z.reply(1, { text: `Mari kita bahas mengapa Anda bisa terkena banned dan bagaimana cara mengatasinya:

1. Alasan Anda Bisa Diblokir
${z.setting.simbol} Mengirim Media yang Mengandung Konten Pornografi
${z.setting.simbol} Mengirim Pesan yang Tidak Pantas
${z.setting.simbol} Dilaporkan oleh Teman Chat
${z.setting.simbol} Mengirim Pesan Promosi

2. Cara Keluar dari Banned
${z.setting.simbol} Menunggu hingga Masa Banned Berakhir
${z.setting.simbol} Atau Membayar untuk Pembebasan Lebih Cepat
- 1 Hari: Rp1.000
- 3 Hari: Rp3.000
- 7 Hari: Rp7.000
- 30 Hari: Rp15.000
- 365 Hari: Rp29.000

Untuk membayar dan membebaskan akun kamu dari banned, hubungi @MdSync.`, mark: true });  
  } catch(e) {
    z.errorLog(e);
  }
}
