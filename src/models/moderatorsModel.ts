import mongoose, { Schema } from 'mongoose';

const ModeratorSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'moderator' },
});
const Moderator = mongoose.model('Moderator', ModeratorSchema);

export default Moderator;
