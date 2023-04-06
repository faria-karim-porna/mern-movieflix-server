import { Response, Request } from "express";
// import { ITodo } from "./../../types/todo";
// import Todo from "../../models/todo";
import { IMovies } from "../types/moviesType";
import { Movies } from "../models/moviesModel";
// import Movies from "../models/moviesModel";

const getMoviesInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    const allMovies: IMovies[] = await Movies.find();
    console.log(allMovies);
    // res.status(200).json({ allMovies });
    res.send("ok ok");
  } catch (error) {
    throw error;
  }
};

const addMultipleMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IMovies[], keyof IMovies[]>;

    const movies: IMovies[] = [];

    for (let index = 0; index < body.length; index++) {
      const movie = new Movies({
        id: body[index].id,
        movie: body[index].movie,
        movieDescription: body[index].movieDescription,
        image: body[index].image,
        timeAndDate: body[index].timeAndDate,
        seatsArrangement: [...body[index].seatsArrangement],
      });
      movies.push(movie);
    }

    const newMovies: IMovies[] = await Movies.insertMany(movies);
    const allMovies: IMovies[] = await Movies.find();

    res.status(201).json({ message: "Multiple Movies Added", movies: newMovies, overallMovies: allMovies });
  } catch (error) {
    throw error;
  }
};

const updateSeatStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body;
    await Movies.updateOne<IMovies | null>(
      { id: req.body.id, "seatsArrangement.sid": body.sid },
      {
        $set: { "seatsArrangement.$.status": body.status },
      }
    );
    const allMovies: IMovies[] = await Movies.find();
    res.status(200).json({
      message: "Seat Status Updated",
      overallMovies: allMovies,
    });
  } catch (error) {
    throw error;
  }
};

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

export { getMoviesInfo, addMultipleMovies, updateSeatStatus };
