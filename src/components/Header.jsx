import React from "react";

function Header() {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-2">
        <span>Hello, </span> <p className="text-3xl">Pavan✋</p>
      </h1>
      <button className="px-3 py-2 bg-green-600 rounded-xl">Log Out</button>
    </div>
  );
}

export default Header;
