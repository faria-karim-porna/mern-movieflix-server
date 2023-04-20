import { Router } from "express";
import { addMultipleMovies, getMoviesInfo, updateSeatStatus } from "../controllers/moviesController";
import { addBookings, getBookingsData } from "../controllers/bookingsController";

const router: Router = Router();

router.post("/addAllData", addMultipleMovies);

router.get("/showMoviesInfo", getMoviesInfo);

router.patch("/updateStatus", updateSeatStatus);

router.post("/addBookings", addBookings);

router.get("/getBookings", getBookingsData);


export default router;
