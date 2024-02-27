import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const orderSchema = new Schema(
  {
    cartItems: Array,
    userName: String,
    phoneNumber: Number,
    area: String,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
