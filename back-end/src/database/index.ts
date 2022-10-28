import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoURI = process.env.MONGO_URI;

export default function connectToMongoDB() {
  if (mongoURI) {
    mongoose
      .connect(mongoURI, {})
      .then(() => console.log('Connected to database!'))
      .catch(error => console.log(error));
  }
}
