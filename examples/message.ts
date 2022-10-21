import 'dotenv/config';
import { Client } from '../src';

const client = new Client();

client.on('ready', async () => {
    console.log(`${client.user.username} is online`);
});

client.on('message', async (message) => {
    message.send('XD');
});

client.login(process.env.TOKEN!);