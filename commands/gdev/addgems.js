const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (bot, message, args) => {
 
     

 const Dev = db.fetch(`dev_${message.author.id}`)
 
  if(Dev === true || message.author.id === '753298841712721961') { 
  
 let userm = message.mentions.members.first()|| bot.users.cache.get(args[0]);
if (!userm) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must mention someone to add gems!"
                }})
    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must enter the amount of gems to add!"
                }})
                if(args[0] >= 20000)
                {
   message.reply("You cant add amount this much more")
   return;
                }

    db.add(`gems_${userm.user.id}`, args[1])
    let bal = await db.fetch(`gems_${userm.user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<:pleux_success:887552715247452210> Added ${args[1]} Gems\n\nGems: ${bal}`);
    message.channel.send(moneyEmbed)
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "You don't have premission add Gems!"
                }})
	}
}
exports.info = {
  name: "addgems",
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