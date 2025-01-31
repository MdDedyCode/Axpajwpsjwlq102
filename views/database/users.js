const mongoose = require('mongoose');

const SecretSchema = new mongoose.Schema({  
  id: String,
  name: String,
  gender: String,
  umur: Number,
  bintang: Number, 
  medali: Number,
  like: Number,
  dislike: Number,    
  cmd: Number,  
  rating: Number,    
  bergabung: String,  
  invite: [String],
  status: {
    pin: String,
    banned: String,    
    premium: String
  },
  teman: {
    id: String,
    status: String,
    request: String
  },
  game: {
    play: String,
    playTime: String,
    name: String,
    soal: Number,
    jawaban: String,
    query: String,
    pilihan: String    
  }
});

module.exports = mongoose.model('Secret2', SecretSchema);