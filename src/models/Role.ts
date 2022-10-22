import RoleInterface from '../interfaces/Models/Role';
import { cdnBase } from '../constants/BaseURLs';

export default class Role implements RoleInterface {
    public guildID: string;

    public id: string;
    public name: string;

    public color: number;

    public hoist: boolean;

    public iconHash: string | null;
    public icon: string | null;

    public emoji: string | null;

    public position: number;
    public permissions: string;
    public managed: boolean;

    public mentionable: boolean;

    constructor(
        guildID: string,
        id: string,
        name: string,
        color: number,
        hoist: boolean,
        iconHash: string | null,
        emoji: string | null,
        position: number,
        permissions: string,
        managed: boolean,
        mentionable: boolean
    ) {
        this.guildID = guildID;
        this.id = id;
        this.name = name;
        this.color = color;
        this.hoist = hoist;
        this.iconHash = iconHash;
        this.icon = `${cdnBase}/role-icons/${id}/${iconHash}.png`;
        this.emoji = emoji;
        this.position = position;
        this.permissions = permissions;
        this.managed = managed;
        this.mentionable = mentionable;
    }
}