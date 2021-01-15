const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**<:OnaylanmPng:796791423609077781> Müzik Komutları<:OnaylanmPng:796791423609077781>**',`
**<:OnaylanmPng:796791423609077781> m!oynat** : İstediğiniz Müziği Oynatır!
**<:OnaylanmPng:796791423609077781> m!durdur** : Oynatılan Müziği Durdurur!
**<:OnaylanmPng:796791423609077781> m!geç** : Sıradaki Şarkıya Geçer!
**<:OnaylanmPng:796791423609077781> m!ses** : Ses Seviyesini Belirler!
**<:OnaylanmPng:796791423609077781> m!tekrar** : Çalan şarkı bitince tekrar çalar!
**<:OnaylanmPng:796791423609077781> m!kuyruk** : Sıradaki Şarkıları Gösterir!
**<:OnaylanmPng:796791423609077781> m!devamet** : Durdurulan Müziği Oynatır!
**<:OnaylanmPng:796791423609077781> m!oynatılan** : Şuan da Çalan Müziği Gösterir!
**<:OnaylanmPng:796791423609077781> m!ping** : Botun Pingini Gösterir!
** <:OnaylanmPng:796791423609077781> m!kapat** : Oynatılan Müziği Kapatır!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .addField("**<:ListePng:796791422408720394> Linkler**", "[<:OnaylanmPng:796791423609077781> Davet Linki](https://discord.com/oauth2/authorize?client_id=790258377670262814&scope=bot&permissions=8)\n[<:OnaylanmPng:796791423609077781> Destek Sunucu](https://discord.gg/3apPrcEEm3)")
.setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'müzik',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   