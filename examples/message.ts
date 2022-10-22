import 'dotenv/config';
import { Client, Message } from '../src';

const client = new Client();

client.on('ready', async () => {
    console.log(`${client.user.username} is online`);
});

client.on('message', async (message: Message) => {
    if(message.author.bot) return;

    console.log(message.channel);

    return;
});

client.login(process.env.TOKEN!);