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
import { Groupsegment } from "@/services/magic-people/models/groupsegment";
/**
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Groupsegment
 */
export default async function call(transactionId: string, id: int64) {
  console.log("magic-people.groupsegment", "delete");

  return run<Groupsegment>(
    "magic-people.groupsegment",
    ["delete", id],
    transactionId,
    600,
    transactionId
  );
}
