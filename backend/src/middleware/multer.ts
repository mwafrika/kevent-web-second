import { Request, Response } from 'express';
import * as multer from 'multer';



const storage = multer.diskStorage({
    destination: function (req:Request, file: any, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req:Request, file: any, cb) {
        cb(null, new Date().toISOString()+ file.originalname)
    }
})

const fileFilter = (req:Request, file: any, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 }, fileFilter: fileFilter  });

export default upload;