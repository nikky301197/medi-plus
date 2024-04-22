import { Link } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function ContactComponent() {
  return (
    <div>
      <HeaderComponent />
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="bread-inner">
            <div class="row">
              <div class="col-12">
                <h2>Contact Us</h2>
                <ul class="bread-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i class="icofont-simple-right"></i>
                  </li>
                  <li class="active">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="contact-us section">
			<div class="container">
				
				<div class="contact-info">
					<div class="row">
					
						<div class="col-lg-4 col-12 ">
							<div class="single-info">
								<i class="icofont icofont-ui-call"></i>
								<div class="content">
									<h3>+(000) 1234 56789</h3>
									<p>info@company.com</p>
								</div>
							</div>
						</div>
					
						<div class="col-lg-4 col-12 ">
							<div class="single-info">
								<i class="icofont-google-map"></i>
								<div class="content">
									<h3>2 Fir e Brigade Road</h3>
									<p>Chittagonj, Lakshmipur</p>
								</div>
							</div>
						</div>
						
						<div class="col-lg-4 col-12 ">
							<div class="single-info">
								<i class="icofont icofont-wall-clock"></i>
								<div class="content">
									<h3>Mon - Sat: 8am - 5pm</h3>
									<p>Sunday Closed</p>
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
