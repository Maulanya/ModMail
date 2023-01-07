const db = require("quick.db");
const Discord = require("discord.js");
const ms = require("humanize-duration");

const test1 = new Map();
const test2 = new Map();


exports.run = async (bot, message, args) => {
  
  const GoldenPc = db.fetch(`goldenpc_${message.author.id}`);
  const WolfSp = db.fetch(`wolfspirit_${message.author.id}`);
  let author = await db.fetch(`work_${message.author.id}`);

  let timeout = 120000;

    if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));
      
    let timeEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(
        `<:pleux_no:887553189883281438> | You have already worked recently`
      )
      .setDescription(`Try again in ${time.minutes}m ${time.seconds}s `)
      .setTimestamp();
      message.channel.send(timeEmbed);
  } else if (WolfSp === true) { 

    const cooldown = test1.get(message.author.id)
    const cooldown2 = test2.get(message.author.id)
    
    if(cooldown) {
      if(args[1]=== "753656246543562") {
        const waktu = ms(cooldown - Date.now(), {units: ['m','s'], round: true});
        message.reply(`time left :${waktu}`);
        
      } else { 
    let replies = ["Chandelier","Crystal Block","Laser Grid","farmable","chicken","cow","buffalo","sience station","well","tackle","unicorn","magic bell"];
    let result = Math.floor(Math.random() * replies.length);
    let amount = Math.floor(Math.random() * 600) + 350;
    let embed1 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `<:wolf_spirit1:994922788433436772> you are hitting **${replies[result]}** and get ${amount} Gems <:gems:994042284553277470>`
      )
    .setTimestamp();
    message.channel.send(embed1);

    db.add(`gems_${message.author.id}`, amount);
    db.set(`work_${message.author.id}`, Date.now());
               
      }
    } else {
        
    let replies = ["Chandelier","Crystal Block","Laser Grid","farmable","chicken","cow","buffalo","sience station","well","tackle","unicorn","magic bell"];
    let result = Math.floor(Math.random() * replies.length);
    let amount = Math.floor(Math.random() * 600) + 350;
    let embed1 = new Discord.MessageEmbed()
      .setColor("RANDOM")
    .setTitle(`${message.author.tag} Punching`)
      .setDescription(
        `<:wolf_spirit1:994922788433436772> you are hitting **${replies[result]}** and get ${amount} Gems <:gems:994042284553277470>`
      )
      .setTimestamp();
       message.channel.send(embed1);

    db.add(`gems_${message.author.id}`, amount);
    db.set(`work_${message.author.id}`, Date.now());


      test1.set(message.author.id, Date.now() * 1000 * 1)//Waktu pemaikaian
    
      setTimeout(() => {
        
        
        
        setTimeout(() => {
          test2.delete()
        }, 1000 * 10)//Cooldown
        
        const extime = new Discord.MessageEmbed()
        .setTitle(`<:haha:994833410117877780> Opss..`)
        .setDescription(`${message.author.tag} Your Wolf Spirit is expired`)
        .setColor(`#ff0000`)
        .setTimestamp()
      message.reply(extime);
      test2.set(message.author.id, Date.now() + 1000 * 10)//cooldown
      test1.delete(message.author.id)
      db.delete(`wolfspirit_${message.author.id}`)
     }, 1000 * 1);//Waktu pemaikaian
      

      }
    }
    
  
  
  else if (GoldenPc === true) {
    let replies = ["Chandelier","Crystal Block","Laser Grid","farmable","chicken","cow","buffalo","sience station","well","tackle","unicorn","magic bell"];
    let result = Math.floor(Math.random() * replies.length);
    let amount = Math.floor(Math.random() * 450) + 1;
    let embed1 = new Discord.MessageEmbed()
      .setColor("RANDOM")
     .setTitle(`${message.author.tag} Punching`)
      .setDescription(
        `<:fist_goldenpck:994479519434031134> you are hitting **${replies[result]}** and get ${amount} Gems <:gems:994042284553277470>`
      )
    .setTimestamp();
    message.channel.send(embed1);

    db.add(`gems_${message.author.id}`, amount);
    db.set(`work_${message.author.id}`, Date.now());
  } else {
    let replies = ["Chandelier","Crystal Block","Laser Grid","farmable","chicken","cow","buffalo","sience station","well","tackle","unicorn"]

    let result = Math.floor(Math.random() * replies.length);
    let amount = Math.floor(Math.random() * 80) + 1;
    let embed1 = new Discord.MessageEmbed()
      .setColor("RANDOM")
     .setTitle(`${message.author.tag} Punching`)
      .setDescription(
        `<:fist1:994042162108977202> you are hitting **${replies[result]}** and get ${amount} Gems <:gems:994042284553277470>`
      )
    .setTimestamp();
    message.channel.send(embed1);

    db.add(`gems_${message.author.id}`, amount);
    db.set(`work_${message.author.id}`, Date.now());
  }
};
exports.info = {
  name: "punch",
  aliases: [],
  usage: "",
  description: "",
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes",
};
exports.conf = {
  cooldown: 0,
  dm: "yes",
};