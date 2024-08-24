import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold py-2 text-gray-700">
          Welcome Back!
        </h1>
        <p className="text-gray-600 text-center">
          Log in or Create account to get back to your Dashboard
        </p>
        <div className="flex items-center justify-center mt-6">
          <ClerkLoaded>

          <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 size={35} className="animate-spin" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" alt="logo" height={200} width={200}  />
      </div>
    </div>
  );
}
