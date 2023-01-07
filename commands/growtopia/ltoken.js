const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (bot, message, args) => {
  let user = message.author;
  let amount = args[1]
  let userpremiumdata = {
    userid: message.guild.id,
    premiumer: message.author.id,
    premiumcode: "yes"
  }

  let gtoken = db.fetch(`gtoken_${message.author.id}`);
  let xenocry = db.fetch(`xenocry_${message.author.id}`);

  if (args[0] == '97365') {

    const embedM = new Discord.MessageEmbed()
      .setDescription("You only can buy 1 Item")
      .setColor("#ff0000")
    if (amount >= 2) return message.channel.send(embedM)

    let Embed2 = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setTitle(`<:growmoji1:994490548385742848> Owh no...`)
      .setDescription(`You need **25 Growtoken** to purchase some **Xenonite Crystal**`)
      .setTimestamp();

    if (gtoken < 25) return message.channel.send(Embed2)

    db.fetch(`xenocry_${message.author.id}`)
    db.set(`xenocry_${message.author.id}`, true)

    if (xenocry === true) {
      let embedmax = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`<:growmoji1:994490548385742848> Owh no...`)
        .setDescription(`you only can have **1 Xenonite Crystal**`)
        .setTimestamp();
      return message.channel.send(embedmax)
    } else {

      let Embed3 = new Discord.MessageEmbed()
        .setColor("#00ff11")
        .setTitle(`<:xenonite:997327705680904232> Purchased 1 **Xenonite Crystal**`)
        .setDescription(`Success Purchase Xenonite Crystal For 25 Growtoken.\n*This item is currently used.*`)
        .setTimestamp();
      db.subtract(`gtoken_${message.author.id}`, 25)
      message.channel.send(Embed3)
    }

  }
  else if (args[0] == 'list') {
    let list = new Discord.MessageEmbed()
      .setColor("#34c6eb")
      .setThumbnail("https://cdn.discordapp.com/avatars/993729379614076931/fd3ae5f5098a56547207cbf7d9dc240f.webp?size=1024.png")
      .setTitle("List of all items you have to buy:")
      .addField("<:xenonite:997327705680904232> Xenonite Crystal (97365)", "**Cost:** 25 Growtoken\n*Description*: (Permanent) This item will increase weekly to 2x")
      /*  .addField("7 Days Premium", "Cost: 3000 coins (not available)")
          .addField("15 Days Premium", "Cost: 6500 coins (not available)")
            .addField("30 Days Premium", "Cost: 10,000 coins (not available)") */
      .addField(`How To buy?`, `\`\`${bot.config.prefix}lbuy 97365\`\`if you wan to buy some items like Crystal`)
      .setTimestamp();
    message.channel.send(list)





  } else {
    let embed3 = new Discord.MessageEmbed()
      .setColor("FF5757")
      .setTitle("<:growmojisigh:994613015196483684> Bruhh")
      .addField(`Enter an item to buy\n`, `\`\`${bot.config.prefix}ltoken list\`\`to show all things`)
      .setTimestamp();
    message.channel.send(embed3)
  }
}
exports.info = {
  name: "ltoken",
  aliases: ["lbuy"],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf = {
  cooldown: 0,
  dm: "yes"
}