import {Server} from "socket-io"

import { Router } from "oak"

const io: Server = new Server({
    cors: {
      origin: ["https://ku-obp.vercel.app", "http://localhost:3000"],
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true
    }
});

export const router = new Router()



export default io