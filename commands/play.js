const Discord = require('discord.js')
const config = require("../config.json")

exports.run = (client, message, args) => {


    let queue = await client.player.getQueue(message.guild.id).lenght;
if(!message.member.voiceChannel) return message.channel.send("❌ | Error: You're not in a voice channel !")
if(!args[0]) return message.channel.send("❌ | Error: please add a music name !")
if(queue > 30) return message.channel.send("🛑 | Error: you can't add more than 30 music, please subscribe to the premium to increase this limit")
if(client.player.isPlaying(message.guild.id)){

    let song = await client.player.addToQueue(message.guild.id, args[0]);

 const embedok = new Discord.RichEmbed()
.setDescription(`__**✅ Added to queue 🎶**__\n  » ${song.name}`)
.addBlankField()
.setAuthor(`requested by ${message.author.tag}`, message.author.avatarURL)
.setTimestamp()
message.channel.send(embedok)
} else {
    let song = await client.player.play(message.member.voiceChannel, args[0])
    const embedok1 = new Discord.RichEmbed()
    .setDescription(`__**✅ Now playing 🎶**__\n  » ${song.name}`)
    .addBlankField()
    .setTimestamp()
    message.channel.send(embedok1)
}
}