const Discord = require('discord.js');
var twit = require('twit');
const apikey = 'Put in the API Key here.'
const apiSecretKey = 'Put in the API Secret key here.'
const accessToken = 'Put in the Access Token here.'
const accessTokenSecret = 'Put in the Access Token Secret here.'

var T = new twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

module.exports = {
    name: 'rt',
    description: 'beta command!',
    execute(message, args){
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === '69') {
            return message.channel.send(':eggplant:');
        }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ba8249')
            .setTitle(`retweeted tweet id ${args[0]} to the twitter...`)
            .setAuthor('', 'image.png', 'https://twitter.com/@PIKAB0T')
        message.channel.send(exampleEmbed);
        T.post('statuses/retweet/:id', { id: args[0] }, function (err, data, response) {
            console.log(data)
          })          
        message.react('✅');
    }
}
