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
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Person
 */
export default async function call(transactionId: string ,id: int64) {
  console.log( "magic-people.person", "delete");

  return run<Person>(
    "magic-people.person",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

