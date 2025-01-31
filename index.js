_ = process.cwd()
const fs = require('fs');
const { Telegraf, Extra, Markup } = require ("telegraf");
let connections = false;

const setting = require('./views/admin/setting.json');

// MdSecret
const bot = new Telegraf('6360465200:AAHFUYMjwrA_8ZIY5lKoHs3yQ5x6i5m66GA');

// MdTest
//const bot = new Telegraf('7160645729:AAEshqwnZsuRqmaiWn_0nDZbeYvuUOajtGc');


if (connections == false){
  require('./views/database/connection.js');
  connections = true;
}
var userLastCommandTime = {
  id: 123,
  time: "2024-07-08T02:35:23.899Z"
};
let logLength = 0;

const modelsUsers = require('./views/database/users.js');
const { addUsers, cekUsers, setUsers } = require('./views/database/usersData.js');
const { cekTime, addTime, addTimeS } = require('./views/sistem/time.js');

function antiSpam(from){  
  if (userLastCommandTime.id == from){
    if (new Date() - new Date(userLastCommandTime.time) < 1000){      
      return "true";
    }
  }
          
  userLastCommandTime.id = from;
  userLastCommandTime.time = new Date();
  return "false";
}            

bot.on('message', async (ctx) => {
  try {  
    if (ctx.update.message.chat.type !== 'private') return;
    
    const from = ctx.update.message.from.id;
    const isBot = ctx.update.message.from.is_bot;
    const firstName = ctx.update.message.from?.first_name;
    const lastName = ctx.update.message.from?.last_name;
    const userName = ctx.update.message.from.username;
    const lc = ctx.update.message.from.language_code;   
    const fromBot = ctx.botInfo.id;
    const firstNameBot = ctx.botInfo.first_name;
    const userNameBot = ctx.botInfo.username;
        
    let command = false;
    let query = false;
    let textChat = false;
    
    if (ctx.update.message.text){
      textChat = ctx.update.message.text;
    }
    if (ctx.update.message.photo || ctx.update.message.video){
      textChat = ctx.update.message.caption;
    }
    if (ctx.update.message.text || ctx.update.message?.caption){
      if (textChat.startsWith('/')){
        command = textChat.split('/')[1].split(' ')[0].toLowerCase();
        query = textChat.split(' ').slice(1).join(' ');
      } 
    }
    
    const Users = await cekUsers(from);
    
    function errorLog(a){
      if (a.response?.description == "Forbidden: bot was blocked by the user") return
      console.log(a);
      reply(1, { text: 'Terjadi kesalahan, Jika masih mengalami hal yang sama\n> Silahkan laporkan ke /developer', mark: true, parse: true });          
    }  
    function reply(nomer, pesan){
      require('./views/sistem/reply.js')(nomer, pesan, ctx, errorLog);
    }
    function cmdLog(command){
      if (Users !== null){
        console.log(`[ ${from} - ${Users.teman.id} ] Command : ${command}`);
      }
    }
    
    if (command !== 'start'){
      if (Users == null){
        return reply(1, { text: 'Sebelum menggunakan bot\n>Gunakan command /start terlebih dahulu', parse: true });
      }
    }
    if (command){
      if (antiSpam(from) == 'true'){
        return reply(1, { text: '> Anti *SPAM*\nMohon tidak melakukan spam command, Pastikan ada jeda 1 detik setiap kali menggunakan command', parse: true });
      }
    }
    
    const currentTime = new Date();
    const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', hour12: false };
    const currentHour = new Intl.DateTimeFormat('en-US', options).format(currentTime);
    let botOff = false;
  
    botOff = false;
    if (currentHour == 24){ botOff = true; }
    if (currentHour == 1){ botOff = true; }
    if (currentHour == 2){ botOff = true; }
    if (currentHour == 3){ botOff = true; }
    if (currentHour == 4){ botOff = true; }
  
    if (botOff == true) { logLength++;
      if (command !== "start" && command !== "donasi" ) {      
        if (`${from}` !== setting.idAdmin){
          return ctx.reply(`[ SISTEM ] Untuk menghemat dana, bot ini tidak akan tersedia mulai jam 12 malam. Kamu bisa menggunakannya kembali besok pagi mulai jam 5 Pagi.`, Markup.inlineKeyboard([Markup.button.url('Bantu bot, Minimal Rp1.000🩷', 'https://saweria.co/MdSync')])).catch(e => { errorLog(e) }); 
        }
      }      
    }
    
    const z = { ctx, Users, logLength, cekTime, addTime, addTimeS, addUsers, cekUsers, setUsers, setting, modelsUsers, reply, errorLog, from, isBot, firstName, lastName, userName, lc, fromBot, firstNameBot, userNameBot, command, query, textChat };
    
    if (Users !== null){
      if (cekTime(Users.status.banned) !== false){
        const cmdQ = ['my','developer','donasi','deleteban'];
        if (!cmdQ.includes(command)){
          return reply(1, { text: `Kamu telah melanggar aturan yang berlaku di bot ini, dan di beri hukuman banned selama ${cekTime(Users.status.banned)}\n> /deleteban : *Hapus banned kamu*`, mark: true, parse: true});
        }
      }
      if (Users.teman.status == 'false' && !command){
        return reply(1, { text: 'Kamu belum memiliki teman\n> /search : *Mencari teman*', mark: true, parse: true });          
      }
      if (Users.teman.status == 'berteman' && !command){
        logLength++;
        require('./views/sistem/message.js')(z);
      } 
            
    }
           
    switch (command) {
      case 'menu': case 'start': case 'search': case 'stop': case 'next': case 'swapbintang': case 'invite': case 'getprem': case 'rules': case 'donasi': case 'developer': case 'game': case 'my': case 'leaderboard': case 'topmedali': case 'topinvite': case 'toplike': case 'topdislike': case 'sertifikat': case 'deleteban': case 'texttosticker': case 'setgender': case 'gombalan':
      cmdLog(command);
        require(`./views/message/${command}.js`)(z);
      break 
            
      case 'tebakpulau': case 'asahotak': case 'siapaaku': case 'tebakbendera': case 'tebakhewan': 
      case 'tebakkalimat': case 'tebakkata': case 'tebaklirik': case 'tebaksurah': case 'tebaktebakan': 
      case 'matematika': case 'artikata': case 'tebaklogika': case 'tebakkuliner': case 'tebakmakanan':
      cmdLog(command);
        require('./views/message/games.js')(z);        
      break
      
      case 'searchgender': case 'image': case 'tts':
        if (cekTime(Users.status.premium) == false) return reply(1, { text: 'Fitur ini hanya bisa digunakan oleh user Premium\n> /getprem : *Dapatkan user premium*', parse: true, mark: true });
        cmdLog(command);
        require(`./views/message/${command}.js`)(z);
      break    
      
      case 'scantik': case 'sganteng': case 'shitam': case 'smiskin': case 'skaya': case 'sbaik': case 'smarah': case 'ssabar': case 'ssakiti': case 'skeren': case 'smisterius': case 'ssantai': case 'ssombong': case 'slucu': case 'sgila':
        if (cekTime(Users.status.premium) == false) return reply(1, { text: 'Fitur ini hanya bisa digunakan oleh user Premium\n> /getprem : *Dapatkan user premium*', parse: true, mark: true });
        cmdLog(command);
        require(`./views/message/sertifikats.js`)(z);
      break            
      case 'bignoodle': case 'cuprum': case 'hwtgoth': case 'teddy': case 'screamblood': case 'rulingpen': case 'joylinenotes': case 'iIyalah': case 'hackons': case 'creativeover': 
        require(_ + '/views/message/texttostickers.js')(z);      
      break 
      case 'ttc':
        require(_ + '/views/message/ttc.js')(z);      
      break 
      case 'gsad': case 'grandom': case 'gpdkt': case 'gmaut': case 'gkocak': case 'git': case 'gislam': case 'gipa': case 'gips': case 'gbola': 
        require(_ + '/views/message/gombalans.js')(z);      
      break 
      
      
      // Dev
      case 'shoot': case 'unshoot': case 'bc': case 'bcban': case 'bcimg': case 'bcriwayat': case 'bcsticker': case 'cekusers': case 'addprem': 
        if (`${from}` == setting.idAdmin){
          cmdLog(command);
          require(`./views/message/${command}.js`)(z);
        }
      break    
      case 'mdxyz':
        const dataChat = require(_ + '/views/sistem/test.json');            
        ctx.reply(dataChat.length);
      break      
    }
    
  } catch(e) {
    console.log(e);
    ctx.reply('Terjadi kesalahan di index, m');
  }
});


