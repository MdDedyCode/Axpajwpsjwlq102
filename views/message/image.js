module.exports = async (z) => {
  try {
    if (!z.query) return z.reply(1, { text: 'Kamu mau cari image apa?\n> Contoh : /image *Jokowi*', mark: true, parse: true });  
    if (!z.query.length > 50) return z.reply(1, { text: 'Query image kebanyakan', mark: true });  
    
    const fetch = require('node-fetch');
      
    z.reply(1, { text: `Loading...`, mark: true });
    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=/search/pins/?q=${z.query}&data={"options":{"isPrefetch":false,"query":"${z.query}","scope":"pins","no_fetch_context_on_resource":false},"context":{}}&_=1619980301559`).then(res => {
      res.json().then(json => {
        let data = json?.resource_response.data?.results;             
        if (data.length == 0) return z.reply(1, { text: `Query yang kamu masukkan tidak dapat kami temukan`, mark: true });
        z.ctx.replyWithPhoto({ url: data[~~(Math.random() * (data.length))].images.orig.url }, { caption: `Selesai`, reply_to_message_id: z.ctx.message.message_id  }).catch(e => { z.ctx.reply("Query yang kamu masukkan tidak dapat kami temukan!") });                                                 
      });
    });
  } catch(e) {
    z.errorLog(e);
  }
}