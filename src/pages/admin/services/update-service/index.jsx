import FooterSuds from "../../../../components/global/footer";
import { NavAdmin } from "../../../../components/global/navbarAdmin";
import Update from "./update-service";


export default function UpdateService () {
    return (
        <main>
            <NavAdmin></NavAdmin>
            <Update></Update>
            <FooterSuds></FooterSuds>
        </main>
    );
}