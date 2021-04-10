import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Link } from "react-router-dom";

function Header() {

  function clearStorage() {
    localStorage.clear();
  }

  return (
    <header>
      <h1 style={{ textAlign: "center" }}>
        <HighlightIcon />
        Keeper
      </h1>
      <Link className="link" to="/sign-in">
        <h6 style={{ textAlign: "center" }} onClick={clearStorage}>
          Log out
      </h6>
      </Link>
    </header>
  );
}

export default Header;
