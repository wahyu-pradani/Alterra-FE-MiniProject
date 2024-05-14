import FooterSuds from "../../../components/global/footer";
import { NAVBAR } from "../../../components/global/navbarUser";
import FaqSection from "./faq-section";
import Hero from "./hero-section";
import Service from "./service-section";
import WorkSection from "./work-section";





export default function Home(){
    return(
        <main>
            <NAVBAR></NAVBAR>
            <Hero></Hero>
            <WorkSection></WorkSection>
            <Service></Service>
            <FaqSection></FaqSection>
            <FooterSuds></FooterSuds>
        </main>
    );
}