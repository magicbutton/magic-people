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
import { Relation } from "@/services/magic-people/models/relation";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Relation
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-people.relation", "search");

  return run<Relation>(
    "magic-people.relation",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

