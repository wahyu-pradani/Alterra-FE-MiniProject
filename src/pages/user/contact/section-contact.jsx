"use client";

import imgContact from "../../../assets/img-contact.png";

import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

export default function ContactSection() {
  return (
    <section className="px-2 mx-2">
      <div className="container mx-auto">
        <div className="grid lg:flex place-content-center gap-10 py-10 mx-auto lg:justify-between lg:items-center">
          <div className="hidden sm:block">
            <img src={imgContact} width={549} height={549} alt="" />
          </div>
          <div>
            <div className="mx-auto border border-[#00A9D9] rounded-xl">
              <form className="flex max-w-md flex-col gap-6 mx-auto w-[350px] sm:w-[567px] md:w-[567px] h-fit px-10 py-10">
                <div className="flex flex-col gap-[10px]">
                  <div className="mb-2 block">
                    <Label htmlFor="fullName" value="Full name" />
                  </div>
                  <TextInput id="fullName" type="text" required />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="mb-2 block">
                    <Label htmlFor="message" value="Message" />
                  </div>
                  <Textarea id="message" rows={4} required />
                </div>
                <Button type="submit" className="bg-[#00A9D9] hover:bg-[#008AB1] mt-[10px]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
