module.exports = async (z) => {
  try {
    if (z.Users !== null) return z.reply(1, { text: 'Kamu telah terdaftar sebelumnya\n> /menu : *Menampilkan menu Bot*\n> /search : *Mencari teman random*', mark: true, parse: true });  
    const dataBanned = require('../dataJson/banned.json');
    
    if (dataBanned.includes(`${z.from}`)){
      return z.reply(1, { text: 'Kamu sebelumnya terbanned dari database. Untuk dapat menggunakan bot ini kembali, tebus dengan Rp4.999 Hubungi @MdSync untuk melanjutkan.', mark: true });        
    }
    
    let qId = false;
    
    if (z.query){      
      qId = z.query.replace(/#/g, '');
    }
    if (qId == z.from) return z.reply(1, { text: 'Tidak dapat menggunakan link invite diri sendiri!', mark: true });      
        
    z.reply(1, { text: '> Tahap 1\nSebelum menggunakan bot ini, silahkan pilih Gender kamu', parse: true, button: [
      [{ text: 'Cowok', callback_data: 'start#cowok#' + qId },
      { text: 'Cewek', callback_data: 'start#cewek#' + qId }]
    ] });  
  } catch(e) {
    z.errorLog(e);
  }
}