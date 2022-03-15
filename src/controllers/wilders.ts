import { NextFunction, Request, Response } from "express";
import WilderModel, {IWilder} from'./../models/Wilder';

const wilderController = {


create: async (req: Request, res:Response, next: NextFunction): Promise<void> =>{
   try{

       await WilderModel.init()
       const newWilder = new WilderModel(req.body)
       const result = await newWilder.save();
       res.json(result);
   }
   catch(err:any){
       if (err.code === 11000) {
           res.status(400).json({message: "Name Already Taken"})
       }
   }
},

readAll: async function (req: Request, res:Response, next: NextFunction): Promise<void> {
    const wilder = await WilderModel.find();
    res.send(wilder);
},

findById: async function (req:Request, res:Response, next: NextFunction): Promise<void> {
    
    const wilder = await WilderModel.findOne({ _id: req.params.id });
    res.send(wilder);
    //CODE BEFORE
    // WilderModel
    //     .findOne({ _id: req.params.id })
    //     .then((result) => { res.json({ success: true, result: result }); })
    //     .catch((err) => {
    //         // res.send(err.message)
    //         next(err)
    //     })
},

updateById: async function (req: Request, res: Response, next:NextFunction): Promise<void> {
    const wilder = await WilderModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.send(wilder);
},

deleteById: async function (req: Request, res:Response, next:NextFunction): Promise<void> {
    const wilder = await WilderModel.deleteOne({ _id: req.params.id }, req.body)
    res.send(wilder)
},
}
export default wilderController;