import { Link } from "react-router-dom";

export default function HeaderComponent()
{
    return(
      
        <header className="header">
           {/* <div className="preloader">
        <div className="loader">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>

          <div className="indicator">
            <svg width="16px" height="12px">
              <polyline
                id="back"
                points="1 6 4 6 6 11 10 1 12 6 15 6"
              ></polyline>
              <polyline
                id="front"
                points="1 6 4 6 6 11 10 1 12 6 15 6"
              ></polyline>
            </svg>
          </div>
        </div>
      </div> */}
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
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="logo">
                    <Link to="/">
                      <img src="img/logo.png" alt="#" />
                    </Link>
                  </div>
                  <div className="mobile-nav"></div>
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active">
                          <Link to="/">
                            Home 
                          </Link>
                         
                        </li>
                       
                        <li>
                          <Link to="/service">Services </Link>
                        </li>
                        {/* <li>
                          <Link>
                            Pages <i className="icofont-rounded-down"></i>
                          </Link>
                          <ul className="dropdown">
                            <li>
                              <a href="404.html">404 Error</Link>
                            </li>
                          </ul>
                        </li> */}
                        <li>
                          <Link to="/raiseQuery">
                          Raise Query
                          </Link>
                         
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        {/* <li>
                          <a href="contact.html">Contact Us</Link>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-2 col-12">
                  <div className="get-quote">
                    <Link to="/"  className="btn">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> 
    );
}