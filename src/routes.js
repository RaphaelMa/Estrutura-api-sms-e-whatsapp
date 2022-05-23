import { Router } from "express";

import SendMessageController from "./controller/SendMessageController";

const router = Router()

router.get('/sendMessage', SendMessageController.handle)

export {router}