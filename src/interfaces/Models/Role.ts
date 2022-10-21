export default interface RoleTags {
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    iconHash: string | null;
    icon: string | null;
    emoji: string | null;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
}