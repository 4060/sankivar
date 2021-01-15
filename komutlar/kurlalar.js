const Discord = require('discord.js');


exports.run = function(client, message) {
  message.delete(100)
const embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('» Kurallar')
.setTimestamp()
.addField('» **Her sunucunun kuralları vardır bu sunucununda bir kuralları vardır!**', '**1)** <a:assagiok:788408059885649922> Küfür,hakaret,kötüsöz... yasaktır \n **2)** İzinsiz reklam veya link paylaşımı yasaktır. \n **3)** Irkçılık , din , siyaset... yasaktır. \n **4)** Spam,flood yapmak yasaktır. \n **5)** NSFW paylaşımlar yasaktır. \n **6)** Rahatsız edici davranışlarda bulunma yasaktır. \n **7)** Kavga çıkarmak , tartışma oluşturmak yasaktır \n **__Herkes kuralları okumuş ve kabul etmiş sayılır! , ben bilmiyordum vb geçmez!__**')
.setImage("https://cdn.discordapp.com/attachments/795774854669795372/795793514973626418/Normal_Dosya_LexyArtz_9.png")
.setFooter('© 2020 Mysteria Bot', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'Hazır sunucu kuralları.',
  usage: 'kurallar'
};
