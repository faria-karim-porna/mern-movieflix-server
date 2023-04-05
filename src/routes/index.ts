import { Router } from "express";
import { addMultipleMovies, getMoviesInfo, updateSeatStatus } from "../controllers/moviesController";
import { addBookings } from "../controllers/bookingsController";
// import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos"

const router: Router = Router();

router.post("/addAllData", addMultipleMovies);

router.get("/showMoviesInfo", getMoviesInfo);

router.patch("/updateStatus", updateSeatStatus);

router.post("/addBookings", addBookings);

export default router;
