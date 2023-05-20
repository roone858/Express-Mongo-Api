import mongoose, { Schema } from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
