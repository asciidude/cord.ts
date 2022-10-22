export default interface ForumTag {
    id: string;
    name: string;
    moderated: boolean;
    emojiID: string;
    emojiName: string | null;
}