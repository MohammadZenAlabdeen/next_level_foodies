"use server";  
import mongoose from 'mongoose';  

let isConnected; // Track the connection status  

const connectMongoDB = async () => {  
    const url = process.env.MONGO_DB;  

    // Only attempt to connect if not already connected  
    if (isConnected) {  
        return; // If we're already connected, do nothing  
    }  

    try {  
        await mongoose.connect(url, {  
            useNewUrlParser: true,  
            useUnifiedTopology: true,  
        });  
        isConnected = true; // Update connection status  
        console.log('Connected to MongoDB successfully');  
    } catch (error) {  
        console.error('Error connecting to MongoDB:', error);  
        throw new Error("Failed to connect to MongoDB"); // Throw an error for the caller to handle  
    }  
};  

export default connectMongoDB;  