"use client";

import { navigate } from "./actions";

export const LoginForm = () => {
  return (
    <form className="grid gap-4 max-w-lg" action={navigate}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <label htmlFor="username">Email/Username</label>
          <input
            type="user"
            autoComplete="username email"
            name="usernameInput"
            placeholder=""
            aria-invalid="false"
            id="username"
          ></input>
        </div>
        <div className="grid gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            name="passwordInput"
            placeholder=""
            id="password"
          ></input>
        </div>
      </div>

      <div className="grid justify-center">
        <button className="bg-orange-400 px-3 py-2 rounded-sm hover:bg-orange-500 transition-colors">
          Submit
        </button>
      </div>
    </form>
  );
};
