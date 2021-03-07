const { MessageEmbed } = require('discord.js');

exports.run = (client, message, Discord) => {
    const helpEmbed = new MessageEmbed()
	.setColor('#035efc')
	.setTitle('Help Section')
	.setAuthor('Joey585 Bot')
	.setDescription('This section will talk about the commands you can use on this bot.')
	.setThumbnail('https://pays.host/uploads/d9b47522-8eef-486c-8d9a-87f64996460b/2zgmI56M.png')
	.addFields(
		{ name: '+ping', value: 'Tells you your ping.'},
		{ name: '+help', value: 'Brings you here.'},
		{ name: '+server', value: 'Gives info about the server.'},
		{ name: '+avatar', value: 'Grabs the avatar of a user.'},
		{ name: '+user-info', value: 'Gives info about a user.'},
		{ name: '+prune', value: 'Mass deletes messages'},
        { name: '+ban', value: 'Bans a user.'},
        { name: '+kick', value: 'Kicks a user.'},
        { name: '+joinvc', value: 'Joins your vc.'}

	)

        message.channel.send(helpEmbed)


}