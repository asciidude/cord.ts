export default interface Identify {
    op: number,
    d: {
        token: string,
        intents: number,
        properties: {
            $os: string,
            $browser: string,
            $device: string
        }
    }
}