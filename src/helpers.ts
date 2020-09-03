import { IJellyfinNative } from "native";

declare global {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface Window {
        jellyfinNative?: IJellyfinNative;
    }
}

export function mapToAsync<T>(block: () => T): Promise<T> {
    try {
        return Promise.resolve(block());
    } catch (e) {
        return Promise.reject(e);
    }
}

export function registerNativeApi(api: IJellyfinNative): void {
    window["jellyfinNative"] = api;
}
