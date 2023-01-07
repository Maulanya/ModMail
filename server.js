require("dotenv").config();
const discord = require("discord.js");
const { promisify } = require("util");
const ms = require("ms");
const sleep = promisify(setTimeout);
const path = require("path");
const express = require("express");
const talkedRecently = new Set();
const bot = new discord.Client();
const disbut = require("discord-buttons");
//const sensor = require("./sensor")
require("discord-buttons")(bot);
const { MessageEmbed, MessageAttachment, Permissions } = require("discord.js");
const request = require("node-superfetch");
const bet = new discord.Client();
const fs = require("fs");
const snipes = new discord.Collection()
const edits = new discord.Collection()
const edits2 = new discord.Collection()
const moment = require("moment");
//var text2png = require("text2png");
const botToken = process.env.TOKEN;
const util = require("util");
function reverseInPlace(str) {
  var words = [];
  words = str.match(/\S+/g);
  var result = "";
  for (var i = 0; i < words.length; i++) {
    result += words[i].split("").reverse().join("") + " ";
  }
  return;
}
const fetch = require("node-fetch");
setInterval(async () => {
  await fetch(`https://${process.env.PROJECT_DOMAIN}.glitch.me`); //main projects site
  await fetch("https://404-bot-discord.glitch.me");
  await fetch("https://arcaea-bot-javascript.glitch.me");
  await fetch("https://404-tester-discord.glitch.me");
  await fetch("https://lilith-bot-tester.glitch.me");
  await fetch("https://arcaea-bot-typescript.glitch.me");
}, 60000);
bot.db = require("quick.db");
//bot.translate= require("translate-google")
bot.sleep = promisify(setTimeout);
bot.vote = new Map();

//Disable welcome Image

