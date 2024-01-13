const LoginForm = () => {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="user"
        autoComplete="username email"
        name="usernameInput"
        placeholder=""
        aria-invalid="false"
        id="username"
      ></input>
      <label htmlFor="username">Email/Username</label>
      <input
        type="password"
        autoComplete="current-password"
        name="passwordInput"
        placeholder=""
        id="password"
      ></input>
      <label htmlFor="password">Password</label>
    </form>
  );
};

export default function Page() {
  return (
    <div>
      <div>Page: login</div>
      <LoginForm />
    </div>
  );
}
