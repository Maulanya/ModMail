const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const discord = require("discord.js")
exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`:pleux_no: | You don't have **BAN Members** permission to use this command!!!`);
      return message.lineReply(embed)
       };
   
   
 if (!args[0]) {
          const embed = new discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}dm**`)
         .setDescription(`where's the message?`
        );
  return message.lineReply(embed)
 }
    
let user = bot.users.cache.get(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));
   
if (!user) {
          const embed = new discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}dm**`)
         .setDescription(`mentions user or user id`
        );
  return message.lineReply(embed)
      }
    if (
        message.attachments.first()
          ? message.attachments.first().proxyURL
          : null
      ) {
     user.send(
          message.attachments.first()
            ? message.attachments.first().proxyURL
            : null
        )
     }
user.send(args.slice(1).join(" ")).catch(e => message.channel.send(`Couldn't DM member ${user}`));
return message.channel.send(`send a message to ${user}`)
 }
 exports.info = {
  name: "dm",
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
