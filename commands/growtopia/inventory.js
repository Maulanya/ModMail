const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
 

  let user = message.author;
  if(user = message.mentions.members.first()) return message.channel.send(`you can not see the Inventory of the ${message.mentions.members.first()}`)
    

  let bgl = db.fetch(`bgl_${message.author.id}`)
   if (bgl === null) bgl = 0;
  
  let dl = db.fetch(`dl_${message.author.id}`)
   if (dl === null) dl = 0;
  
  let wl = db.fetch(`wl_${message.author.id}`)
   if (wl === null) wl = 0;
  
  let gtoken = db.fetch(`gtoken_${message.author.id}`)
   if (gtoken === null) gtoken = 0;
  
  let xenocry = db.fetch(`xenocry_${message.author.id}`)
   if (xenocry === null) xenocry = 0;
  
   let mg = db.fetch(`mg_${message.author.id}`)
   if (mg === null) mg = 0;
  
  let gpickaxe = db.fetch(`goldenpc_${message.author.id}`)
   if (gpickaxe === null) { gpickaxe = 0};
  if(gpickaxe === true) { gpickaxe = 1}
  
   let wolfSp = db.fetch(`wolfspirit_${message.author.id}`)
   if (wolfSp === null) { wolfSp = 0};
  if(wolfSp === true) { wolfSp = 1}
  
   let treasure = db.fetch(`gtreasure_${message.author.id}`)
   if (treasure === null) treasure = 0;
  
  
 if (args[0] === "2") {
     let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }), true)
  .setTitle(`**${message.author.tag}'s Inventory**`)
     .addField(`<:xenonite:997327705680904232> Xenonite Crystal:`, xenocry)
      .addField(`<:megaphone:994081475999846510> MegaPhone:`, mg)
  .addField(`<:golden_pickaxe:994469787122016276> Golden Pickaxe:`, gpickaxe)
     .addField(`<:wolf_spirit:994899537804140575> Wold Spirit:`, wolfSp)
     .addField(`<:TreasureHoard:998877872343224340> Golden Treasure Hoard:`, treasure)
     .setFooter(`Inventory (2/2), type ${bot.config.prefix}inv 3-5`)
  .setTimestamp();
   message.lineReplyNoMention(moneyEmbed2)
} else {
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }), true)
  .setTitle(`**${message.author.tag}'s Inventory**`)
  .addField(`<:bgl:994042338538168370> Blue Gems Lock:`, bgl)
  .addField(`<:dl:994042840143380581> Diamond Lock:`, dl)
  .addField(`<:wl:994043081512996934> World Lock:`, wl)
  .addField(`<:growtoken:997017160960442398> Growtoken:`, gtoken)
  .setFooter(`Inventory (1/2), type ${bot.config.prefix}inv 2-5`)
  .setTimestamp();
  message.lineReplyNoMention(moneyEmbed)
}
}
  exports.info = {
  name: "inventory",
  aliases: ["inv"],
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