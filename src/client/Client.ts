import WebSocketManager from '../ws/WebSocketManager';
import EventEmitter from 'events';
import ClientUser from './ClientUser';

export default class Client extends EventEmitter {
    public WebSocket: WebSocketManager;
    public wsc;
    public intents: number;
    public token: string;

    constructor() {
        super();
        this.intents = this.intents | 512;
        this.WebSocket = new WebSocketManager(this);
        this.wsc = this.WebSocket.wsc;
    }

    login(token: string) {
        this.WebSocket.connect(token);
        this.token = token;
    }

    protected _user: ClientUser;
    get user(): ClientUser {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }
}