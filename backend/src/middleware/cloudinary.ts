// import "@babel/polyfill";
import { Request, Response, NextFunction } from 'express';
import cloudinary from "../utils/cloudinary";

const cloudinaryUpload = async (req:Request, res:Response, next: NextFunction) => {
  try {
    // to test if the image is uploaded successfully
    const image = await cloudinary.uploader.upload(req.files[0].path,{
        folder: "kevent/images",
        use_filename: true,
    });
    req.body.imageUrls = image.url;
    console.log(image);
  } catch (err) {
    if (err) {
      res.status(400).send({
        err,
      });
    }
  }
  return next();
};
export default cloudinaryUpload;