import React from "react";

import Link from "next/link";

// icons
import { TbBallpenFilled } from "react-icons/tb";

const Header = () => {
  return (
    <header className="bg-green-500">
      <div className="max-w-[1020px] mx-auto px-[1%] py-3 flex items-center justify-between text-white">
        {/* left */}
        <Link href={"/"} className="flex items-center gap-x-1">
          <TbBallpenFilled className="text-xl" />
          <div className="font-black">
            <span className="text-gray-100">my</span>
            <span>NOTE</span>
          </div>
        </Link>
        {/* right */}
        <Link href={"/new-note"} className="px-2 py-0.5 rounded-sm bg-white text-green-500 text-sm">add new note</Link>
      </div>
    </header>
  );
};

export default Header;
