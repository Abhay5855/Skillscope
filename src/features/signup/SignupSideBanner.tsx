import { FC } from "react";
import image from "../../../public/image.png";
import Image from "next/image";
const SignupSideBanner: FC = () => {
  return (
    <aside className="flex flex-col justify-center items-center text-white max-xl:hidden bg-side-banner overflow-hidden">
      <div className="grid grid-rows-[auto-1fr] gap-6 tracking-tighter">
        <blockquote className="text-2xl h-fit text-center font-bold">
          "With Buffer I can build social content out as far as I want into the
          future but also tailor campaigns if we see certain trends within the
          industry."
        </blockquote>
        <div className="flex flex-col justify-center items-center gap-1 p-0 m-0">
          <div className="relative w-20 h-20">
            <Image src={image} alt="Ceo photo"/>
          </div>
          <p className="font-semibold">Justin Ozanich</p>
          <p className="font-normal">Marketing Manager</p>
          <p className="font-normal">Foster Coffee Company</p>
        </div>
      </div>
    </aside>
  );
};
export default SignupSideBanner;
