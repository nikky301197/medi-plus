import { useContext, useState } from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { AuthContext } from "./ComponentSecurity/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [emailValidation, setEmailValidationFail] = useState(false);
  const [passwordValidation, setPasswordValidationFail] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  function loginPatient(event) {
    event.preventDefault();
   
    if (password.length == 0 || (password.length < 5  || password.length >15)) {
      setPasswordValidationFail(true);    
    } 
   
    if (email.length == 0 ) {
      setEmailValidationFail(true);    
    } 
    else {
      
      // console.log(api.patientRegister);
      // console.log(email+" "+password);
      axios
         .post("http://localhost:8080/health_care_system/api/v1/login", 
         { username  : email ,password : password})
        .then((result) => {
          console.log(result);
          alert("Patient Login Successfully!");
           authContext.setAuthenticated(true);
           authContext.setToken(result.data.token)
           authContext.setUsername(email)
            navigate("/");
            
        })
        .catch((error) => {
          
          console.log(error);         
          authContext.setAuthenticated(false);
          alert("Login Failed!");
        });
    }
  }
  return (
    <div>
      <HeaderComponent />
      <section className="appointment">
        <div className="container">
        
          <div className="pt-4 ">
            <h4>LOGIN</h4>
            {/* <img className="pt-5" src="img/section-img.png" alt="#" /> */}
          </div>

          <div className="row ">
            <div className="col-lg-7 col-md-12 col-12 ">
              <form className="form" action="#">
                <div className="row">
                
                  <div className="col-lg-8 col-md-7  col-12">
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
                       {emailValidation ? (
                        <small style={{ color: "red", fontSize: "14px" }}>
                          Please enter valid e-mail address !
                        </small>
                      ) : (
                        <small></small>
                      )}
                    </div>
                  </div>

                 
                
                  <div className="col-lg-8 col-md-7 col-12">
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
                        <button type="submit" className="btn pl-5 pr-5" 
                        onClick={loginPatient}>
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
