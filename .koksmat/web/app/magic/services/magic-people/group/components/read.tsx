
"use client";
import { useService } from "@/koksmat/useservice";
import { useState } from "react";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
/* guldbar */

export default function ReadGroup(props: { id: number }) {
    const { id } = props;
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<any>(
      "magic-people.group",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    return (
      <div>
        <pre>{JSON.stringify(readResult, null, 2)}</pre>
      </div>
    );
  }
      
