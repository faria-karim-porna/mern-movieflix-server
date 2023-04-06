import { Response, Request } from "express";
// import { ITodo } from "./../../types/todo"
// import Bookings from "../models/bookingsModel";
import { IBookings } from "../types/bookingsType";
import { Bookings } from "../models/bookingsModel";

const getBookingsData = async (req: Request, res: Response): Promise<void> => {
  // const bookingsCollection = client.db("movieflix").collection("bookings");
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

//   const updateTodo = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const {
//         params: { id },
//         body,
//       } = req
//       const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
//         { _id: id },
//         body
//       )
//       const allTodos: ITodo[] = await Todo.find()
//       res.status(200).json({
//         message: "Todo updated",
//         todo: updateTodo,
//         todos: allTodos,
//       })
//     } catch (error) {
//       throw error
//     }
//   }

//   const deleteTodo = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
//         req.params.id
//       )
//       const allTodos: ITodo[] = await Todo.find()
//       res.status(200).json({
//         message: "Todo deleted",
//         todo: deletedTodo,
//         todos: allTodos,
//       })
//     } catch (error) {
//       throw error
//     }
//   }

//   export { getTodos, addTodo, updateTodo, deleteTodo }
export { addBookings, getBookingsData };
