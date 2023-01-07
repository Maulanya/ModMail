const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {


  let user = message.author;
  if (user = message.mentions.members.first()) return message.channel.send(`you can not see the balance of the ${message.mentions.members.first()}`)


   let gems = db.fetch(`gems_${message.author.id}`)
  if (gems === null) gems = 0;

  let bank = await db.fetch(`bank_${message.author.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`<:gems:994042284553277470> Gems:`, gems)
    .addField(`<:grow_bank:997025049544503296> Deposit:`, bank)
  message.channel.send(moneyEmbed)
}
exports.info = {
  name: "balance",
  aliases: ["bal"],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};