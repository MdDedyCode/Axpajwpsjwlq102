module.exports = async (z) => {
  try {
    if (!z.query) return z.reply(1, { text: 'Berikan text\n> Contoh : /tts *Apa kabar*', mark: true, parse: true });  
    if (!z.query.length > 50) return z.reply(1, { text: 'Query text kebanyakan', mark: true });  
    
    const fs = require('fs');
    const fetch = require('node-fetch');
    const googleTTS = require('google-tts-api');
        
    z.reply(1, { text: `Loading...`, mark: true });

    const url = googleTTS.getAudioUrl(z.query, {
      lang: 'id',
      slow: false,
      host: 'https://translate.google.com',
    });

    const fileBuffer = await fetch(url).then(res => res.buffer())

    z.ctx.replyWithAudio({ source: fileBuffer }).catch(e => { z.errorLog(e) });        

  } catch(e) {
    z.errorLog(e);
  }
}