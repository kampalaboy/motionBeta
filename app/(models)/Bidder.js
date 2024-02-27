import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const motionBidModel = new Schema ({
    username: String,
    phoneNumber: Number,
},
{
    timestamps: true,
},
);

const Bidder = mongoose.models.Bidder || mongoose.model("Bidder", motionBidModel) 

export default Bidder;