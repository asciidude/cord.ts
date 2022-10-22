// Client
import Client from './client/Client';
import ClientUser from './client/ClientUser';

// Constants
import { cdnBase } from './constants/BaseURLs';
import Gateway from './constants/Gateway';
import OPCodes from './constants/OPCodes';
import { Hello, Heartbeat, Identify, Reconnect } from './constants/Payloads';
import ChannelTypes from './constants/ChannelTypes';
import VideoQualityMode from './constants/VideoQualityMode';

// Models
import Attachment from './models/Attachment';
import Emoji from './models/Emoji';
import Guild from './models/Guild';
import Message from './models/Message';
import MessageChannel from './models/MessageChannel';
import MessageReference from './interfaces/Models/MessageReference';
import Role from './models/Role';
import WelcomeScreen from './models/WelcomeScreen';
import WelcomeScreenChannel from './models/WelcomeScreenChannel';

export {
    // Client
    Client,
    ClientUser,

    // Constants
    Gateway,
    OPCodes,
    ChannelTypes,
    VideoQualityMode,

    // Models
    Attachment,
    Emoji,
    Guild,
    Message,
    MessageChannel,
    MessageReference,
    Role,
    WelcomeScreen,
    WelcomeScreenChannel
}


// Constants (extended)
export const Payloads = {
    Hello, Heartbeat, Identify, Reconnect
}

export const BaseURLS = {
    cdnBase
}