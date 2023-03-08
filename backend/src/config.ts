require('dotenv').config();

export const PORT = process.env.PORT || 5000; 
export const cloud_name = process.env.cloud_name || 'ujuzi'
export const api_key = process.env.api_key || '854234824891949'
export const api_secret= process.env.api_secret || 'cB5LyGVzFAzcF6jo6b2ddWHxd5A'
export const jwtSecret = process.env.jwtSecret || 'mwafrika';
export const HOST = process.env.HOST || 'smtp.gmail.com';
export const SERVICE = process.env.SERVICE || 'gmail';
export const USER = process.env.USER || 'josuemwafrika2020@gmail.com';
export const PASS = process.env.PASS || 'tcxsgnwfhjummgpm';
export const DATABASE_URL = process.env.DATABASE_URL || 'postgres://kevent_user:TFfDTY0Y8nxmQR8cCfwDZ9B095ORVeja@dpg-cg28ri7dvk4rono47sag-a.oregon-postgres.render.com/kevent_lwzt';
export const DEV_DATABASE_URL = 'postgres://kevent:kevent@localhost:5432/keventDB'


//npm run typeorm migration:run