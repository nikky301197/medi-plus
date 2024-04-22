
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
   </Routes>
   
   
  );
}

export default App;
