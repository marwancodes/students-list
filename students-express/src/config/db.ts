import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error('Error: ', error.message);
        process.exit(1); // 1 code means exit failure, 0 means success
    }
}