import React from "react";
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div className="container signup">
      <h1 style={{ textAlign: "center", color: "green" }}>Register</h1>

      <div className="signupWidth">
        <form>
          <div className="mb-2 form-group">
            <label for="name" className="form-label" style={{ color: "white" }}>
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="your name"
              className="form-control"
            />
          </div>

          <div className="mb-2 form-group">
            <label for="email" className="form-label" style={{ color: "white" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="your email"
              className="form-control"
            />
          </div>


          <div className="mb-4 form-group">
            <label for="password" className="form-label" style={{ color: "white" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="your password"
              className="form-control"
            />
          </div>


          <div className="form-group form-button">
            <input
              type="submit"
              name="signup"
              id="signup"
              className="form-submit btn-primary btn-block form-control"
              value="register"
            />
          </div>

          

          <Link to="/login" className="nav-link" style={{ color: "white" }}>Already Registered? Go to Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
