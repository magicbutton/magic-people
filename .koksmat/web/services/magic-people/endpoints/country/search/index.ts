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
import { Country } from "@/services/magic-people/models/country";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Country
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-people.country", "search");

  return run<Country>(
    "magic-people.country",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

