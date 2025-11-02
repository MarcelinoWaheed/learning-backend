import mongoos from "mongoose";

const connectMongo = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database Connected Successfully");
        });
        await mongoos.connect(process.env.MONGO_URL);
    } catch (error) {
        console.log(error.message);        
    }
} 

export default connectMongo;
