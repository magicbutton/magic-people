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
import { System } from "@/services/magic-people/models/system";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * System
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-people.system", "search");

  return run<System>(
    "magic-people.system",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

