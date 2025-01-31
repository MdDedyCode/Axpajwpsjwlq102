module.exports.medaliKuis = (a) => {
  var medali = 0;
  if (a == "artikata"){
    medali = Math.floor(Math.random() * (17 - 9 + 1) + 9);
  }
  if (a == "asahotak"){
    medali = Math.floor(Math.random() * (30 - 15 + 1) + 15);
  }
  if (a == "matematika"){
    medali = Math.floor(Math.random() * (30 - 7 + 1) + 7);
  }
  if (a == "siapaaku"){
    medali = Math.floor(Math.random() * (25 - 15 + 1) + 15);
  }
  if (a == "tebakbendera"){
    medali = Math.floor(Math.random() * (20 - 12 + 1) + 12);
  }
  if (a == "tebakhewan"){
    medali = Math.floor(Math.random() * (20 - 7 + 1) + 7);
  }
  if (a == "tebakkalimat"){
    medali = Math.floor(Math.random() * (22 - 9 + 1) + 9);
  }
  if (a == "tebakkata"){
    medali = Math.floor(Math.random() * (15 - 5 + 1) + 5);
  }
  if (a == "tebaklirik"){
    medali = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  }
  if (a == "tebaksurah"){
    medali = Math.floor(Math.random() * (26 - 15 + 1) + 15);
  }
  if (a == "tebaktebakan"){
    medali = Math.floor(Math.random() * (25 - 5 + 1) + 5);
  }
  if (a == "tebaklogika"){
    medali = Math.floor(Math.random() * (15 - 10 + 1) + 10);
  }
  if (a == "tebakkuliner"){
    medali = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  }
  if (a == "tebakpulau"){
    medali = Math.floor(Math.random() * (25 - 10 + 1) + 10);
  }
  if (a == "tebakmakanan"){
    medali = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  }
  return medali
}