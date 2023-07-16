import { useState } from "react";

function Navbar() {
  // eslint-disable-next-line no-restricted-globals
  const size = screen.width;

  const [state, setState] = useState(true);

  function navbarToggler() {
    setState(!state);
    if (state === true) {
      document.querySelector(".overlay").style.visibility = "visible";
      document
        .querySelector(".nav-mobile img")
        .setAttribute("src", `images/icon-close.svg`);
    } else {
      document.querySelector(".overlay").style.visibility = "hidden";
      document
        .querySelector(".nav-mobile img")
        .setAttribute("src", `images/icon-hamburger.svg`);
    }
  }

  if (size >= 280 && size <= 480) {
    return (
      <nav className="nav-mobile">
        <img
          src="images/icon-hamburger.svg"
          alt="Hamburger menu"
          id="nav-btn"
          onClick={navbarToggler}
        />
        <p>room</p>
      </nav>
    );
  } else {
    return(
      <nav className="nav-desk">
        <p>room</p>
        <a href="#">home</a>
        <a href="#">shop</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </nav>
    );
  }
}

export default Navbar;
