import FooterSuds from "../../../../components/global/footer";
import { NavAdmin } from "../../../../components/global/navbarAdmin";
import { DisplayService } from "./display-service";


export default function ServiceDisplay () {
    return (
        <main>
            <NavAdmin></NavAdmin>
            <DisplayService></DisplayService>
            <FooterSuds></FooterSuds>
        </main>
    ); 
}