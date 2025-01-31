module.exports = async (z) => {
  try {
    let a = await fetch(`https://mdsay.xyz/api/v1?key=md&api=${z.command.substring(1)}`);
    let b = await a.json();
    
    z.reply(1, { text: b.result, mark: true });       
  } catch(e) {
    z.errorLog(e);
  }
}
