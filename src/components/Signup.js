import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { signUp } from "../actions/signUP";

function Signup(props) {
  const history = useHistory();
  const [signUpDetails, setDetails] = useState({
    email: "",
    password: "",
    name: ""
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
    await signUp(signUpDetails).then((token) => {
      props.updateToken(token);
      history.push("/");
      setDetails({
        email: "",
        password: "",
        name: ""
      })
    }).catch(error => console.log(error));
  }

  return (
    <div className="container signup">
      <h1 style={{ textAlign: "center", color: "green" }}>Register</h1>
      <div className="signupWidth">
        <div>
          <div className="mb-2 form-group">
            <label for="name" className="form-label" style={{ color: "white" }}>
              Name
            </label>
            <input
              name="name"
              id="name"
              value={signUpDetails.name}
              onChange={handleChange}
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
              value={signUpDetails.email}
              onChange={handleChange}
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
              value={signUpDetails.password}
              onChange={handleChange}
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
              onClick={onSubmitFunction}
            />
          </div>
          <Link to="/sign-in" className="nav-link" style={{ color: "white" }}>Already Registered? Go to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
