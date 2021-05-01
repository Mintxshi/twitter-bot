const Discord = require('discord.js');
var twit = require('twit');
const client = new Discord.Client({ partials: ["MESSAGE","CHANNEL",'REACTION']});
const prefix = '>';
const fs = require ('fs');

client.commands = new Discord.Collection();
// pikas library ONLY
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activity: { name: 'with the bird || acc: @PIKAB0T' }, status: 'dnd' });
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(client.commands.has(command)) {
        client.commands.get(command).execute(message, args);
    }
    
});

client.login('Token here');

console.log("the cake is a lie")
