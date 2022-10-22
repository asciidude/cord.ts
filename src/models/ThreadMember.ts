import ThreadMemberInterface from '../interfaces/Models/ThreadMember';

export default class ThreadMember implements ThreadMemberInterface {
    public id: string;
    public threadID: string;
    public joinTimestamp: Date;
    public flags: number;

    constructor(
        id: string,
        threadID: string,
        joinTimestamp: Date,
        flags: number
    ) {
        this.id = id;
        this.threadID = threadID;
        this.joinTimestamp = new Date(joinTimestamp);
        this.flags = flags;
    }
}