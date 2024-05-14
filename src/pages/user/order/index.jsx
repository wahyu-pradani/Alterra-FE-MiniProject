import FooterSuds from "../../../components/global/footer";
import { NAVBAR } from "../../../components/global/navbarUser";
import FormOrder from "./form-order";


export default function Ordering(){
    return(
        <main>
            <NAVBAR></NAVBAR>
            <FormOrder></FormOrder>
            <FooterSuds></FooterSuds>
        </main>
    );
}