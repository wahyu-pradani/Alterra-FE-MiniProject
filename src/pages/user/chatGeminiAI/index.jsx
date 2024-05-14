import FooterSuds from "../../../components/global/footer";
import { NAVBAR } from "../../../components/global/navbarUser";
import CHATAI from "./chatAI";


export default function ChatBot (){
    return(
        <main>
            <NAVBAR></NAVBAR>
            <CHATAI></CHATAI>
            <FooterSuds></FooterSuds>
        </main>
    );
}