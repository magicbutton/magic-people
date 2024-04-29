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
import { Company } from "@/services/magic-people/models/company";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Company
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-people.company", "search");

  return run<Company>(
    "magic-people.company",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

