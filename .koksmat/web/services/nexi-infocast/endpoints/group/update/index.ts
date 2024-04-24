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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Group
 */
export default async function call(transactionId: string, item: Group) {
  console.log("magic-people.group", "update");

  return run<Group>(
    "magic-people.group",
    ["update", JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}
