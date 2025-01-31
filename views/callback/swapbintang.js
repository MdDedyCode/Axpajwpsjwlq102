module.exports = async (z) => {
  try {
    z.ctx.deleteMessage().catch(e => { });
    
    let hari = 0;
    let bintang = 0;
    
    if (z.data.split('#')[1] == '1'){
      if (z.Users.bintang < 1) return z.reply(1, { text: `Bintang kamu adalah ⭐️${z.Users.bintang}, Kurang ⭐${1 - z.Users.bintang} Untuk menukar ini!\n\nSetiap /invite 1 orang mendapatkan 1⭐` });
      hari = 1;
      bintang = 1;
    }
    if (z.data.split('#')[1] == '2'){
      if (z.Users.bintang < 3) return z.reply(1, { text: `Bintang kamu adalah ⭐️${z.Users.bintang}, Kurang ⭐${3 - z.Users.bintang} Untuk menukar ini!\n\nSetiap /invite 1 orang mendapatkan 1⭐` });
      hari = 5;
      bintang = 3;
    }
    if (z.data.split('#')[1] == '3'){
      if (z.Users.bintang < 7) return z.reply(1, { text: `Bintang kamu adalah ⭐️${z.Users.bintang}, Kurang ⭐${7 - z.Users.bintang} Untuk menukar ini!\n\nSetiap /invite 1 orang mendapatkan 1⭐` });
      hari = 15;
      bintang = 7;
    }
    if (z.data.split('#')[1] == '4'){
      if (z.Users.bintang < 10) return z.reply(1, { text: `Bintang kamu adalah ⭐️${z.Users.bintang}, Kurang ⭐${10 - z.Users.bintang} Untuk menukar ini!\n\nSetiap /invite 1 orang mendapatkan 1⭐` });
      hari = 25;
      bintang = 10;
    }
    
    if (z.cekTime(z.Users.status.premium) == false){
      await z.setUsers(z.from, {
        status: { premium: z.addTime(new Date(), hari) },
        bintangM: bintang
      });
      z.reply(1, { text: `Sukses Menukar ⭐️${bintang}. Kamu sekarang menjadi user Premium selama ${hari} Hari!` });      
    }
    
    if (z.cekTime(z.Users.status.premium) !== false){  
      const total1 = z.addTime(new Date(z.Users.status.premium), hari);
      const total = z.cekTime(total1);      
            
      z.reply(1, { text: `Sukses Menukar ⭐️${bintang}. Sebelumnya sisa waktu user premium kamu ${z.cekTime(z.Users.status.premium)} dan di tambah ${hari} Hari, Jadi total ${total}!` });            
      
      await z.setUsers(z.from, {
        status: { premium: total1 },
        bintangM: bintang
      });
    }
    
  } catch(e) {
    z.errorLog(e);
  }
}