"use client";

import React, { useState } from "react";

const AddNewNote = () => {
  // states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


//   adjust height
const adjustHeight = e => {
    let element = document.getElementById('new-note-description-input')

    element.style.height = '26px' 

    let scHeight = e.target.scrollHeight 

    element.style.height = `${scHeight}px`

    console.log(scHeight)
}

  return (
    <div>
      <div className="max-w-[1020px] mx-auto px-[1%] py-5">
        <div>
          {/* title */}
          <div className="mb-3 border border-green-500 p-1 py-2 rounded-md bg-white">
            <input
              className="focus:outline-none focus:ring-0 border-none w-full bg-transparent"
              placeholder="note title"
              type="text"
              value={title}
              onChange={e=>setTitle(e.target.value)}
            />
          </div>
          {/* description */}
          <div className="mb-3 border border-green-500 p-1 rounded-md bg-white">
            <textarea
              placeholder="note description"
              className="focus:outline-none focus:ring-0 border-none w-full resize-none h-[26px] pt-0.5"
              name=""
              id="new-note-description-input"
              value={description}
              onChange={e=>setDescription(e.target.value)}
              onKeyUp={adjustHeight}
            ></textarea>
          </div>
          {/* buttons */}
          <div>
            {/* add */}
            <button className="px-3 py-0.5 text-sm rounded-sm bg-green-500 text-white">
              add note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewNote;
