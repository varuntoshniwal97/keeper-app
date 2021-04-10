import React from "react";

const Login = () => {
  return (
    <div className="container signup">
      <h1 style={{ textAlign: "center", color: "green" }}>Login</h1>

      <div className="signupWidth">
        <form>
          

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


          <div className="mb-3 form-group">
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
              value="Login"
            />
          </div>

          
        </form>
      </div>
    </div>
  );
};

export default Login;
