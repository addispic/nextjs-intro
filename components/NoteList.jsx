import React from "react";
import {format} from 'timeago.js'

// icons
import { RiEditBoxFill } from "react-icons/ri";
import { RiDeleteBin4Fill } from "react-icons/ri";

// get all notes
const getAllNotes = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/notes',{cache: 'no-store'});

        if(res.ok){
            const notes = await res.json()
            return notes
        }else {
            throw new Error('get note error')
        }
    } catch (err) {
        console.log(err);
    }
}

const NoteList = async () => {
    let notes = await getAllNotes();
  return (
    <div>
      {notes.map((noteItem) => {
        return (
          <div key={noteItem?._id} className="p-3 mb-3 border border-green-200 rounded-md">
            {/* title */}
            <div className="font-bold text-green-500">
              <h1>{noteItem?.title}</h1>
            </div>
            {/* description */}
            <div className="text-sm text-gray-500">
              <p>{noteItem?.description}</p>
            </div>
            {/* actions */}
            <div className="mt-3 flex items-center gap-x-3">
              {/* date */}
              <div className="text-xs text-gray-500">
                <span>{format(noteItem?.createdAt)}</span>
              </div>
              {/* edit */}
              <button className="text-green-500 transition-colors ease-in-out duration-150 hover:text-green-400">
                <RiEditBoxFill />
              </button>
              {/* delete */}
              <button className="text-red-500 transition-colors ease-in-out duration-150 hover:text-red-400">
                <RiDeleteBin4Fill />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
