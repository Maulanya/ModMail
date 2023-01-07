const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {

  let user = message.author;

  let member = db.fetch(`gems_${message.author.id}`)
  let member2 = db.fetch(`bank_${message.author.id}`)
	
  if (args[0] == 'all' || args[0] == 'max') {
    let gems = await db.fetch(`gems_${message.author.id}`)
    let bank = await db.fetch(`bank_${message.author.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("<:pleux_no:887553189883281438>  | You don't have any money to deposit")

    if(gems === 0) return message.lineReply(embedbank)

    db.add(`bank_${message.author.id}`, gems)
    db.subtract(`gems_${message.author.id}`, gems)
    let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_success:887552715247452210> | You have deposited all your gems into your bank`);
  message.lineReply(embed5)
  
  } else {
  if(isNaN(args[0])) {
    return message.lineReply({embed: {
     color: 16734039,
     description: `<:pleux_no:887553189883281438> | You must provide a number to deposit gems!`
     }})
}
  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_no:887553189883281438> | Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.lineReply(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_no:887553189883281438> | You can't deposit negative gems`);

  if (message.content.includes('-')) { 
      return message.lineReply(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_no:887553189883281438> | You don't have that much gems`);

  if (member < args[0]) {
      return message.lineReply(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_success:887552715247452210> | You have deposited ${args[0]} coins into your bank`);

  message.lineReply(embed5)
  db.add(`bank_${message.author.id}`, args[0])
  db.subtract(`gems_${message.author.id}`, args[0])
  }
}

  exports.info = {
  name: "deposit",
  aliases: ["depo"],
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