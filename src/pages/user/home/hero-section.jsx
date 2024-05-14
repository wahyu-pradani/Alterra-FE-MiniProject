import { Link } from "react-router-dom";
import imgHero from "../../../assets/imgHero.png";

export default function Hero() {
  return (
    <section className="mt-14 px-2">
      <div className="container mx-auto">
        <div
          className="flex flex-col sm:flex-col lg:flex-row justify-between items-center gap-20 
        "
        >
          <div className="grid gap-[50px]">
            <div className="grid gap-[30px]">
              <div className="sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-[38px] font-semibold text-[#00A9D9]">
                <h1>Laundry Today or</h1>
                <h1>Naked Tomorrow</h1>
              </div>
              <div>
                <p className="text-[20px] sm:-text-[16px] font-medium text-[#00334C] w-fit xl:w-[643px] sm:w-fit">
                  Suds Laundry service will wash, dry, and fold your laundry at
                  an affordable price. Pickup and drop-off options available!
                </p>
              </div>
            </div>
            <Link to={"/ordering"}>
              <button className=" w-fit md:text-[24px] sm:text-[20px] text-[20px] bg-[#00A9D9] hover:bg-[#008AB1] md:px-[30px] sm:px-[24px] px-[24px] md:py-[15px] sm:py-[12px] py-[12px]  font-semibold text-white rounded-[20px]">
                Booking Now
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center w-[342px] h-[367px] md:w-[542px] md:h-[467px] sm:w-[442px] sm:h-[367px]">
            <img src={imgHero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
