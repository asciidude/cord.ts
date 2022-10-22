//import MessageInterface from '../interfaces/Models/Message';
import Client from '../client/Client';
import MessageReference from '../interfaces/Models/MessageReference';
import Attachment from './Attachment';
import Gateway from '../constants/Gateway';
import Guild from './Guild';
import axios from 'axios';

//import User from './User';
//import Embed from './Embed';
//import Reaction from './Reaction';
//import MessageComponent from './MessageComponent';
import MessageChannel from './MessageChannel';
import User from './User';

import fs from 'fs';
import ThreadMetadata from './ThreadMetadata';

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
    //public components: MessageComponent[] | null;
    public author: User;
    public client: Client | null;

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
        author: User,
        client: Client | null
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
        this.author = author;
        this.client = client;
    }

    get guild() {
        try {
            axios.get(
                `${Gateway.API_URL}/guilds/${this.id}`,
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bot ${this.client!.token}`
                    }
                }
            ).then(res => {
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
                    null
                );

                return guild;
            });
        } catch(err: any) {
            if(err.response && err.response.status === 429) {
                setTimeout(() => {
                    this.guild;
                }, Number(err.response.headers['retry-after']) * 1000);
            } else {
                return Error(err);
            }
        }
    }

    get channel(): MessageChannel | any {
        try {
            axios.get(
                `${Gateway.API_URL}/channels/${this.channelID}`,
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bot ${this.client!.token}`
                    }
                }
            ).then(res => {
                const channel = new MessageChannel(
                    res.data.id,
                    res.data.type,
                    res.data.guild_id,
                    res.data.position,
                    res.data.permission_overwrites,
                    res.data.name,
                    res.data.topic,
                    res.data.nsfw,
                    res.data.last_message_id,
                    res.data.rate_limit_per_user,
                    res.data.recipients,
                    res.data.icon,
                    res.data.owner_id,
                    res.data.application_id,
                    res.data.parent_id,
                    res.data.last_pin_timestamp,
                    res.data.message_count,
                    res.data.member_count,
                    res.data.thread_metadata ? new ThreadMetadata(
                        res.data.thread_metadata.archived,
                        res.data.thread_metadata.auto_archive_duration,
                        res.data.thread_metadata.archive_timestamp,
                        res.data.thread_metadata.locked,
                        res.data.thread_metadata.invitable,
                        res.data.thread_metadata.create_timestamp
                    ) : null,
                    res.data.member /* Switch to GuildMember */,
                    res.data.default_auto_archive,
                    res.data.permissions,
                    res.data.flags,
                    res.data.total_messages,
                    res.data.available_tags,
                    res.data.applied_tags,
                    res.data.default_reaction_emoji,
                    res.data.thread_rate_limit_per_user,
                    res.data.default_sort_order,
                    this.client
                );

                return channel;
            });
        } catch(err: any) {
            if(err.response && err.response.status === 429) {
                setTimeout(() => {
                    this.channel;
                }, Number(err.response.headers['retry-after']) * 1000);
            } else {
                throw err;
            }
        }
    }
}