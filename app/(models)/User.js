import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const motionUserModel = new Schema ({

    username: String,
},
{
    timestamps: true,
}
);

const User = mongoose.models.User || mongoose.model("User", motionUserModel) 

export default User;