//let serversetting = JSON.parse(fs.readFileSync("./serversetting.json", "utf8"));
console.defaultLog = console.log.bind(console);
console.logs = [];
console.green = function() {
  // default &  console.log()
  console.greenLog.apply(console, arguments);
  // new & array data
  console.logs.push(Array.from(arguments));
};
function parseTime(time) {
  return time
    .split(":") // Split them into array as chunk of [hour, minute, second]
    .map(pad) // Map them with `pad` function below
    .join(":"); // Join them back into 'hh:mm:ss'
}
bot.on("guildMemberAdd", async (member) => {
  if (bot.db.get(`${member.guild.id}_autorole`)) {
    let autorole = bot.db.get(`${member.guild.id}_autorole`);
    member.roles.add(member.guild.roles.cache.find((r) => r.id === autorole));
    member.roles.add(
      member.guild.roles.cache.find((r) => r.id === autorole).id
    );
  }
  let userm = member;
  let targe = member;
  let muterole = bot.db.get(`${member.guild.id}_muterole`);

  if (bot.db.get(`${member.guild.id}_${userm.user.id}mutetime`)) {
    if (!bot.db.get(`${member.guild.id}_muterole`)) {
      let muterale = member.guild.roles.cache.find((r) => r.name === "Muted");
      bot.db.set(
        `${member.guild.id}_muterole`,
        member.guild.roles.cache.find((r) => r.name === "Muted").id
      );
      if (!muterale) {
        try {
          let muterele = await member.guild.roles.create({
            data: {
              name: "Muted",
              color: "#222222",
              permissions: [],
            },
          });
          member.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(
              member.guild.roles.cache.find((r) => r.name === "muted"),
              {
                CREATE_INSTANT_INVITE: true,
                ADD_REACTIONS: false,
                STREAM: false,
                SEND_MESSAGES: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                READ_MESSAGE_HISTORY: true,
                MENTION_EVERYONE: false,
                USE_EXTERNAL_EMOJIS: true,
                CONNECT: false,
                SPEAK: false,
                USE_VAD: false,
                CHANGE_NICKNAME: true,
              }
            );
          });
        } catch (err) {
          console.log(`Error :${err}`);
        }
      }
      muterole = bot.db.set(
        `${member.guild.id}_muterole`,
        member.guild.roles.cache.find((r) => r.name === "Muted").id.toString()
      );
    }
    let muteroles = bot.db.set(
      `${member.guild.id}_${userm.user.id}muteroles`,
      userm._roles
    );

    console.log(muterole + "\n" + muteroles);

    setTimeout(function() {
      targe.roles
        .add(member.guild.roles.cache.find((r) => r.id === muteroles))
        .catch(() => {
          targe.roles.add(muteroles);
          targe.roles.remove(
            member.guild.roles.cache.find((r) => r.id === muterole)
          );
          targe.roles.remove(
            member.guild.roles.cache.find((r) => r.id === muterole).id
          );
          bot.db.delete(`${member.guild.id}_${userm.user.id}mutetime`);
          bot.db.delete(`${member.guild.id}_${userm.user.id}muteroles`);
        });

      targe.roles.remove(
        member.guild.roles.cache.find((r) => r.id === muterole)
      );
      targe.roles.remove(
        member.guild.roles.cache.find((r) => r.id === muterole).id
      );
      bot.db.delete(`${member.guild.id}_${userm.user.id}muteroles`);
      bot.db.delete(`${member.guild.id}_${userm.user.id}mutetime`);
    }, ms(bot.db.get(`${member.guild.id}_${userm.user.id}mutetime`)));

    targe.roles.remove(targe.roles.cache);
    targe.roles.add(member.guild.roles.cache.find((r) => r.id === muterole));
    targe.roles.add(member.guild.roles.cache.find((r) => r.id === muterole).id);
  }
  // ${bot.db.get(`${member.guild.id}_welcomeimg`)}
  console.log(`${bot.db.get(`${member.guild.id}_welcomechannel`)}
  ${bot.db.get(`${member.guild.id}_welcomemessage`)}
  ${bot.db.get(`${member.guild.id}_welcomeembed`)}
${bot.db.get(`${member.guild.id}_welcomemessagesys`)}`);

  if (
    bot.db.get(`${member.guild.id}_welcomemessagesys`) ||
    // bot.db.get(`${member.guild.id}_welcomeimg`) ||
    bot.db.get(`${member.guild.id}_welcomeembed`) ||
    bot.db.get(`${member.guild.id}_welcomemessage`) ||
    bot.db.get(`${member.guild.id}_welcomechannel`)
  ) {
    if (!bot.db.get(`${member.guild.id}_welcomemessagesys`)) {
      bot.db.set(`${member.guild.id}_welcomemessagesys`, "yes");
    }
    if (!bot.db.get(`${member.guild.id}_welcomemessage`)) {
      bot.db.set(
        `${member.guild.id}_welcomemessage`,
        "Welcome to $SERVER$, $MENTION$!"
      );
    }
    // if (!bot.db.get(`${member.guild.id}_welcomeimg`)) {
    //  bot.db.set(`${member.guild.id}_welcomeimg`, "no");
    // }
    if (!bot.db.get(`${member.guild.id}_welcomeembed`)) {
      bot.db.set(`${member.guild.id}_welcomeembed`, "no");
    }
    if (!bot.db.get(`${member.guild.id}_welcomechannel`)) return;
    const msg =
      bot.db
        .get(`${member.guild.id}_welcomemessage`)
        .replace(/\$MEMBER\$/g, member.user.username)
        .replace(/\$MENTION\$/g, "<@!" + member.id + ">")
        .replace(/\$SERVER\$/g, member.guild.name) ||
      `Welcome to ${member.guild.id}, <@!${member.id}>!`;

    if (bot.db.get(`${member.guild.id}_welcomemessagesys`) !== "yes") {
      return;
    }

    // if (bot.db.get(`${member.guild.id}_welcomeimg`) === "no") {
    if (bot.db.get(`${member.guild.id}_welcomeembed`) === "no") {
      return bot.channels.cache
        .get(bot.db.get(`${member.guild.id}_welcomechannel`))
        .send(msg);
    }
    const Embed = new discord.MessageEmbed()
      .setThumbnail(member.user.avatarURL({ dynamic: true }))
      .setDescription(msg)
      .setColor("RANDOM");
    bot.channels.cache
      .get(bot.db.get(`${member.guild.id}_welcomechannel`))
      .send(Embed);
    return;
    // }

    // if (bot.db.get(`${member.guild.id}_welcomeimg`) === "yes") {
    //  var list = [
    //   "https://i.imgur.com/UcGioIH.gif",
    //   "https://i.imgur.com/AqK6ipr.gif",
    //   "https://i.imgur.com/aUwimFa.gif",
    //   "https://i.imgur.com/TXlp1YT.gif",
    //   "https://i.imgur.com/5SABV1P.gif",
    //   "https://i.imgur.com/EpeiJq8.gif",
    //   "https://i.imgur.com/fFNLyAx.gif",
    //   "https://i.imgur.com/5s8vsTH.gif"
    //  ];
    //  var rand = list[Math.floor(Math.random() * list.length)];
    // console.log(rand);
    //   const image = new discord.MessageAttachment(rand, "welcome.gif");

    //  if (bot.db.get(`${member.guild.id}_welcomeembed`) === "yes") {
    //   const Embed = new discord.MessageEmbed()
    //     .setDescription(msg)
    //    .setColor("RANDOM")
    //    .setImage(rand)
    //     .setThumbnail(member.user.avatarURL({ dynamic: true }));
    //   console.log(rand);
    //   bot.channels.cache
    //     .get(bot.db.get(`${member.guild.id}_welcomechannel`))
    //     .send(Embed);
    //   return;
    // }

    // bot.channels.cache
    //   .get(bot.db.get(`${member.guild.id}_welcomechannel`))
    //   .send(msg, image);
    // return;
    // }
  }
});
bot.on("guildMemberRemove", async (member) => {
  console.log(`${bot.db.get(`${member.guild.id}_leavechannel`)}
  ${bot.db.get(`${member.guild.id}_leavemessage`)}
${bot.db.get(`${member.guild.id}_goodbyemessagesys`)}`);

  if (
    bot.db.get(`${member.guild.id}_goodbyemessagesys`) ||
    bot.db.get(`${member.guild.id}_leavemessage`) ||
    bot.db.get(`${member.guild.id}_leavechannel`)
  ) {
    if (!bot.db.get(`${member.guild.id}_goodbyemessagesys`)) {
      bot.db.set(`${member.guild.id}_goobyemessagesys`, "yes");
    }
    if (!bot.db.get(`${member.guild.id}_leavemessage`)) {
      bot.db.set(`${member.guild.id}_leavemessage`, "Goodbye, $MEMBER$!");
    }
    if (!bot.db.get(`${member.guild.id}_leavechannel`)) return;
    const msg =
      bot.db
        .get(`${member.guild.id}_leavemessage`)
        .replace(/\$MEMBER\$/g, member.user.username)
        .replace(/\$MENTION\$/g, "<@!" + member.id + ">")
        .replace(/\$SERVER\$/g, member.guild.name) ||
      `Goodbye ${member.guild.id}, <@!${member.id}>!`;

    if (bot.db.get(`${member.guild.id}_goodbyemessagesys`) !== "yes") {
      return;
    }

    return bot.channels.cache
      .get(bot.db.get(`${member.guild.id}_leavechannel`))
      .send(msg);
  }
});

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.songs = new discord.Collection();
bot.packs = new discord.Collection();
bot.packaliases = new discord.Collection();
bot.songaliases = new discord.Collection();
bot.helps = new discord.Collection();
bot.cooldowns = new discord.Collection();
bot.queue = new Map();

