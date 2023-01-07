const currentGames = {};
const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  if(message.channel.id === "996288059391869008") {
    /*
if (currentGames[message.guild.id]) {
			return message.channel.send("GAME ALREADY RUNNING");
		}
    */
		// Reads words file
		const wordList = require("../../main/words.json");
		
		// Init some utils variables
		const participants = [],
			winners = [],
			words = [],
			nbGames = 5; //7

		// Store the date wich the game has started
		const createdAt = Date.now(); // 20929038303
    
		for(let i = 0; i < nbGames; i++){
			const result = Math.floor((Math.random() * wordList.length));
			words.push(wordList[result].substring(0, 3).toLowerCase());
		}

		let i = 0; // Inits i variable to count games
		currentGames[message.guild.id] = true; // Update current game variable
		generateGame.call(bot, words[i]); // Generate a new round
    
		function generateGame(word){
			word = word.toLowerCase();
    
			// Launch timer
			const delay = (i === 0) ? 60000 : 0;
			if(i === 0){
				message.channel.send("**GAME STARTING.**\nGuess 5 words in 1 minute to get 1-2 Growtoken");
        
			}

			setTimeout(() => {
                
				// Send announcment message
				message.channel.send(`New Word: ${word}`);
      
    
				// init a collector to receive the answers
				const collector = new Discord.MessageCollector(message.channel, (m) => !m.author.bot, {
					time: 60000
				});
    
				collector.on("collect", (msg) => {
					if(!participants.includes(msg.author.id)){
						participants.push(msg.author.id);
					}
					if(msg.content.toLowerCase().indexOf(word) >= 0 && wordList.map((word) => word.toLowerCase()).indexOf(msg.content.toLowerCase()) >= 0){
						collector.stop(msg.author.id); // Stop the collector
					} else {
						return msg.channel.send(`INVALID WORD \n By: ${msg.author.toString()}`);
					}
				});
    
				collector.on("end", async (collected, reason) => {
					if(reason === "time"){
						return message.channel.send("NO WINNER FOUND");
					} else{
						message.channel.send(`This word was found by <@${reason}>`);
						winners.push(reason);
					}
					if(i < nbGames-1) {
						i++;
						generateGame.call(this, words[i]);
					} else {
						currentGames[message.guild.id] = false;
						if(winners.length < 1){
							return message.channel.send("THERE WERE MORE THAN 2 WINNERS");
						}
						const winnerID = await getWinner(winners);
						const time = createdAt;
						const user = await bot.users.fetch(winnerID);
				 let gtoken = Math.floor(Math.random() * 2) + 1;
            
            const findwin = new Discord.MessageEmbed()
            .setTitle(`<:yeey:994831617472340018> Congratulations`)
            //.setDescription(`You won:\n<:growtoken:997017160960442398> **1** Growtoken`)
            ///.setDescription(`Winner: ${user.tag}\nParticipantCount: **${participants.length}**\nParticipantList: ${participants.map((p) => "<@"+p+">").join("\n")}`)
            .setDescription(`Congrats ${user.tag}, You won: <:growtoken:997017160960442398> **${gtoken}** Growtoken\nParticipantCount: **${participants.length}**`)
            //ParticipantList: ${participants.map((p) => "<@"+p+">").join("\n")}
            .setColor(`#34c6eb`)
            .setTimestamp();
            message.channel.send(findwin);
            db.add(`gtoken_${user.id}`, 1)
					
					}
				});
			}, delay);
		}

		async function getWinner(array){
			return new Promise(function (resolve){
				const counts = {};
				let compare = 0;
				let mostFrequent;
				for(let i = 0, len = array.length; i < len; i++){
					const winner = array[i];
					if(!counts[winner]){
						counts[winner] = 1;
					} else {
						counts[winner] = counts[winner] + 1;
					}
					if(counts[winner] > compare){
						compare = counts[winner];
						mostFrequent = array[i];
					}
				}
				resolve(mostFrequent);
			});
		}
} else if (message.guild.id == "949737691698847746" && message.channel.id != "996288059391869008") {
    message.channel.send("Use this command in <#996288059391869008>")
  } else {
message.lineReply(`Hey ${message.author}looks like you want to use this command.\ncheck the DM i have sent to you.`)
  message.author.send(`Hey ${message.author} :) \nif you want use` + " " + "`findwords` command, you only can use it on Support Server!\nGrowtoken Channel:\nhttps://discord.gg/P6t5mKRzGa")
}
}

exports.info = {
  name: 'findwords',
  aliases: [],
  description: "hug a user",
  usage: "<user_id/mention/\"me\">",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}