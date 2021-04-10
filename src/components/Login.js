import React, { useState, } from "react";
import { useHistory } from "react-router";
import { login } from "../actions/login";
const Login = () => {
  const history = useHistory();
  const [loginDetails, setDetails] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails(prevDetails => {
      return {
        ...prevDetails,
        [name]: value
      };
    });
  }

  async function onSubmitFunction() {
    await login(loginDetails).then(() => {
      history.push("/");
      setDetails({
        email: "",
        password: ""
      })
    }).catch(error => console.log(error));
  }

  return (
    <div className="container signup">
      <h1 style={{ textAlign: "center", color: "green" }}>Login</h1>
      <div className="signupWidth">
        <div>
          <div className="mb-2 form-group">
            <label for="email" className="form-label" style={{ color: "white" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginDetails.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Your email"
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
              value={loginDetails.password}
              onChange={handleChange}
              autoComplete="off"
              placeholder="your password"
              className="form-control"
            />
          </div>
          <div className="form-group form-button">
            <button
              type="submit"
              name="signup"
              id="signup"
              className="form-submit btn-primary btn-block form-control"
              onClick={onSubmitFunction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
