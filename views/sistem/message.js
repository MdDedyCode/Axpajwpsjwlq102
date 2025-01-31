const deteksi = require('../dataJson/deteksi.json');
const fs = require('fs');

module.exports = async (z) => {
  try{
 
  const Teman = await z.cekUsers(z.Users.teman.id);
  
  if (Teman == null) return z.reply(1, { text: 'Teman telah meninggalkan bot ini\n> /next : *Cari teman baru*', mark: true, parse: true });

  let type = "text";
  let genderEmote = "♂️";
  
  if (z.ctx.message.text){ type = "text" };
  if (z.ctx.message.sticker){ type = "sticker" };
  if (z.ctx.message.voice){ type = "voice" };
  if (z.ctx.message.audio){ type = "audio" };
  if (z.ctx.message.document){ type = "document" };
  if (z.ctx.message.video){ type = "video" };
  if (z.ctx.message.photo){ type = "photo" };
  
  if (z.Users.gender == "cewek"){
    genderEmote = "♀️";
  }
  
  let GroupsReply = {
    "mesum": "-1002188503023",
    "warning": "-1002190346346",
    "media": "-1002249034012"
  };  
    
  let message = "Media";
          
  if (type !== "text"){
    chats = type.toUpperCase();
  }
  if (type == "text"){
    message = z.ctx.message.text;
  }
  console.log(`${z.logLength} [ ${z.from} - ${z.Users.teman.id} ] Pesan : ${message}`);

  switch (type) {   
    case 'text': 
      if (z.ctx.message.text) {
      
      const pesan = z.ctx.message?.text?.toLowerCase();
      
      /*const dataChat = require('./test.json');
      dataChat.push({
        id: z.from,
        pesan: pesan
      });      
      fs.writeFileSync('./test.json', JSON.stringify(dataChat))
       */
      let pesanArray = [];
      let pesanMesum = []; 
      let pesanFilter = []; 
      let pesanWarning = [];
      let pesanLink = [];
      let pesanPromosi = [];  
      let pesanTag = [];
      
      for (let i = 0; i < pesan.split(' ').length; i++) {  
        pesanArray.push(pesan.split(' ')[i]);
      }
      
      for (let i = 0; i < deteksi.mesum.length; i++) {  
        for (let j = 0; j < pesanArray.length; j++) { 
          if (pesanArray[j].includes(deteksi.mesum[i])){
            pesanMesum.push(pesanArray[j]);
          }
        }         
      }
                          
      for (let i = 0; i < deteksi.nonMesum.length; i++) {
        for (let j = 0; j < pesanMesum.length; j++) {          
          if (pesanMesum[j].includes(deteksi.nonMesum[i])){           
            pesanMesum = pesanMesum.filter(item => item !== pesanMesum[j]);
          }         
        }
      }
      
      for (let i = 0; i < deteksi.warning.length; i++) {  
        for (let j = 0; j < pesanArray.length; j++) { 
          if (pesanArray[j].includes(deteksi.warning[i])){
            pesanWarning.push(pesanArray[j]);
          }
        }         
      }
     
      for (let i = 0; i < deteksi.link.length; i++) {  
        for (let j = 0; j < pesanArray.length; j++) { 
          if (pesanArray[j].includes(deteksi.link[i])){
            pesanLink.push(pesanArray[j]);
          }
        }         
      }
     
     
      for (let i = 0; i < deteksi.promosi.length; i++) {  
        for (let j = 0; j < pesanArray.length; j++) { 
          if (pesanArray[j].includes(deteksi.promosi[i])){
            pesanPromosi.push(pesanArray[j]);
          }
        }         
      }
      
      for (let i = 0; i < deteksi.tag.length; i++) {  
        for (let j = 0; j < pesanArray.length; j++) { 
          if (pesanArray[j].includes(deteksi.tag[i])){
            pesanTag.push(pesanArray[j]);
          }
        }         
      }
      
      if (pesanMesum.length !== 0){
        z.ctx.telegram.sendMessage(GroupsReply.mesum, `• Pesan: "${pesan}"\n• Deteksi: ${pesanMesum}\n${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] } }).catch(e => { z.errorLog(e) })           
        return z.reply(1, { text: "> *Bot*\nPesan yang kamu kirim mengandung kata kata terlarang, Jika kamu mengulangi hal yang sama, kamu bisa terkena pelanggaran", mark: true, parse: true });   
      }            
      
      if (pesanPromosi.length !== 0){
        z.ctx.telegram.sendMessage(GroupsReply.mesum, `• Pesan: "${pesan}"\n• Deteksi: ${pesanPromosi}\n${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] } }).catch(e => { z.errorLog(e) });        
        return z.reply(1, { text: "> *Bot*\nTindakan promosi sangat dilarang disini, Jika kamu mengulangi hal yang sama, kamu bisa terkena pelanggaran", mark: true, parse: true });   
      }  
      
      if (pesanWarning.length !== 0){
        z.ctx.telegram.sendMessage(GroupsReply.warning, `• Pesan: "${pesan}"\n• Deteksi: ${pesanWarning}\n${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] } }).catch(e => { z.errorLog(e) });
      }  
      
      if (pesanLink.length !== 0){
        z.ctx.telegram.sendMessage(GroupsReply.warning, `• Pesan: "${pesan}"\n${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] } }).catch(e => { z.errorLog(e) });
      }  
      
      if (pesanTag.length !== 0){
        z.ctx.telegram.sendMessage(GroupsReply.warning, `• Pesan: "${pesan}"\n${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] } }).catch(e => { z.errorLog(e) });
        z.reply(1, { text: "> *Bot*\nTetap waspada saat berbagi ID kamu dengan teman, Teman bisa saja menyalahgunakannya untuk hal hal yang tidak pantas", mark: true, parse: true });   
      }               
      z.ctx.telegram.sendMessage(Teman.id, z.ctx.message.text).catch(e => z.errorLog(e));
      }
    break
    case 'sticker': 
      const stickerP = require(_ + '/views/dataJson/stickerP.json');
      let bannedText = "Banned";
      let stickerPResult = "false";
      const currentDate = new Date();
       
      z.ctx.telegram.sendSticker(GroupsReply.media, z.ctx.message.sticker.file_id).then(data => {             
        z.ctx.telegram.sendMessage(GroupsReply.media, `${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: bannedText, callback_data: `shoot#${z.from}#${z.setting.idAdmin}`}
        ] ] }, reply_to_message_id: data.message_id }).catch(e => { z.errorLog(e) })           
      }).catch(e => z.errorLog(e));
      
      for (let i = 0; i < stickerP.length; i++) { 
        if (z.ctx.update.message.sticker.set_name == stickerP[i]){
          stickerPResult = "true";
          bannedText = "🔥 Telah di banned";
        }
      }
      
      if (stickerPResult == "true") { 
        z.reply(3, { to: z.from, text: `Kamu terdeteksi melakukan pelanggaran aturan bot dan telah diberi hukuman selama 365 hari.`, mark: true });                                        
        z.reply(3, { to: z.Users.teman.id, text: `Teman kamu terdeteksi mengirim sticker terlarang dan telah diberi hukuman banned selama 365 hari\n> /next : *Mencari teman lain*`, parse: true });
        z.setUsers(z.from, {
          status: {
            banned: z.addTime(new Date, 365)        
          }
        });
        return;
      }     
      z.ctx.telegram.sendSticker(Teman.id, z.ctx.message.sticker.file_id).catch(e => z.errorLog(e));     
    break
    case 'voice': 
      z.ctx.telegram.sendVoice(Teman.id, z.ctx.message.voice.file_id).catch(e => z.errorLog(e));     
      z.ctx.telegram.sendVoice(GroupsReply.media, z.ctx.message.voice.file_id).then(data => {             
        z.ctx.telegram.sendMessage(GroupsReply.media, `${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] }, reply_to_message_id: data.message_id }).catch(e => { z.errorLog(e) })           
      }).catch(e => z.errorLog(e));
    break
    case 'audio': 
      z.ctx.telegram.sendAudio(Teman.id, z.ctx.message.audio.file_id).catch(e => z.errorLog(e));     
      z.ctx.telegram.sendAudio(GroupsReply.media, z.ctx.message.audio.file_id).then(data => {             
        z.ctx.telegram.sendMessage(GroupsReply.media, `${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] }, reply_to_message_id: data.message_id }).catch(e => { z.errorLog(e) })           
      }).catch(e => z.errorLog(e));
    break
    case 'document': 
      z.ctx.telegram.sendDocument(Teman.id, z.ctx.message.document.file_id).catch(e => z.errorLog(e));     
      z.ctx.telegram.sendDocument(GroupsReply.media, z.ctx.message.document.file_id).then(data => {             
        z.ctx.telegram.sendMessage(GroupsReply.media, `${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] }, reply_to_message_id: data.message_id }).catch(e => { z.errorLog(e) })           
      }).catch(e => z.errorLog(e));
    break
    case 'video': 
      z.ctx.telegram.sendVideo(Teman.id, z.ctx.message.video.file_id).catch(e => z.errorLog(e));     
      z.ctx.telegram.sendVideo(GroupsReply.media, z.ctx.message.video.file_id).then(data => {             
        z.ctx.telegram.sendMessage(GroupsReply.media, `${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] }, reply_to_message_id: data.message_id }).catch(e => { z.errorLog(e) })           
      }).catch(e => z.errorLog(e));
    break
    case 'photo':      
      z.ctx.telegram.sendPhoto(Teman.id, z.ctx.message.photo[0].file_id).catch(e => z.errorLog(e));     
      z.ctx.telegram.sendPhoto(GroupsReply.media, z.ctx.message.photo[0].file_id).then(data => {             
        z.ctx.telegram.sendMessage(GroupsReply.media, `${genderEmote} - ${z.from} - @${z.userName}`, { reply_markup: { inline_keyboard: [ [
          { text: 'Banned', callback_data: `shoot#${z.from}#${z.setting.idAdmin}` }
        ] ] }, reply_to_message_id: data.message_id }).catch(e => { z.errorLog(e) })           
      }).catch(e => z.errorLog(e));
    break    
  }
  } catch(e){
    z.errorLog(e);
  }
  
}