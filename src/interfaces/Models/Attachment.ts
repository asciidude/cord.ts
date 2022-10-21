export default interface Attachment {
    id: string;
    fileName: string;
    description: string;
    contentType: string;
    size: number;
    url: string;
    proxyUrl: string;
    height: number | null;
    width: number | null;
    ephemeral: boolean;
}