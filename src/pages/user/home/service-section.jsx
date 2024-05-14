import { useEffect, useState } from "react";
import { CardService } from "../../../components/serviceCard";
import { getForm } from "../../../api/FetchService";


export default function Service(){

    const [service, serviceSet] = useState([])


    function fetchDataPost(){
        getForm()
        .then((res) => {
            serviceSet(res.data);
            console.log(res.data);
        })
        .catch ((error) =>{
            console.log(error);
        })
    }

    useEffect(() => {
        fetchDataPost();
    },[]);

    return(
        <section className="px-2  mx-auto">
            <div className="container mx-auto py-16" >
            <div className="flex flex-col justify-center items-center gap-4 py-9">
                <h1 className="text-[25px] font-semibold text-black">SERVICES</h1>
                <h1 className="text-[60px] font-semibold text-[#00A9D9] text-center">Service Package</h1>
            </div>
            <div className="grid place-content-center md:flex md:justify-between gap-5 sm:gap-4 md:items-center mx-auto mt-14">
                {
                    service.map((item,i) => (
                        <CardService key={item.id}
                            title = {item.name}
                            price = {item.price}
                            iron  = {item.iron}
                            time  = {item.washingTime}
                            typecloting= {item.type}
                        ></CardService>
                    ))
                }
            </div>
            </div>
        </section>
    );
}