const Discord = require('discord.js');
exports.run = async (client, message, args) => {
var comp = Math.floor(Math.random() * 36);
  
  var p = args[0]
  if(comp < 0.34 ) {
comp = 'diamond'; // gajah
  } else if (comp >= 0.34 && comp < 0.67) {
comp = 'chand' // orang
} else {
comp = 'blueblock' //semut
}
  
   var value = '';
  
if (p == comp) {
  value = 'series';
} else if (p == 'diamond' ) {
  value = (comp == 'chand') ? 'WIN' : 'LOSE';
} else if(p == 'chand') {
  value = (comp == 'diamond') ? 'LOSE' : 'WIN';
} else if (p == 'blueblock') {
value = (comp == 'chand') ? 'LOSE' : 'WIN';
} else {
value = `${args[0]} not valid`;
}
  
  message.channel.send(`you chose ${p}  and me chose ${comp} and value is ${value}`)
};
exports.info = {
name: "flip",
aliases: []
}
exports.conf = {
cooldown: 0,
dm: "yes"
}