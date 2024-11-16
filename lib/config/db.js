import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://darkplayer480p:dudemuhammad@cluster0.yvyrw.mongodb.net/blogging-next')
    console.log('DB Connected')
}