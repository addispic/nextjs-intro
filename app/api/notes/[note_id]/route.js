import { NextResponse } from "next/server";

// db connection
import dbConnection from '../../../../libs/db.connection';
// model
import Note from '../../../../models/note.model';


// get single note
export async function GET(request,{params}) {
    try{
        const {note_id} = params;
        await dbConnection()
        const note = await Note.findById(note_id);
        return NextResponse.json(note,{status: 200})
    }catch(err){
        return NextResponse.json({error: 'get single note error'},{status: 400});
    }
}

// update note
export async function PUT(request,{params}){
    try{
        const {note_id: _id} = params
        const {newTitle: title,newDescription: description} = await request.json()
        const updatedNote = await Note.findByIdAndUpdate(_id,{title,description},{returnOriginal: false})
        return NextResponse.json(updatedNote,{status: 200})
    }catch(err){
        return NextResponse.json({error: 'update note error'},{status: 400})
    }
}

// delete note
export async function DELETE(request,{params}){
    try{
        const {note_id:_id} = params 
        await Note.findByIdAndDelete(_id)
        return NextResponse.json({message: 'note delete successfully',_id},{status: 200})
    }catch(err){
        return NextResponse.json({error: 'delete note error'},{status: 400})
    }
}