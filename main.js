const Discord = require('discord.js');
const client = new Discord.Client();
  
client.on('ready', () => {
     console.log(`The bot is online`);
});



client.on('guildMemberAdd', member =>{
  const channel = member.guild.channels.cache.find(channel => channel.name === "YOUR_CHANNEL_NAME");
  const rulesChannel = "YOUR_RULE_CHANNEL_ID";

  if(!channel) return;
  let embed = new Discord.MessageEmbed()
  .setTitle(`${member.user.tag} had joined the server !`)
  .setAuthor(`Welcome`, `https://i.imgur.com/vcsFDSN.png`)
  .setColor("RED")
  .setDescription(`If you're new , be sure to check out our ${member.guild.channels.cache.get(rulesChannel).toString()}`)
  .setThumbnail(`${member.user.displayAvatarURL()}`)
  .setTimestamp()

  channel.send(embed)

});

client.login(process.env.token);