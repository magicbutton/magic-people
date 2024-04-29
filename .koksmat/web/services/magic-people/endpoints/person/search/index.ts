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
import { Person } from "@/services/magic-people/models/person";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Person
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-people.person", "search");

  return run<Person>(
    "magic-people.person",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

