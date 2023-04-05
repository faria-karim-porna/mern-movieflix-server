import { IBookings } from "../types/bookingsType";
import { model, Schema } from "mongoose";
const ObjectId = require("mongodb").ObjectId;

const bookingsSchema: Schema = new Schema({
  _id: { type: typeof ObjectId, required: true },
  email: { type: String, required: true },
  userName: { type: String, required: true },
  movieName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  seatId: { type: String, required: true },
});

export default model<IBookings>("Bookings", bookingsSchema);
