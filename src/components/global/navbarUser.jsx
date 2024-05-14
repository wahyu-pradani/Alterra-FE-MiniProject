
"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from "/LogoNav.svg";

export function NAVBAR() {
  return (
    <Navbar rounded>
      <Navbar.Brand  href="">
        <img src={Logo} className="h-20" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      
      <Navbar.Collapse >
        <Navbar.Link href="/" active className="text-[16px] ">
          Home
        </Navbar.Link>
        <Navbar.Link  href="/about" className="text-[16px]">
          About
        </Navbar.Link>
        <Navbar.Link href="/chatAI" className="text-[16px]">Chat AI</Navbar.Link>
        <Navbar.Link href="/contact" className="text-16px]">Contact Us</Navbar.Link>
        <Navbar.Link href="/login"className="text-16px]" ><span className="py-3 px-6 bg-[#00A9D9] hover:bg-[#008AB1] text-white rounded-md">Login</span></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
