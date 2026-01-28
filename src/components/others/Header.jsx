import React from "react";

function Header() {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="font-semibold leading-1">
        <span className="text-xl">Hello, </span>{" "}
        <p className="text-3xl">Pavan✋</p>
      </h1>
      <button className="px-3 py-2 bg-green-600 rounded-lg">Log Out</button>
    </div>
  );
}

export default Header;
