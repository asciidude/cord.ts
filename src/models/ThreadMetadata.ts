import ThreadMetadataInterface from '../interfaces/Models/ThreadMetadata';

export default class ThreadMetadata implements ThreadMetadataInterface {
    public archived: boolean;
    public autoArchiveDuration: number;
    public archiveTimestamp: Date;
    public locked: boolean;
    public invitable: boolean;
    public createdTimestamp: boolean | null;

    constructor(
        archived: boolean,
        autoArchiveDuration: number,
        archiveTimestamp: Date,
        locked: boolean,
        invitable: boolean,
        createdTimestamp: boolean | null
    ) {
        this.archived = archived;
        this.autoArchiveDuration = autoArchiveDuration;
        this.archiveTimestamp = archiveTimestamp;
        this.locked = locked;
        this.invitable = invitable;
        this.createdTimestamp = createdTimestamp;
    }
}