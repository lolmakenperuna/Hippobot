const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Ei.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("En löydä käyttäjää!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Sinun täytyy luoda rooli!");
  let gRole = message.guild.roles.find(`name`, role);

  if(rMember.roles.has(gRole.id)) return message.reply("Hänellä on jo tämä rooli!");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Onnittelut, sinulle on annettu rooli ${gRole.name}!`)
  }catch(e){
    message.channel.send(`Onnittelut, <@${rMember.id}> olemme antaneet sinulle roolin ${gRole.name}. Yritimme DM: tä heitä, mutta DM on lukittu.`)
  }
}
module.exports.help = {
  name: "addrole"
}
