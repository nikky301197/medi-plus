import { useNavigate } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { AuthContext } from "./ComponentSecurity/AuthProvider";
import { useContext, useState } from "react";
import axios from "axios";
import  api  from "./RestAPIEndpoint/ApiUrl";

export default function RegistrationComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [nameValidation, setNameValidationFail] = useState(false);
  const [passwordValidation, setPasswordValidationFail] = useState(false);
  const [emailvalidation, setEmailValidationFail] = useState(false);
  const [contactValidation, setContactValidationFail] = useState(false);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  function registerPatient(event) {
    event.preventDefault();
    if (fullname.length == 0 || fullname.length < 4) {
      setNameValidationFail(true);
    } 
    if (password.length == 0 || (password.length < 5  || password.length >15)) {
      setPasswordValidationFail(true);    
    } 
    if (contact.length == 0 || (contact.length != 10)) {
      setContactValidationFail(true);    
    } 
    if (email.length == 0 ) {
      setEmailValidationFail(true);    
    } 
    else {
      
      console.log(api.patientRegister);
      axios
         .post("http://localhost:8080/health_care_system/api/v1/patient/", { emailId  : email ,password : password, fullName : fullname , phoneNo :contact })
        .then((result) => {
          console.log(result);
          alert("Patient Successfully Register !");
        
           navigate("/login");
        })
        .catch((error) => {
          console.log(error);         
          authContext.setAuthenticated(false);
          alert("Patient Registeration Failed : E-mail already exist!");
        });
    }
  }
  return (
    <div>
      <HeaderComponent />
      <section className="appointment">
        <div className="container">
          <div className="pt-4 ">
            <h4>NEW PATIENT ENROLLMENT</h4>
            {/* <img className="pt-5" src="img/section-img.png" alt="#" /> */}
          </div>

          <div className="row ">
            <div className="col-lg-7 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <input
                        name="Full name "
                        type="text"
                        placeholder="Full Name"
                        required
                        onChange={(event) => {
                          setFullName(event.target.value);
                          setNameValidationFail(false);
                        }}
                      />
                      {nameValidation ? (
                        <small style={{ color: "red", fontSize: "14px" }}>
                          Please enter valid name!
                        </small>
                      ) : (
                        <small></small>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        name="Email id"
                        type="email"
                        placeholder="E-mail Id"
                        required
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setEmailValidationFail(false);
                        }}
                      />
                        {emailvalidation ? (
                        <small style={{ color: "red", fontSize: "14px" }}>
                          Please enter valid e-mail address !
                        </small>
                      ) : (
                        <small></small>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        name="Contact Number"
                        type="text"
                        placeholder="Contact Number"
                        required
                        onChange={(event) => {
                          setContact(event.target.value);
                          setContactValidationFail(false);
                        }}
                      />
                        {contactValidation ? (
                        <small style={{ color: "red", fontSize: "14px" }}>
                          Please enter 10 digit contact number!
                        </small>
                      ) : (
                        <small></small>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div
                        className="nice-select form-control wide"
                        tabindex="0"
                      >
                        <span className="current">Gender</span>
                        <ul className="list">
                          {/* <li data-value="1" className="option selected">
                            Ticket Category
                          </li> */}
                          <li data-value="2" className="option">
                            Male
                          </li>
                          <li data-value="3" className="option">
                            Female
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        name="Password"
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(event) => {
                          setPassword(event.target.value);
                          setPasswordValidationFail(false);
                        }}
                      />
                        {passwordValidation ? (
                        <small style={{ color: "red", fontSize: "14px" }}>
                          Password length must be between 6 to 15 character long!
                        </small>
                      ) : (
                        <small></small>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="button mt-4">
                        <button
                          type="submit"
                          className="btn pl-5 pr-5"
                          onClick={registerPatient}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    {/* <p>( We will be confirm by an Text Message )</p> */}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 col-md-12 ">
              <div className="appointment-image">
                <img src="img/contact-img.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
