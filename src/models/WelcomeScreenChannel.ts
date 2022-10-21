import WelcomeScreenChannelInterface from '../interfaces/Models/WelcomeScreenChannel';

export default class WelcomeScreenChannel implements WelcomeScreenChannelInterface {
    public id: string;
    public description: string;
    public emojiID: string | null;
    public emojiName: string | null;

    constructor(
        id: string,
        description: string,
        emojiID: string | null,
        emojiName: string | null,
    ) {
        this.id = id;
        this.description = description;
        this.emojiID = emojiID;
        this.emojiName = emojiName;
    }
}