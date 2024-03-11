import mongoose from "mongoose";
const dbURI = process.env.DATABASE_URI!;
mongoose.set('strictQuery', false);
mongoose.connect(dbURI)
    .then(()=>console.log("Connected to database"))
    .catch(err=>console.log(err));

export default mongoose;