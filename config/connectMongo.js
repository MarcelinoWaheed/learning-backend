import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database Connected Successfully");
        });
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectMongo;
