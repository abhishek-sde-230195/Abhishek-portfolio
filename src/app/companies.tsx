"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  { name: "S&P", isJpg: true },
 { name: "ihsmarkit", isJpg: true, customClassName: "w-[18rem]" },
 { name: "mindfire", isJpg: true },
 { name: "wipro" },
  
];

export function Companies() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Worked With
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map(({ name:logo, isJpg, customClassName }, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className={`w-40 ${customClassName ?? ''}`}
              src={`/logos/logo-${logo}.${isJpg ? 'jpg': 'svg'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
