const discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`:pleux_no: | You don't have **BAN Members** permission to use this command!!!`);
      return message.lineReply(embed)
       };
     const user = message.mentions.users.first()

const blackembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("Please mentions a user to whitelist!")
if(!user) return message.channel.send(blackembed)
const Blacklisted = db.fetch(`blacklistedUsers_${user.id}`)

const readyembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("This user is already whitelist")
if(!Blacklisted == true) return message.channel.send(readyembed)

const addembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription(`Successfuly remove ${user.username} from the blacklisted users`)
message.channel.send(addembed)

db.set(`blacklistedUsers_${user.id}`, false)

     
   }
exports.info = {
  name: "whitelist",
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