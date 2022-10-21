import Client from '../client/Client';
import AttachmentInterface from '../interfaces/Models/Attachment';

export default class Attachment implements AttachmentInterface {
    public id: string;
    public fileName: string;
    public description: string;
    public contentType: string;
    public size: number;
    public url: string;
    public proxyUrl: string;
    public height: number | null;
    public width: number | null;
    public ephemeral: boolean;
    public client: Client;

    constructor(
        id: string,
        fileName: string,
        description: string,
        contentType: string,
        size: number,
        url: string,
        proxyUrl: string,
        height: number | null,
        width: number | null,
        ephemeral: boolean,
        client: Client
    ) {
        this.id = id;
        this.fileName = fileName;
        this.description = description;
        this.contentType = contentType;
        this.size = size;
        this.url = url;
        this.proxyUrl = proxyUrl;
        this.height = height;
        this.width = width;
        this.ephemeral = ephemeral;
        this.client = client;
    }
}