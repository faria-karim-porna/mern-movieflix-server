import { Response, Request } from "express";
import { IBookings } from "../types/bookingsType";
import { Bookings } from "../models/bookingsModel";

const getBookingsData = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookings: IBookings[] = await Bookings.find()
    res.status(200).json({ bookings })
  } catch (error) {
    throw error
  }
}

const addBookings = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IBookings, keyof IBookings>;

    const booking: IBookings = new Bookings({
      email: body.email,
      userName: body.userName,
      movieName: body.movieName,
      date: body.date,
      time: body.time,
      seatId: body.seatId,
    });

    const newBooking: IBookings = await booking.save();
    const allBookings: IBookings[] = await Bookings.find();

    res.status(201).json({ message: "Bookings added", booking: newBooking, bookings: allBookings });
  } catch (error) {
    throw error;
  }
};

export { addBookings, getBookingsData };
