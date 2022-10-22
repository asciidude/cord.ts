import ForumTagInterface from '../interfaces/Models/ForumTag';

export default class ForumTag implements ForumTagInterface {
    public id: string;
    public name: string;
    public moderated: boolean;
    public emojiID: string;
    public emojiName: string | null;

    constructor(
        id: string,
        name: string,
        moderated: boolean,
        emojiID: string,
        emojiName: string | null
    ) {
        this.id = id;
        this.name = name;
        this.moderated = moderated;
        this.emojiID = emojiID;
        this.emojiName = emojiName;
    }
}