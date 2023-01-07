const db = require("quick.db");
const Discord = require("discord.js");
const ms = require("humanize-duration");

const test1 = new Map();
const test2 = new Map();


exports.run = async (bot, message, args) => {
  
  let user = message.author;
  let author = await db.fetch(`gtreasures_${message.author.id}`);
  let gtreasure = await db.fetch(`gtreasure_${message.author.id}`)
if (gtreasure) {
    let replies = [['<:RubyBlock:999287984652296324> Ruby Block'],['<:crystalblock:999279741150441472> Crystal Block'],['<:TopazBlock:999286866098520144> Topaz Block'],['<:GoldenApple:999286592348880969> Golden Apple'],['<:EmeraldBlock:999287774190501949> Emerald Block'],['<:SapphireBlock:999287234652024852> Sapphire Block']]

    let result = Math.floor(Math.random() * replies.length);
    let embed1 = new Discord.MessageEmbed()
      .setColor("RANDOM")
     .setTitle(`${message.author.tag} Punching`)
      .setDescription(
        `<:fist1:994042162108977202> you are hitting <:TreasureHoard:998877872343224340> **Golden Treasure Hoard** and get **${replies[result]}**`
      )
    .setTimestamp();
    message.channel.send(embed1);

    db.subtract(`gtreasure_${message.author.id}`, 1);
    db.set(`gtreasures_${message.author.id}`, Date.now());
  
if (result == 2) {
  let jakpots2 = Math.floor(Math.random() * (10000 - 6000) + 6000)
  const jackpot2 = new Discord.MessageEmbed()
  .setColor(`#00ff11`)
  .setTitle(`<:yeey:994831617472340018> Congratulation`)
  .setDescription(`<:gems:994042284553277470> You got **${jakpots2}** gems`)
  .setTimestamp()
  message.channel.send(jackpot2)
db.add(`gems_${message.author.id}`, jakpots2)
} if (result == 3) {
  let jakpots3 = Math.floor(Math.random() * (100000 - 80000) + 80000)
  const jackpot = new Discord.MessageEmbed()
  .setColor(`#00ff11`)
  .setTitle(`<:yeey:994831617472340018> Congratulation`)
  .setDescription(`<:gems:994042284553277470> You got **${jakpots3}** gems`)
  .setTimestamp()
  message.channel.send(jackpot)
  db.add(`gems_${message.author.id}`, jakpots3)
}
  
  } else {
    const noitem = new Discord.MessageEmbed()
    .setTitle(`<:growmoji1:994490548385742848> Ohw no`)
   .setDescription(`You dont have that item`)
     .setColor(`#ff0000`)
    .setTimestamp();
message.lineReply(noitem)
}
};
  exports.info = {
  name: "treasure",
  aliases: [],
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