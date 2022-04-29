import { Request, Response } from 'express';
import * as multer from 'multer';
import * as path from "path";

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    console.log(__dirname + "/");
    callback(null,"./public");
    // callback(null,path.join(__dirname, './'));
  },
  filename: (req, file, cb) => {
    cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/))  {
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  }
const upload = multer({ 
    storage: storage ,
fileFilter: fileFilter
});
export default upload;