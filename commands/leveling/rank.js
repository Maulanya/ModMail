const { MessageAttachment, MessageEmbed } = require("discord.js");
const Discord = require ("discord.js");
const canvacord = require(`canvacord`);
module.exports.run = async (client, message, args) => {
  if(args[0] === "global")
    {
let usera;
let x;
  if(!args[1]){
           usera = message.author
           x = usera
         }else{  
         usera = await message.guild.members.fetch(args[1].replace("<@!", "").replace("<@", "").replace(">", ""))
           x = usera.user
         }
     let level = client.db.get(`${ao}level_${x.id}`) || 1;
  let exp = client.db.get(`${ao}xp_${x.id}`);
  let neededXP = Math.floor(Math.pow(level / 0.1, 2));

  let every = client.db.all().filter(i => i.ID.startsWith(`${ao}xp_`)).sort((a, b) => b.data - a.data);
  let rank = every.map(x => x.ID).indexOf(`${ao}xp_${x.id}`) + 1;

     const card = new canvacord.Rank()
    .setAvatar(message.author.displayAvatarURL ({ dynamic: false, format: "png"}))
     //https://i1.wp.com/c4.wallpaperflare.com/wallpaper/530/522/437/shapes-colorful-multicolor-dark-background-wallpaper-preview.jpg
     .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/929291256557879336/994080432171778129/Screenshot_2022_0706_112036.png")
     .setLevel(level)
     .setRank(rank)
    .setCurrentXP(exp)
    .setRequiredXP(neededXP)
    .setStatus(usera.user.presence.status)
    .setProgressBar("#00F3FF", "COLOR")
    .setUsername(`${message.author.username}`)
    .setDiscriminator(`${message.author.discriminator}`);

card.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });
 }

if(!message.guild) return;
  let useram;
let x;
  let ao= message.guild.id;
  if(!args[0]){
           useram = message.member
           x = useram
         }else{
         useram = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", ""))
           x = useram.user
         }
   let level = client.db.get(`${ao}level_${x.id}`) || 1;
  let exp = client.db.get(`${ao}xp_${x.id}`);
  let neededXP = Math.floor(Math.pow(level / 0.1, 2));

  let every = client.db.all().filter(i => i.ID.startsWith(`${ao}xp_`)).sort((a, b) => b.data - a.data);
  let rank = every.map(x => x.ID).indexOf(`${ao}xp_${x.id}`) + 1;

     const card = new canvacord.Rank()
    .setAvatar(useram.user.displayAvatarURL ({ dynamic: false, format: "png"}))
     //https://i1.wp.com/c4.wallpaperflare.com/wallpaper/530/522/437/shapes-colorful-multicolor-dark-background-wallpaper-preview.jpg
     .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/929291256557879336/994080432171778129/Screenshot_2022_0706_112036.png")
     .setLevel(level)
     .setRank(rank)
     .setCurrentXP(exp)
    .setRequiredXP(neededXP)
    .setStatus(useram.user.presence.status)
    .setProgressBar("#00F3FF", "COLOR")
    .setUsername(`${useram.user.username}`)
   .setDiscriminator(`${useram.user.discriminator}`);

card.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    })
  };

module.exports.info = {
  name: "rank",
  aliases: ["lvl", "level"],
  description: "Shows your or a user's rank card",
  usage: "(<user_id_or_mention>)"
};
exports.conf={
  cooldown: 5,
  dm: "yes"
}