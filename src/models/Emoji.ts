import EmojiInterface from '../interfaces/Models/Emoji';
import { cdnBase } from '../constants/BaseURLs';
import Client from '../client/Client';

export default class Emoji implements EmojiInterface {
    public id: string;
    public name: string;
    public creator: string;
    public requireColons: boolean;
    public managed: boolean;
    public animated: boolean;
    public available: boolean;
    public client: Client;

    constructor(
        id: string,
        name: string,
        creator: string,
        requireColons: boolean,
        managed: boolean,
        animated: boolean,
        available: boolean,
        client: Client
    ) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.requireColons = requireColons;
        this.managed = managed;
        this.animated = animated;
        this.available = available;
        this.client = client;
    }
}