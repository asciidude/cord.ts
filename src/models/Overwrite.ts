import OverwriteInterface from '../interfaces/Models/Overwrite';

export default class Overwrite implements OverwriteInterface {
    public id: string;
    public type: number;
    public allow: string;
    public deny: string;

    constructor(
        id: string,
        type: number,
        allow: string,
        deny: string
    ) {
        this.id = id;
        this.type = type;
        this.allow = allow;
        this.deny = deny;
    }
}