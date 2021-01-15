const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**Sentius Bot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("<:OnaylanmPng:796791423609077781> **s!seviye <:OnaylanmPng:796791423609077781>**" , " **Seviyenizi Gösterir!** ")
  .addField("**<:OnaylanmPng:796791423609077781>  s!seviye resim <:OnaylanmPng:796791423609077781>**", " **Seviye Resim Belirler!** ",)
  .addField("**<:OnaylanmPng:796791423609077781>  s!seviye renk <:OnaylanmPng:796791423609077781>**", " **Seviyenize Renk Verir!**`",)
  .addField("**<:OnaylanmPng:796791423609077781>  s!seviye ödül @rol [Rolün Verileceği Seviye] <:OnaylanmPng:796791423609077781>**", "**Belirtilen Seviyeye Rol Ödülü Verir!** `",)
  .addField("**<:OnaylanmPng:796791423609077781>  s!seviye saydam <:OnaylanmPng:796791423609077781>**", "**Seviyenize Saydam Görüntü Verir!** `",)
  .setFooter('**--------------------------**')
  .setFooter('s!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " **Sedat0611   ** ",)
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
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'seviye-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};