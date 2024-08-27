"use client";

import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { UserButton } from "@clerk/nextjs";
// import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";

export default function Home() {
  const { onOpen } = useNewAccount();
  // const accountsQuery = useGetAccounts(); iteration => accountsQuery.data.map
  // const {data: accounts, isLoading} = useGetAccounts()
  // console.log(accounts);

  // if(isLoading){
  //   return <div>Loading...</div>
  // }
  return <Button onClick={onOpen}>Add new Account</Button>;
}
