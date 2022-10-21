import Client from '../client/Client';
import ClientUser from '../client/ClientUser';

export default function(client: Client, payload: any) {
    client.user = new ClientUser(
        payload.d.user.username,
        payload.d.user.discriminator,
        payload.d.user.verified,
        payload.d.user.id,
        payload.d.user.flags,
        payload.d.user.bot,
        payload.d.user.avatar
    );
    
    client.emit('ready');
}