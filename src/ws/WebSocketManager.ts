import WebSocket from 'ws';
import Client from '../client/Client';
import Gateway from '../constants/Gateway';
import OPCodes from '../constants/OPCodes';
import { Heartbeat, Identify } from '../constants/Payloads';

export default class WebSocketManager {
    public wsc: WebSocket;
    public client: any;
    public intents: number;

    constructor(client: Client) {
        this.wsc = new WebSocket(Gateway.GATEWAY_URL);

        this.client = client;
        this.intents = client.intents;
    }

    async connect(token: string) {
        try {
            this.wsc.on('message', async (data: any) => {
                const payload = JSON.parse(data.toString());
                const { t: event, op, d }  = payload;

                if(op === OPCodes.HELLO) {
                    this.sendHeartbeat(d.heartbeat_interval);
                    await this.identify(token);
                }

                if(event) {
                    try {
                        await import(`../handlers/${event}.ts`).then(m => m.default(this.client, payload));
                    } catch(err) {
                        throw err;
                    }
                }
            });
        } catch(err) {
            throw err;
        }
    }
    
    async sendHeartbeat(interval: number) {
        await this.wsc.send(JSON.stringify(Heartbeat));

        setInterval(async () => {
            await this.wsc.send(JSON.stringify(Heartbeat));
        }, interval);
    }

    async identify(token: string) {
        try {
            Identify.d.token = token;
            Identify.d.intents = this.intents;
            return this.wsc.send(JSON.stringify(Identify));
        } catch(error) {
            throw error;
        }
    }
}