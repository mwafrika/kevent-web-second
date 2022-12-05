import { Request, Response } from 'express';
import * as multer from 'multer';
import * as path from "path";

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null,"./public");
  },
  filename: (req, file, cb) => {
    cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg|svg|jpeg)$/))  {
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  }
const upload = multer({ 
    storage: storage ,
fileFilter: fileFilter
});
export default upload;