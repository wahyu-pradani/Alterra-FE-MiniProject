import FooterSuds from "../../../components/global/footer";
import { NAVBAR } from "../../../components/global/navbarUser";
import AboutSection from "./about-section";


export default function About(){
    return(
        <main>
            <NAVBAR></NAVBAR>
            <AboutSection></AboutSection>
            <FooterSuds></FooterSuds>
        </main>
    );
}