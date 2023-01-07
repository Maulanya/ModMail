const discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
   const Dev = db.fetch(`dev_${message.author.id}`)
 
  if(Dev === true || message.author.id == "753298841712721961") { 
    const user = message.mentions.users.first()
const blackembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("Please mentions a user to blacklist!")
if(!user) return message.channel.send(blackembed)
const Supporterd = db.fetch(`uSup_${user.id}`)

const readyembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("This user is already supporter")
if(!Supporterd == false) return message.channel.send(readyembed)

const addembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription(`Successfuly added ${user.username} to the supporter users`)
message.channel.send(addembed)
    message.channel.send(`<:megaphone:994081475999846510> ${user.username} You got 5 MegaPhone`)
    db.add(`mg_${user.id}`, 5)
 db.set(`uSupb_${user.id}`, true)
db.set(`uSup_${user.id}`, true)

     
   } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
};

exports.info = {
  name: "givesup",
  aliases: ["givesupporter"],
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