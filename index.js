const Discord = require('discord.js');

const client = new Discord.Client();
const axios = require('axios');

client.on('ready', () => {
    console.log('started')
    client.user.setActivity("Reddit Memes", {type: "Stealing"});
});

client.on('message', msg => {

    if (msg.content.startsWith('programmer meme plz')){
            axios.get('http://reddit.com/r/programmerhumor/random/.json')
            .then((response) => {

                const data = response.data
                const memeTitle = data[0].data.children[0].data.title
                const memeURL = data[0].data.children[0].data.url

                 msg.channel.send(memeTitle)
                 msg.channel.send(memeURL)

            })
            .catch((error) => {
                // handle error
                msg.channel.send("reddit broke")
            })

    }
})

client.login(process.env.BOT_TOKEN);