exports.run = (client, message, Discord) => {

    message.channel.send(`Your ping is ${Math.round(client.ws.ping)}ms`);

}