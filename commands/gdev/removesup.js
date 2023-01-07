const discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
    const Dev = db.fetch(`dev_${message.author.id}`)
 
  if(Dev === true || message.author.id == "753298841712721961") { 
     const user = message.mentions.users.first()

const blackembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("Please mentions a user to remove Suppoter!")
if(!user) return message.channel.send(blackembed)
const Supporterd = db.fetch(`uSup_${user.id}`)

const readyembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("This user is already removed")
if(!Supporterd == true) return message.channel.send(readyembed)

const addembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription(`Successfuly remove ${user.username} from the Suppoter users`)
message.channel.send(addembed)

db.set(`uSup_${user.id}`, false)
db.delete(`uSupb_${user.id}`)

     
   } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
};

exports.info = {
  name: "removesup",
  aliases: ["removesuppoter"],
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