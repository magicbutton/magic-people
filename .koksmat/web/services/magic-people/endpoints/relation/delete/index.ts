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
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Relation
 */
export default async function call(transactionId: string ,id: int64) {
  console.log( "magic-people.relation", "delete");

  return run<Relation>(
    "magic-people.relation",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