const { Player } = require("discord-player"); // Create a new Player (Youtube API key is your Youtube Data v3 key)
const player = new Player(bot, process.env.GOOGLE_API); // To easily access the player
bot.player = player;
bot.on("message", (message) => {
  if (message.author.bot) return;
  if (message.guild) {
    bot.config = {
      owners: "753298841712721961",
      prefix: bot.db.get(`${message.guild.id}_prefix`) || "w",
      thumbail: "https://www.droidgamers.com/wp-content/uploads/2022/01/Grow_UbiWeek_Keyart_v1.7_F-1-1024x576.jpg"
    };
    bot.music = {
      vote: bot.db.get(`${message.guild.id}_vote`) || false,
    };
  }
});

fs.readdir("./commands/", (err, categories) => {
  if (err) console.log(err);
  console.log(`Found total ${categories.length} categories.`);

  categories.forEach((category) => {
    let moduleConf = require(`./commands/${category}/module.json`);
    moduleConf.path = `./commands/${category}`;
    moduleConf.cmds = [];
    if (!moduleConf) return;
    bot.helps.set(category, moduleConf);
    // commands category
    fs.readdir(`./commands/${category}`, (err, files) => {
      console.log(
        `Found total ${files.length - 1} command(s) from ${category}.`
      );

      if (err) console.log(err);
      let commands = new Array();

      files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let prop = require(`./commands/${category}/${file}`);
        let cmdName = file.split(".")[0];

        bot.commands.set(prop.info.name, prop);

        prop.info.aliases.forEach((alias) => {
          bot.aliases.set(alias, prop.info.name);
        });

        bot.helps.get(category).cmds.push(prop.info.name);
      });
    });
  });
});
/*
 const yesembed = new discord.MessageEmbed()
.setTitle(`<:yeey:994831617472340018> Yeey...`)
       .setDescription(`<:golden_pickaxe:994469787122016276> ${button.author.id} just give Golden Pickaxe`)
    .setTimestamp()
        .setColor("#00ff11")  
 */
