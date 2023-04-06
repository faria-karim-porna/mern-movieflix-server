import { IBookings } from "../types/bookingsType";
import { model, Schema } from "mongoose";
// const ObjectId = require("mongodb").ObjectId;

const bookingsSchema: Schema = new Schema({
  // _id: { type: typeof ObjectId, required: true },
  email: { type: String },
  userName: { type: String },
  movieName: { type: String },
  date: { type: String },
  time: { type: String },
  seatId: { type: String },
});

export const Bookings = model<IBookings>("Bookings", bookingsSchema, "bookings");
