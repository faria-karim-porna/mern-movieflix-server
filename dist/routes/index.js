"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController_1 = require("../controllers/moviesController");
const bookingsController_1 = require("../controllers/bookingsController");
// import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos"
const router = (0, express_1.Router)();
router.get("/addAllData", moviesController_1.addMultipleMovies);
router.post("/showMoviesInfo", moviesController_1.getMoviesInfo);
router.put("/updateStatus", moviesController_1.updateSeatStatus);
router.delete("/addBookings", bookingsController_1.addBookings);
exports.default = router;
