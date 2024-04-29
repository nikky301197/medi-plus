import { Link } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function RaiseQueryComponent() {
  return (
    <div className="raiseQuery">
      <HeaderComponent />
      <div 
       className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2 className="p-2">Raise Query</h2>
                <h7 style={{ color: "white"}}>
                Your health and well-being are our top priority, and we are here to assist you every step of the way.
                 
                </h7>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services section">
        
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="icofont icofont-prescription"></i>
                <h4>
                  <Link to="/raiseTicket">Raise Query</Link>
                </h4>
                <p>
                If you require medical assistance or consultation, please don't hesitate to raise a ticket with our support team. we will ensure that you receive the necessary guidance and support.
                </p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="icofont icofont-eye-alt"></i>
                <h4>
                  <Link to="/viewTicket">Review Query</Link>
                </h4>
                <p>
               Simply navigate to the designated section on our platform or website where your ticket is stored .From there, you can view all relevant information regarding your inquiry for assistance.{" "}
                </p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="icofont icofont-heart-alt"></i>
                <h4>
                  <Link to="/feedback">Feedback & Suggestion</Link>
                </h4>
                <p>
                Please feel free to share your feedback and suggestions with us. we genuinely appreciate your contribution to our ongoing efforts to serve you better.{" "}
                </p>
              </div>
            </div>
          
           
          </div>
        </div>
     
      </section>

    
      <FooterComponent />
    </div>
  );
}
