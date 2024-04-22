import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function FaqComponent() {
  return (
    <div>
      <HeaderComponent />
      <div class="container">
        <h6 className="pt-3 pb-5">#Frequent Ask Questions</h6>

        <div id="accordion">
          <div class="card accordion-item">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Q: What is telemedicine and how does it work?
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                A: Telemedicine allows patients to consult with healthcare
                providers remotely using technology like video calls or phone
                calls. Patients can discuss their symptoms, receive medical
                advice, and even get prescriptions without visiting a physical
                clinic.
              </div>
            </div>
          </div>

          <div class="card accordion-item">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Q: How can I schedule an appointment with a specialist?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                A: You can schedule an appointment with a specialist by calling
                our appointment hotline or using our online appointment booking
                system. You can choose the date, time, and type of specialist
                you need to see.
              </div>
            </div>
          </div>

          <div class="card accordion-item">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Q: What should I do in case of a medical emergency?
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                A: In case of a medical emergency, dial emergency services
                immediately (e.g., 911 in the US). If you're in our network, you
                can also call our emergency hotline for guidance on what to do
                next and to alert us of your situation.
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
    
  );
}
