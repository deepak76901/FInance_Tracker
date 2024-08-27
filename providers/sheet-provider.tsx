"use client";
import { NewAccountSheet } from "@/features/accounts/components/add-new-account";
import { useEffect, useState } from "react";

// import { useMountedState } from "react-use";

export default function SheetProvider() {
//   const isMounted = useMountedState();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewAccountSheet />
    </>
  );
}
