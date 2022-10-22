import Client from '../../client/Client';

export default interface Guild {
    id: string;
    username: string;
    discriminator: string;
    avatarHash: string | null;
    avatar: string | null;
    bot: boolean;
    system: boolean;
    mfaEnabled: boolean;
    bannerHash: string | null;
    banner: string | null;
    accentColor: number | null;
    locale: string;
    verified: boolean;
    email: string | null;
    flags: number;
    premiumType: number;
    publicFlags: number;
    client: Client | null;
}