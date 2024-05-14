import FooterSuds from "../../../../components/global/footer";
import { NavAdmin } from "../../../../components/global/navbarAdmin";
import AddService from "./add-service";


export default function ServiceAdd (){
    return (
        <main>
            <NavAdmin></NavAdmin>
            <AddService></AddService>
            <FooterSuds></FooterSuds>
        </main>
    );
}