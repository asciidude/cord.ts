import Client from '../client/Client';
import Message from '../models/Message';
import MessageReference from '../Models/MessageReference';

export default function(client: Client, payload: any) {
    const message = new Message(
        payload.d.id,
        payload.d.guild_id,
        payload.d.channel_id,
        payload.d.tts,
        payload.d.timestamp,
        payload.d.message_reference ? new MessageReference(
            payload.d.message_reference.message_id,
            payload.d.guild_id,
            payload.d.channel_id,
            client
        ) : null,
        payload.d.pinned,
        payload.d.nonce,
        payload.d.mentions,
        payload.d.attachments,
        payload.d.mention_everyone,
        payload.d.flags,
        payload.d.edited_timestamp,
        payload.d.content,
        client
    )

    client.emit('message', message);
}