const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.RichEmbed()
.setAuthor("Mysteria", client.user.avatarURL)
.setTitle("Mysteria")
.setURL("https://discord.com/oauth2/authorize?client_id=790258377670262814&scope=bot&permissions=8")
.setDescription("Botu Kendi Sunucuna Davet Edebilirsin :)")
.setColor("BLUE")
.setTimestamp()
.addField("Destek", "[Destek Sunucusu](https://discord.gg/5Xwkg7kBVa)")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};