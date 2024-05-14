import FooterSuds from "../../../components/global/footer";
import { NavAdmin } from "../../../components/global/navbarAdmin";
import Update from "./update";


export default function Edit (){
    return (
        <main>
            <NavAdmin></NavAdmin>
            <Update></Update>
            <FooterSuds></FooterSuds>
        </main>
    );
}