import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { AuthContext } from "./ComponentSecurity/AuthProvider";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RaiseTicketComponent() {
  const authContext = useContext(AuthContext);
  const token = authContext.token;
  const username = authContext.username;
  const navigate = useNavigate();
  const [categoryList, setcategoryList] = useState([]);

  const [selectedCategory, setselectedCategory] = useState();
  const [title, setTitle] = useState("");
  const [ticketDescription, setticketDescription] = useState("");

  const [titleValidationFail, settitleValidationFail] = useState(false);
  const [ticketCategoryValidationFail, setticketCategoryValidationFail] =
    useState(false);
  const [ticketDescriptionValidationFail, setticketDescriptionValidationFail] =
    useState(false);

  function getAllTicketCategories() {
    axios
      .get(
        "http://localhost:8080/health_care_system/api/v1/patient/ticket-categories",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        console.log(result);
        setcategoryList(result.data);
        console.log(categoryList.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function createTicket(event) {
    event.preventDefault();

    if (title.length == 0 || title.length < 5) {
      settitleValidationFail(true);
    }

    if (selectedCategory == undefined || selectedCategory.length == 0) {
      setticketCategoryValidationFail(true);
    }

    if (ticketDescription.length == 0 || ticketDescription.length < 10) {
      setticketDescriptionValidationFail(true);
    } else {
      axios
        .post(
          "http://localhost:8080/health_care_system/api/v1/patient/" + username,
          {
            title: title,
            description: ticketDescription,
            category: { categoryId: selectedCategory },
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((result) => {
          console.log(result);
          alert("Ticket created Successfully!");

          navigate("/viewTicket");
        })
        .catch((error) => {
          console.log(error);
          alert("Some Glitch in Creating ticket!");
        });
    }
  }

  return (
    <div>
      <HeaderComponent />

      <section className="appointment">
        <div className="container">
          <div className="pt-4 ">
            <h5>Raise Ticket</h5>
            {/* <img className="pt-5" src="img/section-img.png" alt="#" /> */}
          </div>

          <div className="row ">
            <div className="col-lg-7 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <input
                        name="Ticket Title"
                        type="text"
                        placeholder=" Title"
                        required
                        onChange={(event) => {
                          setTitle(event.target.value);
                          settitleValidationFail(false);
                        }}
                      />
                      {titleValidationFail ? (
                        <small style={{ color: "red", fontSize: "14px" }}>
                          Please enter valid ticket title!
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
                        onClick={getAllTicketCategories}
                      >
                        <span className="current ">Ticket Category</span>
                        <ul
                          className="list"
                          style={{ height: 200, width: 250, overflow: "auto" }}
                        >
                          {categoryList.map((category, index) => (
                            <li
                              key={category.categoryId}
                              onClick={(event) => {
                                setselectedCategory(category.categoryId);
                                setticketCategoryValidationFail(false);
                                    
                              }}
                              className="option"
                            >
                              {category.categoryName}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {ticketCategoryValidationFail ? (
                        <small style={{ color: "red", fontSize: "14px" }}>
                          Please select category list!
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
                        <span className="current">Priority</span>
                        <ul className="list">
                          {/* <li data-value="1" className="option selected ">
                            Doctor
                          </li> */}
                          <li data-value="2" className="option">
                            Low
                          </li>
                          <li data-value="3" className="option">
                            Medium
                          </li>
                          <li data-value="4" className="option">
                            High
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12"></div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea
                        style={{ height: 100 }}
                        name="message"
                        placeholder="Write Your Ticket description here ....."
                        required
                        onChange={(event) => {
                          setticketDescription(event.target.value);
                          setticketDescriptionValidationFail(false);
                        }}
                      />
                      {ticketDescriptionValidationFail ? (
                        <small style={{ color: "red", fontSize: "14px" }}>
                          Please enter valid ticket description!
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
                      <div className="button">
                        <button
                          type="submit"
                          className="btn pl-5 pr-5"
                          onClick={createTicket}
                        >
                          Raise Query
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
