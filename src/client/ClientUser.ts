import { cdnBase } from '../constants/BaseURLs';
import ClientUserInterface from '../interfaces/Models/ClientUser';

export default class ClientUser implements ClientUserInterface {
    public username: string;
    public discriminator: string;
    public verified: boolean;
    public id: string;
    public flags: number;
    public bot: boolean;
    public avatar: string | null;
    public avatarHash: string | null;

    constructor(
        username: string, 
        discriminator: string, 
        verified: boolean, 
        id: string, 
        flags: number, 
        bot: boolean, 
        avatarHash: string | null
    ) {
        this.username = username;
        this.discriminator = discriminator;
        this.verified = verified;
        this.id = id;
        this.flags = flags;
        this.bot = bot;
        this.avatarHash = avatarHash;
        this.avatar = avatarHash ? `${cdnBase}/avatars/${id}/${avatarHash}.png` : null;
    }
}