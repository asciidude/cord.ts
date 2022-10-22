import Client from '../client/Client';
import Message from '../models/Message';
import MessageReference from '../models/MessageReference';
import User from '../models/User';

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
        new User(
            payload.d.author.id,
            payload.d.author.username,
            payload.d.author.discriminator,
            payload.d.author.avatar,
            payload.d.author.bot,
            payload.d.author.system,
            payload.d.author.mfa_enabled,
            payload.d.author.banner,
            payload.d.author.accent_color,
            payload.d.author.locale,
            payload.d.author.verified,
            payload.d.author.email,
            payload.d.author.flags,
            payload.d.author.premium_type,
            payload.d.author.public_flags,
            client
        ),
        client
    );

    client.emit('message', message as Message);
}