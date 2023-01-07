const Discord = require('discord.js');
const disbut = require("discord-buttons");

exports.run = (bot, message, args) => {
        
   let embed = new Discord.MessageEmbed()
        .setTitle("Bot Information")
    .setColor("#00fcf4")
    .setThumbnail(`${bot.user.displayAvatarURL()}`)
    .setDescription(
      `I'm a cool Discord Bot, ain't I? Use the buttons below to invite me to your server!`
    )
  .setFooter(`Stay Safe 👋`);
   
  let button = new disbut.MessageButton()
  .setLabel("Invite!")
  .setStyle("url")
.setURL(`https://discord.com/oauth2/authorize?client_id=993729379614076931&scope=bot&permissions=117760`)
  
 message.channel.send(embed, button);


    };
exports.info = {
  name: 'invite',
  aliases: [],
  usage: "",
  description: "gives an invite link of this bot"
}
//checked
exports.conf={
  cooldown: 0,
  dm: "yes"
}