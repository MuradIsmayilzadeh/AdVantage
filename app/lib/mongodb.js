import mongoose from "mongoose";

// Returns true when a database connection is available.
const ConnectDB = async () => {
  if (!process.env.DATAB_URL) return false;
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.DATAB_URL, { serverSelectionTimeoutMS: 4000 });
    }
    return true;
  } catch (error) {
    console.error("MongoDB connection failed, using sample data:", error.message);
    return false;
  }
};

export default ConnectDB;
