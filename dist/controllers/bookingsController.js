"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookingsData = exports.addBookings = void 0;
const bookingsModel_1 = require("../models/bookingsModel");
const getBookingsData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const bookingsCollection = client.db("movieflix").collection("bookings");
    try {
        const bookings = yield bookingsModel_1.Bookings.find();
        res.status(200).json({ bookings });
    }
    catch (error) {
        throw error;
    }
});
exports.getBookingsData = getBookingsData;
const addBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const booking = new bookingsModel_1.Bookings({
            email: body.email,
            userName: body.userName,
            movieName: body.movieName,
            date: body.date,
            time: body.time,
            seatId: body.seatId,
        });
        const newBooking = yield booking.save();
        const allBookings = yield bookingsModel_1.Bookings.find();
        res.status(201).json({ message: "Bookings added", booking: newBooking, bookings: allBookings });
    }
    catch (error) {
        throw error;
    }
});
exports.addBookings = addBookings;