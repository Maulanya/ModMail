const lineReplyNoMention = require("discord-reply");
const lineReply = require("discord-reply");
const Discord = require("discord.js");
const db = require("quick.db")
exports.run = (bot, message, args) => {
  const Supporter = db.fetch(`uSup_${message.author.id}`)

  if (Supporter === true) {
    const embed = new Discord.MessageEmbed()
      .setColor("#00fcf4")
      .setTitle(`${bot.user.username} Suppoter Help`)
      .setThumbnail(`${bot.user.displayAvatarURL()}`)
      .setDescription(
        `project control`
      )
      .addField(
        "**List**",
        "`sdaily`, `sweekly`"
      )
      .setFooter(
        `•...`
      );

    message.lineReplyNoMention(embed);
  } else {
    const permEmbed = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setDescription("This command only for Suppoter")
    message.channel.send(permEmbed)
  }
};

exports.info = {
  name: "shelp",
  aliases: [],
  usage: "",
  description: "show the bot command update, fix"
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
} 
