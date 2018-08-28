const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();


client.on('ready', () => { // client (botumuz) hazır olduğunda
  client.user.setActivity('The Storm', { type: "PLAYING"}); // oynuyor kısmını "Seninle" yapsın
  console.log(`Hazırım!`); // konsola "Hazırım" yazsın
});
client.on("guildMemberAdd", member => {
    member.send('Hey Sen :heart: \nSunucumuza Gelirmisin \nSunucumuzun Özel Botuna Oy Verip Sunucunuza Eklemeyi Unutmayın. \nEklerseniz Çok Mutlu Olurum \n**Sunucumuzun Linki**: https://discord.gg/mJEc6Hb \n**Botumuzun DBL Sayfası**: https://discordapp.com/oauth2/authorize?=&client_id=482876031674613770&scope=bot&permissions=8');

    //member.guild.defaultChannel.sendMessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
})
client.on("guildMemberRemove", member => {
    member.send('Hey Sen :heart: \nSunucumuza Gelirmisin \nSunucumuzun Özel Botuna Oy Verip Sunucunuza Eklemeyi Unutmayın. \nEklerseniz Çok Mutlu Olurum \n**Sunucumuzun Linki**: https://discord.gg/mJEc6Hb \n**Botumuzun DBL Sayfası**: https://discordapp.com/oauth2/authorize?=&client_id=482876031674613770&scope=bot&permissions=8');

    //member.guild.defaultChannel.sendMessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
})


client.on("guildCreate", guild => {
  console.log(`Yeni sunucuya katıldım: ${guild.name}\n. Bu sunucu ${guild.memberCount} üye!`);
});
client.on("guildDelete", guild => {
  console.log(`Hey beni çıkardılar ;(: ${guild.name}`);
});



client.login("");