import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Todo, { ITodo } from "../model/Todo";
// import Todo, { ITodo } from "../model/todo.model";

// Controller to fetch all todos
export const getAllTodos = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const result: ITodo[] = await Todo.find();
    res.json({ message: "Fetch All Todos Success", result });
});

// Controller to add a new todo
export const addTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { task, desc }: ITodo = req.body;
    await Todo.create({ task, desc });
    res.json({ message: "Add Todos Success" });
});

// Controller to update a todo
export const updateTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updateData: Partial<ITodo> = req.body;
    await Todo.findByIdAndUpdate(id, updateData);
    res.json({ message: "Update Todos Success" });
});

// Controller to delete a todo
export const deleteTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Delete Todos Success" });
});
