const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require('discord.js')
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const sendError =require("util")
exports.run = async (bot, message, args) => {
   
    let trash= args[0]

  
     if(args[0] === "76974") {
        let goldenpck = db.fetch(`goldenpc_${message.author.id}`)
  if (goldenpck == null);
  const noitem = new Discord.MessageEmbed()
    .setTitle(`<:growmoji1:994490548385742848> Ohw no`)
   .setDescription(`You dont have that item`)
     .setColor(`#ff0000`)
    .setTimestamp();
    if(!goldenpck) return message.channel.send(noitem)
       
     bot.db.delete(`goldenpc_${message.author.id}`)
  return message.lineReplyNoMention(     
        new Discord.MessageEmbed()
    .setTitle(`:recycle: You just trash your Golden Pickaxe`)
        .setDescription(`Now you don't have effect from Golden Pickaxe`)
    .setTimestamp()
        .setColor("#00ff11")   
      )
       return;
     } else if(args[0] === "75284") {
    
  return message.lineReplyNoMention(     
        new Discord.MessageEmbed()
    .setTitle(`<:growmojisigh:994613015196483684> Bruhh...`)
        .setDescription(`You can't trash that item!`)
    .setTimestamp()
        .setColor("#ff0000")   
      ) 
       return;
     } else {
   const nowear = new Discord.MessageEmbed()
    .setTitle(`<:growmojisigh:994613015196483684> Hmmm what items do you want to Trash?`)
    .addField(`You have to enter the item id you want to trash`,`see items id Type \`\`${bot.config.prefix}itemsid\`\``)
     .setColor(`#ff0000`)
    .setTimestamp();
    return message.channel.send(nowear)
     }
}
exports.info = {
name: 'trash',
  aliases:[],
  description: "sets the welcome message",
  usage: "<channel_id/channel_tag>"
}
exports.conf={
  cooldown: 0,
  dm: "no"
}