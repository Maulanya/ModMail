const Discord = require("discord.js")
const ms = require("parse-ms");//parse-ms
const db = require("quick.db");

exports.run = async (bot, message, args) => {
 

  let user = message.author;

  let timeout = 180000;
  let amount = 5;

  let beg = await db.fetch(`beg_${message.author.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(16734039)
    .setTitle(`<:growmojisigh:994613015196483684> Bruhh`)
    .setDescription(`You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s `)
    .setTimestamp()
    message.lineReply(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
    .setTitle(`<:haha:994833410117877780> Haha`)
  .setDescription(`You've begged and received ${amount} Gems | poor guy ewww`)
    .setTimestamp()
  message.lineReplyNoMention(moneyEmbed)
  db.add(`gems_${message.author.id}`, amount)
  db.set(`beg_${message.author.id}`, Date.now())


  }
}
exports.info = {
  name: "beg",
  aliases: [],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}