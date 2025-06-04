"use client";

import React from "react";
import Link from "next/link";

type ButtonProps = {
  href: string;
  text: string;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
};

const Button = ({ href, text, imgSrc, imgAlt, className }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-md bg-purple-700 text-white hover:bg-purple-800 transition ${
        className || ""
      }`}
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt || "button icon"}
          width={24}
          height={24}
        />
      )}
      {text && <span>{text}</span>}
    </Link>
  );
};

export default Button;