bot.on('callback_query', async (ctx) => {
  try {
    const from = ctx.update.callback_query.from.id;
    const isBot = ctx.update.callback_query.from.is_bot;
    const firstName = ctx.update.callback_query.from?.first_name;
    const lastName = ctx.update.callback_query.from?.last_name;
    const userName = ctx.update.callback_query.from.username;
    const lc = ctx.update.callback_query.from.language_code;   
    
    const fromBot = ctx.botInfo.id;
    const firstNameBot = ctx.botInfo.first_name;
    const userNameBot = ctx.botInfo.username;
    
    const data = ctx.update.callback_query.data;
    const command = data.split('#')[0];
    
    if (antiSpam(from) == "true"){
      return reply(1, { text: '> Anti *SPAM*\nMohon tidak melakukan spam button, Pastikan ada jeda 1 detik setiap kali mengklik button', parse: true });
    }
    
    function errorLog(a){
      if (a.response?.description == "Forbidden: bot was blocked by the user") return
      console.log(a);
      reply(1, { text: 'Terjadi kesalahan, Jika masih mengalami hal yang sama\n> Silahkan laporkan ke /developer', parse: true });          
    } 
     
    function reply(nomer, pesan){
      require('./views/sistem/reply.js')(nomer, pesan, ctx, errorLog);
    }
    
    const Users = await cekUsers(from);
    
    function cmdLog(command){
      if (Users !== null){
        console.log(`[ ${from} - ${Users.teman.id} ] Callback : ${command}`);
      }
    }
    
    const z = { ctx, Users, cekTime, addTime, addTimeS, addUsers, cekUsers, setUsers, setting, reply, errorLog, from, isBot, firstName, lastName, userName, lc, fromBot, firstNameBot, userNameBot, command, data };
    
    switch (command) {    
      case 'start': case 'reaksi': case 'search': case 'swapbintang': case 'game': case 'gamejawaban': case 'shoot': case 'setgender':
        cmdLog(command);
        require(`./views/callback/${command}.js`)(z);
      break
    }
  } catch(e) {
    console.log(e);
    ctx.reply('Terjadi kesalahan di index, cq');
  }
});


bot.launch();
console.log('Connect');