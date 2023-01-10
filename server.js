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
      prefix: "d",
      thumbail: "https://www.droidgamers.com/wp-content/uploads/2022/01/Grow_UbiWeek_Keyart_v1.7_F-1-1024x576.jpg"
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
bot.on("message", async (message) => {
  if (message.author.bot) return;
  const db = require("quick.db");

//BlackList
  const Blacklisted = db.fetch(`blacklistedUsers_${message.author.id}`)
  
  if (message.channel.type === "dm") {
      
    const dmEmbeds = new discord.MessageEmbed()
    .setAuthor(bot.user.username + ` Ilmu Komputer dan Teknologi`, bot.user.displayAvatarURL())
    .addField("Report Opened", 'Someone will respond shortly, please be patient.')
      .setColor('#03fc0f')
   .setTimestamp();
    const dmEmbed = new discord.MessageEmbed()
       .setAuthor(`New Private Message Sent by ${message.author.tag}!`, 
        `${message.author.displayAvatarURL({ dynamic: true })}`
      )
      .addField('User Name', message.author.tag)
      .addField('User ID', message.author.id)
      .addField('Message', message.content)
       .setTimestamp()
      .setColor(`#be43da`);

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
    if(Blacklisted === true) {
    message.author.send("You have been blacklisted, you cannot contact the staff.")
    } else {
      message.author.send(dmEmbeds)
 bot.channels.cache.get(`1059887940874010704`).send(dmEmbed);
    }
  }
  const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
  let testo = "d";

  if (message.content.match(prefixMention) && !message.member.hasPermission("ADMINISTRATOR")) {
    return message.reply(
      new discord.MessageEmbed()
        .setDescription(
          `This bot can only be used by server admins`
        )
        .setColor("#34c6eb")
    );
  } else if (message.content.match(prefixMention) && message.member.hasPermission("ADMINISTRATOR")) {
    return message.reply(
      new discord.MessageEmbed()
        .setDescription(
          `My current prefix in this server is  \`${testo}\`  \ntype \`${testo}dhelp\` for command`
        )
        .setColor("#34c6eb")
    );
  }
  if (message.author.bot || message.author === bot.user) return;

 
});

bot.on("ready", () => {
  bot.user.setActivity(
    `DM for contact Staff`,
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
    }
  }

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
