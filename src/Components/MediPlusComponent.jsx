import FeaturesComponent from "./FeaturesComponent";
import FooterComponent from "./FooterComponent";
import FunFactComponent from "./FunFactComponent";
import HeaderComponent from "./HeaderComponent";
import ScheduleComponent from "./ScheduleComponent";

import SliderComponent from "./SliderComponent";

export default function MediPlusComponent() {
  return (
    <div className="Home">
      <HeaderComponent />
      <SliderComponent />
      <ScheduleComponent />
      <FeaturesComponent />
      <FunFactComponent />
      {/* <ServiceComponent/> */}
      <FooterComponent />
    </div>
  );
}
