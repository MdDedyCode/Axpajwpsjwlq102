const mongoose = require('mongoose');

const SecretSchema = new mongoose.Schema({  
  id: String,
  name: String,
  gender: String,
  umur: Number,
  status: {
    pin: String,
    banned: String,
    banned_time: String,    
    premium: String,
    premium_time: String,
  },
  teman: {
    id: String,
    status: String,
    request: String
  },    
  bintang: Number, 
  medali: Number,
  like: Number,
  dislike: Number,    
  cmd: Number,  
  rating: Number,    
  bergabung: String,  
  invite: [String],
  game: {
    play: String,
    play_time: String,
    name: String,
    soal: Number,
    jawaban: String,
    query: String,
    pilihan: String    
  }
});

module.exports = mongoose.model('Secret', SecretSchema);