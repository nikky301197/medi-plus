
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MediPlusComponent from './Components/MediPlusComponent';
import SliderComponent from './Components/SliderComponent';
import ScheduleComponent from './Components/ScheduleComponent';
import FeaturesComponent from './Components/FeaturesComponent';
import FunFactComponent from './Components/FunFactComponent';
import ServiceComponent from './Components/ServiceComponent';
import RaiseQueryComponent from './Components/RaiseQueryComponent';
import AboutComponent from './Components/AboutComponent';
import RaiseTicketComponent from './Components/RaiseTicketComponent';
import FeedbackComponent from './Components/FeedbackComponent';
import ViewTickets from './Components/ViewTickets';
import FaqComponent from './Components/FaqComponent';
import ContactComponent from './Components/ContactComponent';
import ErrorComponent from './Components/ErrorComponent';

function App() {
  return (
    
      <Routes>
    
    <Route path="/" element={ <MediPlusComponent/>} />
    <Route path="/slider" element={  <SliderComponent/>} />
    <Route path="/schedule" element={ <ScheduleComponent/>} />
    <Route path="/features" element={<FeaturesComponent/>} />
    <Route path="/funfact" element={  <FunFactComponent/>} />
    <Route path="/service" element={ <ServiceComponent/>} />
    <Route path="/raiseQuery" element={<RaiseQueryComponent/>} />
    <Route path="/raiseTicket" element={<RaiseTicketComponent/>} />
    <Route path="/about" element={<AboutComponent/>} />
    <Route path="/feedback" element={<FeedbackComponent/>} />
    <Route path="/viewTicket" element={<ViewTickets/>} />
    <Route path="/faq" element={<FaqComponent/>} />
    <Route path="/contact" element={<ContactComponent/>} />
    <Route path="*" element={<ErrorComponent/>}></Route>
   </Routes>
   
   
  );
}

export default App;
