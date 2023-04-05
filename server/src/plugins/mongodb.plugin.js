import mongoose from "mongoose";

export const useMongoDB = async (callback) => {
  mongoose.set('strictQuery', true);
  await mongoose
    .connect(process.env.DATABASE_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
    .then(() => console.log("Database connection successful"))
    .then(() => {
      if (callback) callback();
    })
    .catch((e) => console.log("Database connection fail",e));
};
