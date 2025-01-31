module.exports = async (z) => {
  try {    
    z.reply(1, { text: `Berikut beberapa larangan penting yang diterapkan pada pengguna dalam bot ini:

1. Spam: Dilarang mengirim pesan berulang-ulang yang sama atau mirip.

2. Promosi: Dilarang membagikan konten promosi, Link Group/Bot, Produk, dll.

3. Konten Dewasa: Dilarang mengirim konten yang mengandung pornografi atau kekerasan.

4. Ucapan Kebencian: Dilarang mengirim pesan yang berisi ujaran kebencian, diskriminasi, atau penghinaan terhadap ras, agama, gender, orientasi seksual, atau kelompok lain.

5. Penipuan: Dilarang melakukan tindakan penipuan atau mencoba memperoleh informasi pribadi pengguna lain dengan cara yang tidak jujur.

6. Phishing: Dilarang membagikan tautan atau konten yang mencoba menipu pengguna untuk memberikan informasi pribadi atau sensitif.

7. Penguntitan: Dilarang menguntit atau melecehkan pengguna lain.

8. Penyalahgunaan Data Pribadi: Dilarang mengungkapkan atau membagikan informasi pribadi pengguna lain tanpa izin.

9. Kekerasan: Dilarang mengancam atau mengintimidasi pengguna lain dengan kekerasan fisik atau psikologis.

10. Pelanggaran Kebijakan Telegram: Dilarang melakukan tindakan yang melanggar kebijakan Telegram yang berlaku.

Dengan larangan-larangan ini, Anda dapat menjaga lingkungan obrolan yang aman dan nyaman bagi semua pengguna.`, mark: true });  
  } catch(e) {
    z.errorLog(e);
  }
}
