const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async (bot, message, args) => {
  let user = message.author;

  let userpremiumdata = {
    userid: message.guild.id,
    premiumer: message.author.id,
    premiumcode: "yes"
  }
  let alreadypremium = new Discord.MessageEmbed()
    .setTitle(`You're Already an premium user`)
  let checking = db.get(`premium`)
  let author = db.fetch(`gems_${message.author.id}`)
  let wl = db.fetch(`wl_${message.author.id}`)
  let dl = db.fetch(`dl_${message.author.id}`)
  let bgl = db.fetch(`bgl_${message.author.id}`)
  let amount = args[1]

  let Embed = new Discord.MessageEmbed()
    .setColor("#FF5757")
    .setDescription(`<:growmoji1:994490548385742848> You need **100 Diamond Lock** to Convert it to **Blue Gems Lock**`);

  if (args[0] == '12345') {

    const embedA = new Discord.MessageEmbed()
      .setDescription("You must enter the amount of item to buy!")
      .setColor("#ff0000")
    const embedM = new Discord.MessageEmbed()
      .setDescription("You cant buy amount this much more")
      .setColor("#FF5757")
    if (isNaN(amount)) return message.channel.send(embedA)
    if (amount >= 201) return message.channel.send(embedM)

    if (dl < 100) return message.channel.send(Embed)

    db.fetch(`bgl_${message.author.id}`);
    db.add(`bgl_${message.author.id}`, amount)

    let Embed2 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<:pleux_success:887552715247452210> | Convert **Diamond Lock** to **${amount} Blue Gems Lock**`);

    db.subtract(`dl_${message.author.id}`, 100 * amount)
    message.channel.send(Embed2)

  } else if (args[0] == '00000') {

    const embedA = new Discord.MessageEmbed()
      .setDescription("You must enter the amount of item to buy!")
      .setColor("#ff0000")
    const embedM = new Discord.MessageEmbed()
      .setDescription("You cant buy amount this much more")
      .setColor("#FF5757")
    if (isNaN(amount)) return message.channel.send(embedA)
    if (amount >= 201) return message.channel.send(embedM)

    let Embed2 = new Discord.MessageEmbed()
      .setColor("FF5757")
      .setDescription(`<:growmoji1:994490548385742848> You need **100 World Lock** to Convert it to **Diamond Lock**`);

    if (wl < 100) return message.channel.send(Embed2)

    db.fetch(`dl_${message.author.id}`)
    db.add(`dl_${message.author.id}`, amount)

    let Embed3 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<:pleux_success:887552715247452210> | Convert **World Lock** to **${amount} Diamond Lock**`);
    db.subtract(`wl_${message.author.id}`, 100 * amount)
    message.channel.send(Embed3)

  } else if (args[0] == '63636') {
    const embedM = new Discord.MessageEmbed()
      .setDescription("You only can Convert **1 Blue Gems Lock**")
      .setColor("#FF5757")
    if (amount >= 2) return message.channel.send(embedM)
    let Embed2 = new Discord.MessageEmbed()
      .setColor("FF5757")
      .setDescription(`<:growmoji1:994490548385742848> You need **1 Blue Gems Lock** to Convert it to **Diamond Lock**`);

    if (bgl < 1) return message.channel.send(Embed2)

    db.fetch(`dl_${message.author.id}`)
    db.add(`dl_${message.author.id}`, 100)

    let Embed3 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<:pleux_success:887552715247452210> | Convert **1 Blue Gems Lock** to **100 Diamond Lock**`);
    db.subtract(`bgl_${message.author.id}`, 1)
    message.channel.send(Embed3)

  } else if (args[0] == '54321') {
    const embedM = new Discord.MessageEmbed()
      .setDescription("You only can Convert **1 Diamond Lock**")
      .setColor("#FF5757")
    if (amount >= 2) return message.channel.send(embedM)
    let Embed2 = new Discord.MessageEmbed()
      .setColor("FF5757")
      .setDescription(`<:growmoji1:994490548385742848> You need **1 Diamond Lock** to Convert it to **World Lock**`);

    if (dl < 1) return message.channel.send(Embed2)

    db.fetch(`wl_${message.author.id}`)
    db.add(`wl_${message.author.id}`, 200)

    let Embed3 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<:pleux_success:887552715247452210> | Convert **1 Diamond Lock** to **100 World Lock**`);
    db.subtract(`dl_${message.author.id}`, 1)
    message.channel.send(Embed3)

  }
  else if (args[0] == 'number' || args[0] == 'items') {
    let numbers = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail("https://cdn.discordapp.com/avatars/993729379614076931/fd3ae5f5098a56547207cbf7d9dc240f.webp?size=1024.png")
      .setTitle("List Of All Items you can convert:")
      .addField("<:dl:994042840143380581> Diamond Lock to <:bgl:994042338538168370> Blue Gems Lock", "Number: 12345")
      .addField("<:bgl:994042338538168370> Blue Gems Lock to <:dl:994042840143380581> Diamond Lock", "Number: 63636")
      .addField("<:wl:994043081512996934> World Lock to <:dl:994042840143380581> Diamond Lock", "Number: 00000")
      .addField("<:dl:994042840143380581> Diamond Lock to <:wl:994043081512996934> World Lock", "Number: 54321")
      .addField(`Example: if you want to convert like world lock to diamond lock\n`, `\`\`${bot.config.prefix}phone 00000\`\`to show all things`)
      // .setFooter(`if you want to convert like world lock to diamond lock, type ${bot.config.prefix}phone 00000`)
      .setTimestamp();
    message.channel.send(numbers)




  } else {
    let embed3 = new Discord.MessageEmbed()
      .setColor("FF5757")
      // .setDescription(`Enter number to get item, type ${bot.config.prefix}phone number`)
      .addField(`Enter number to get item\n`, `\`\`${bot.config.prefix}phone number\`\`to show all things`)
      .setTimestamp();
    message.channel.send(embed3)
  }

}

exports.info = {
  name: "phone",
  aliases: [],
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