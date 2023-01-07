const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('humanize-duration')
const wolfcd = new Map();


exports.run = async (bot, message, args) => {
    let user = message.author;
  let amount = args[1]
  let itemid = args[0]
let userpremiumdata = {
    userid: message.guild.id,
    premiumer: message.author.id,
    premiumcode: "yes"
   }
 const GoldenPc = db.fetch(`goldenpc_${message.author.id}`);
  const WolfSp = db.fetch(`wolfspirit_${message.author.id}`);
  
  
    let alreadypremium = new Discord.MessageEmbed()
.setTitle(`You're Already an premium user`)
 let checking = db.get(`premium`)
    let gems = db.fetch(`gems_${message.author.id}`)
    let wl = db.fetch(`wl_${message.author.id}`)
     let dl = db.fetch(`dl_${message.author.id}`)
     let bgl = db.fetch(`bgl_${message.author.id}`)
     let times = await db.fetch(`times_${message.author.id}`);

    if (itemid == '00972') {
      
        const embedA = new Discord.MessageEmbed()
  .setDescription("You must enter the amount of item to buy!")
  .setColor("#ff0000")
.setTimestamp();
  const embedM = new Discord.MessageEmbed()
  .setTitle(`<:growmoji1:994490548385742848> Own no...`)
  .setDescription("You cant buy amount this much more")
  .setColor("#ff0000")
    .setTimestamp();
  if (isNaN(amount)) return message.channel.send(embedA)
  if (amount >= 201) return message.channel.send(embedM)
      
        if (gems < 23000) return message.channel.send(Embed)
        
        db.fetch(`dl_${message.author.id}`);
        db.add(`dl_${message.author.id}`, amount)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#00ff11")
        .setTitle(`<:dl:994042840143380581> Purchased **${amount} Diamond Lock**`)
        .setDescription(`Success Purchase Diamond Lock For ${23000 * amount} Gems`)
          .setTimestamp();

        db.subtract(`gems_${message.author.id}`, 23000 * amount)
        message.channel.send(Embed2)
    } else if(itemid == '00754') {
      
        const embedA = new Discord.MessageEmbed()
  .setDescription("You must enter the amount of item to buy!")
  .setColor("#ff0000")
          .setTimestamp();
  const embedM = new Discord.MessageEmbed()
    .setTitle(`<:growmoji1:994490548385742848> Own no...`)
  .setDescription("You cant buy amount this much more")
  .setColor("#ff0000")
    .setTimestamp();
  if (isNaN(amount)) return message.channel.send(embedA)
  if (amount >= 201) return message.channel.send(embedM)
      
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`<:growmoji1:994490548385742848> Own no...`)
        .setDescription(`You need 2000 Gems to purchase some **World Lock**`)
          .setTimestamp();

        if (gems < 800) return message.channel.send(Embed2)
       
        db.fetch(`wl_${message.author.id}`)
        db.add(`wl_${message.author.id}`, amount)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00ff11")
        .setTitle(`<:wl:994043081512996934> Purchased **${amount} World Lock**`)
        .setDescription(`Success Purchase World Lock For ${2000 * amount} Gems`)
          .setTimestamp();
        db.subtract(`gems_${message.author.id}`, 2000 * amount)
        message.channel.send(Embed3)
    } else if(itemid == '00652') {
      
        const embedA = new Discord.MessageEmbed()
  .setDescription("You must enter the amount of item to buy!")
  .setColor("#ff0000")
  const embedM = new Discord.MessageEmbed()
    .setTitle(`<:growmoji1:994490548385742848> Own no...`)
  .setDescription("You cant buy amount this much more")
  .setColor("#ff0000")
  if (isNaN(amount)) return message.channel.send(embedA)
  if (amount >= 201) return message.channel.send(embedM)
      
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`<:growmoji1:994490548385742848> Owh no...`)
        .setDescription(`You need **25 World Lock** to purchase some **MegaPhone**`)
          .setTimestamp();

        if (wl < 25) return message.channel.send(Embed2)
       
        db.fetch(`mg_${message.author.id}`)
        db.add(`mg_${message.author.id}`, amount)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00ff11")
        .setTitle(`<:megaphone:994081475999846510> Purchased ${amount} **MegaPhone**`)
        .setDescription(`Success Purchase MegaPhone For ${25 * amount} World Lock`)
          .setTimestamp();
        db.subtract(`wl_${message.author.id}`, 25 * amount)
        message.channel.send(Embed3)
		
	} else if(itemid == '76974') {
    
  const embedM = new Discord.MessageEmbed()
  .setDescription("You only can buy 1 Item")
  .setColor("#ff0000")
  if (amount >= 2) return message.channel.send(embedM)
    
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#ff0000")
        .setTitle(`<:growmoji1:994490548385742848> Owh no...`)
        .setDescription(`You need **50 Diamond Lock** to purchase some **Golden Pickaxe**`)
          .setTimestamp();

        if (dl < 50) return message.channel.send(Embed2)
       
        db.fetch(`goldenpc_${message.author.id}`)
        db.set(`goldenpc_${message.author.id}`, true)
    
    if (GoldenPc === true) {
     let embedmax = new Discord.MessageEmbed()
         .setColor("#ff0000")
        .setTitle(`<:growmoji1:994490548385742848> Owh no...`)
        .setDescription(`you only can have **1 Golden Pickaxe**`)
          .setTimestamp();
      return message.channel.send(embedmax)
  } else {
    
        let Embed3 = new Discord.MessageEmbed()
         .setColor("#00ff11")
        .setTitle(`<:golden_pickaxe:994469787122016276> Purchased 1 **Golden Pickaxe**`)
        .setDescription(`Success Purchase Golden Pickaxe For 50 Diamond Lock.\n*This item is currently used.*`)
          .setTimestamp();
        db.subtract(`dl_${message.author.id}`, 50)
        message.channel.send(Embed3)
  }
    
	} else if (itemid == "86462"){
    
    
        const embedA = new Discord.MessageEmbed()
  .setDescription("You must enter the amount of item to buy!")
  .setColor("#ff0000")
          .setTimestamp();
  const embedM = new Discord.MessageEmbed()
    .setTitle(`<:growmoji1:994490548385742848> Own no...`)
  .setDescription("You cant buy amount this much more")
  .setColor("#ff0000")
    .setTimestamp();
  if (isNaN(amount)) return message.channel.send(embedA)
  if (amount >= 201) return message.channel.send(embedM)
      
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`<:growmoji1:994490548385742848> Own no...`)
        .setDescription(`You need 50 World Lock to purchase some **Golden Treasure Hoard**`)
          .setTimestamp();

        if (wl < 50) return message.channel.send(Embed2)
       
        db.fetch(`gtreasure_${message.author.id}`)
        db.add(`gtreasure_${message.author.id}`, amount)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00ff11")
        .setTitle(`<:TreasureHoard:998877872343224340> Purchased **${amount} Golden Treasure Hoard**`)
        .setDescription(`Success Purchase Golden Treasure Hoard For ${50 * amount} World Lock`)
          .setTimestamp();
        db.subtract(`wl_${message.author.id}`, 50 * amount)
        message.channel.send(Embed3)
 } else if(itemid == '75284') {
    
  
    const cooldown = wolfcd.get(message.author.id);
    
    
    if(cooldown) {
      const remaining = ms(cooldown - Date.now(),{units: ["h", "m", "s"], round: true} );
      const timerb = new Discord.MessageEmbed()
      .setColor(`#ff0000`)
      .setTitle(`<:haha:994833410117877780> Opss...`)
      .setDescription(`wait ${remaining} if you want to buy again`)
      .setTimestamp()
      message.reply(timerb);
    } else {
    
  const embedM = new Discord.MessageEmbed()
  .setDescription("You only can buy 1 Item")
  .setColor("#ff0000")
  if (amount >= 2) return message.channel.send(embedM)
    
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#ff0000")
        .setTitle(`<:growmoji1:994490548385742848> Owh no...`)
        .setDescription(`You need **2 Blue Gems Lock** to purchase some **Wolf Spirit**`)
          .setTimestamp();

        if (bgl < 2) return message.channel.send(Embed2)
       
        db.fetch(`wolfspirit_${message.author.id}`)
        db.set(`wolfspirit_${message.author.id}`, true)
    
    if (WolfSp === true) {
     let embedmax = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`<:growmoji1:994490548385742848> Owh no...`)
        .setDescription(`you only can have **1 Wolf Spirit**`)
        .setTimestamp();
      return message.channel.send(embedmax)
  } else {
        let Embed3 = new Discord.MessageEmbed()
         .setColor("#00ff11")
        .setTitle(`<:wolf_spirit:994899537804140575> Purchased 1 **Wolf Spirit**`)
        .setDescription(`Success Purchase Wold Spirit For 2 Blue Gems Lock.\n*This item is currently used.*`)
          .setTimestamp();
        db.subtract(`bgl_${message.author.id}`, 2)
        message.channel.send(Embed3)
    
    
    wolfcd.set(message.author.id, Date.now() + 1000 * 60 * 60 * 4)
    
setTimeout(() => {
  wolfcd.delete(message.author.id);
      }, 1000 * 60 * 60 * 4);
    
  }
  }
}

