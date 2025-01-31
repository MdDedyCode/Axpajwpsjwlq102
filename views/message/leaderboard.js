module.exports = async (z) => {
  try {
    z.reply(1, { text: `Leaderboard
> /topmedali : *Medali paling banyak*
> /topinvite : *Mengundang teman terbanyak*
> /toplike : *Paling disukai teman*
> /topdislike : *Paling tidak disukai teman*`, parse: true, mark: true });       
  } catch(e) {
    z.errorLog(e);
  }
}

