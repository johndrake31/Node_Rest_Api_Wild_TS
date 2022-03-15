import { NextFunction, Request, RequestHandler, Response } from "express";
function execAsyncHandler(handler: Function): RequestHandler{
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await handler(req, res, next)
        } catch (err: any) {
            next(err)
        }
    }
}

export default execAsyncHandler;