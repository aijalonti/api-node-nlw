import "reflect-metadata";
import express, { request } from "express";
import "./database";
import { router } from "../routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3535, () => console.log("Server is running!"));
