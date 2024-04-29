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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * System
 */
export default async function call(transactionId: string ,item: System) {
  console.log( "magic-people.system", "update");

  return run<System>(
    "magic-people.system",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

