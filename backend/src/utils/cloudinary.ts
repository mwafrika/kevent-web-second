import * as cloudinary from "cloudinary";
import {cloud_name, api_key, api_secret} from "../config";
const cloud = cloudinary.v2;


cloud.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

export default cloud;