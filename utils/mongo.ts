import mongoose from "mongoose";
const MONGODB_URI: any = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function dbConnect() {
  mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
}

export default dbConnect;
