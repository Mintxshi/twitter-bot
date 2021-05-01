const Discord = require('discord.js');
var twit = require('twit');

const apikey = 'API Key goes here.'
const apiSecretKey = 'Secret API Key goes here.'
const accessToken = 'Access Token goes here.'
const accessTokenSecret = 'Secret Access Token goes here.'

var T = new twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});




module.exports = {
    name: 'tweet',
    description: 'beta command!',
    execute(message, args){
        let sentence = message.content.split(" ");
        sentence.shift();
        sentence = sentence.join(" ");
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00acee')
            .setTitle(`sent "${sentence}" to the twitter`)
        message.channel.send(exampleEmbed);
        message.react('✅');
        T.post('statuses/update', { status: sentence}, function(err, data, response) {
          console.log(data)
        })
    }
}
