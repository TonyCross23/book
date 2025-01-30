import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || `mongodb://localhost:27017/book`
    );
    console.log(`mongodb is connected `);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