bot.on('clickButton', async (button) => {
  const db = require("quick.db");
  if (button.id === "yesbtn") {
    //button.defer() 
    const yesembed = new button.MessageEmbed()
      .setTitle(`<:yeey:994831617472340018> Yeey...`)
      .setDescription(`<:golden_pickaxe:994469787122016276> ${button.author.tag} just give Golden Pickaxe`)
      .setTimestamp()
      .setColor("#00ff11")
    button.channel.send(yesembed)

    //db.delete(`goldenpc_${button.author.id}`)
    //db.set(`goldenpc_${user.user.id}`, 1)
    //button.channel.send(`sudah di kirim ok`)
  };
  if (button.id === "nobtn") {
    //button.defer()
    button.channel.send(`oke ga jadi`)
    //action
  }

});

bot.on("message", async (message) => {
  if (message.author.bot) return;
  const db = require("quick.db");
  //Message Delete
  if (message.content.startsWith(`${bot.config.prefix}snipe`)) {
    let snipe = snipes.get(message.channel.id)
    const snipesembed = new discord.MessageEmbed()
      .setDescription('No messages have been deleted yet')
      .setColor('#fc0b03')
    if (!snipe) return message.channel.send(snipesembed)

    const snipeBot = new discord.MessageEmbed()
      .setColor('#fc0b03')
      .setDescription("Messages deleted by BOT cannot be loaded")
    if (snipe.author.bot) return message.channel.send(snipeBot);

    // if (snipe.author.bot) return message.channel.send(snipesembed)
    const snipeEmbed = new discord.MessageEmbed()
      .setAuthor(`Message Delete By ${snipe.author.tag}`, snipe.author.displayAvatarURL())
      .setColor("#03fc24")
      .setDescription(snipe.content)

    if (
      snipe.attachments.first()
        ? snipe.attachments.first().proxyURL
        : null
    ) {
      snipeEmbed.setImage(
        snipe.attachments.first()
          ? snipe.attachments.first().proxyURL
          : null
      )
    }
    message.channel.send(snipeEmbed)
  };

  //Message Update
  if (message.content.startsWith(`${bot.config.prefix}edits`)) {
    let oldMessage = edits.get(message.channel.id)
    let newMessage = edits2.get(message.channel.id)
    const editsembed = new discord.MessageEmbed()
      .setDescription('No messages have been update yet')
      .setColor('#fc0b03')
    if (!oldMessage) return message.channel.send(editsembed)
    // if (oldMessage.author.bot) return message.channel.send(editsembed)
    const editEmbed = new discord.MessageEmbed()
      .setAuthor(`Message Update By ${oldMessage.author.tag}`, oldMessage.author.displayAvatarURL())
      .setColor("#03fc24")
      .setDescription(
        `**Old Message  : **${oldMessage}\n**New Message : **${newMessage}`
      )

    if (
      oldMessage.attachments.first()
        ? oldMessage.attachments.first().proxyURL
        : null
    ) {
      editEmbed.setImage(
        oldMessage.attachments.first()
          ? oldMessage.attachments.first().proxyURL
          : null
      )
    }

    message.channel.send(editEmbed)
  };

  if (message.channel.type === "dm") {
    const dmEmbed = new discord.MessageEmbed()
      .setTitle(`New Private Message Sent by ${message.author.tag}!`)
      .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
      .setAuthor(
        `USER: ${message.author.tag}` + `\nID: ${message.author.id}`,
        `${message.author.displayAvatarURL({ dynamic: true })}`
      )
      .setDescription(`${message.content}`)
      .setColor(`#131313`);

    if (
      message.attachments.first()
        ? message.attachments.first().proxyURL
        : null
    ) {
      dmEmbed.setImage(
        message.attachments.first()
          ? message.attachments.first().proxyURL
          : null
      )
    }

    bot.channels.cache.get(`921957126119772190`).send(dmEmbed);
  }

  if (message.channel.name == "global-chat" && !message.author.bot) {
    bot.guilds.cache.forEach((guild) => {
      let channel = guild.channels.cache.find(
        (ch) => ch.name === "global-chat"
      );
      if (!channel) return;
      const embed = new discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(
          `**From Server:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n\n**Message:** ${message.content}\n[Jump to channel](https://discord.com/channels/${message.guild.id}/${message.channel.id})`
        )
        .setColor("RANDOM");
      if (
        message.attachments.first()
          ? message.attachments.first().proxyURL
          : null
      ) {
        embed.setImage(
          message.attachments.first()
            ? message.attachments.first().proxyURL
            : null
        );
      }
      channel.send(embed);
    });
  }

  db.add(`messages_${message.guild.id}_${message.author.id}`, 1);
  if (db.has(`${message.guild.id}_${message.author.id}` + ".afk")) {
    /*  message.member.setNickname(`${message.author.username}`).catch((error) => {
        return;
      }); */

    const embed = new discord.MessageEmbed()
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setAuthor(message.author.username + ` is no longer AFK
`)
      .setDescription(
        `**Message**\n> Welcome back, I've removed your AFK status.`)
      .setColor("#34c6eb")
      .setFooter(`AFK since `)
      .setTimestamp();
    message.channel.send(embed).then((ms) => {
      // message.reply(`Welcome back, i removed your AFK`).then((ms) => {
      ms.delete({ timeout: "7000" });
    });
    db.delete(`${message.guild.id}_${message.author.id}` + ".afk");
    db.delete(`${message.guild.id}_${message.author.id}` + ".messageafk");
  }

  message.mentions.users.forEach((user) => {

    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }

    if (db.has(`${message.guild.id}_${user.id}` + ".afk")) {
      let messageafk2 = db.fetch(
        `${message.guild.id}_${user.id}` + ".messageafk"
      );
      if (message.author.bot) return;
      const embed = new discord.MessageEmbed()
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setAuthor(`${user.tag} is now AFK
`, stat[user.presence.status])
        .setDescription(
          `**Message**\n${messageafk2}`)
        .setColor("#34c6eb")
        .setFooter(`AFK since • ${new Date()
          .toString()
          .split(" ", 5)
          .join(" ")}`
        )
      message.channel.send(embed);
      // message.channel.send(`**${user.tag}** is AFK\nReason: ${messageafk2}`);
    }
  });
  const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
  let testo = bot.db.get(`${message.guild.id}_prefix`) || "w";

  if (message.content.match(prefixMention)) {
    return message.reply(
      new discord.MessageEmbed()
        .setDescription(
          `My current prefix in this server is  \`${testo}\`  \ntype \`${testo}help\` for command`
        )
        .setColor("#34c6eb")
        .setFooter(`invite me with ${testo}invite`)
    );
  }
  if (message.author.bot || message.author === bot.user) return;

  if (!message.guild) {
    const prefixMention = new RegExp(`^<@!?${bot.user.id}> `);
    const prefix = message.content.match(prefixMention)
      ? message.content.match(prefixMention)[0]
      : bot.config.prefix;

    bot.emit("experience", message);

    // If the user doesn't doing any to the bot, return it.
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let msg = message.content.toLowerCase();
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    message.flags = [];
    while (args[0] && args[0][0] === "-") {
      message.flags.push(args.shift().slice(1));
    }

    let commandFile =
      bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (!commandFile) return;

    const member = message.member,
      now = Date.now(),
      timestamps = bot.cooldowns.get(commandFile.info.name),
      cooldownAmount = (commandFile.conf.cooldown || 5) * 1000;

    try {
      if (!commandFile) return;
      if (commandFile.conf.dm === "no") return;
      commandFile.run(bot, message, args);
    } catch (error) {
      console.log(error.message);
    } finally {
      // If you want to really know, who is typing or using your bot right now.
      console.log(`${sender.tag} (${sender.id}) ran a command: ${cmd}`);
      bot.channels.cache
        .get(`996343958093439077`)
        .send(
          `${sender.tag} (${sender.id}) in ${message.guild.name} ran a command: *${cmd}*`
        );
    }
    return;
  }

  //message.guild
  else {
    const prefixMention = new RegExp(`^<@!?${bot.user.id}> `);
    const prefix = message.content.match(prefixMention)
      ? message.content.match(prefixMention)[0]
      : bot.config.prefix;

    bot.emit("experience", message);

    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let msg = message.content.toLowerCase();
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    message.flags = [];
    while (args[0] && args[0][0] === "-") {
      message.flags.push(args.shift().slice(1));
    }

    let commandFile =
      bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (!commandFile) return;

    if (!bot.cooldowns.has(commandFile.info.name))
      bot.cooldowns.set(commandFile.info.name, new discord.Collection());

    const member = message.member,
      now = Date.now(),
      timestamps = bot.cooldowns.get(commandFile.info.name),
      cooldownAmount = (commandFile.conf.cooldown || 5) * 1000;

    if (!timestamps.has(member.id)) {
      if (!bot.config.owners.includes(message.author.id)) {
        timestamps.set(member.id, now);
      }
    } else {
      const expirationTime = timestamps.get(member.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        const embed = new discord.MessageEmbed().setTitle(
          `**<:pleuxinfo:902806293419544576> There is something wrong**`
        ).setDescription(`Please wait **${timeLeft.toFixed(1)} seconds** for repair
        `);
        return message.lineReply(embed);
      }
      //${timeLeft.toFixed(1
      timestamps.set(member.id, now);
      setTimeout(() => timestamps.delete(member.id), cooldownAmount);
    }

    try {
      if (!commandFile) return;
      commandFile.run(bot, message, args);
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log(`${sender.tag} (${sender.id}) ran a command: ${cmd}`);
      bot.channels.cache
        .get(`996343958093439077`)
        .send(
          `${sender.tag} (${sender.id}) in ${message.guild.name} ran a command: *${cmd}*`
        );
    }
  }
});

