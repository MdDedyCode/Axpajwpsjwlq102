module.exports = async (z) => {
  try { //shoot#korban#pelapor#hari
    if (z.data.split('#').length == 3){
      z.ctx.editMessageReplyMarkup({
        inline_keyboard: [
          [
            { text: '1', callback_data: `shoot#${z.data.split('#')[1]}#${z.data.split('#')[2]}#1`}, 
            { text: '3', callback_data: `shoot#${z.data.split('#')[1]}#${z.data.split('#')[2]}#3`}, 
            { text: '7', callback_data: `shoot#${z.data.split('#')[1]}#${z.data.split('#')[2]}#7`}
          ],
          [
            { text: '30', callback_data: `shoot#${z.data.split('#')[1]}#${z.data.split('#')[2]}#30`}, 
            { text: '365', callback_data: `shoot#${z.data.split('#')[1]}#${z.data.split('#')[2]}#365`}
          ],  
        ]
      }).catch(e => { z.errorLog(e) });
    }
    if (z.data.split('#').length == 4){
      let hari = 0;
      
      if (z.data.split('#')[3] == '1'){ hari = 1; }
      if (z.data.split('#')[3] == '3'){ hari = 3; }
      if (z.data.split('#')[3] == '7'){ hari = 7; }
      if (z.data.split('#')[3] == '30'){ hari = 30; }
      if (z.data.split('#')[3] == '365'){ hari = 365; }
      
      z.ctx.editMessageReplyMarkup({
        inline_keyboard: [
          [
            { text: `Banned ${hari} Hari`, callback_data: `#`}, 
          ]        
        ]
      }).catch(e => { z.errorLog(e) });
      
      await z.setUsers(z.data.split('#')[1], { status: {
        banned: z.addTime(new Date(), hari)}
      });
      const Korban = await z.cekUsers(z.data.split('#')[1]);
      
      if (z.cekTime(Korban.status.banned == false)){
        await z.reply(3, { to: z.data.split('#')[1], text: `> Pelanggaran\nKamu terdeteksi melanggar peraturan, dan sebagai konsekuensinya, kamu dibanned selama ${hari} hari`, parse: true });
      }
      if (Korban.teman.status == 'berteman'){
        await z.reply(3, { to: Korban.teman.id, text: `Teman Kamu terdeteksi melanggar peraturan dan sebagai konsekuensinya teman telah dibanned selama ${hari} hari\n> /next : *Cari teman lain*`, parse: true });     
      }
      if (z.data.split('#')[2] !== z.setting.idAdmin){
        z.reply(3, { to: z.data.split('#')[2], text: `Terima kasih atas laporanmu, Pengguna yang kamu laporkan terbukti melanggar peraturan, Sebagai apresiasi, kami memberi 1 bintang untukmu, Mohon maaf atas ketidaknyamanan ini\n> /swapbintang : *Tukar bintang kamu*`, parse: true });           
        await z.setUsers(z.data.split('#')[2], { bintangP: 1 });
      }
    }
  } catch(e) {
    z.errorLog(e);
  }
}