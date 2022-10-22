export default interface ThreadMetadata {
    archived: boolean;
    autoArchiveDuration: number;
    archiveTimestamp: Date;
    locked: boolean;
    invitable: boolean;
    createdTimestamp: boolean | null;
}