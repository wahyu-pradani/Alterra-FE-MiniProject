

"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from "/LogoNav.svg";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";


export function NavAdmin() {

    const handleLogout = () => {
        signOut(auth)
          .then(() => console.log("Sign Out")   

        )
          .catch((error) => console.log(error));
      };
  return (
    <Navbar rounded>
      <Navbar.Brand  href="">
        <img src={Logo} className="h-20" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      
      <Navbar.Collapse >
        <Navbar.Link href="/admin" active className="text-[16px] ">
          Home
        </Navbar.Link>
        <Navbar.Link href="/service" className="text-[16px]">Services</Navbar.Link>
        <Navbar.Link href="/display" className="text-16px]">Orders</Navbar.Link>
        <Navbar.Link href="" onClick={handleLogout} className="text-16px]" ><span className="py-3 px-6 bg-[#00A9D9] hover:bg-[#008AB1] text-white rounded-md">Logout</span></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
