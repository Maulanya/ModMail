const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {
  const Supporter = db.fetch(`uSup_${message.author.id}`)

  if (Supporter === true) {
    let user = message.author;

    let timeout = 86400000;//86400000
    let amount = 600;//200

    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));

      let timeEmbed = new Discord.MessageEmbed()
        .setColor("FF0000")
        .setDescription(`<:pleux_no:887553189883281438> | You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:gems:994042284553277470> You've collected your daily reward of ${amount} coins`);
      message.channel.send(moneyEmbed)
      db.add(`gems_${message.author.id}`, amount)
      db.set(`daily_${message.author.id}`, Date.now())

    }
  } else {
    message.channel.send({
      embed: {
        color: 16734039,
        description: "You Not a Suppoter"
      }
    })
  }
}

exports.info = {
  name: "sdaily",
  aliases: [],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
}