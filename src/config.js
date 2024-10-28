import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const USER = process.env.USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const SECRET_KEY = process.env.SECRET_KEY;

export const DB_URI = `mongodb+srv://${USER}:${DB_PASSWORD}@cluster0.vq5gp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
