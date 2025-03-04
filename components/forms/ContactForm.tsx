"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "../ui/button";

type Props = {};

const InquiryType = [
  "General Inquiry",
  "Looking for advertisement",
  "List your media/events with us",
  "Partnership or Collaboration",
  "Career Opportunities",
];

const ContactForm = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    inquiryType: "",
    message: "",
  });

  const handleOnSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col border p-3 w-full mx-auto rounded-md my-4 lg:my-0">
      <h1 className="text-3xl pb-3 border-b-2 w-fit border-b-gray-300 font-semibold text-primary-100">
        Contact Us Now
      </h1>

      <div className="w-full mx-auto my-2">
        <input
          type="text"
          value={formData.name}
          placeholder="Your Name*"
          onChange={(ev) =>
            setFormData((prev) => ({ ...prev, name: ev.target.value.trim() }))
          }
          required
          className="p-4 my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
        />
        <input
          type="email"
          inputMode="email"
          value={formData.email}
          placeholder="Your Email*"
          onChange={(ev) =>
            setFormData((prev) => ({ ...prev, email: ev.target.value.trim() }))
          }
          required
          className="p-4 my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
        />
        <input
          type="text"
          value={formData.phoneNumber}
          placeholder="Your Phone Number*"
          onChange={(ev) =>
            setFormData((prev) => ({
              ...prev,
              phoneNumber: ev.target.value.trim(),
            }))
          }
          inputMode="numeric"
          required
          className="p-4 my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
        />

        {/* type selector  */}

        <select
          defaultValue={"Select an Inquiry type"}
          value={formData.inquiryType}
          className="p-4 my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
          required
          onChange={(ev) =>
            setFormData((prev) => ({ ...prev, inquiryType: ev.target.value }))
          }>
          {InquiryType.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <textarea
          value={formData.message}
          placeholder="Your Phone Number*"
          onChange={(ev) =>
            setFormData((prev) => ({
              ...prev,
              message: ev.target.value.trim(),
            }))
          }
          rows={5}
          required
          className="p-4 my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
        />
      </div>

      <Button
        type="submit"
        className="bg-primary-100 text-white text-lg font-semibold w-fit py-3 px-5">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
