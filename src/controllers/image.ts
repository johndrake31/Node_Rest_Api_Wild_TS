import { NextFunction, Request, Response } from "express";
import WilderModel from './../models/Wilder';




const imageController = {
    create: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if (req.file) {
            //console.log(req.body.id); //622721f5d76d0de75c85dcdb
            //console.log(req.file); //awesome info
            //console.log(req.file.filename);//622721f5d76d0de75c85dcdb.jpeg
            //stock info for file name
            const wilder = await WilderModel.findOneAndUpdate({ _id: req.body.id },  {$set: {"img":req.file.filename}})
            res.status(200).json({ message: `'c'est bon` }).send(wilder);

        }
    },

    find: async (req: Request, res: Response, next: NextFunction) => {
        if (req.params.imageId) {
            const image = `${process.cwd()}/images/${req.params.imageId}`;
            // console.log(image);
            res.status(200).sendFile(image, function (err) {
                if (err) {
                    next(err);
                } else {
                    console.log('Sent:', image);
                    next();
                }
            });
        } else { res.json({ message: "picture not found" }) }
    }

}

export default imageController;