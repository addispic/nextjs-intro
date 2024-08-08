import mongoose, { Schema } from "mongoose";

// note schema
const noteSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// model
const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

// export
export default Note;
