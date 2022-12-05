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
export const DATABASE_URL = process.env.DATABASE_URL || 'postgres://kevent_user:18LU0zDAXFwSRwlKYfsVsLCBVJqh5EfD@dpg-ce6iq0arrk071o5t3h00-a.oregon-postgres.render.com/kevent';
export const DEV_DATABASE_URL = 'postgres://kevent:kevent@localhost:5432/keventDB'


//npm run typeorm migration:run