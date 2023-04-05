"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const moviesSchema = new mongoose_1.Schema({
    // _id: { type: typeof ObjectId, required: true },
    id: { type: Number, required: true },
    movie: { type: String, required: true },
    movieDescription: { type: String, required: true },
    image: { type: String, required: true },
    timeAndDate: { type: String, required: true },
    seatsArrangement: { type: (Array), required: true },
});
exports.default = (0, mongoose_1.model)("Movies", moviesSchema);
