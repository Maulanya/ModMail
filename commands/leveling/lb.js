const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  //message.channel.startTyping();
const color = "#34c6eb"
  if (args[0] === "global") {
     let ao = message.guild.id;
    if (args[1]) {
      if (isNaN(args[1])) {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("xp_"))
          .sort((a, b) => b.data - a.data);
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let myrank =
          data.map((m) => m.ID).indexOf(`xp_${message.author.id}`) + 1 || "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data.indexOf(data[i]) + 1;
          let level = client.db.get(`${ao}level_${id}`) || 1;
          let xp = client.db.get(`${ao}xp_${id}`);
          let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
            level,
            xp,
            xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("Global Leaderboard")
          .setColor(color);
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `**Level** - ${d.level}\n**XP** - ${d.xp} / ${d.xpreq}`
          );
        });
        embed.setFooter(`Your Position: #${myrank}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      } else {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("xp_"))
          .sort((a, b) => b.data - a.data)
          .splice(10 * (parseInt(args[1]) - 1), 10 * parseInt(args[1]));
        if (parseInt(args[1]) > Math.ceil(Object.keys(data).length / 10)) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let data2 = client.db
          .all()
          .filter((i) => i.ID.startsWith("xp_"))
          .sort((a, b) => b.data - a.data);
        let myrank =
          data2.map((m) => m.ID).indexOf(`xp_${message.author.id}`) + 1 ||
          "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data2.indexOf(
            data2[i * 1 + 1 + 10 * (parseInt(args[1]) - 1)]
          );
          let level = client.db.get(`level_${id}`) || 1;
          let xp = data[i].data;
          let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
            level,
            xp,
            xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("Global leaderboard")
          .setColor(color);
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `**Level** - ${d.level}\n**XP** - ${d.xp} / ${d.xpreq}`
          );
        });
        embed.setFooter(`Your Position: #${myrank}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      }
    }
    let data = client.db
      .all()
      .filter((i) => i.ID.startsWith("xp_"))
      .sort((a, b) => b.data - a.data);
    if (data.length < 1) {
      client.sleep(2000);
      message.channel.stopTyping();
      return message.channel.send("No leaderboard");
    }
    let myrank =
      data.map((m) => m.ID).indexOf(`xp_${message.author.id}`) + 1 || "N/A";
    data.length = 10;
    let lb = [];
    for (let i in data) {
      let id = data[i].ID.split("_")[1];
      let user = await client.users.fetch(id);
      user = user ? user.tag : "Unknown User#0000";
      let rank = data.indexOf(data[i]) + 1;
      let level = client.db.get(`level_${id}`) || 1;
      let xp = data[i].data;
      let xpreq = Math.floor(Math.pow(level / 0.1, 2));
      lb.push({
        user: { id, tag: user },
        rank,
        level,
        xp,
        xpreq,
      });
    }

    const embed = new MessageEmbed()
      .setTitle("Global leaderboard")
      .setColor(color);
    lb.forEach((d) => {
      embed.addField(
        `<:king:953541757147177020> ${d.rank}. ${d.user.tag}`,
        `**Level** - ${d.level}\n**XP** - ${d.xp} / ${d.xpreq}`
      );
    });
    embed.setFooter(`Your Position: #${myrank}`);
    client.sleep(2000);
    message.channel.stopTyping();
    return message.channel.send(embed);
  } else if (args[0] === "wl") {
     let ao = message.guild.id;
    if (args[1]) {
      if (isNaN(args[1])) {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("wl_"))
          .sort((a, b) => b.data - a.data);
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let myrankwl =
          data.map((m) => m.ID).indexOf(`wl_${message.author.id}`) + 1 || "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data.indexOf(data[i]) + 1;
         // let level = client.db.get(`${ao}level_${id}`) || 1;
          let xp = client.db.get(`${ao}wl_${id}`);
         // let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
         //   level,
            xp,
           // xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("World Lock Leaderboard")
          .setColor("#009dff");
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `<:wl:994043081512996934> **World Lock** - ${d.xp}`
          );
        });
        embed.setFooter(`Your Position: #${myrankwl}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      } else {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("wl_"))
          .sort((a, b) => b.data - a.data)
          .splice(10 * (parseInt(args[1]) - 1), 10 * parseInt(args[1]));
        if (parseInt(args[1]) > Math.ceil(Object.keys(data).length / 10)) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let data2 = client.db
          .all()
          .filter((i) => i.ID.startsWith("wl_"))
          .sort((a, b) => b.data - a.data);
        let myrankw =
          data2.map((m) => m.ID).indexOf(`wl_${message.author.id}`) + 1 ||
          "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data2.indexOf(
            data2[i * 1 + 1 + 10 * (parseInt(args[1]) - 1)]
          );
        //  let level = client.db.get(`level_${id}`) || 1;
          let xp = data[i].data;
          //let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
         //   level,
            xp,
         //   xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("World Lock leaderboard")
          .setColor("#009dff");
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `<:wl:994043081512996934> **World Lock Lock** - ${d.xp}`
          );
        });
        embed.setFooter(`Your Position: #${myrankwl}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      }
    }
    let data = client.db
      .all()
      .filter((i) => i.ID.startsWith("wl_"))
      .sort((a, b) => b.data - a.data);
    if (data.length < 1) {
      client.sleep(2000);
      message.channel.stopTyping();
      return message.channel.send("No leaderboard");
    }
    let myrankwl =
      data.map((m) => m.ID).indexOf(`wl_${message.author.id}`) + 1 || "N/A";
    data.length = 10;
    let lb = [];
    for (let i in data) {
      let id = data[i].ID.split("_")[1];
      let user = await client.users.fetch(id);
      user = user ? user.tag : "Unknown User#0000";
      let rank = data.indexOf(data[i]) + 1;
     // let level = client.db.get(`level_${id}`) || 1;
      let xp = data[i].data;
    //  let xpreq = Math.floor(Math.pow(level / 0.1, 2));
      lb.push({
        user: { id, tag: user },
        rank,
    //    level,
        xp,
      //  xpreq,
      });
    }

    const embed = new MessageEmbed()
      .setTitle("World Lock leaderboard")
      .setColor("#009dff");
    lb.forEach((d) => {
      embed.addField(
        `${d.rank}. ${d.user.tag}`,
        `<:wl:994043081512996934> **World Lock** - ${d.xp}`
      );
    });
    embed.setFooter(`Your Position: #${myrankwl}`);
    client.sleep(2000);
    message.channel.stopTyping();
    return message.channel.send(embed);
  } else if (args[0] === "bgl") {
     let ao = message.guild.id;
    if (args[1]) {
      if (isNaN(args[1])) {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("bgl_"))
          .sort((a, b) => b.data - a.data);
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let myrankbgl =
          data.map((m) => m.ID).indexOf(`bgl_${message.author.id}`) + 1 || "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data.indexOf(data[i]) + 1;
         // let level = client.db.get(`${ao}level_${id}`) || 1;
          let xp = client.db.get(`${ao}bgl_${id}`);
         // let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
         //   level,
            xp,
           // xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("Blue Gems Lock Leaderboard")
          .setColor("#009dff");
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `<:bgl:994042338538168370> **Blue Gems Lock** - ${d.xp}`
          );
        });
        embed.setFooter(`Your Position: #${myrankbgl}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      } else {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("bgl_"))
          .sort((a, b) => b.data - a.data)
          .splice(10 * (parseInt(args[1]) - 1), 10 * parseInt(args[1]));
        if (parseInt(args[1]) > Math.ceil(Object.keys(data).length / 10)) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let data2 = client.db
          .all()
          .filter((i) => i.ID.startsWith("bgl_"))
          .sort((a, b) => b.data - a.data);
        let myrankw =
          data2.map((m) => m.ID).indexOf(`bgl_${message.author.id}`) + 1 ||
          "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data2.indexOf(
            data2[i * 1 + 1 + 10 * (parseInt(args[1]) - 1)]
          );
        //  let level = client.db.get(`level_${id}`) || 1;
          let xp = data[i].data;
          //let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
         //   level,
            xp,
         //   xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("Blue Gems Lock leaderboard")
          .setColor("#009dff");
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `<:bgl:994042338538168370> **Blue Gems Lock** - ${d.xp}`
          );
        });
        embed.setFooter(`Your Position: #${myrankbgl}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      }
    }
    let data = client.db
      .all()
      .filter((i) => i.ID.startsWith("bgl_"))
      .sort((a, b) => b.data - a.data);
    if (data.length < 1) {
      client.sleep(2000);
      message.channel.stopTyping();
      return message.channel.send("No leaderboard");
    }
    let myrankbgl =
      data.map((m) => m.ID).indexOf(`bgl_${message.author.id}`) + 1 || "N/A";
    data.length = 10;
    let lb = [];
    for (let i in data) {
      let id = data[i].ID.split("_")[1];
      let user = await client.users.fetch(id);
      user = user ? user.tag : "Unknown User#0000";
      let rank = data.indexOf(data[i]) + 1;
     // let level = client.db.get(`level_${id}`) || 1;
      let xp = data[i].data;
    //  let xpreq = Math.floor(Math.pow(level / 0.1, 2));
      lb.push({
        user: { id, tag: user },
        rank,
    //    level,
        xp,
      //  xpreq,
      });
    }

    const embed = new MessageEmbed()
      .setTitle("Blue Gems Lock leaderboard")
      .setColor("#009dff");
    lb.forEach((d) => {
      embed.addField(
        `${d.rank}. ${d.user.tag}`,
        `<:bgl:994042338538168370> **Blue Gems Lock** - ${d.xp}`
      );
    });
    embed.setFooter(`Your Position: #${myrankbgl}`);
    client.sleep(2000);
    message.channel.stopTyping();
    return message.channel.send(embed);
  }
  else if (args[0] === "dl") {
     let ao = message.guild.id;
    if (args[1]) {
      if (isNaN(args[1])) {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("dl_"))
          .sort((a, b) => b.data - a.data);
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let myrankdl =
          data.map((m) => m.ID).indexOf(`dl_${message.author.id}`) + 1 || "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data.indexOf(data[i]) + 1;
         // let level = client.db.get(`${ao}level_${id}`) || 1;
          let xp = client.db.get(`${ao}dl_${id}`);
         // let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
         //   level,
            xp,
           // xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("Diamond Lock Leaderboard")
          .setColor("#34c6eb");
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `<:dl:994042840143380581> **Diamond Lock** - ${d.xp}`
          );
        });
        embed.setFooter(`Your Position: #${myrankdl}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      } else {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("dl_"))
          .sort((a, b) => b.data - a.data)
          .splice(10 * (parseInt(args[1]) - 1), 10 * parseInt(args[1]));
        if (parseInt(args[1]) > Math.ceil(Object.keys(data).length / 10)) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let data2 = client.db
          .all()
          .filter((i) => i.ID.startsWith("dl_"))
          .sort((a, b) => b.data - a.data);
        let myrankdl =
          data2.map((m) => m.ID).indexOf(`dl_${message.author.id}`) + 1 ||
          "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data2.indexOf(
            data2[i * 1 + 1 + 10 * (parseInt(args[1]) - 1)]
          );
        //  let level = client.db.get(`level_${id}`) || 1;
          let xp = data[i].data;
          //let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
         //   level,
            xp,
         //   xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("Diamond Lock leaderboard")
          .setColor("#34c6eb");
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `<:dl:994042840143380581> **Diamond Lock** - ${d.xp}`
          );
        });
        embed.setFooter(`Your Position: #${myrankdl}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      }
    }
    let data = client.db
      .all()
      .filter((i) => i.ID.startsWith("dl_"))
      .sort((a, b) => b.data - a.data);
    if (data.length < 1) {
      client.sleep(2000);
      message.channel.stopTyping();
      return message.channel.send("No leaderboard");
    }
    let myrankdl =
      data.map((m) => m.ID).indexOf(`dl_${message.author.id}`) + 1 || "N/A";
    data.length = 10;
    let lb = [];
    for (let i in data) {
      let id = data[i].ID.split("_")[1];
      let user = await client.users.fetch(id);
      user = user ? user.tag : "Unknown User#0000";
      let rank = data.indexOf(data[i]) + 1;
     // let level = client.db.get(`level_${id}`) || 1;
      let xp = data[i].data;
    //  let xpreq = Math.floor(Math.pow(level / 0.1, 2));
      lb.push({
        user: { id, tag: user },
        rank,
    //    level,
        xp,
      //  xpreq,
      });
    }

    const embed = new MessageEmbed()
      .setTitle("Diamond Lock leaderboard")
      .setColor("#34c6eb");
    lb.forEach((d) => {
      embed.addField(
        `${d.rank}. ${d.user.tag}`,
        `<:dl:994042840143380581> **Diamond Lock** - ${d.xp}`
      );
    });
    embed.setFooter(`Your Position: #${myrankdl}`);
    client.sleep(2000);
    message.channel.stopTyping();
    return message.channel.send(embed);
  }
  else if (args[0] === "gems") {
     let ao = message.guild.id;
    if (args[1]) {
      if (isNaN(args[1])) {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("gems_"))
          .sort((a, b) => b.data - a.data);
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let myrankg =
          data.map((m) => m.ID).indexOf(`gems_${message.author.id}`) + 1 || "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data.indexOf(data[i]) + 1;
         // let level = client.db.get(`${ao}level_${id}`) || 1;
          let xp = client.db.get(`${ao}gems_${id}`);
         // let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
         //   level,
            xp,
           // xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("Gems Leaderboard")
          .setColor("#ff0000");
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `<:gems:994042284553277470> **Gems** - ${d.xp}`
          );
        });
        embed.setFooter(`Your Position: #${myrankg}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      } else {
        let data = client.db
          .all()
          .filter((i) => i.ID.startsWith("gems_"))
          .sort((a, b) => b.data - a.data)
          .splice(10 * (parseInt(args[1]) - 1), 10 * parseInt(args[1]));
        if (parseInt(args[1]) > Math.ceil(Object.keys(data).length / 10)) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        if (data.length < 1) {
          client.sleep(2000);
          message.channel.stopTyping();
          return message.channel.send("No leaderboard");
        }
        let data2 = client.db
          .all()
          .filter((i) => i.ID.startsWith("gems_"))
          .sort((a, b) => b.data - a.data);
        let myrankg =
          data2.map((m) => m.ID).indexOf(`gems_${message.author.id}`) + 1 ||
          "N/A";
        data.length = 10;
        let lb = [];
        for (let i in data) {
          let id = data[i].ID.split("_")[1];
          let user = await client.users.fetch(id);
          user = user ? user.tag : "Unknown User#0000";
          let rank = data2.indexOf(
            data2[i * 1 + 1 + 10 * (parseInt(args[1]) - 1)]
          );
        //  let level = client.db.get(`level_${id}`) || 1;
          let xp = data[i].data;
          //let xpreq = Math.floor(Math.pow(level / 0.1, 2));
          lb.push({
            user: { id, tag: user },
            rank,
         //   level,
            xp,
         //   xpreq,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("Gems leaderboard")
          .setColor("#ff0000");
        lb.forEach((d) => {
          embed.addField(
            `${d.rank}. ${d.user.tag}`,
            `<:gems:994042284553277470> **Gems** - ${d.xp}`
          );
        });
        embed.setFooter(`Your Position: #${myrankg}`);
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send(embed);
      }
    }
    let data = client.db
      .all()
      .filter((i) => i.ID.startsWith("gems_"))
      .sort((a, b) => b.data - a.data);
    if (data.length < 1) {
      client.sleep(2000);
      message.channel.stopTyping();
      return message.channel.send("No leaderboard");
    }
    let myrankg =
      data.map((m) => m.ID).indexOf(`gems_${message.author.id}`) + 1 || "N/A";
    data.length = 10;
    let lb = [];
    for (let i in data) {
      let id = data[i].ID.split("_")[1];
      let user = await client.users.fetch(id);
      user = user ? user.tag : "Unknown User#0000";
      let rank = data.indexOf(data[i]) + 1;
     // let level = client.db.get(`level_${id}`) || 1;
      let xp = data[i].data;
    //  let xpreq = Math.floor(Math.pow(level / 0.1, 2));
      lb.push({
        user: { id, tag: user },
        rank,
    //    level,
        xp,
      //  xpreq,
      });
    }

    const embed = new MessageEmbed()
      .setTitle("Gems leaderboard")
      .setColor("#ff0000");
    lb.forEach((d) => {
      embed.addField(
        `${d.rank}. ${d.user.tag}`,
        `<:gems:994042284553277470> **Gems** - ${d.xp}`
      );
    });
    embed.setFooter(`Your Position: #${myrankg}`);
    client.sleep(2000);
    message.channel.stopTyping();
    return message.channel.send(embed);
  } else if (args[0] === "level") {
  //server
  if (!message.guild) return;
  let ao = message.guild.id;
  if (args[0]) {
    if (isNaN(args[0])) {
      let data = client.db
        .all()
        .filter((i) => i.ID.startsWith(`${ao}xp_`))
        .sort((a, b) => b.data - a.data);
      if (data.length < 1) {
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send("No leaderboard");
      }
      let myrankl =
        data.map((m) => m.ID).indexOf(`${ao}xp_${message.author.id}`) + 1 ||
        "N/A";
      data.length = 10;
      let lb = [];
      for (let i in data) {
        let id = data[i].ID.split("_")[1];
        let user = await client.users.fetch(id);
        user = user ? user.tag : "Unknown User#0000";
        let rank = data.indexOf(data[i]);
        let level = client.db.get(`${ao}level_${id}`) || 1;
        let xp = data[i].data;
        let xpreq = Math.floor(Math.pow(level / 0.1, 2));
        lb.push({
          user: { id, tag: user },
          rank,
          level,
          xp,
          xpreq,
        });
      }

      const embed = new MessageEmbed()
        .setTitle(`${message.guild.name} Leaderboard`)
        .setColor(color);
      lb.forEach((d) => {
        embed.addField(
          `${d.rank}. ${d.user.tag}`,
          `**Level** - ${d.level || 1}\n**XP** - ${d.xp} / ${d.xpreq || 100}`
        );
      });
      embed.setFooter(`Your Position: #${myrankl}`);
      client.sleep(2000);
      message.channel.stopTyping();
      return message.channel.send(embed);
    } else {
      let data = client.db
        .all()
        .filter((i) => i.ID.startsWith(`${ao}xp_`))
        .sort((a, b) => b.data - a.data)
        .splice(10 * (parseInt(args[0]) - 1), 10 * parseInt(args[0]));
      if (parseInt(args[0]) > Math.ceil(Object.keys(data).length / 10)) {
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send("No leaderboard!");
      }
      let data2 = client.db
        .all()
        .filter((i) => i.ID.startsWith(`${ao}xp_`))
        .sort((a, b) => b.data - a.data);
      if (data.length < 1) {
        client.sleep(2000);
        message.channel.stopTyping();
        return message.channel.send("No leaderboard");
      }
      let myrankl =
        data2.map((m) => m.ID).indexOf(`${ao}xp_${message.author.id}`) + 1 ||
        "N/A";
      data.length = 10;
      let lb = [];
      for (let i in data) {
        let id = data[i].ID.split("_")[1];
        let user = await client.users.fetch(id);
        user = user ? user.tag : "Unknown User#0000";
        let rank = data2.indexOf(
          data2[i * 1 + 1 + 10 * (parseInt(args[0]) - 1)]
        );
        let level = client.db.get(`${ao}level_${id}`) || 1;
        let xp = data[i].data;
        let xpreq = Math.floor(Math.pow(level / 0.1, 2));
        lb.push({
          user: { id, tag: user },
          rank,
          level,
          xp,
          xpreq,
        });
      }

      const embed = new MessageEmbed()
        .setTitle(`${message.guild.name} Leaderboard`)
        .setColor(color);
      lb.forEach((d) => {
        embed.addField(
          `${d.rank}. ${d.user.tag}`,
          `**Level** - ${d.level || 1}\n**XP** - ${d.xp} / ${d.xpreq}`
        );
      });
      embed.setFooter(`Your Position: #${myrankl}`);
      client.sleep(2000);
      message.channel.stopTyping();
      return message.channel.send(embed);
    }
  }

  let data = client.db
    .all()
    .filter((i) => i.ID.startsWith(`${ao}xp_`))
    .sort((a, b) => b.data - a.data);
  if (data.length < 1) {
    client.sleep(2000);
    message.channel.stopTyping();
    return message.channel.send("No leaderboard");
  }
  let myrankl =
    data.map((m) => m.ID).indexOf(`${ao}xp_${message.author.id}`) + 1 || "N/A";
  data.length = 10;
  let lb = [];
  for (let i in data) {
    let id = data[i].ID.split("_")[1];
    let user = await client.users.fetch(id);
    user = user ? user.tag : "Unknown User#0000";
    let rank = data.indexOf(data[i]) + 1;
    let level = client.db.get(`${ao}level_${id}`) || 1;
    let xp = data[i].data;
    let xpreq = Math.floor(Math.pow(level / 0.1, 2));
    lb.push({
      user: { id, tag: user },
      rank,
      level,
      xp,
      xpreq,
    });
  }

  const embed = new MessageEmbed().setTitle(`${message.guild.name} Leaderboard`).setColor(color);
  lb.forEach((d) => {
    embed.addField(
      `<:king:953541757147177020> ${d.rank}. ${d.user.tag}`,
      `**Level** - ${d.level || 1}\n**XP** - ${d.xp} / ${d.xpreq || 100}`
    );
  });
  embed.setFooter(`Your Position: #${myrankl}`);
  client.sleep(2000);
  message.channel.stopTyping();
  return message.channel.send(embed);
   } else {
let embed3 = new discord.MessageEmbed()
        .setColor(" #00ff11")
        .setTitle(`Leaderboard`)
.setThumbnail("https://cdn.discordapp.com/avatars/993729379614076931/fd3ae5f5098a56547207cbf7d9dc240f.webp?size=1024.png")
        .setDescription(`- **level** (to see the level leaderboard on the server).\n- **global** (to see the global level leaderboard).\n- **gems** (to see the global Gems leaderboard).\n- **wl** (to see the global World Lock leaderboard).\n- **dl** (to see the global Diamond Lock leaderboard).\n- **bgl** (to see the global Blue Gems Lock leaderboard).`)
  .addField(`Example\n`, `\`\`${client.config.prefix}lb wl\`\``)
.setFooter(`WizBot`)
        .setTimestamp()
     message.channel.send(embed3)
}
};

module.exports.info = {
  name: "leaderboard",
  aliases: ["lb", "leaderboard"],
  description: "Shows the users leaderboard",
  usage: '("global")',
};
exports.conf = {
  cooldown: 0,
  dm: "yes",
};
