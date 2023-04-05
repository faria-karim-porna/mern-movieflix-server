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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSeatStatus = exports.addMultipleMovies = exports.getMoviesInfo = void 0;
const moviesModel_1 = __importDefault(require("../models/moviesModel"));
const getMoviesInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMovies = yield moviesModel_1.default.find();
        res.status(200).json({ allMovies });
    }
    catch (error) {
        throw error;
    }
});
exports.getMoviesInfo = getMoviesInfo;
const addMultipleMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const movies = [];
        for (let index = 0; index < body.length; index++) {
            const movie = new moviesModel_1.default({
                id: body[index].id,
                movie: body[index].movie,
                movieDescription: body[index].movieDescription,
                image: body[index].image,
                timeAndDate: body[index].timeAndDate,
                seatsArrangement: [...body[index].seatsArrangement],
            });
            movies.push(movie);
        }
        const newMovies = yield moviesModel_1.default.insertMany(movies);
        const allMovies = yield moviesModel_1.default.find();
        res.status(201).json({ message: "Multiple Movies Added", movies: newMovies, overallMovies: allMovies });
    }
    catch (error) {
        throw error;
    }
});
exports.addMultipleMovies = addMultipleMovies;
const updateSeatStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        yield moviesModel_1.default.updateOne({ id: req.body.id, "seatsArrangement.sid": body.sid }, {
            $set: { "seatsArrangement.$.status": body.status },
        });
        const allMovies = yield moviesModel_1.default.find();
        res.status(200).json({
            message: "Seat Status Updated",
            overallMovies: allMovies,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateSeatStatus = updateSeatStatus;
