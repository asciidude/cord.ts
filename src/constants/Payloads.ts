import Heartbeat from '../interfaces/Payloads/Heartbeat';
import Hello from '../interfaces/Payloads/Hello';
import Identify from '../interfaces/Payloads/Identify';
import Reconnect from '../interfaces/Payloads/Reconnect';
import OPCodes from './OPCodes';

export const Hello: Hello = {
    op: OPCodes.HELLO,
    d: null
}

export const Heartbeat: Heartbeat = {
    op: OPCodes.HEARTBEAT,
    d: null
}

export const Identify: Identify = {
    op: OPCodes.IDENTIFY,
    d: {
        token: '', /* Identify.d.token */
        intents: 513, /* Identify.d.intents */
        properties: {
            $os: 'linux',
            $browser: 'cord',
            $device: 'cord'
        }
    }
}

export const Reconnect: Reconnect = {
    op: OPCodes.RECONNECT,
    d: {
        token: '', /* Identify.d.token */
        intents: 513, /* Identify.d.intents */
        properties: {
            $os: 'linux',
            $browser: 'cord',
            $device: 'cord'
        }
    }
}