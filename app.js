import express from 'express';
import HelloController from "./controllers/hello-controller.js"
import UserController from './users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import cors from 'cors'
import session from "express-session";
import AuthController from './users/auth-controller.js';
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://brianhugar:NThLo8ZVcAbofSyR@cluster0.fggjpjr.mongodb.net/tuiter?retryWrites=true&w=majority");

const app = express()
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
   );

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
)
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app);
AuthController(app);
app.listen(process.env.PORT || 4000);