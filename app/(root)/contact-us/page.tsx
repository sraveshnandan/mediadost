import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-[80%] mx-auto flex   p-8 items-center justify-center flex-col">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <p className="text-lg font-semibold text-gray-400">
        Have a question? We&apos;re here to help! Reach out to us and we&apos;ll
        get back to you as soon as possible.
      </p>

      <div className="w-full flex my-8 md:flex-row flex-col-reverse">
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
        {/* details  */}
        <div className="w-full flex flex-col justify-between p-4 lg:w-[45%]">
          <Image
            src={"/images/contact-image.png"}
            alt="contact-image"
            width={2000}
            height={1143}
            className="w-full aspect-video h-72"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-primary-100 mb-3 text-3xl font-semibold">
              Our Contact Info
            </h2>

            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">Email: </h2>
              <h2 className="text-primary-100 font-semibold">
                info@mediadost.com
              </h2>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">Phone: </h2>
              <h2 className="text-primary-100 font-semibold">+91-9942222304</h2>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">Temp Address: </h2>
              <h2 className="text-primary-100 font-semibold">
                Amrath, Jamui, 811313
              </h2>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">Working Hours: </h2>
              <h2 className="text-primary-100 font-semibold">
                Mon-Sat, 9:00 AM - 6:00 PM
              </h2>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl my-5 font-semibold">Reach Us</h1>
    </div>
  );
};

export default ContactPage;
