import express from 'express';
const router = express.Router();
import multer from 'multer';
import imageController from '../controllers/image';
import execAsyncHandler from '../middleware/execAsyncHandler';

//console.log('current working directory is: ', process.cwd());

//create
const filestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd()+'/images')
    },
    filename: (req, file, cb) => {
        const id = req.body.id //
        if (file.mimetype.includes('image')) {
           const fileType = file.mimetype.slice(6);
           cb(null, `${id}.${fileType}`)
        }
    }
})
const upload = multer({ storage: filestorage })


router.get('/:imageId', execAsyncHandler(imageController.find));
router.post('/', upload.single('avatar'), execAsyncHandler(imageController.create))



export { router as imageRouter };