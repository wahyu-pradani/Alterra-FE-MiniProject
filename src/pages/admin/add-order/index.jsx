import FooterSuds from "../../../components/global/footer";
import { NavAdmin } from "../../../components/global/navbarAdmin";
import AddOrder from "./add-order";


export default function Add () {
    return (
        <main>
            <NavAdmin></NavAdmin>
            <AddOrder></AddOrder>
            <FooterSuds></FooterSuds>
        </main>
    );
}