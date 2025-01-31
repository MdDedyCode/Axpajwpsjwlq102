module.exports = async (z) => {
  try {
    z.ctx.deleteMessage().catch(e => { });
    
    if (z.Users !== null) return z.reply(1, { text: 'Kamu telah terdaftar sebelumnya\n> /menu : *Menampilkan menu Bot*\n> /search : *Mencari teman random*', parse: true });     
    
    if (z.data.split('#').length == 3){
      await z.reply(1, { text: '> Tahap 2\nSelanjutnya, Kamu umur berapa?', parse: true, button: [
        [{ text: '10', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#10` },
        { text: '11', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#11` },
        { text: '12', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#12` },
        { text: '13', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#13` },
        { text: '14', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#14` }],
      
        [{ text: '15', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#15` },
        { text: '16', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#16` },
        { text: '17', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#17` },
        { text: '18', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#18` },
        { text: '19', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#19` }],     
      
        [{ text: '20', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#20` },
        { text: '21', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#21` },
        { text: '22', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#22` },
        { text: '23', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#23` },
        { text: '24', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#24` }],
            
        [{ text: '25', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#25` },
        { text: '26', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#26` },
        { text: '27', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#27` },
        { text: '28', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#28` },
        { text: '29', callback_data: `start#${z.data.split('#')[1]}#${z.data.split('#')[2]}#29` }]     
      ] }); 
    }
    
    if (z.data.split('#').length == 4){
      z.addUsers({
        id: z.from,
        name: z.userName,
        gender: z.data.split('#')[1],
        umur: z.data.split('#')[3],
        bintang: 0, 
        medali: 0,
        like: 0,
        dislike: 0,    
        cmd: 0,  
        rating: 0,    
        bergabung: new Date(),  
        invite: [],
        status: {
          pin: false,
          banned: new Date(),
          premium: z.addTime(new Date, 1)
        },
        teman: {
          id: false,
          status: false,
          request: false
        },      
        game: {
          play: false,
          playTime: false,
          name: false,
          soal: 0,
          jawaban: false,
          query: false,
          pilihan: false    
        }
      });
      z.reply(1, { text: 'Semua tahap telah di selesaikan, Kamu sekarang bisa menggunakan bot ini\n> /menu : *Menampilkan menu Bot*\n> /search : *Mencari teman random*', parse: true });
      if (z.data.split('#')[2] !== 'false'){
        let userInvite = await z.cekUsers(z.data.split('#')[2]);
        if (userInvite == null) return;
        
        await z.setUsers(userInvite.id, { bintangP: 1, invite: z.from });
        z.reply(3, { to: z.data.split('#')[2], text: `Seseorang bergabung menggunakan link invite kamu, 1 Bintang untuk kamu\n> /swapbintang : *Tukar bintang kamu*`, parse: true});        
        z.reply(3, { to: z.setting.idAdmin, text: `User ${userInvite.name} mengundang seseorang!`});    
      }
    }
  } catch(e) {
    z.errorLog(e);
  }
}