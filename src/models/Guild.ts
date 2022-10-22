import GuildInterface from '../interfaces/Models/Guild';
import { cdnBase } from '../constants/BaseURLs';
import Role from './Role';
import Emoji from './Emoji';
import Client from '../client/Client';
import Gateway from '../constants/Gateway';
import axios, { AxiosError } from 'axios';

export default class Guild implements GuildInterface {
    public id: string;
    public name: string;

    public icon: string | null;
    public iconHash: string | null;

    public splash: string | null;
    public splashHash: string | null;

    public discoverSplash: string | null;
    public discoverSplashHash: string | null;

    public owner: string;

    public region: string | null;

    public afkChannelID: string | null;
    public afkTimeout: number;

    public widgetEnabled: boolean;
    public widgetChannelID: string | null;

    public verificationLevel: number;
    public messageNotificationLevel: number;
    public explicitContentFilter: number;

    public roles: Role;
    public emojis: Emoji;

    public features: string[] | null;
    public mfaLevel: number;

    public systemChannelID: string | null;
    public systemChannelFlags: string | null;

    public rulesChannelID: string | null;

    public maxPresences: number | null;
    public maxMembers: number;

    public vanity: string | null;
    public description: string | null;

    public bannerHash: string | null;
    public banner: string | null;

    public premiumTier: number;
    public premiumSubscriberCount: number | null;
    public progressBar: boolean;

    public locale: string;

    public updateChannelID: string | null;

    public maxVideoChannelUsers: number;

    public client: Client | null;

    constructor(
        id: string,
        name: string,
        iconHash: string | null,
        splashHash: string | null,
        discoverSplashHash: string | null,
        owner: string,
        region: string | null,
        features: string[] | null,
        mfaLevel: number,
        systemChannelID: string | null,
        systemChannelFlags: string | null,
        rulesChannelID: string | null,
        maxPresences: number | null,
        maxMembers: number,
        vanity: string | null,
        description: string | null,
        bannerHash: string | null,
        premiumTier: number,
        premiumSubscriberCount: number | null,
        locale: string,
        updateChannelID: string,
        maxVideoChannelUsers: number,
        roles: Role,
        progressBar: boolean,
        client: Client | null
    ) {
        this.id = id;
        this.name = name;
        this.iconHash = iconHash;
        this.icon = `${cdnBase}/icons/${id}/${iconHash}.png`;
        this.splashHash = splashHash;
        this.splash = splashHash ? `${cdnBase}/splashes/${id}/${splashHash}.png` : null;
        this.discoverSplashHash = discoverSplashHash;
        this.discoverSplash = discoverSplashHash ? `${cdnBase}/discovery-splashes/${id}/${discoverSplashHash}.png` : null;
        this.owner = owner;
        this.region = region;
        this.features = features!.length > 0 ? features : null;
        this.mfaLevel = mfaLevel;
        this.systemChannelID = systemChannelID;
        this.systemChannelFlags = systemChannelFlags;
        this.rulesChannelID = rulesChannelID;
        this.maxPresences = maxPresences;
        this.maxMembers = maxMembers;
        this.vanity = vanity;
        this.description = description;
        this.bannerHash = bannerHash;
        this.banner = bannerHash ? `${cdnBase}/banners/${id}/${bannerHash}.png` : null;
        this.premiumTier = premiumTier;
        this.premiumSubscriberCount = premiumSubscriberCount != 0 ? premiumSubscriberCount : null;
        this.locale = locale;
        this.updateChannelID = updateChannelID;
        this.maxVideoChannelUsers = maxVideoChannelUsers;
        this.roles = roles;
        this.client = client;
        this.progressBar = progressBar;
    }

    public async get(id: string) {
        try {
            const res = await axios.get(
                `${Gateway.API_URL}/guilds/${id}`,
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bot ${this.client!.token}`
                    }
                }
            )
            
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
        } catch(err: any) {
            if(err.response && err.response.status === 429) {
                setTimeout(() => {
                    this.get(id);
                }, Number(err.response.headers['retry-after']) * 1000);
            } else {
                throw err;
            }
        }
    }
}