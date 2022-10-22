import Client from "../../client/Client";
import DefaultReaction from "../../models/DefaultReaction";
import ForumTag from "../../models/ForumTag";
import Message from "../../models/Message";
import Overwrite from "../../models/Overwrite";
import ThreadMember from "../../models/ThreadMember";
import ThreadMetadata from "../../models/ThreadMetadata";
import User from "../../models/User";

export default interface MessageChannel {
    id: string;
    type: number;
    guildID: string;
    position: string;
    permissionOverwrites: Overwrite[] | null;
    name: string | null;
    topic: string | null;
    nsfw: boolean;
    lastMessageID: string;
    slowmodeRate: number;
    recipients: User[] | null;
    iconHash: string | null;
    icon: string | null;
    ownerID: string | null;
    applicationID: string | null;
    parentID: string | null;
    lastPinTimestamp: Date | null;
    messageCount: number;
    memberCount: number;
    threadMetadata: ThreadMetadata | null;
    member: ThreadMember;
    defaultAutoArchive: number;
    permissions: string;
    flags: string;
    totalMessages: number;
    availableTags: ForumTag[];
    appliedTagIDs: string[];
    defaultReactionEmoji: DefaultReaction;
    defaultThreadSlowmode: number;
    defaultSortOrder: number;
    client: Client | null;
}