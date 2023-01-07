const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

exports.run = async (bot, message, args) => {
      //--------------------------------------S T A R T---------------------------------------
       const color = "#34c6eb";
  let linkSupport = `https://discord.gg/xvcwjHsp4w`
  let linkInvite = `https://discord.com/oauth2/authorize?client_id=993729379614076931&scope=bot&permissions=117760`
        const embed = new Discord.MessageEmbed()
       //  .setThumbnail("https://cdn.discordapp.com/attachments/943098651285262366/989710981355667566/icon.png")
    .setColor(color)
   .setAuthor(bot.user.username + ` Command's List`, bot.user.displayAvatarURL())
        .setThumbnail("https://cdn.discordapp.com/avatars/993729379614076931/fd3ae5f5098a56547207cbf7d9dc240f.webp?size=1024.png")
    //.setDescription(`my prefix on this server is \`${bot.config.prefix}\``)
        .addField("SOME HELPFUL LINKS-", `[Invite me]` + `(${linkInvite})` + `\n[Support server]` + `(${linkSupport})` + `\nmy prefix on this server is \`${bot.config.prefix}\``)
     .addField(
      "**Economy Commands**",
      " `roulette` ,`beg`, `bet`"
    )
        .addField(
      "**Shop Commands**",
      "`store`, `phone`, `ltoken`"
    )
         .addField(
      "**User Commands**",
           "`inventory (1/2)`, `pay`, `profile`"
    )
         .addField(
      "**Level Commands & LeaderBoard**",
     "`rank`, `leaderboard`"
    )
        .addField(
      "**Bank Commands**",
     "`balance`, `deposit`, `withdraw`"
    )
        .addField(
      "**Other Commands**",
     "`daily`, `weekly`, `punch`, `slots`, `itemid`, `trash`, `give`, `news`"
    )
        .addField("Growtoken Command",
                 "`ltoken`, `findwods` (you can get growtoken from this command and answear some question, this command only work in server support)")
          .addField("**Level Setting Message**",
                   "`levelmessage (lvlmsg)`")
    .setFooter(`• please report commands that error, type (${bot.config.prefix}report), have suggestions for developers?, use (${bot.config.prefix}suggestion)`)
   .setTimestamp();
     message.channel.send(embed)
  };
  
exports.info = {
  name: 'help',
usage: "",
  description: "",
  enabled: true,
  guildOnly: false,
aliases: [], 
  permLevel: 0
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}
  