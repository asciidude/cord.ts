import WelcomeScreenChannel from '../../models/WelcomeScreenChannel';

export default interface WelcomeScreen {
    description: string | null;
    welcomeChannel: WelcomeScreenChannel[];
}