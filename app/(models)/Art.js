import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const motionArtModel = new Schema ({
    artist: String,
    exhibitions: Number,
    articles: Number,
    sales: Number,
    followers: Number,
    collections: Number,
    commissions: Number
},
{
    timestamps: true,
},
);

const Art = mongoose.models.Art || mongoose.model("Art", motionArtModel) 

export default Art;