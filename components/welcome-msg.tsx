"use client";
import { useUser } from "@clerk/nextjs";

export default function WelcomeMsg() {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4 mt-2">
      <h2 className="text-2xl lg:text-3xl font-medium text-white/90">
        Welcome Back{isLoaded ? ", " : " "}{user?.firstName}✌
      </h2>
      <p className="text-sm lg:text-base text-blue-200">
        This is your Finance Overview Report
      </p>
    </div>
  );
}
