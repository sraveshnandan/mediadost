import { MenuLinkType } from "@/types";
import {
  faCalendarDays,
  faLightbulb,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const MenuLinks: MenuLinkType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Team",
    link: "/team",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

export const FooterLinks1: MenuLinkType[] = [
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Upcoming Events",
    link: "/",
  },
  {
    name: "Blogs & News",
    link: "/blog",
  },
  {
    name: "FAQ Question",
    link: "/",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
];

export const FooterLinks2: MenuLinkType[] = [
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Team",
    link: "/team",
  },
  {
    name: "Terms & Conditions",
    link: "/terms-conditions",
  },
];

export const ContactInfo: {
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "/icons/location.svg",
    title: "Address",
    description: "1234 Street Name, City, England",
  },
  {
    icon: "/icons/call.svg",
    title: "Phone",
    description: "+91 99422-22304",
  },
  {
    icon: "/icons/mail.svg",
    title: "Email",
    description: "contact@mediadost.com",
  },
];

export const SocialLinks: { icon: string; link: string }[] = [
  {
    icon: "/icons/facebook.svg",
    link: "/",
  },
  {
    icon: "/icons/twitter.svg",
    link: "/",
  },
  {
    icon: "/icons/instagram.png",
    link: "https://www.instagram.com/mediadost_/?igsh=MXRpa2w5a29qOTljeg%3D%3D#",
  },
  {
    icon: "/icons/linkedin.svg",
    link: "/",
  },
];

export const ServicesSection = [
  {
    icon: "/images/service1.png",
    title: "Strategic Advertising Solutions",
    description:
      "Our industry experts plan and execute impactful ad campaigns tailored to your business needs.",
    color: "#fff5e9",
  },
  {
    icon: "/images/service2.png",
    title: "Wide Range of Media Options",
    description:
      "From outdoor hoardings to influencer marketing, explore a vast array of advertising categories all in one place.",
    color: "#edeefb",
  },
  {
    icon: "/images/service3.png",
    title: "Seamless Booking Experience",
    description:
      "User-friendly platform with advanced filters, location maps, and transparent pricing for hassle-free bookings",
    color: "#fff1ee",
  },
];

export const HeroCTAActions = [
  {
    icon: faCalendarDays,
    name: "Plan",
    link: "/plan",
    desc: "Your Media",
  },
  {
    icon: faMagnifyingGlass,
    name: "Find",
    link: "/events",
    desc: "Events",
  },
  {
    icon: faLightbulb,
    name: "Create",
    link: "https://mediadost.com/create-with-us",
    desc: "With Us",
  },
];
