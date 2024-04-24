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
import { User } from "@/services/magic-people/models/user";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * User
 */
export default async function call(transactionId: string, item: User) {
  console.log("magic-people.user", "update");

  return run<User>(
    "magic-people.user",
    ["update", JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}
