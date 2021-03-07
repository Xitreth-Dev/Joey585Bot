exports.run = (client, message, [mention, ...reason]) => {
    const adminRole = message.guild.roles.cache.find(role => role.name === "Admin");
    if (!adminRole)
      return console.log("The Admin role does not exist");
  
    if (message.mentions.members.size === 0)
      return message.reply("Please mention a user to kick");
  
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("You do not have permission to execute this action!");
  
    const banMember = message.mentions.members.first();
  
    banMember.ban(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} was succesfully banned.`);
    });
  };

// Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
