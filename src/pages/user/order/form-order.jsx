"use client";

import { useEffect, useState } from "react";
import ImgOrder from "../../../assets/img-order.svg";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { getOrder, sendForm } from "../../../api/FetchOrder";
import { useNavigate } from "react-router-dom";

export default function FormOrder() {
  const initial = {
    name: "",
    email: "",
    phone: "",
    datePickup: "",
    typeService: "",
    note: "",
    adress: "",
  };
  const [order, setOrder] = useState([initial]);
  const [newOrder, setNewOrder] = useState([]);
  const navigate = useNavigate();

  function fetchDataPost() {
    getOrder()
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
    setOrder({ ...order, [name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const Data = {
      id: uuidv4(),
      name: order.name,
      email: order.email,
      phone: order.phone,
      datePickup: order.datePickup,
      typeService: order.typeService,
      note: order.note,
      adress: order.adress,
    };

    sendForm(order)
      .then((res) => {
        // setForm(res.data)
        console.log("Data berhasil tersimpan di API => ", res.data);
        alert("Your Order Has Been Accepted")
      })
      .catch((er) => {
        console.log("Ada Kesalahan dalam code", er);
      });

    setNewOrder([...newOrder, order]);
    setOrder(initial);
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
                        className="w-full rounded-lg border-blue-500"
                        type="text"
                        onChange={handleInput}
                        placeholder="input your full name"
                        value={order.name}
                        name="name"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <div className="mb-3 block">
                        <label htmlFor="email1">Your email</label>
                      </div>
                      <input
                        id="email1"
                        type="email"
                        className="w-full rounded-lg border-blue-500"
                        placeholder="input your email"
                        required
                        onChange={handleInput}
                        value={order.email}
                        name="email"
                      />
                    </div>
                    <div className="w-full">
                      <div className="mb-3 block">
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
                        value={order.phone}
                      />
                    </div>
                    <div className="w-full">
                      <div className="mb-3 block">
                        <label htmlFor="date1">Date pickup</label>
                      </div>
                      <input
                        id="date1"
                        value={order.datePickup}
                        name="datePickup"
                        type="date"
                        className="w-full rounded-lg border-blue-500"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 w-full">
                    <div className="w-full">
                      <div className="mb-3 block">
                        <label htmlFor="select">Type of service</label>
                      </div>
                      <select
                        id="select"
                        onChange={handleInput}
                        value={order.typeService}
                        name="typeService"
                        className="w-full rounded-lg border-blue-500"
                        required
                      >
                        <option selected>Choose</option>
                        <option value="Basic">Basic</option>
                        <option value="Reguler">Reguler</option>
                        <option value="Flash">Flash</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <div className="mb-3 block">
                        <label htmlFor="note">Note</label>
                      </div>
                      <textarea
                        id="note"
                        placeholder="input your full name"
                        required
                        name="note"
                        onChange={handleInput}
                        className="w-full rounded-lg border-blue-500 h-[85px]"
                        value={order.note}
                      />
                    </div>
                    <div className="w-full">
                      <div className="mb-3 block">
                        <label htmlFor="adress">Adress</label>
                      </div>
                      <textarea
                        id="adress"
                        name="adress"
                        placeholder="input your full name"
                        required
                        onChange={handleInput}
                        className="w-full rounded-lg border-blue-500 h-[85px]"
                        value={order.adress}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                <Button type="submit" className="bg-[#00A9D9] w-fit px-3 py-1">
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
