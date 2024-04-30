import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./ComponentSecurity/AuthProvider";
import { useContext } from "react";

export default function HeaderComponent() {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isAuthenticated;
  const navigate = useNavigate();

  function logoutFunction(event) {
    event.preventDefault();
    authContext.setAuthenticated(false);
    authContext.setToken("");
    authContext.setUsername("");
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('isAuthenticated');
    navigate("/login");
  }
  function register(event)
  {
    event.preventDefault();
    navigate("/register");
  }
  function login(event)
  {
    event.preventDefault();
    navigate("/login");
  }
  return (
    <header className="header">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ul className="top-link">
                <li>
                  <Link to="/about"> About</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              <ul className="top-contact">
                <li>
                  <i className="fa fa-phone"></i>+880 1234 56789
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <Link href="mailto:support@mail.com">
                    mediplus-support@mail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-inner">
        <div className="container-fluid">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12 ">
                <div className="logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="#" />
                  </Link>
                </div>
                <div className="mobile-nav"></div>
              </div>
              <div className="col-lg-5 col-md-9 col-12 ">
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>

                      <li>
                        <Link to="/service">Services </Link>
                      </li>

                      {isAuthenticated && (
                        <li>
                          <Link to="/raiseQuery">Raise Query</Link>
                        </li>
                      )}
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {!isAuthenticated && (
                  <div className="col-lg-2 col-12">
                    <div className="get-quote">
                      <Link to="/" className="btn">
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                ) && (
                  <div className="col-lg-4 col-12 ">
                    <row>
                      <button
                        className="btn btn-dark  ml-md-5 m-3  "
                        type="submit"
                        onClick={login}
                      >
                        Login
                      </button>
                      <button
                        className="btn btn-dark ml-md-5 ml-3 m-3   "
                        type="submit"
                        onClick={register}
                      >
                        Register
                      </button>
                    </row>
                  </div>
                )}

              {isAuthenticated && (
                <div className="col-lg-4 col-12 ">
                  <row>
                    <button
                      className="btn btn-dark ml-md-3 m-3   "
                      type="submit"
                    >
                      Book Appointment
                    </button>
                    <button
                      className="btn btn-dark  ml-md-3 m-3  "
                      type="submit"
                      onClick={logoutFunction}
                    >
                      Log Out
                    </button>
                  </row>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
