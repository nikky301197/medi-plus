import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function ViewTickets() {
  return (
    <div>
      <HeaderComponent />
      <section class="news-single section">
        <div class="container">
        <h5>View Tickets</h5>
          <div class="row">
           
            <div class="col-lg-8 col-12">
              <div class="single-widget search">
                <div class="main-sidebar">
                  <div class="single-widget search">
                    <div class="form">
                        <h6>TicketNo#1</h6>
                    </div>
                  </div>
                  <div class="single-widget search">
                    <div class="form">
                    <h6>TicketNo#2</h6>
                    </div>
                  </div>
                  <div class="single-widget search">
                    <div class="form">
                    <h6>TicketNo#3</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="single-widget search">
                <div class="main-sidebar">
                  <div class="single-widget search">
                    <div class="form">
                      <input type="email" placeholder="Search Here..." />
                      <a class="button" href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}
