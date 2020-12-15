import mongoose from 'mongoose';

const connectionUrl = process.env.MONGO_CONN_STRING || 'mongodb://localhost:27017/elephantstock';

export const connect = async () => {
  await mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });
}
