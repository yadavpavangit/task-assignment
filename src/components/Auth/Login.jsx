import React, { useState } from "react";

function Login() {
  const [authLogin, setAuthLogin] = useState({ email: "", password: "" });
  const HandleSubmit = (e) => {
    e.preventDefault();
    setAuthLogin({ email: "", password: "" });
  };

  return (
    <div className="max-w-lvw h-screen flex items-center justify-center px-8">
      <form
        className="w-80 md:w-120 lg:w-240 px-20 flex flex-col gap-15 border bg-black/50 p-10 rounded-lg"
        onSubmit={HandleSubmit}
      >
        <div className="input-fields">
          <label htmlFor="emailLogin">Email: </label>
          <input
            type="email"
            id="emailLogin"
            value={authLogin.email}
            onChange={(e) =>
              setAuthLogin({ ...authLogin, email: e.target.value })
            }
            className="w-full p-2 border border-gray-300 outline-none rounded-md"
            placeholder="Email..."
          />
        </div>
        <div className="input-fields">
          <label htmlFor="passwordLogin">Password: </label>
          <input
            type="password"
            id="passwordLogin"
            value={authLogin.password}
            onChange={(e) =>
              setAuthLogin({ ...authLogin, password: e.target.value })
            }
            className="w-full p-2 border border-gray-300 outline-none rounded-md"
            placeholder="Password..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 w-49 mx-auto text-white p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
