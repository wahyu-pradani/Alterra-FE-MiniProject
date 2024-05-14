import imgFAQ from "../../../assets/imgFAQ.png";
import FAQ from "../../../components/accordion";

export default function FaqSection() {
  return (
    <section className="px-2 mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mt-20">
          <img src={imgFAQ} className="w-[440px] h-[440] xl:w-[540px] xl:h-[540] sm:w-[440px] sm:h-[440]" alt="faq" />
          <FAQ></FAQ>
        </div>
      </div>
    </section>
  );
}
