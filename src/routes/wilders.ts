import express from 'express';
const router = express.Router();
import wilderController from '../controllers/wilders';
import execAsyncHandler from '../middleware/execAsyncHandler';

//findOne
router.get('/', execAsyncHandler(wilderController.readAll))
router.get('/:id', execAsyncHandler(wilderController.findById))

//create
router.post('/', execAsyncHandler(wilderController.create))

//update
router.put('/:id', execAsyncHandler(wilderController.updateById))

//delete
router.delete('/:id', execAsyncHandler(wilderController.deleteById))

export {router as wildersRouter};