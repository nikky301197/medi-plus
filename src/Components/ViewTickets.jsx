import { useContext, useEffect, useState } from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import axios from "axios";
import { AuthContext } from "./ComponentSecurity/AuthProvider";
import { useNavigate } from "react-router-dom";
import FAQItem from "./FAQItem";

export default function ViewTickets() {
  useEffect(() => loadAllTickets(), []);
  const authContext = useContext(AuthContext);
  const token = authContext.token;
  const username = authContext.username;
  const navigate = useNavigate();
  const [ticketList, setTicketList] = useState([]);
  const [ticketNo, setTicketNo] = useState();
  const [ticketValidation, setTicketValidation] = useState();

  function loadAllTickets() {
    axios
      .get(
        "http://localhost:8080/health_care_system/api/v1/patient/tickets/users/" +
          username,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      .then((result) => {
        console.log(result);
        setTicketList(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function searchTicket() {
    if (ticketNo == undefined || ticketNo.length == 0) {
      setTicketValidation(true);
    } else {
      axios
        .get(
          "http://localhost:8080/health_care_system/api/v1/patient/" +
            username +
            "/ticket/" +
            ticketNo,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )

        .then((result) => {
          console.log(result);
          setTicketList([result.data]);
        })
        .catch((error) => {
          setTicketList([]);
          console.log(error);
        });
    }
  }
  function updateTicket() {}
  function deleteTicket(ticketid) {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      axios
        .delete(
          "http://localhost:8080/health_care_system/api/v1/patient/ticket/" +
            ticketid,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )

        .then((result) => {
          console.log("Deleting ticket with ID:" + ticketid);
          alert("Ticket no. " + ticketid + " deleted successfully.");
          loadAllTickets()
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/viewTicket")
    }
  }

  function raiseTicket(event)
  {
    navigate("/raiseTicket")
  }
  return (
    <div>
      <HeaderComponent />
      <div class="">
     
      </div>

      <section className="pl-5 pr-5 pt-1 pb-5">
        <div className="container-fluid ">
          <div className="row ">
            {ticketList.length != 0 ? (
              <div className="col-lg-8 col-12">
                <div className="single-widget search ">
                  <div className="main-sidebar  ">
                    <div id="accordion">
                      {ticketList.map((ticket, index) => (
                        <div className="card accordion-item">
                          <div
                            className="card-header bluediv bg-dark"
                            id={`heading${index}`}
                            data-toggle="collapse"
                            data-target={`#collapse${index}`}
                            aria-expanded="true"
                            aria-controls={`collapse${index}`}
                          >
                            <h4 className="mb-0">
                              <button
                                className="bluediv"
                                style={{
                                  height: 50,
                                  width: 200,
                                  backgroundColor: "#343A40",
                                  border: "none",
                                }}
                              >
                                <h6 style={{ color: "white" }}>
                                  {" "}
                                  Ticket No : #{ticket.ticketId}
                                </h6>
                              </button>
                            </h4>
                          </div>

                          <div
                            id={`collapse${index}`}
                            className="collapse"
                            aria-labelledby={`heading${index}`}
                            data-parent="#accordion"
                          >
                            <div class="card-body">
                              <div className="single-widget search ticket ">
                                <div className="form row   d-flex justifiy-content-center ">
                                  <div className=" col-lg-8 col-12   mt-1 ">
                                    <label
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Ticket title :
                                    </label>
                                    <h6 style={{ color: "#2C81D5" }}>
                                      {ticket.title}
                                    </h6>
                                  </div>
                                  <div className=" col-lg-4 col-12   mt-1 ">
                                    <label
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Ticket status:
                                    </label>
                                    <h6 style={{ color: "#2C81D5" }}>
                                      {ticket.status}
                                    </h6>
                                  </div>
                                  <div className="  col-12   mt-5 ">
                                    <label
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Ticket description :
                                    </label>
                                    <h6 style={{ color: "#2C81D5" }}>
                                      {ticket.description}
                                    </h6>
                                  </div>
                                  <div className="  col-6   mt-5 ">
                                    <label
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {" "}
                                      Ticket category :
                                    </label>
                                    <h6 style={{ color: "#2C81D5" }}>
                                      {ticket.category.categoryName}
                                    </h6>
                                  </div>
                                  <div className="  col-6   mt-5 ">
                                    <label
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {" "}
                                      Assigned to :
                                    </label>
                                    <h6 style={{ color: "#2C81D5" }}>
                                      {ticket.assignedTo}
                                    </h6>
                                  </div>
                                  <div className="  col-6   mt-5 ">
                                    <label
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {" "}
                                      Created at :
                                    </label>
                                    <h6 style={{ color: "#2C81D5" }}>
                                      {ticket.createdAt}
                                    </h6>
                                  </div>
                                  <div className="  col-6   mt-5 ">
                                    <label
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {" "}
                                      Last updated at :
                                    </label>
                                    <h6 style={{ color: "#2C81D5" }}>
                                      {ticket.updatedAt}
                                    </h6>
                                  </div>
                                  <div className="col-lg-12 mt-5  d-flex  justify-content-center">
                                    <button
                                      className="btn mr-5"
                                      onClick={updateTicket}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="btn mr-5"
                                      onClick={() =>
                                        deleteTicket(ticket.ticketId)
                                      }
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            {ticketList.length != 0 ? (
              <div className="col-lg-4 col-12">
                <div className="single-widget search">
                  <div className="main-sidebar">
                    <div className="single-widget search">
                      <div className="form">
                        <input
                          type="number"
                          placeholder="Search Here..."
                          onChange={(event) => {
                            setTicketValidation(false);
                            setTicketNo(event.target.value);
                          }}
                        />
                        <button className="button" onClick={searchTicket}>
                          <i className="fa fa-search"></i>
                        </button>
                        {ticketValidation ? (
                          <small style={{ color: "red", fontSize: "14px" }}>
                            Please enter ticket no.
                          </small>
                        ) : (
                          <small></small>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {ticketList.length == 0 ? (
              <div
                className=" row col-12  d-flex  justify-content-center "
              
              >
                <div className=" col-lg-8 col-12 ">
                  <img
                    src="img/No data-amico.png"
                    width={500}
                   
                  />
                </div>
                <div className="  col-lg-1 col-12   d-flex flex-column align-items-center justify-content-center ">
                  <h1
                    className="display-4  "
                    style={{ color: "#1A76D1", marginTop: -20 }}
                  >
                    {" "}
                    Ticket Not Found
                    <button className="btn" onClick={raiseTicket}> Raise Query</button>
                  </h1>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}
