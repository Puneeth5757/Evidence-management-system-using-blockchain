export const canisterId: string;
export function createActor(canisterId: string | any, options?: {
    agentOptions?: any;
    actorOptions?: any;
}): any;
/**
 * A ready-to-use agent for the Evidence_storage canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./Evidence_storage.did.js")._SERVICE>}
 */
export const Evidence_storage: any;
