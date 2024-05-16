"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import imgLogin from "../../../assets/img-login.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useCallback, useContext, useState } from "react";

import { Link, Navigate } from "react-router-dom";
import { auth } from "../../../../firebase";

const Login = ({ user }) => {
  const [signin, setSigin] = useState("");
  const [login, loginSet] = useState({
    email: "",
    password: "",
  });

  function handleInput(e) {
    const { name } = e.target;
    loginSet({ ...login, [name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!login.email || !login.password) return;

    signInWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSigin(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  if (signin) {
    return <Navigate to="/admin"></Navigate>;
  }
  return (
    <section>
      <div className="relative">
        <div className="absolute transform translate-y-1/2 translate-x-4 sm:transform-none sm:translate-x-0 md:translate-y-1/2 xl:translate-y-0 sm:relative grid md:flex md:items-center md:justify-between mx-auto ">
          <div className="sm:mx-auto mx-auto border border-[#00A9D9] rounded-xl ">
            <form
              onSubmit={handleSubmit}
              className="flex max-w-md flex-col gap-6 mx-auto w-fit sm:w-[567px] px-10 py-10"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@gmail.com"
                  required
                  onChange={handleInput}
                  name="email"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  required
                  name="password"
                  onChange={handleInput}
                />
              </div>
              <Button type="submit" className="bg-[#00A9D9]">
                Login
              </Button>
              <div className="flex justify-center items-center mx-auto text-center gap-2">
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Back to home page?{" "}
                </p>
                <Link to={"/"}>
                  <p className="font-medium text-[#00A9D9] hover:underline dark:text-primary-500">
                    yes
                  </p>
                </Link>
              </div>
            </form>
          </div>
          <div className="hidden sm:hidden lg:block">
            <img src={imgLogin} className="w-full h-svh" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
