module.exports = async (z) => {
  try {
    z.reply(1, { text: `Bagiin link ini ketemen kamu\n\nhttps://t.me/${z.userNameBot}?start=${z.from}\n\nSetiap orang yang mendaftar ke bot menggunakan link di atas, kamu mendapatkan 1⭐️Bintang\n\n/swapbintang -- Tukar bintang kamu`, mark: true });
  } catch(e) {
    z.errorLog(e);
  }
}