const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yardım Menüsü")
  .setDescription('**⚡  Mysteria Yardım Komutları ⚡ **')                  
  
  .setColor("RANDOM")
  .addField("**<:OnaylanmPng:796791423609077781>  m!yardım <:OnaylanmPng:796791423609077781>**" , " **Yardım Menüsünü Gösterir!** ")
  .addField("**<:OnaylanmPng:796791423609077781>  m!yetkili <:OnaylanmPng:796791423609077781>**", " **Yetkili Komutlarını Gösterir!** ",)
  .addField("**<:OnaylanmPng:796791423609077781> m!kullanıcı <:OnaylanmPng:796791423609077781> **", " **Kullanıcı Komutlarını Gösterir!**`",)
  .addField("**<:OnaylanmPng:796791423609077781> m!eğlence <:OnaylanmPng:796791423609077781> **", " **eğlence komutlarını gösterir!** ",)
  .addField("**<:OnaylanmPng:796791423609077781> m!seviye-yardım <:OnaylanmPng:796791423609077781> **", " **seviye komutlarını gösterir!** ",)
  .addField("**<:OnaylanmPng:796791423609077781> m!site <:OnaylanmPng:796791423609077781>**", " **Sentius Bot sitemize yönlendirir!** ",)
 .addField("** <:OnaylanmPng:796791423609077781>m!sunucutanıt <:OnaylanmPng:796791423609077781> **", " **sunucunuzu tanıtır!** ",)
  .addField("**<:OnaylanmPng:796791423609077781> m!istekbildir <:OnaylanmPng:796791423609077781> **", " **isteklerinizi girersiniz!** ",)
  .addField("**<:OnaylanmPng:796791423609077781>  m!müzik <:OnaylanmPng:796791423609077781> **", " **müzik komutlarını gösteriri!** ",)
 
  .setImage("https://cdn.discordapp.com/attachments/797468308035207168/798087478358704138/standard_13.gif")
  .setFooter('m!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  
  .addField("<:OnaylanmPng:796791423609077781>   **Developer**", " Sedat0611  ",)
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};