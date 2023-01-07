const lineReplyNoMention = require("discord-reply");
const lineReply = require("discord-reply");
const db = require("quick.db");
const Discord = require("discord.js");

let discord = require("discord.js");
let { RichEmbed } = require("discord.js");
let { MessageEmbed } = require("discord.js");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  const embedp = new Discord.MessageEmbed()
    .setColor("#34c6eb")
    .setDescription(
      `<:pleux_no:887553189883281438> | Unable to find this Person!`
    );
  let userm;
   const Dev = db.fetch(`dev_${message.author.id}`)
const Usup = db.fetch(`uSup_${message.author.id}`)

  if (!args[0]) {
    userm = message.member;
  } else {
    if (!message.guild) return;
    userm =
      message.mentions.members.first() ||
      bot.users.cache.get(args[0]).catch((err) => {
        return message.channel.send(embedp);
      });
  }

  if (!userm) {
    return message.lineReplyNoMention(
      "<:pleux_no:887553189883281438> | Unable to find this person!"
    );
  }
 let ao= message.guild.id;
  let x;
  x = userm.user;
  
  let bgl = db.fetch(`bgl_${userm.user.id}`)
   if (bgl === null) bgl = 0;
  
  let dl = db.fetch(`dl_${userm.user.id}`)
   if (dl === null) dl = 0;
  
  let wl = db.fetch(`wl_${userm.user.id}`)
   if (wl === null) wl = 0;
  
   let level = bot.db.get(`${ao}level_${x.id}`) || 1;
  const flags = {
    DISCORD_EMPLOYEE: "Discord Employee",
    DISCORD_PARTNER: "Discord Partner",
    BUGHUNTER_LEVEL_1: "Bug Hunter (Green)",
    BUGHUNTER_LEVEL_2: "Bug Hunter (Gold)",
    HYPESQUAD_EVENTS: "HypeSquad Events",
    HOUSE_BRAVERY: "House of Bravery",
    HOUSE_BRILLIANCE: "House of Brilliance",
    HOUSE_BALANCE: "House of Balance",
    EARLY_SUPPORTER: "Early Supporter",
    TEAM_USER: "Team User",
    SYSTEM: "System",
    VERIFIED_BOT: "Verified Bot",
    VERIFIED_DEVELOPER: "Verified Bot Developer",
  };

  let stat = {
    online: "https://emoji.gg/assets/emoji/9166_online.png",
    idle: "https://emoji.gg/assets/emoji/3929_idle.png",
    dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
    offline: "https://emoji.gg/assets/emoji/7445_status_offline.png",
  };

  let embed = new MessageEmbed();
  if (userm.user.displayAvatarURL())
    embed.setThumbnail(userm.user.displayAvatarURL({ dynamic: true }), true);

  //ACTIVITY
  let array = [];

  let data;
  if (userm.user.presence.activities.length) {
    data = userm.user.presence.activities;

    for (let i = 0; i < data.length; i++) {
      let name = data[i].name || "none";
      let zname = data[i].state || "none";
      let type = data[i].type || "none";

      array.push(`**${type}** : \`${name}: ${zname}\``);

      if (data[i].name === "Spotify") {
        embed.setThumbnail(
          `https://i.scdn.co/image/${data[i].assets.largeImage.replace(
            "spotify:",
            ""
          )}`
        );
      }
      embed.setDescription(array.join("\n"));
    }
  }
  //effect active
  let aeffect = db.fetch(`xenocry_${userm.user.id}`)
  if (aeffect === null) aeffect = "No Active Effect";
   if (aeffect === true) aeffect = "<:xenonite:997327705680904232> **Xenonite Crystal** (Permanent)"

