export default function AppointmentComponent()
{
    return(
        <section className="appointment">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div> */}
          <div className="pt-4 "  >
            <h4 >Raise Ticket</h4>
                {/* <img className="pt-5" src="img/section-img.png" alt="#" /> */}
            </div>
           
          <div className="row "  >
            
            <div className="col-lg-7 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <input name="Ticket Title" type="text" placeholder=" Title" />
                    </div>
                  </div>
                  {/* <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="Ticket Description" type="email" placeholder=" Description"  />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="status" />
                    </div>
                  </div> */}
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="nice-select form-control wide" tabindex="0">
                        <span className="current">Ticket Category</span>
                        <ul className="list">
                          {/* <li data-value="1" className="option selected">
                            Ticket Category
                          </li> */}
                          <li data-value="2" className="option">
                            Cardiac Clinic
                          </li>
                          <li data-value="3" className="option">
                            Neurology
                          </li>
                          <li data-value="4" className="option">
                            Dentistry
                          </li>
                          <li data-value="5" className="option">
                            Gastroenterology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="nice-select form-control wide" tabindex="0">
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
                  <div className="col-lg-6 col-md-6 col-12">
                    {/* <div className="form-group">
                      <input type="text" placeholder="Date" id="datepicker" />
                    </div> */}
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Your Ticket description here ....."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn pl-5 pr-5">
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
    );
}