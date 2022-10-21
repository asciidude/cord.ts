export default interface ClientUser {
    username: string;
    discriminator: string;
    verified: boolean;
    id: string;
    flags: number;
    bot: boolean;
    avatar: string | null;
    avatarHash: string | null;
}