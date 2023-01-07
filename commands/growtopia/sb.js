const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const discord = require("discord.js")
exports.run = async (bot, message, args) => {
 if(db.fetch(`mg_${message.author.id}`))  {
   
    if (!args[0]) {
          const embed = new discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}sb**`)
         .setDescription(`where's the message?`
        );
  return message.lineReply(embed)
 }
   const embedSB = new discord.MessageEmbed()
   .setTitle("<:megaphone:994081475999846510> Super Broadcast")
   .setColor("#34c6eb")
   .setDescription(`From: ${message.author.tag}`)
   .addField(`Message:`, args.slice(0).join(" "))
   message.guild.members.cache.forEach(member => { // Looping through each member of the guild.
    // Trying to send a message to the member.
    // This method might fail because of the member's privacy settings, so we're using .catch
    member.send(embedSB).catch(e => console.error(`Couldn't DM member ${member.user.tag}`));
});
db.subtract(`mg_${message.author.id}`, 1)
   message.channel.send(`${message.author.tag} Created new Super Broadcast`)
 } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
      .setDescription("You don't have MegaPhone to SB")
     message.channel.send(permEmbed)
	}
 }
 exports.info = {
  name: "sb",
  aliases: [],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 50,
  dm: "yes"
};
