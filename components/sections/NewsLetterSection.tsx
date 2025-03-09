"use client";
import { SubmitNewLetterForm } from "@/services/form.services";
import { Bell, Loader2Icon, MailOpen } from "lucide-react";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const NewsLetterSection = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!email.length) {
        return toast.error("Please enter a valid email.");
      }
      setLoading(true);
      const res = await SubmitNewLetterForm(email);

      if (res.id) {
        return toast.success("You've subscribed to  our newsletter.");
      } else {
        return toast.success("Already Subscribed");
      }
    } catch (error) {
      return toast.error("Something went wrong.");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };
  return (
    <div className="relative xl:-mx-16 lg:-mx-12 md:-mx-8 -mx-4 lg:h-[40vh] h-[45vh] md:w-70vh ">
      <Image
        src="/images/hero-bg.jpg"
        alt="hero"
        width={100}
        height={100}
        className="absolute w-full h-full -z-10"
      />

      <div className="w-full flex items-center justify-center py-4 flex-col h-full">
        <h2 className="text-primary-100 font-bold">SUBSCRIBE NEWSLETTER</h2>
        <h1 className="text-2xl font-semibold text-Text-100">
          Get Every Latest News
        </h1>

        {/* email input box  */}

        <form
          onSubmit={onFormSubmit}
          className="xl:w-[30%] overflow-hidden lg:mt-12 gap-1  mt-6 items-center lg:w-[50%] md:w-[60%] w-[95%] my-4 flex flex-row bg-white rounded-md p-2"
        >
          <div className=" flex items-center  flex-row flex-grow">
            {" "}
            <MailOpen className="text-gray-400" size={18} />
            <input
              value={email}
              onChange={(ev) => setEmail(ev.target.value.trim())}
              className=" outline-none placeholder:font-medium border-none md:p-3 p-2"
              type="text"
              placeholder="Enter your email..."
            />
          </div>
          <div className="max-w-[40%]">
            <button
              type="submit"
              className="bg-primary-100 w-full p-3  text-lg md:text-md  flex gap-2  justify-center text-white font-semibold line-clamp-1  rounded-lg   flex-row items-center"
            >
              {loading ? (
                <>
                  <Loader2Icon size={16} className="animate-spin" />
                  <span className="hidden sm:flex">Loading...</span>
                </>
              ) : (
                <>
                  <Bell size={16} />
                  <span className="hidden sm:flex">Subscribe Now</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSection;
