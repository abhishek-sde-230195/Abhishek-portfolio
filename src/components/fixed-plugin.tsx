"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import {
  LinkIcon,
} from "@heroicons/react/24/solid";

export function FixedPlugin() {
  return (
      <Button
        placeholder = ""
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="https://www.material-tailwind.com/favicon.png"
        />{" "}
        Made By Abhishek
        <LinkIcon className="w-[16px]" onClick={() => {
          navigator.clipboard.writeText('sharma.abhi554@gmail.com')
        }}/>
      </Button>
  );
}
