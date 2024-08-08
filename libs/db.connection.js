import mongoose from "mongoose";

// db connection
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (err) {
    console.log(err);
    console.log("db connection error");
    process.exit(-1);
  }
};

// export
export default dbConnection;
