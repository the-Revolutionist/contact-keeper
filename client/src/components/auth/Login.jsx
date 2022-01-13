import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <>
      <div className="form-container">
        <h1>
          Account <span className="text-primary">Login</span>
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
            />
          </div>

          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="login"
          />
        </form>
      </div>
    </>
  );
};