//badges
   const badges = [`👤 **Wizbot User**`];
  //support command
  const supcmd  = [`${bot.config.prefix}help`];
  
  //developer badge
  let badgedev = db.fetch(`devb_${userm.user.id}`)
   if (badgedev === true) badges.push(`<:developer:994150972563652628> **Developer**`)
  
   let badgedevcmd = db.fetch(`devb_${userm.user.id}`)
   if (badgedevcmd  === true) supcmd.push(`${bot.config.prefix}dhelp`)
   
   //suppoter badge
    let badgesup = db.fetch(`uSupb_${userm.user.id}`)
   if (badgesup === true) badges.push("<:supporter:995141318294646875> **Supporter**")
  
   let badgesupcmd = db.fetch(`uSupb_${userm.user.id}`)
   if (badgesupcmd === true) supcmd.push(`${bot.config.prefix}shelp`)
  
  
 //if (Dev === true || message.author.id == '753298841712721961' ){
   const embeddev = new discord.MessageEmbed()
   .setThumbnail(userm.user.displayAvatarURL({ dynamic: true }), true)
   .setColor("#34c6eb")
    .addField("Badge", badges,
    true
  )
   .setAuthor(
      userm.user.tag,
      userm.user.displayAvatarURL({ dynamic: true })
    )
   .addField("Nickname",
    userm.nickname || "(" + userm.user.username + ")",
    true
  )
   .addField(
    "Joined At",
    moment(userm.user.joinedGuildTimestamp).format("LLLL"),
    true
  )
   .addField(
    "Account Created At",
    moment(userm.user.createdAt).format("LLLL"),
    true
  ).addField(
    "Common Information",
    `ID: \`${userm.user.id}\`\nLevel: ${level}`,
    true
  )  
   .addField("Active Effects", `${aeffect}`, true)
  .addField("Highest Role", userm.roles.highest, true)
 
    .addField("Support Command", supcmd, true)
 
    .addField(
      "Flags",
      userm.user.flags.toArray().length
        ? userm.user.flags
            .toArray()
            .map((flag) => flags[flag])
            .join(", ")
        : "None",
      true
    );
  embed
    .setFooter(
      userm.user.presence.status,
      stat[userm.user.presence.status],
      true
    )
    .setTimestamp();
   message.channel.send(embeddev)
   /*
 } else if (Usup === true || message.author.id == '753298841712721961' ){
   const embedsup = new discord.MessageEmbed()
   .setThumbnail(userm.user.displayAvatarURL({ dynamic: true }), true)
   .setColor("#34c6eb")
    .addField("Badge",
    "<:king:953541757147177020> Supporter",
    true
  )
   .setAuthor(
      userm.user.tag,
      userm.user.displayAvatarURL({ dynamic: true })
    )
   .addField("Nickname",
    userm.nickname || "no nickname(" + userm.user.username + ")",
    true
  )
   .addField(
    "Joined At",
    moment(userm.user.joinedGuildTimestamp).format("LLLL"),
    true
  )
   .addField(
    "Account Created At",
    moment(userm.user.createdAt).format("LLLL"),
    true
  ).addField(
    "Common Information",
    `ID: \`${userm.user.id}\`\nLevel: ${level}\nSupport Command: ${bot.config.prefix}shelp`,
    true
  )
   .addField("Roles", `<@&${userm._roles.join("> <@&")}>`, true)
  .addField("Highest Role", userm.roles.highest, true)
 
    .addField("Rank/Hoist Role", userm.roles.hoist, true)
 
    .addField(
      "Flags",
      userm.user.flags.toArray().length
        ? userm.user.flags
            .toArray()
            .map((flag) => flags[flag])
            .join(", ")
        : "None",
      true
    );
  embed
    .setFooter(
      userm.user.presence.status,
      stat[userm.user.presence.status],
      true
    )
    .setTimestamp();
   message.channel.send(embedsup)
 } else {
  //OTHER STUFF
  if (userm.user.displayAvatarURL())
    embed.setAuthor(
      userm.user.tag,
      userm.user.displayAvatarURL({ dynamic: true })
    );

  embed.setColor(`#34c6eb`);
  embed.addField(
    "Nickname",
    userm.nickname || "no nickname(" + userm.user.username + ")",
    true
  );
  embed.addField(
    "Joined At",
    moment(userm.user.joinedGuildTimestamp).format("LLLL"),
    true
  );
  embed.addField(
    "Account Created At",
    moment(userm.user.createdAt).format("LLLL"),
    true
  );

  embed.addField(
    "Common Information",
    `ID: \`${userm.user.id}\`\nLevel: ${level}`,
    true
  );
  if (userm._roles)
    embed.addField("Roles", `<@&${userm._roles.join("> <@&")}>`, true);
  embed.addField("Highest Role", userm.roles.highest, true);
  if (userm.roles.hoist)
    embed.addField("Rank/Hoist Role", userm.roles.hoist, true);
  if (userm.user.flags.toArray())
    embed.addField(
      "Flags",
      userm.user.flags.toArray().length
        ? userm.user.flags
            .toArray()
            .map((flag) => flags[flag])
            .join(", ")
        : "None",
      true
    );
  embed
    .setFooter(
      userm.user.presence.status,
      stat[userm.user.presence.status],
      true
    )
    .setTimestamp();
   return message.lineReplyNoMention(embed).catch((err) => {
    return message.channel.send("Error : " + err);
  });
 } */
  console.log(userm._roles);
  //  message.channel.send(userm.user.tag)
};
exports.info = {
  name: "profile",
  aliases: ["userinfo", "whois"],
  usage: "(<user_id_or_mention>)",
  description: "Get the information of yourself or a user",
};
exports.conf = {
  cooldown: 0,
  dm: "yes",
};
