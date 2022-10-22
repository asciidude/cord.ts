import MessageChannelInterface from '../interfaces/Models/MessageChannel';
import { cdnBase } from '../constants/BaseURLs';
import ThreadMetadata from '../interfaces/Models/ThreadMetadata';
import DefaultReaction from './DefaultReaction';
import ForumTag from './ForumTag';
import Message from './Message';
import Overwrite from './Overwrite';
import ThreadMember from './ThreadMember';
import User from './User';
import Gateway from '../constants/Gateway';
import Client from '../client/Client';
import axios from 'axios';

export default class MessageChannel implements MessageChannelInterface {
    public id: string;
    public type: number;
    public guildID: string;
    public position: string;
    public permissionOverwrites: Overwrite[] | null;
    public name: string | null;
    public topic: string | null;
    public nsfw: boolean;
    public lastMessageID: string;
    public slowmodeRate: number;
    public recipients: User[] | null;
    public iconHash: string | null;
    public icon: string | null;
    public ownerID: string | null;
    public applicationID: string | null;
    public parentID: string | null;
    public lastPinTimestamp: Date | null;
    public messageCount: number;
    public memberCount: number;
    public threadMetadata: ThreadMetadata | null;
    public member: ThreadMember;
    public defaultAutoArchive: number;
    public permissions: string;
    public flags: string;
    public totalMessages: number;
    public availableTags: ForumTag[];
    public appliedTagIDs: string[];
    public defaultReactionEmoji: DefaultReaction;
    public defaultThreadSlowmode: number;
    public defaultSortOrder: number;
    public client: Client | null;

    constructor(
        id: string,
        type: number,
        guildID: string,
        position: string,
        permissionOverwrites: Overwrite[] | null,
        name: string | null,
        topic: string | null,
        nsfw: boolean,
        lastMessageID: string,
        slowmodeRate: number,
        recipients: User[] | null,
        iconHash: string | null,
        ownerID: string | null,
        applicationID: string | null,
        parentID: string | null,
        lastPinTimestamp: Date | null,
        messageCount: number,
        memberCount: number,
        threadMetadata: ThreadMetadata | null,
        member: ThreadMember,
        defaultAutoArchive: number,
        permissions: string,
        flags: string,
        totalMessages: number,
        availableTags: ForumTag[],
        appliedTagIDs: string[],
        defaultReactionEmoji: DefaultReaction,
        defaultThreadSlowmode: number,
        defaultSortOrder: number,
        client: Client | null
    ) {
        this.id = id;
        this.type = type;
        this.guildID = guildID;
        this.position = position;
        this.permissionOverwrites = permissionOverwrites;
        this.name = name;
        this.topic = topic;
        this.nsfw = nsfw;
        this.lastMessageID = lastMessageID;
        this.slowmodeRate = slowmodeRate;
        this.recipients = recipients;
        this.iconHash = iconHash;
        this.ownerID = ownerID;
        this.applicationID = applicationID;
        this.parentID = parentID;
        this.lastPinTimestamp = lastPinTimestamp;
        this.messageCount = messageCount;
        this.memberCount = memberCount;
        this.threadMetadata = threadMetadata;
        this.member = member;
        this.defaultAutoArchive = defaultAutoArchive;
        this.permissions = permissions;
        this.flags = flags;
        this.totalMessages = totalMessages;
        this.availableTags = availableTags;
        this.appliedTagIDs = appliedTagIDs;
        this.defaultReactionEmoji = defaultReactionEmoji;
        this.defaultThreadSlowmode = defaultThreadSlowmode;
        this.defaultSortOrder = defaultSortOrder;
        this.client = client;
    }

    /**
     * Send a message to a channel
     * @param channelID The ID of the channel you want to send the message to
     * @param content The content of the message
     */
    async send(content: string) {
        try {
            await axios.post(
                `${Gateway.API_URL}/channels/${this.id}/messages`,
                {
                    'content': content,
                    'tts': false
                },
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bot ${this.client!.token}`
                    }
                }
            )
        } catch(err: any) {
            if(err.response && err.response.status === 429) {
                setTimeout(() => {
                    this.send(content);
                }, Number(err.response.headers['retry-after']) * 1000);
            } else {
                throw err;
            }
        }
    }
}