import FooterSuds from "../../../components/global/footer";
import { NAVBAR } from "../../../components/global/navbarUser";
import ContactSection from "./section-contact";


export default function Contact(){
    return (
        <main>
            <NAVBAR></NAVBAR>
            <ContactSection></ContactSection>
            <FooterSuds></FooterSuds>
        </main>
    );
}