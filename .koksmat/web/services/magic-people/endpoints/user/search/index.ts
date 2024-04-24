"use server";
/*
Parameters

*/
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import { run } from "@/koksmat/magicservices";
import { ShowCodeFragment } from "@/services/ShowCodeFragment";
import { User } from "@/services/magic-people/models/user";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * User
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-people.user", "search");

  return run<User>(
    "magic-people.user",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

