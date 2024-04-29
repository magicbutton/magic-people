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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Company
 */
export default async function call(transactionId: string ,item: Company) {
  console.log( "magic-people.company", "update");

  return run<Company>(
    "magic-people.company",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

