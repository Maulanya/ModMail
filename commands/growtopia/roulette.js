const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
 exports.run = async (bot, message, args) => {
  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`wl_${message.author.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.MessageEmbed()
.setColor(16734039)
    .setTitle(`<:growmojisigh:994613015196483684> Bruhh`)
.setDescription(`Specify an amount to gamble | ${bot.config.prefix}roulette <color> <amount>`)
   .setTimestamp();

let moneymore = new Discord.MessageEmbed()
  .setColor(16734039)
    .setTitle(`<:growmojisigh:994613015196483684> Bruhh`)
.setDescription(`You are betting more than you have`)
   .setTimestamp();
let colorbad = new Discord.MessageEmbed()
.setColor(16734039)
    .setTitle(`<:growmojisigh:994613015196483684> Bruhh`)
.setDescription(`Specify a color | Red [1.5x] Black [2x] Green [15x]`)
   .setTimestamp();


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "b" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else return message.channel.send(colorbad);
        
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        db.add(`wl_${message.author.id}`, money)
        let moneyEmbed1 = new Discord.MessageEmbed()
       .setColor("#00ff11")
      .setTitle(`<:yeey:994831617472340018> Yeey...`)
  .setDescription(`You won ${money} **World Lock** <:wl:994043081512996934>`)
		.setFooter(`Multiplier: 15x | Color: Green`)
      .setTimestamp();
        message.channel.send(moneyEmbed1)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`wl_${message.author.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#00ff11")
      .setTitle(`<:yeey:994831617472340018> Yeey...`)
          .setDescription(`You won ${money} **World Lock** <:wl:994043081512996934>`)
	.setFooter(`Multiplier: 1.5x | Color: Red`)
      .setTimestamp();
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`wl_${message.author.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("#00ff11")
      .setTitle(`<:yeey:994831617472340018> Yeey...`)
          .setDescription(`You won ${money} **World Lock** <:wl:994043081512996934>`)
        .setFooter(`Multiplier: 2x | Color: Black`)
      .setTimestamp();
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        db.subtract(`wl_${message.author.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor(16734039)
          .setTitle(`<:sad:994832472007245955> Sad`)
        .setDescription(`You lost ${money} **World Lock** <:wl:994043081512996934>`)
		.setFooter(`Multiplier: 0x | :/`)
      .setTimestamp();
        message.channel.send(moneyEmbed4)
    }
}

  exports.info = {
  name: "roulette",
  aliases: [],
  usage: "",
  description: ""
};
//ch
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}