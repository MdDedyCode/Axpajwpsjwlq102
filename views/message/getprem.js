module.exports = async (z) => {
  try {    
    z.reply(1, { text: `Ingin Menjadi User Premium dan Menikmati Layanan Eksklusif?

1. Cara Menjadi User Premium
${z.setting.simbol} Beli Paket Premium
Dapatkan status premium hanya dengan RpRp5.000 per bulan.

${z.setting.simbol} Dapatkan Gratis
Anda juga bisa mendapatkan status premium secara gratis dengan menggunakan command /swapbintang di bot.

2. Keuntungan Menjadi User Premium
Sebagai user premium, Anda akan mendapatkan akses ke sejumlah fitur eksklusif

${z.setting.simbol} Pencarian Teman Berdasarkan Gender
Temukan teman yang sesuai dengan preferensi gender Anda dengan mudah.

${z.setting.simbol} Pencarian Gambar dengan AI
Cari gambar yang Anda butuhkan langsung melalui bot menggunakan kecerdasan buatan.

${z.setting.simbol}. Konversi Teks ke Suara dengan AI
Ubah teks menjadi suara dengan mudah untuk berbagai keperluan.

${z.setting.simbol} Pembuatan Sertifikat Hiburan
Buat sertifikat hiburan untuk bersenang-senang bersama teman.

${z.setting.simbol} Bebas Iklan
Sebagai pengguna premium, Anda tidak akan terganggu oleh iklan di bot ini.

${z.setting.simbol} Gelar Premium di Profil Anda
Dapatkan gelar khusus di profil Anda dengan command /my, menunjukkan status premium Anda.

${z.setting.simbol} Dukung Pengembangan Bot
Dengan menjadi premium, Anda juga berkontribusi dalam mendukung pengembangan dan pemeliharaan bot ini.

3. Informasi Penting
${z.setting.simbol} Patuhi Aturan Bot
Melanggar aturan bot, seperti mengirim pesan tidak pantas (+18), tetap akan berujung pada banned, meskipun Anda adalah user premium.

${z.setting.simbol} Durasi Paket
Setiap paket premium berlaku untuk durasi satu bulan.

Tertarik? Chat @${z.setting.admin}`, mark: true });  
  } catch(e) {
    z.errorLog(e);
  }
}
