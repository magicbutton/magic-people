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
import { Company } from "@/services/magic-people/models/company";
/**
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Company
 */
export default async function call(transactionId: string ,id: int64) {
  console.log( "magic-people.company", "delete");

  return run<Company>(
    "magic-people.company",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

