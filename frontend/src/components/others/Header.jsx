import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  const { name } = currentUser;
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="font-semibold leading-1">
        <span className="text-xl">Hello, </span>{" "}
        <p className="text-3xl">{name}✋</p>
      </h1>
      <button className="px-3 py-2 bg-green-600 rounded-lg" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}

export default Header;
