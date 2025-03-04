"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { ContactFormPayloadType } from "@/types";
import { SubmitContactForm } from "@/services/form.services";
import toast from "react-hot-toast";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { Loader2 } from "lucide-react";

type Props = {};

const InquiryType = [
  "General Inquiry",
  "Looking for advertisement",
  "List your media/events with us",
  "Partnership or Collaboration",
  "Career Opportunities",
];

const ContactForm = (props: Props) => {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    phoneNumber: "",
    inquiryType: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleOnSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const payload: ContactFormPayloadType = {
      name: formData.name,
      email: formData.email,
      phone: Number(formData.phoneNumber),
      inquiryType: formData.inquiryType,
      message: formData.message,
    };

    try {
      setLoading(true);
      const res = await SubmitContactForm(payload);
      console.log(res);
      if (typeof res !== "string") {
        Object.keys(formData).forEach((key) => {
          formData[key] = "";
        });

        return toast.success("Your request submitted.");
      } else {
        return toast.error("Something went wrong.");
      }
    } catch (error) {
      return toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className={`flex relative  flex-col border p-3 w-full mx-auto rounded-md my-4 font-semibold lg:my-0`}>
      <h1 className="text-3xl pb-3 border-b-2 w-fit border-b-gray-300 font-semibold text-primary-100">
        Contact Us Now
      </h1>

      <div className="w-full mx-auto my-2">
        <input
          type="text"
          value={formData.name}
          placeholder="Your Name*"
          onChange={(ev) =>
            setFormData((prev) => ({ ...prev, name: ev.target.value }))
          }
          required
          className="p-4 font-semibold  my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
        />
        <input
          type="email"
          inputMode="email"
          value={formData.email}
          placeholder="Your Email*"
          onChange={(ev) =>
            setFormData((prev) => ({ ...prev, email: ev.target.value }))
          }
          required
          className="p-4 font-semibold my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
        />
        <input
          type="text"
          value={formData.phoneNumber}
          placeholder="Your Phone Number*"
          maxLength={10}
          onChange={(ev) =>
            setFormData((prev) => ({
              ...prev,
              phoneNumber: ev.target.value.trim(),
            }))
          }
          inputMode="numeric"
          required
          className="p-4 font-semibold my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
        />

        {/* type selector  */}

        <select
          defaultValue={"Select an Inquiry type"}
          value={formData.inquiryType}
          className="p-4 font-semibold my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
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
          placeholder="Your Message*"
          onChange={(ev) =>
            setFormData((prev) => ({
              ...prev,
              message: ev.target.value,
            }))
          }
          rows={5}
          required
          className="p-4 font-semibold my-3 placeholder:text-lg placeholder:font-semibold outline-none w-full border rounded-md"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`bg-primary-100 flex flex-row items-center gap-2 rounded-lg text-white text-lg font-semibold w-fit py-3 px-5 ${
          loading && "bg-secondary-100"
        }`}>
        {loading && <Loader2 className="animate-spin" />}
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
