// Type definitions for passport.socketio 3.7
// Project: https://github.com/jfromaniello/passport.socketio#readme
// Definitions by: Jack Scotson <https://github.com/Scotsoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { RequestHandler } from "express";
import { Store } from "express-session";
import { PassportStatic } from "passport";
import { Server, Socket } from "socket.io";

export interface PassportSocketIoOptions {
    /**
     * the name of the cookie where express/connect stores its session_id.
     */
    key?: string | undefined;

    /**
     * the session_secret to parse the cookie.
     */
    secret?: string | undefined;

    /**
     * we NEED to use a sessionstore. No MemoryStore please.
     */
    store: Store;

    /**
     * the same middleware you registrer in express.
     */
    cookieParser?: RequestHandler | undefined;
    passport?: PassportStatic | undefined;

    /**
     * callback on success.
     */
    success?: ((data: any, accept: (err?: any, accepted?: boolean) => void) => void) | undefined;

    /**
     * callback on fail/error.
     */
    fail?:
        | ((data: any, message: string, critical: boolean, accept: (err?: any, accepted?: boolean) => void) => void)
        | undefined;
}

export function authorize(options: PassportSocketIoOptions): (socket: Socket, fn: (err?: any) => void) => void;
export function filterSocketsByUser(io: Server, filter: (user: any) => boolean): Socket[];