else if(itemid == 'list') {
	let list = new Discord.MessageEmbed()
        .setColor("#34c6eb")
  .setThumbnail("https://cdn.discordapp.com/avatars/993729379614076931/fd3ae5f5098a56547207cbf7d9dc240f.webp?size=1024.png")
        .setTitle("List of all items you have to buy:")
		.addField("<:dl:994042840143380581> Diamond Lock (00972)", "**Cost:** 23000 Gems")
		.addField("<:wl:994043081512996934> World Lock (00754)", "**Cost:** 2000 Gems")
		.addField(`<:megaphone:994081475999846510> MegaPhone (00652)`, `**Cost:** 25 World Lock\n*Description*: You can use command *${bot.config.prefix}sb* to send BroadCast to all member's`)
  .addField(`<:golden_pickaxe:994469787122016276> Golden Pickaxe (76974)`, `**Cost:** 50 Diamond Lock\n*Description*: You can use command *${bot.config.prefix}punch* and you will get 1-450 gems when breaking`)
  .addField(`<:wolf_spirit:994899537804140575> Wolf Spirit (75284)`, `**Cost:** 2 Blue Gems Lock\n*Description*: You can use command *${bot.config.prefix}punch* and you will get 350-600 gems when breaking, This item will expire after 5 hours`)
  .addField(`<:TreasureHoard:998877872343224340> Golden Treasure Hoard (86462)`, `**Const:** 50 World Lock\n*Description*: You can use command *${bot.config.prefix}treasure* This item can be placed in two directions, depending on the direction you're facing. This item never drops any seeds.`)
  /*  .addField("7 Days Premium", "Cost: 3000 coins (not available)")
      .addField("15 Days Premium", "Cost: 6500 coins (not available)")
        .addField("30 Days Premium", "Cost: 10,000 coins (not available)") */
  .addField(`How To Buy?`, `\`\`${bot.config.prefix}buy 00972\`\`if you wan to buy some items like Diamond Lock`)
    .setTimestamp();
		message.channel.send(list)
   
    
      
      
       
      } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("FF5757")
          .setTitle("<:growmojisigh:994613015196483684> Bruhh")
          .addField(`Enter an item to buy\n`, `\`\`${bot.config.prefix}store list\`\`to show all things`)
  .setTimestamp();
        message.channel.send(embed3)
    }
}
 exports.info = {
  name: "store",
  aliases: ["buy"],
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