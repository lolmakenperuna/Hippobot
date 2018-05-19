const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let sembed = new Discord.RichEmbed()
  .setDescription("Palvelimen info")
  .setColor("#ffffff")
  .setThumbnail(sicon)
  .addField("Palvelimen nimi", message.guild.name)
  .addField("Luotu", message.guild.createdAt)
  .addField("Sinä liityit", message.member.joinedAt)
  .addField("Kaikki käyttäjät", message.guild.memberCount);

  return message.channel.send(sembed);
}

module.exports.help = {
  name: "serverinfo"
}
