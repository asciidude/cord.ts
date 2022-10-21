export default interface Guild {
    id: string;
    name: string;
    creator: string;
    requireColons: boolean;
    managed: boolean;
    animated: boolean;
    available: boolean;
}