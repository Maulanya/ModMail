const { MessageEmbed } = require('discord.js');

const db = require("quick.db");
exports.run = async (bot, message, args) => {
  let bal = db.fetch(`wl_${message.author.id}`)
const amountToBet = parseInt(args[0]);
   
  const embed02 = new MessageEmbed()
  .setColor(`#ff0000`)
  .setTitle(`<:growmojisigh:994613015196483684> You must enter the amount`)
  .setDescription(`Please specify some amount to bet or all\n\n**example:** \n${bot.config.prefix}bet 10`)
  .setTimestamp()
    if(!args[0]) return message.reply(embed02);
    const embed22 = new MessageEmbed()
      .setColor("#00ff11")
      .setTitle(`<:growmojisigh:994613015196483684> Bruhh`)
      .setDescription(`You poor you can only bet in numbers | example: ${bot.config.prefix}bet 10`)
    .setTimestamp()
   if(isNaN(args[0])) return message.reply(embed22)
    
     const embed21 = new MessageEmbed()
      .setColor("#00ff11")
      .setTitle(`<:haha:994833410117877780> Hahaha...`)
      .setDescription(`Poor guy spoted! you dont have enough World Lock to bet`)
 .setTimestamp()
    if(bal < amountToBet) return message.reply(embed21);
   
  if (bal === null)
  { bal = 0;}
    
      const botrun = Math.floor(Math.random() * 36) + 1
      const run = Math.floor(Math.random() * 36) + 2
     
   
    const winAmount = amountToBet * 2;
    if(botrun <= run) {
      const embed20 = new MessageEmbed()
      .setColor("#00ff11")
      .setTitle(`<:yeey:994831617472340018> You won ${winAmount} World Lock <:wl:994043081512996934>`)
      .setDescription(`**${bot.user.username} :** ${botrun}\n**${message.author.username} :** ${run}`)
      .setTimestamp()
      message.lineReply(embed20);
       db.add(`wl_${message.author.id}`, winAmount)
      
    } else {
        const embed25 = new MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`<:sad:994832472007245955> Sad You lost ${amountToBet} World Lock <:wl:994043081512996934>`)
        .setDescription(`better luck next time\n\n**${bot.user.username} :** ${botrun}\n**${message.author.username} :** ${run}`)
        .setTimestamp()
        message.lineReply(embed25);
      db.subtract(`wl_${message.author.id}`, amountToBet);
      
    } 
    
    }

exports.info = {
  name: "bet",
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