module.exports.cekTime = (time) => {
  try {
    const givenTime = new Date(time);
    const currentTime = new Date();

    if (givenTime < currentTime) {
      return false
    } else {
      const diff = givenTime - currentTime;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((diff % (1000 * 60)) / 1000);

      if (!second) return false;
      
      return `${days} Hari, ${hours} Jam, ${minutes} Menit`;
    }
  } catch(e) {
    console.log(e);
  }
}

module.exports.addTime = (time, days) => {
  try {
    const currentTime = time;
    const futureTime = new Date(currentTime.getTime() + days * 24 * 60 * 60 * 1000);
    return futureTime;
  } catch(e) {
    console.log(e);
  }
}

module.exports.addTimeS = (time, s) => {
  try {
    const currentTime = time;
    const futureTime = new Date(currentTime.getTime() + s * 1000);
    return futureTime;
  } catch(e) {
    console.log(e);
  }
}
