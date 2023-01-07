const discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
   if(message.author.id == "753298841712721961"){
     
      let badgedev = db.fetch(`devb_${message.author.id}`)
       if (badgedev === null) badgedev = "None"
        if (badgedev === true) badgedev = "Developer"
     
      let badgesup = db.fetch(`uSupb_${message.author.id}`)
        if (badgesup === true) badgesup = "Suppoter"
   const blackembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("Please mentions a user to give Developer permission!")
   
   const embedp = new discord.MessageEmbed()
    .setColor("#34c6eb")
    .setDescription(
      `<:pleux_no:887553189883281438> | Unable to find this Person!`
    );
     let user = message.member;
     user =
      message.mentions.members.first()
if(!user) return message.channel.send(blackembed)
     
     if(!args[1]) return message.channel.send(`if you want give dev badge type "dev", if you want give supporter type "sup"\nto use command type ${bot.config.prefix}givebadge dev`)
const Dev = db.fetch(`dev_${user.id}`)

const readyembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("This user is already Developer")
if(!Dev == false) return message.channel.send(readyembed)
let name = args[1];
     if(name == 'dev') {
       const addembeddev = new discord.MessageEmbed()
       .setColor("#34c6eb")
.setDescription(`Successfuly added ${user.username} <:developer:994150972563652628> Developer Badge`)
       db.set(`devb_${user.user.id}`, true)
message.channel.send(addembeddev)
}
     if(name == 'sup') {
       const addembedsup = new discord.MessageEmbed()
       .setColor("#34c6eb")
.setDescription(`Successfuly added ${user.username} <:supporter:995141318294646875> Suppoter Badge`)
       db.set(`uSupb_${user.user.id}`, true)
message.channel.send(addembedsup)
}

     
   } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
};

exports.info = {
  name: "givebadge",
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