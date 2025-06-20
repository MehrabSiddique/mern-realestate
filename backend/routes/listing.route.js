import express from 'express';
import multer from 'multer';
import {  uploadImages, createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();
const storage = multer.memoryStorage(); // store in memory
const upload = multer({ storage });

router.post('/upload-images', upload.array('images'), uploadImages);
router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);

export default router;