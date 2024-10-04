import { useContext } from "react";
import { LoginDetails } from "./AuthenContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const { authen, logOut } = useContext(LoginDetails);

  return (
    <div className="">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid navbar-relative-wrapper">
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <div className="navbar-absolute-content">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              {authen ? (
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={logOut}>
                  Logout
                </button>
                </li>
              ) : (
                <Link className="link" to="/login">
                  <li className="nav-item">
                    <button className="btn btn-outline-success">Login</button>
                  </li>
                </Link>
              )}
            </li>
            {/* <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
    //     <nav>
    //         <ul>
    //             <li><p className="App">
    //                 Dashboard
    //             </p></li>
    //             {authen ? (
    //     <button style={logout_button} onClick={logOut}>Logout</button>
    //   ) : (
    //     <Link to="/login">
    //       <li><button style={login_button}>login_button</button></li>
    //     </Link>
    //   )}

    //         </ul>
    //     </nav>
  );
};

export default Navbar;
