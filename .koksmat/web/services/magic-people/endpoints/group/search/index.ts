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
import { Group } from "@/services/magic-people/models/group";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Group
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-people.group", "search");

  return run<Group>(
    "magic-people.group",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

