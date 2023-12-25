import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

//If we don't already have a mongoose cached connection, we are going to set it as an empty object.
let cached = (global as any).mongoose || {conn: null, promise: null}

export const connectToDatabase = async () => {
    //If cached.conn exists, simply return it.
    if (cached.conn) return cached.conn

    if(!MONGODB_URI) throw new Error("MONGODB_URI is missing!")

    //Creating a new connection if cached.promise doesn't exist
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'foodconnect',
        bufferCommands: false,
    })

    cached.conn = await cached.promise

    return cached.conn
}