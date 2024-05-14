
import { STEP } from "../../../helper/constant";


export default function WorkSection(){
    return(
        <section className="px-2 bg-cover bg-no-repeat bg-[url('./assets/bg-works.png')] mt-24">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center gap-4 py-9">
                <h1 className="sm:text-[22px] md:text-[25px] text-[20px] font-semibold text-white">HOW IT WORKS</h1>
                <h1 className="sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-[38px] text-center  font-semibold text-white">Get it done in 4 steps</h1>
                </div>
                <div className="h-fit">
                    <div className="grid grid-cols-2 justify-between items-center  mx-auto sm:grid-cols-2 lg:flex sm:gap-4 lg:gap-2 gap-3 py-10">
                    {
                        STEP.map((item,i) => (
                            <div key={item.id} className="flex flex-col gap-2 items-center justify-center mx-auto bg-white rounded-[20px] py-4 px-4 shadow-md">
                                <h1 className="text-[#21B7E2] text-[16px] sm:text-[22px] md:text-[22px] font-medium">{item.title}</h1>
                                <h1 className="text-[22px] sm:text-[30px] md:text-[30px] font-medium">{item.desc}</h1>
                                <img src={item.url} alt={item.alt} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    );
}