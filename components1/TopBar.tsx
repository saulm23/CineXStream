import React from "react";
import Button from "./Button";
import { Bell, Search } from "lucide-react";
import Logo from "./Logo";
const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-[#120029]">
      <Button
        Icon={<Search size={28} className="text-white m-0 p-0" />}
        redirectTo="/Search"
        className=" flex items-center justify-start cursor-pointer"
      />

      <Logo/>

      <Button
        Icon={<Bell size={28} className="text-white" />}
        redirectTo="/notifications"
        className="cursor-pointer w-10 flex justify-end"
      />
    </div>
  );
};

export default TopBar;
