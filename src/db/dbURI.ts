import { config } from 'dotenv'

config();

const URI = `mongodb+srv://${process.env.HOST}:${process.env.PORT}/${process.env.DB}`;

export { URI };