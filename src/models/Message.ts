//import MessageInterface from '../interfaces/Models/Message';
import Client from '../client/Client';
import MessageReference from '../interfaces/Models/MessageReference';
import Attachment from './Attachment';
import axios from 'axios';
import Gateway from '../constants/Gateway';
import Guild from './Guild';

//import User from './User';
//import Embed from './Embed';
//import Reaction from './Reaction';
//import MessageComponent from './MessageComponent';

export default class Message /*implements MessageInterface*/ {
    public id: string;
    public guildID: string;
    public channelID: string;
    public tts: boolean;
    public timestamp: Date;
    public reference: MessageReference | null;
    public pinned: boolean;
    public nonce: number | string;
    public mentions: object[];
    public attachment: Attachment;
    //public embeds: Embed;
    //public reactions: Reaction;
    public mentionEveryone: boolean;
    //public member: GuildMember;
    public flags: number | null;
    public editedTimestamp: Date | null;
    public content: string | null;
    //public channel: TextChannel;
    //public components: MessageComponent[] | null;
    //public author: User | null;
    public client: Client;

    constructor(
        id: string,
        guildID: string,
        channelID: string,
        tts: boolean,
        timestamp: Date,
        reference: MessageReference | null,
        pinned: boolean,
        nonce: number | string,
        mentions: object[],
        attachment: Attachment,
        //embed: Embed,
        //reactions: Reaction,
        mentionEveryone: boolean,
        //member: GuildMember,
        flags: number | null,
        editedTimestamp: Date | null,
        content: string | null,
        //components: MessageComponent[] | null,
        client: Client
    ) {
        this.id = id;
        this.tts = tts;
        this.guildID = guildID;
        this.channelID = channelID;
        this.timestamp = timestamp;
        this.reference = reference;
        this.pinned = pinned;
        this.nonce = nonce;
        this.mentions = mentions;
        this.attachment = attachment;
        //this.embed = embed;
        //this.reactions = reactions;
        this.mentionEveryone = mentionEveryone;
        //this.member = member;
        this.flags = flags;
        this.editedTimestamp = editedTimestamp;
        this.content = content;
        //this.components = components;
        this.client = client;
    }

    get guild() {
        const guild = this.getGuild(this.guildID, this.client);
        return guild;
    }

    private getGuild = async (guildID: string, client: Client) => {
        const res = await axios.get(
            `${Gateway.API_URL}/guilds/${guildID}`,
            {
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': `Bot ${client.token}`
                }
            }
        );
        
        const guild = new Guild(
            res.data.id,
            res.data.name,
            res.data.icon,
            res.data.splash,
            res.data.discovery_splash,
            res.data.owner_id,
            res.data.region,
            res.data.features,
            res.data.mfa_level,
            res.data.system_channel_id,
            res.data.system_channel_flags,
            res.data.rules_channel_id,
            res.data.max_presences,
            res.data.max_members,
            res.data.vanity,
            res.data.description,
            res.data.banner,
            res.data.premium_tier,
            res.data.premium_subscription_count,
            res.data.locale,
            res.data.update_channel_id,
            res.data.max_video_channel_users,
            res.data.roles,
            res.data.premium_progress_bar_enabled,
            client
        );
    
        return guild;
    }

    /**
     * Send a message to a channel
     * @param channelID The ID of the channel you want to send the message to
     * @param content The content of the message
     */
    async send(content: string) {
        await axios.post(
            `${Gateway.API_URL}/channels/${this.channelID}/messages`,
            {
                'content': content,
                'tts': false,
                'embeds': [{
                    title: 'uhhh',
                    description: 'uhhhhhhhhhhh'
                }]
            },
            {
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': `Bot ${this.client.token}`
                }
            }
        );
    }

    /*
    get channel() {
        // getChannel endpoint
    }
    */
}