import mongoose from 'mongoose';

export const schema = new mongoose.Schema({
  productId: Number,
  variant: {
      type: 'String',
      enum: ['S', 'M', 'L', 'XL'],
  },
  order: {
      orderDate: Date,
      price: Number
  }
});

export const model = mongoose.model("order", schema);
