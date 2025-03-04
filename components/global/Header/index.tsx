"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuLinks } from "@/constant";
import { MenuIcon, User2Icon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setAtTop(false);
      } else if (window.scrollY === 0) {
        setIsScrolled(false);
        setAtTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 w-full lg:px-8 md:px-5 px-4 z-50 bg-transparent backdrop-blur-md ${
        isScrolled && "shadow-md"
      } 
      ${atTop && "translate-y-0"}
      ${isScrolled && "translate-y-0"}
      transition-transform duration-500`}>
      <div className="container mx-auto  lg:py-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href={"/"}
          className="md:text-2xl text-xl font-bold text-primary-100">
          Media Dost
        </Link>

        {/* Center Menu */}
        <nav className="hidden lg:flex space-x-8">
          {MenuLinks.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="text-Text-100 text-lg font-semibold hover:text-primary-100 duration-300 transition-all hover:scale-110">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="md:space-x-4 space-x-2 flex flex-row">
          <Link
            href={`/sign-in`}
            className="bg-primary-100 text-white  md:py-3 py-2 md:px-5 px-3 rounded-md md:text-lg text-md font-semibold flex items-center gap-2">
            <User2Icon />
            Login
          </Link>

          {/* Mobile Menu  */}

          <Sheet>
            <SheetTrigger className=" bg-background lg:hidden flex text-primary-100 text-lg rounded-md md:px-6 px-3 items-center justify-center">
              <MenuIcon />
            </SheetTrigger>

            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>
                  <h2 className="text-2xl font-semibold border-b-2 border-b-background pb-3 text-primary-100 mb-3">
                    Media Dost
                  </h2>
                </SheetTitle>
                <SheetDescription className="flex flex-col gap-2">
                  {MenuLinks.map((item) => (
                    <Link
                      href={item.link}
                      key={item.link}
                      className="text-xl hover:text-primary-100 duration-300 transition-all hover:scale-110 font-medium border-b-2 border-b-background pb-3">
                      {item.name}
                    </Link>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
