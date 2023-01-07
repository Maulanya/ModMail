const discord = require('discord.js');
const db = require('quick.db');
const { MessageButton } = require(`discord-buttons`);
exports.run = async (bot, message, args) => {

  const blackembed = new discord.MessageEmbed()
    .setColor("#34c6eb")
    .setDescription("Please mentions a user to give a item!")
    .addField(`Example\n`, `\`\`${bot.config.prefix}give @user [itemid] [itemmax]\`\``)
  // if(!args[1]) return message.channel.send(`imput item id`)
  let itemmax = args[2];
  const embedp = new discord.MessageEmbed()
    .setColor("#34c6eb")
    .setDescription(
      `<:pleux_no:887553189883281438> | Unable to find this Person!`
    );
  let user = message.member;
  user = message.mentions.members.first()



  if (!user) return message.channel.send(blackembed)
  if (user.id === message.author.id) {
    return message.lineReply("<:pleux_no:887553189883281438> | You can not give yourself");
  }




  if (args[1] === "76974") {
    let goldenpck = db.fetch(`goldenpc_${message.author.id}`)
    if (goldenpck == null);
    const noitem = new discord.MessageEmbed()
      .setTitle(`<:growmoji1:994490548385742848> Ohw no`)
      .setDescription(`You dont have that item`)
      .setColor(`#ff0000`)
      .setTimestamp();
    if (!goldenpck) return message.channel.send(noitem)

    bot.db.delete(`goldenpc_${message.author.id}`)
    bot.db.set(`goldenpc_${user.user.id}`, 1)
    /*
       const embed = new discord.MessageEmbed()
       .setTitle(`<:growmojisigh:994613015196483684> Hmmm...`)
       .setColor(`#34c6eb`)
       .setDescription(`Are you sure wan't **Golden Pickaxe** this item to ${user}?`)
       
       const yes_btn = new MessageButton()
.setStyle("green")
.setLabel(`Accept`)
.setID(`yesbtn`)
       
       const no_btn = new MessageButton()
.setStyle("red")
.setLabel("Cancel")
.setID(`nobtn`)
       message.channel.send({
         buttons: [yes_btn, no_btn],
embed: embed

})
       message.channel.send(`${message.author.tag} i have send you dm to confirm your give item`)
*/
    return message.lineReplyNoMention(
      new discord.MessageEmbed()
        .setTitle(`<:yeey:994831617472340018> Yeey...`)
        .setDescription(`<:golden_pickaxe:994469787122016276> ${message.author.tag} just give ${user} **Golden Pickaxe**`)
        .setTimestamp()
        .setColor("#00ff11")
    )
    return;
  } if (args[1] === "00754") {
    let wl = db.fetch(`wl_${message.author.id}`)
    if (wl <= 1);
    const noitem = new discord.MessageEmbed()
      .setTitle(`<:growmoji1:994490548385742848> Ohw no`)
      .setDescription(`You dont have that item`)
      .setColor(`#ff0000`)
      .setTimestamp();
    if (!wl) return message.channel.send(noitem)

    bot.db.subtract(`wl_${message.author.id}`, itemmax)
    bot.db.set(`wl_${user.user.id}`, itemmax)
    return message.lineReplyNoMention(
      new discord.MessageEmbed()
        .setTitle(`<:yeey:994831617472340018> Yeey...`)
        .setDescription(`<:wl:994043081512996934> ${message.author.tag} just give ${user} much as ${itemmax} **World Lock**`)
        .setTimestamp()
        .setColor("#00ff11")
    )
    return;
  } else if (args[0] === "75284") {

    return message.lineReplyNoMention(
      new discord.MessageEmbed()
        .setTitle(`<:growmojisigh:994613015196483684> Bruhh...`)
        .setDescription(`This item is untrade!`)
        .setTimestamp()
        .setColor("#ff0000")
    )
    return;
  }
}
exports.info = {
  name: 'give',
  aliases: ["transfer"],
  description: "sets the welcome message",
  usage: "<channel_id/channel_tag>"
}
exports.conf = {
  cooldown: 0,
  dm: "no"
}