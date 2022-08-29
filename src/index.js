const Discord = require('discord.js'); // discord.js i cagiralim
const client = new Discord.Client(); //Botumuza komutlarımızı göndermemizi saglayacak altyapı

client.on('ready', () => {
  console.log('Hazırım..');
});

client.on('message', (msg) => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('selam');
  }
  }
); // client acik oldugu sürece msg parametresini attık

client.login('token buraya gelecek'); // Botumuzu client a bagladık.
