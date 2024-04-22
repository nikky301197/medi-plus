import AppointmentComponent from "./AppoitmentComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function RaiseTicketComponent()
{
    return(
        <div>
            <HeaderComponent/>
            
            <AppointmentComponent/>
            <FooterComponent/>
        </div>
    );
}