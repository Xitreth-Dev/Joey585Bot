exports.run = (client, message, Discord) => {

    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    message.react('🤓')
}