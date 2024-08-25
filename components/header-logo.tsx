import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <Link href={`/`}>
      <div className="items-center lg:flex hidden ">
        <Image src={`/logo.svg`} alt="Logo" height={28} width={28} />
        <p className="text-2xl text-white font-semibold ml-2.5">
          Finance
        </p>
      </div>
    </Link>
  );
}
