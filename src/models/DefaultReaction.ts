import Client from '../client/Client';
import DefaultReactionInterface from '../interfaces/Models/DefaultReaction';

export default class DefaultReaction implements DefaultReactionInterface {
    public id: string | null;
    public name: string | null;

    constructor(
        id: string | null,
        name: string | null
    ) {
       this.id = id;
       this.name = name;
    }
}