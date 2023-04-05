import { Document } from "mongoose";
const ObjectId = require("mongodb").ObjectId;
export interface IBookings extends Document {
  // _id: typeof ObjectId;
  email: string;
  userName: string;
  movieName: string;
  date: string;
  time: string;
  seatId: string;
}
