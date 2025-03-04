import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <section className="relative">
      <Image
        src={"/images/hero-bg.jpg"}
        alt="img"
        height={100}
        width={100}
        className="w-full h-full absolute"
      />
      {children}
    </section>
  );
};

export default AuthLayout;
