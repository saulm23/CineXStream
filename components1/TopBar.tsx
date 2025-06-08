import React from "react";
import Button from "./Button";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-[#120029]">
      <Button
        Icon={<Search size={28} className="text-white m-0 p-0" />}
        redirectTo="/Search"
        className=" flex items-center justify-start cursor-pointer"
      />

      <Link href="/">
        <Image
          alt="CineXStram"
          src={Logo}
          width={160}
          height={60}
          className="object-contain"
        />
      </Link>

      <Button
        Icon={<Bell size={28} className="text-white" />}
        redirectTo="/notifications"
        className="cursor-pointer w-10 flex justify-end"
      />
    </div>
  );
};

export default TopBar;
