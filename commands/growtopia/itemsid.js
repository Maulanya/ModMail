const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async (bot, message, args) => {
   
	let itemsid = new Discord.MessageEmbed()
        .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/993729379614076931/fd3ae5f5098a56547207cbf7d9dc240f.webp?size=1024.png")
        .setTitle("Items ID List:")
  .addField("<:bgl:994042338538168370> Blue Gems Lock",`ID: 06854`)
  .addField("<:dl:994042840143380581> Diamond Lock",`ID: 00972`)
  .addField("<:wl:994043081512996934> World Lock",`ID: 00754`)
  .addField("<:megaphone:994081475999846510> MegaPhone",`ID: 00652`)
  .addField("<:wolf_spirit:994899537804140575> Wolf Spirit",`ID: 75284`)
     	.addField("<:golden_pickaxe:994469787122016276> Golden Pickaxe",`ID: 76974`)
    .addField(`<:TreasureHoard:998877872343224340> Golden Treasure Hoard (86462)`)
  .setFooter(`Trash some item by type ${bot.config.prefix}trash <itemid>`)
   .setTimestamp();
		message.lineReplyNoMention(itemsid)

}

 exports.info = {
  name: "itemsid",
  aliases: ["itemid"],
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