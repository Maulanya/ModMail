const lineReplyNoMention = require("discord-reply");
const lineReply = require("discord-reply");
const Discord = require("discord.js");
const db = require("quick.db")
exports.run = (bot, message, args) => {
  const Dev = db.fetch(`dev_${message.author.id}`)
 if (Dev === true || message.author.id == '753298841712721961' ){
  const embed = new Discord.MessageEmbed()
    .setColor("#00fcf4")
    .setTitle(`${bot.user.username} Developer Help`)
    .setThumbnail(`${bot.user.displayAvatarURL()}`)
    .setDescription(
      `project control`
    )
    .addField(
      "**List**",
      "`addgems`, `addwl`, `addgtoken`, `givesup (give suppoter)`, `removesup (remove suppoter)`"
    )
    .setFooter(
      `•...`
    );

  message.lineReplyNoMention(embed);
} else {
     const permEmbed = new Discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("This command only for Developer")
     message.channel.send(permEmbed)
	}
  };

exports.info = {
  name: "dhelp",
  aliases: [],
  usage: "",
  description: "show the bot command update, fix"
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
}; 
