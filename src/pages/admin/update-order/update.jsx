"use client";

import { useEffect, useState } from "react";
import ImgOrder from "../../../assets/img-order.svg";
import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import {
  getOrder,
  getOrderbyId,
  sendForm,
  updateForm,
} from "../../../api/FetchOrder";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const initial = {
    name: "",
    email: "",
    phone: "",
    datePickup: "",
    typeService: "",
    note: "",
    adress: "",
  };
  const [newOrder, setNewOrder] = useState([]);

  function fetchDataPost() {
    getOrderbyId(id)
      .then((res) => {
        setNewOrder(res.data);
        console.log(res.data);
        console.log(newOrder);
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
    setNewOrder({ ...newOrder, [name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateForm(id, newOrder)
      .then((res) => {
        console.log("Data berhasil terupdate di API => ", res.data);
        navigate("/display");
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
              <div className="flex flex-col gap-6 w-full">
                <div className="flex justify-between gap-14">
                  <div className="flex flex-col gap-5 w-full">
                    <div className="w-full">
                      <div className="mb-3 block">
                        <label htmlFor="fullname">Name</label>
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        onChange={handleInput}
                        className="w-full rounded-lg border-blue-500"
                        placeholder="input your full name"
                        value={newOrder.name}
                        name="name"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <div className="mb-2 block">
                        <label htmlFor="email1">Your email</label>
                      </div>
                      <input
                        id="email1"
                        type="email"
                        placeholder="input your email"
                        required
                        className="w-full rounded-lg border-blue-500"
                        onChange={handleInput}
                        value={newOrder.email}
                        name="email"
                      />
                    </div>
                    <div className="w-full">
                      <div className="mb-2 block">
                        <label htmlFor="phone">Your number</label>
                      </div>
                      <input
                        id="phone"
                        type="text"
                        className="w-full rounded-lg border-blue-500"
                        placeholder="input your phone number"
                        required
                        onChange={handleInput}
                        name="phone"
                        value={newOrder.phone}
                      />
                    </div>
                    <div className="w-full">
                      <div className="mb-2 block">
                        <label htmlFor="date1">Date pickup</label>
                      </div>
                      <input
                        id="date1"
                        value={newOrder.datePickup}
                        className="w-full rounded-lg border-blue-500"
                        name="datePickup"
                        type="date"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 w-full">
                    <div className="w-full">
                      <div className="mb-2 block">
                        <label htmlFor="select">Type of service</label>
                      </div>
                      <select
                        id="select"
                        onChange={handleInput}
                        className="w-full rounded-lg border-blue-500"
                        value={newOrder.typeService}
                        name="typeService"
                        required
                      >
                        <option selected>Choose</option>
                        <option value="Basic">Basic</option>
                        <option value="Reguler">Reguler</option>
                        <option value="Flash">Flash</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <div className="mb-2 block">
                        <label htmlFor="note">Note</label>
                      </div>
                      <textarea
                        id="note"
                        placeholder="input your full name"
                        className="w-full rounded-lg border-blue-500 h-[85px]"
                        required
                        name="note"
                        onChange={handleInput}
                        value={newOrder.note}
                      />
                    </div>
                    <div className="w-full">
                      <div className="mb-2 block">
                        <label htmlFor="adress">Adress</label>
                      </div>
                      <textarea
                        id="adress"
                        name="adress"
                        className="w-full rounded-lg border-blue-500 h-[85px]"
                        placeholder="input your full name"
                        required
                        onChange={handleInput}
                        value={newOrder.adress}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-[#00A9D9] w-fit px-3 py-1"
                  >
                    Submit
                  </Button>
                </div>
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
