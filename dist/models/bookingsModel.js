"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookings = void 0;
const mongoose_1 = require("mongoose");
// const ObjectId = require("mongodb").ObjectId;
const bookingsSchema = new mongoose_1.Schema({
    // _id: { type: typeof ObjectId, required: true },
    email: { type: String },
    userName: { type: String },
    movieName: { type: String },
    date: { type: String },
    time: { type: String },
    seatId: { type: String },
});
exports.Bookings = (0, mongoose_1.model)("Bookings", bookingsSchema, "bookings");
