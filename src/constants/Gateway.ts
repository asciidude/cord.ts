enum Gateway {
    GATEWAY_URL = 'wss://gateway.discord.gg/?v=9&encoding=json',
    API_URL = 'https://discord.com/api/v9'
}

export default Gateway;

export const GatewayCloseEventCodes = {
    '4000': {
        description: 'Unknown error',
        explain: 'Try reconnecting'
    },

    '4001': {
        description: 'Unknown OP Code',
        explain: 'Invalid Gateway OP Code or invalid payload for an OP code has been sent',
    },

    '4002': {
        description: 'Decode error',
        explain: 'An invalid payload has been sent'
    },

    '4003': {
        description: 'Not authenticated',
        explain: 'A payload has been sent prior to authentication'
    },

    '4004': {
        description: 'Authentication failed',
        explain: 'The account token provided is invalid'
    },

    '4005': {
        description: 'Already authenticated',
        explain: 'You are already authenticated'
    },

    '4007': {
        description: 'Invalid sequence',
        explain: 'The resume sequence was invalid, reconnect and start a new session'
    },

    '4008': {
        description: 'Rate limited',
        explain: 'Too many requests are being sent and you are now being rate-limited'
    },

    '4009': {
        description: 'Session time out',
        explain: 'Your session has been timed out'
    },

    '4010': {
        // https://discord.com/developers/docs/topics/gateway#sharding
        description: 'Invalid shard',
        explain: 'An invalid shard has been sent while identifying'
    },

    '4011': {
        description: 'Sharding required',
        explain: 'You must shard your connection in order to connect'
    },

    '4012': {
        description: 'Invalid API Version',
        explain: 'You sent an invalid version for the gateway. How did you get here?'
    },

    '4013': {
        description: 'Invalid intent',
        explain: 'You sent an invalid intent for a Gateway Intent'
    },

    '4014': {
        description: 'Disallowed intent',
        explain: 'You sent a disallowed intent for a Gateway Intent'
    }
}