import mongoose, { Document, Schema } from "mongoose";

// Define the Todo interface for type safety
export interface ITodo extends Document {
    task: string;
    desc: string;
}

// Define the schema for the Todo model
const todoSchema: Schema = new Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
});

// Export the model with the ITodo interface
export default mongoose.model<ITodo>("Todo", todoSchema);
