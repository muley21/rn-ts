import express from "express"
import { addTodo, deleteTodo, getAllTodos, updateTodo } from "../controller/todo.controller";


const router = express.Router();

router
    .get("/", getAllTodos)
    .post("/add", addTodo)
    .put("/update/:id", updateTodo)
    .delete("/delete/:id", deleteTodo);

export default router;
