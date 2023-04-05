import { Router } from "express";
import { addMultipleMovies, getMoviesInfo, updateSeatStatus } from "../controllers/moviesController";
import { addBookings } from "../controllers/bookingsController";
// import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos"

const router: Router = Router();

router.get("/addAllData", addMultipleMovies);

router.post("/showMoviesInfo", getMoviesInfo);

router.put("/updateStatus", updateSeatStatus);

router.delete("/addBookings", addBookings);

export default router;
