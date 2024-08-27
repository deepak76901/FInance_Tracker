"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {UserButton} from "@clerk/nextjs"
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export default function Home() {
  // const accountsQuery = useGetAccounts(); iteration => accountsQuery.data.map
  const {data: accounts, isLoading} = useGetAccounts()
  console.log(accounts);

  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div>
    {accounts?.map(account => (<div key={account.id}></div>))}
    </div>
  );
}
