import { NextResponse } from "next/server";

// db connection
import dbConnection from "@/libs/db.connection";

// models
import Note from "@/models/note.model";

// get all notes
export async function GET() {
  try{
    await dbConnection()
    const notes = await Note.find().sort({createdAt: -1});
    console.log(notes)
    return NextResponse.json(notes,{status: 200});
  }catch(err){
    return NextResponse.json({error: 'get all notes error'},{status: 400})
  }
}

// add new note
export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await dbConnection()
    const newNote = await Note.create({title,description});
    return NextResponse.json(newNote, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "add new note error" }, { status: 400 });
  }
}
