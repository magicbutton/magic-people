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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Person
 */
export default async function call(transactionId: string ,item: Person) {
  console.log( "magic-people.person", "update");

  return run<Person>(
    "magic-people.person",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

