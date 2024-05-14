import FooterSuds from "../../../components/global/footer";
import { NavAdmin } from "../../../components/global/navbarAdmin";

export default function HomeAdmin() {
  return (
    <main>
      <NavAdmin></NavAdmin>
      <section className="px-2 mx-auto py-20">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[50px] justify-center items-center">
            <div className="flex flex-col gap-5 font-semibold m:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-[38px] text-[#00A9D9] text-center">
              <h1>Welcome To Webiste</h1>
              <h1>Suds Laundry</h1>
            </div>
            <p className="w-fit xl:w-[643px] sm:w-fit text-[20px] sm:-text-[16px] font-medium text-[#00334C] text-center">
              Suds Laundry service will wash, dry, and fold your laundry at an
              affordable price. Pickup and drop-off options available!
            </p>
          </div>
        </div>
      </section>
      <FooterSuds></FooterSuds>
    </main>
  );
}
