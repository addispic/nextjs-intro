import { NextResponse } from "next/server";

// get all notes
export async function GET() {
  return NextResponse.json({ message: "Get All Notes" }, { status: 200 });
}

// add new note
export async function POST(request) {
  return NextResponse.json({ message: "Add New Post" }, { status: 201 });
}

// delete single note
export async function DELETE(request) {
  return NextResponse.json({ message: "Delete Single Note" }, { status: 200 });
}
