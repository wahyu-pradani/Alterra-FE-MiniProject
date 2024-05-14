"use client";

import { useEffect, useState } from "react";
import ImgOrder from "../../../../assets/img-order.svg";
import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { getOrderbyId, updateForm } from "../../../../api/FetchService";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const initial = {
    name: "",
    price: "",
    washingTime: "",
    iron: "",
    type: "",
  };
  const [newService, setNewService] = useState([]);

  function fetchDataPost() {
    getOrderbyId(id)
      .then((res) => {
        setNewService(res.data);
        console.log(res.data);
        console.log(newService);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchDataPost();
  }, []);

  function handleInput(e) {
    const { name } = e.target;
    setNewService({ ...newService, [name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateForm(id, newService)
      .then((res) => {
        // setForm(res.data)
        console.log("Data berhasil terupdate di API => ", res.data);
        navigate("/service");
      })
      .catch((er) => {
        console.log("Ada Kesalahan dalam code", er);
      });
  }

  return (
    <section className="px-2 mx-auto">
      <div className="container mx-auto py-20">
        <div className="grid sm:flex md:gap-10 gap-0 justify-between mx-auto items-center w-full">
          <div className="w-full">
            <form action="" onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col gap-3 w-full">
                <div className="w-full">
                  <div className="mb-2 block">
                    <label htmlFor="fullname">Name Service</label>
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full rounded-lg border-blue-500"
                    onChange={handleInput}
                    placeholder="input service"
                    value={newService.name}
                    name="name"
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <label htmlFor="price">Price</label>
                  </div>
                  <input
                    id="price"
                    type="text"
                    className="w-full rounded-lg border-blue-500"
                    placeholder="input price"
                    required
                    onChange={handleInput}
                    value={newService.price}
                    name="price"
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <label htmlFor="washingTime">Washing Time</label>
                  </div>
                  <input
                    id="washingTime"
                    type="text"
                    placeholder="input time wash"
                    className="w-full rounded-lg border-blue-500"
                    required
                    onChange={handleInput}
                    name="washingTime"
                    value={newService.washingTime}
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <label htmlFor="iron">Iron</label>
                  </div>
                  <input
                    id="iron"
                    value={newService.iron}
                    name="iron"
                    className="w-full rounded-lg border-blue-500"
                    type="text"
                    onChange={handleInput}
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <label htmlFor="type">Tipe Pakaian</label>
                  </div>
                  <input
                    id="type"
                    value={newService.type}
                    name="type"
                    className="w-full rounded-lg border-blue-500"
                    type="text"
                    onChange={handleInput}
                  />
                </div>
                <Button type="submit" className="bg-[#00A9D9]">
                  Submit
                </Button>
              </div>
            </form>
          </div>
          <div className="hidden w-full lg:flex items-center justify-end">
            <img src={ImgOrder} width={490} height={455} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