bot.on("ready", () => {
  bot.user.setActivity(
    `whelp`,
    // `${bot.guilds.cache.size} Server's`,
    { type: "PLAYING" }
  );
  console.log("Artificial Bot Maulana#1977 2020.");
  console.log(
    "[!] Make sure there are no commands that get an error when coding, it will cause an error when commands are used, the bot is now online / active, make sure you check everything carefully."
  );
  console.log("Ok it works!!!");
  console.log("The bot is ready to use");
  console.log(
    `[Connect] ${bot.user.tag} ready to serve ${bot.users.cache.size} at ${bot.guilds.cache.size} servers.`
  );
  console.log(`logged in as ${bot.user.username} BOT ✅`);
  console.log(`Update:[${new Date().toString().split(" ", 5).join(" ")}]`);

  //this code will show bot when already connected and send it to channel discord
});
function pad(n) {
  return parseInt(n) < 10 // If number less than 10
    ? "0" + n // Add '0' in front
    : n; // Else, return the original string.
}
function seconds(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " date, " : " date, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hour, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minutes, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " seconds" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

bot.on("message", async (message) => {
  if (message.author.bot || message.guild === null) return;
  xp(message);

  serverxp(message);

  const prefixMention = new RegExp(`^<@!?${bot.user.id}> `);
  const prefix = message.content.match(prefixMention)
    ? message.content.match(prefixMention)[0]
    : bot.config.prefix;

  if (message.content.indexOf(prefix) !== 0 || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "setup") {
    const type = args[0];
    const setup = args.slice(1).join(" ");

    if (type === "goobyechannel") {
      if (!setup)
        return message.channel.send(
          `<:botno:766649381411618837> | <@!${message.author.id}>, Please send a welcome message send place id with this format` +
          prefix +
          "setleavesendplace [welcome message send place] or skip this to make it send random channel(random only for if have welcomemessage)"
        );
      bot.db.set(
        `${message.guild.id}_leavechannel`,
        setup.replace("<#", "").replace(">", "")
      );
      message.channel.send(
        `<a:bener:744780650216685658> | Successfully setup leave message send place`
      );
      return;
    }
  }
});

//leveling
function xp(message) {
  let xp = bot.db.add(
    `xp_${message.author.id}`,
    Math.floor(Math.random() * 5) + 3
  );
  let level = Math.floor(0.3 * Math.sqrt(xp));

  let lvl =
    bot.db.get(`level_${message.author.id}`) ||
    bot.db.set(`level_xp_${message.author.id}`, 1);
  if (level > lvl) {
    let newLevel = bot.db.set(`level_${message.author.id}`, level);
    if (
      message.guild.id === "865943338876010506" ||
      bot.db.get(`${message.guild.id}_lvlupmsg`) === "no"
    )
      return;
    message.channel
      .send(`> ${message.author.toString()} is now at level ${newLevel} in global!`);
  }
}

function serverxp(message) {
  let a = message.guild.id;
  let xp = bot.db.add(
    `${a}xp_${message.author.id}`,
    Math.floor(Math.random() * 5) + 3
  );
  let level = Math.floor(0.3 * Math.sqrt(xp));
  let lvl =
    bot.db.get(`${a}level_${message.author.id}`) ||
    bot.db.set(`${a}level_${a}xp_${message.author.id}`, 1);
  if (level > lvl) {
    let newLevel = bot.db.set(`${a}level_${message.author.id}`, level);
    if (
      message.guild.id === "865943338876010506" ||
      bot.db.get(`${message.guild.id}_lvlupmsg`) === "no"
    )
      return;
    message.channel
      .send(
        `> ${message.author.toString()} is now on level ${newLevel} in this server!`);
  }
}
bot.on("guildCreate", (guild) => {
  let testo = bot.db.get(`${bot.config.prefix}`) || "w";

  bot.channels.cache
    .get("996342640901640233")
    .send(
      `New Guild Joined: (**${guild.name}**)\nID: (**${guild.id}**)\nThis Guild has **${guild.memberCount}** Members`
    );
  guild.systemChannel
    .send(
      `<:icon:976855886775586846> **thanks for adding Pleux**\nPrefix \`${testo}\` and command help \`${testo}help\`, bot prefix you can change by using command \`${testo}setprefix\`.\n***Hello***\nHello, I'm a bot (pleux), I'm a bot system, what I mean by my system is to make it easier for your server system to switch to bots, commands that are safe without any symptoms, if there are symptoms, please type prefix \`${testo}report\` to send bugs or something problematic on bots.\n***Support***\nSupport us by voting for our bot or joining our discord server, don't forget to share the pleux invite link (<https://bit.ly/pleux-invite>) with your friends. And visit our website <https://pleux.ga> and our blog to see the latest updates from pleux <https://pleuxbot.blogspot.com/>.`
    )
    .catch((x) => x.return);
});
bot.on("guildDelete", (guild) => {
  bot.channels.cache
    .get("996342640901640233")
    .send(
      `I have been removed from: (**${guild.name}**)\nID: (**${guild.id}**)\nThis Guild has **${guild.memberCount}** Members`
    );
});
bot.login(process.env.TOKEN);

const app = express();
//app.use(express.static(__dirname + "/public"))
const port = process.env.PORT || 3000;

//app.get("/", async (req, res) => {
// res.send("Pleux Beta - By YoruAkio | Maulana")
//})

// app.get('/info', async (req, res) => {
// const users = bot.users.cache.size // get pleux users count on database
// const guilds = bot.guilds.cache.size // get pleux total guilds on database

// let file = fs.readFileSync('./public/info.html', { encoding: "utf8" }) // read file html

// file = file.replace("$$guilds$$", guilds) // replace $$guilds$$ with guilds count
// file = file.replace("$$users$$", users) // replace $$users$$ with users count

// res.send(file)
// })

app.listen(port, () => console.log(`Server is live on port ${port}`));
