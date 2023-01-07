const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
 exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() 

  let member = db.fetch(`gems_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setTitle(`<:growmojisigh:994613015196483684> To who do you want to pay?`)
  .setDescription(`Mention someone to pay`)
  .setTImestamp()
   

  if (!user) {
      return message.lineReply(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setTitle(`<:growmojisigh:994613015196483684> How much do you want to pay?`)
  .setDescription(`Specify an amount to pay`)
   .setTimestamp()
  
  if (!args[1]) {
      return message.lineReply(embed2)
  }

    if (isNaN(args[1])) return message.lineReply({embed: {
                    color: "#ff0000",
      setTitle: "<:growmoji1:994490548385742848> You must enter the amount",
                    description: "enter the amount of gems to pay!"
      .setTimestamp()
                }})

  let embed3 = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setTItle(`<:growmojisigh:994613015196483684> Bruhh`)
  .setDescription(`You can't pay someone negative gems`)
  .setTImestamp()

  if (message.content.includes('-')) { 
      return message.lineReply(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setTitle(`<:growmoji1:994490548385742848> Ohw sad`)
  .setDescription(`You don't have that much gems`)
.setTimestamp()
  if (member < args[1]) {
      return message.lineReply(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#00ff11")
  .setDescription(`:money_with_wings: You have payed ${user.user.username} ${args[1]} <:gems:994042284553277470>`)
  .setTImestamp()

  message.lineReply(embed5)
  db.add(`gems_${message.author.id}`, args[1])
  db.subtract(`gems_${message.author.id}`, args[1])

}

  exports.info = {
  name: "pay",
  aliases: [],
  usage: "",
  description: ""
};
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}