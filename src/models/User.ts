import UserInterface from '../interfaces/Models/User';
import { cdnBase } from '../constants/BaseURLs';
import Client from '../client/Client';

export default class User implements UserInterface {
    public id: string;
    public username: string;
    public discriminator: string;
    public avatarHash: string | null;
    public avatar: string | null;
    public bot: boolean;
    public system: boolean;
    public mfaEnabled: boolean;
    public bannerHash: string | null;
    public banner: string | null;
    public accentColor: number | null;
    public locale: string;
    public verified: boolean;
    public email: string | null;
    public flags: number;
    public premiumType: number;
    public publicFlags: number;
    public client: Client | null;

    constructor(
        id: string,
        username: string,
        discriminator: string,
        avatarHash: string | null,
        bot: boolean,
        system: boolean,
        mfaEnabled: boolean,
        bannerHash: string | null,
        accentColor: number | null,
        locale: string,
        verified: boolean,
        email: string | null,
        flags: number,
        premiumType: number,
        publicFlags: number,
        client: Client | null
    ) {
        this.id = id;
        this.username = username;
        this.discriminator = discriminator;
        this.avatarHash = avatarHash;
        this.avatar = `${cdnBase}/avatars/${id}/${avatarHash}.png`;
        this.bot = bot;
        this.system = system;
        this.mfaEnabled = mfaEnabled;
        this.bannerHash = bannerHash;
        this.banner = `${cdnBase}/banners/${id}/${bannerHash}.png`;
        this.accentColor = accentColor;
        this.locale = locale;
        this.verified = verified;
        this.email = email;
        this.flags = flags;
        this.premiumType = premiumType;
        this.publicFlags = publicFlags;
        this.client = client;
    }
}