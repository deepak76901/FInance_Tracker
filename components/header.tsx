import React from "react";
import HeaderLogo from "./header-logo";
import Navigation from "@/components/navigation";
import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import WelcomeMsg from "@/components/welcome-msg";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-600 to-blue-400 px-4 py-8 lg:px-14 lg:pb-36">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="flex items-center lg:gap-x-16 justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-7 animate-spin text-slate-300" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
      </div>
    </header>
  );
}
