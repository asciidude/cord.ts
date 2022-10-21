enum OPCodes {
    // Send | OP Codes
    IDENTIFY = 2, /** Client identification is required */
    PRESENCE_UPDATE = 3, /** Update the client's presence */
    VOICE_STATUS_UPDATE = 4, /** Join, leave, or move between voice channels */
    RESUME = 6, /** Resume a previous session that was disconnected */
    REQUEST_GUILD_MEMBERS = 8, /** Request information about guild members in a guild */

    // Recieve | OP Codes
    RECONNECT = 7, /** Attempt to reconnect and resume immediately */
    DISPATCH = 0, /** An event has been dispatched */
    INVALID_SESSION = 9, /** The session has been invalidated, reconnect and identify/resume accordingly */
    HELLO = 10, /** Sent immediately after connecting containing an interval heartbeat to utilize */
    HEARTBEAT_ACK = 11, /** Sent in response to recieving a heartbeat */

    // Send & Recieve | OP Codes
    HEARTBEAT = 1 /** A heartbeat is requested */
}

export default OPCodes;