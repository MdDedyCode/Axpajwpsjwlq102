module.exports = (nomer, pesan, ctx, errorLog) => {
  const { Telegraf, Extra, Markup } = require ("telegraf");

  let mark = { };
  
  if (pesan.mark == true){
    if (ctx?.message?.message_id){
      mark["reply_to_message_id"] = ctx.message.message_id;
    } else {
      console.log("Reply pesan pada sistem tidak ditemukan");
    }
  }
  if (pesan?.parse){
    mark["parse_mode"] = 'MarkdownV2';
  }
  if (pesan?.button){
    mark["reply_markup"] = { inline_keyboard: pesan.button }
  }
     
  if (nomer == 1){
    if (pesan?.time){    
      ctx.reply(pesan.text, mark).then((message) => {
        setTimeout(() => {
          ctx.deleteMessage(message.message_id).catch(e => { });
        }, pesan.time);
      }).catch(e => errorLog(e));
    } else {
      try {
        ctx.reply(pesan.text, mark).catch(e => { });
      } catch(e){
        errorLog(e);
      }
    }
  }
  if (nomer == 2){
    ctx.replyWithMarkdown(pesan.text, mark).catch(e => errorLog(e)); 
  }
  if (nomer == 3){
    ctx.telegram.sendMessage(pesan.to, pesan.text, mark).catch(e => errorLog(e));
  } 
}

/*
      reply(3, {
        text: "Halo *halo*",
        to: from,
        mark: true,
        button: [
          [{ text: 'Banned', callback_data: 'banned1#' }],
          { text: 'Banned2', callback_data: 'banned1#' }]
        ] 
      });
*/