import FooterSuds from "../../../components/global/footer";
import { NavAdmin } from "../../../components/global/navbarAdmin";
import { DisplayOrder } from "./display-order";



export default function Display () {
    return (
        <main>
            <NavAdmin></NavAdmin>
            <DisplayOrder></DisplayOrder>
            <FooterSuds></FooterSuds>
        </main>
    );
}