
"use client";

import ImgFooter from "../../assets/LogoFooter.png"
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterSuds() {
  return (
    <Footer container className="bg-[#00A9D9] mt-20">
      <div className="container mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              src={ImgFooter}
              className="w-[200px] h-[100px] md:w-[200px] md:h-[100px] lg:w-[400px] lg:h-[200px]"
              alt="Suds Logo"
              name="Suds"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div >
              <Footer.Title className="text-white" title="about" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/about">About</Footer.Link>
                <Footer.Link href="/chatAI">Chat AI</Footer.Link>
                <Footer.Link href="/contact">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white" title="Follow us" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white" title="Legal" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="text-white bg-white" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" className="text-white" by="Suds Laundry" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" className="text-white" icon={BsFacebook} />
            <Footer.Icon href="#" className="text-white" icon={BsInstagram} />
            <Footer.Icon href="#" className="text-white" icon={BsTwitter} />
            <Footer.Icon href="#" className="text-white" icon={BsGithub} />
            <Footer.Icon href="#" className="text-white" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
