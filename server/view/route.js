import { Router } from "express";
import { signUpHandler,loginHandler } from "../controller/userController.js";
import { getAllMovies } from "../controller/moviesController.js";

const router=Router();

//endpints
router.post("/signup",signUpHandler)
router.post("/login",loginHandler)
router.get("/getmovies",getAllMovies)


export default router;