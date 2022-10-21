import Client from '../client/Client';
import MessageReferenceInterface from '../interfaces/Models/MessageReference';

export default class Message implements MessageReferenceInterface {
    public messageID: string;
    public channelID: string;
    public guildID: string;
    public client: Client;

    constructor(
        messageID: string,
        channelID: string,
        guildID: string,
        client: Client
    ) {
       this.messageID = messageID;
       this.channelID = channelID;
       this.guildID = guildID; 
       this.client = client;
    }
}