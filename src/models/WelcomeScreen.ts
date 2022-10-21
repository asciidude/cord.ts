import WelcomeScreenInterface from '../interfaces/Models/WelcomeScreen';
import WelcomeScreenChannel from './WelcomeScreenChannel';

export default class WelcomeScreen implements WelcomeScreenInterface {
    public description: string | null;
    public welcomeChannel: WelcomeScreenChannel[];

    constructor(
        description: string
    ) {
        this.description = description;
    }
}