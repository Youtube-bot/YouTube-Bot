const Discord = require("discord.js")
exports.run = (client, guild) => {
    var Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`${guild.name} (${guild.id})`)
    .addField(`Owner`, `${guild.owner.user.tag} (${guild.ownerID})`)
    .setColor('RED')
    .setFooter('LEFT DISCORD SERVER');
    client.channels.get("567005354873847838").send(Embed)
}