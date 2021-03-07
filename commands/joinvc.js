exports.run = (client, message) => {
    if (message.member.voice.channel) {
		const connection = message.member.voice.channel.join();
		message.channel.send(`It's ok ${message.author.username} we know you are lonely. I will join`)
	} else {
		message.channel.send(`You are not in a voice channel ${message.author.username}!`)
	}
	
};
