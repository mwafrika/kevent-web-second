import * as cloudinary from "cloudinary";
// import {cloud_name, api_key, api_secret} from "../config";
import * as dotenv from "dotenv";
dotenv.config();

const cloud = cloudinary.v2;


cloud.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

export default cloud;