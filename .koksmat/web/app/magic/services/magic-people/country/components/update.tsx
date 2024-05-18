    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
"use client";
import { useService } from "@/koksmat/useservice";
import { useState } from "react";
import {CountryItem} from "../applogic/model";
import { Button } from "@/components/ui/button";

/* marsbar */

export default function UpdateCountry(props: { id: number }) {
    const { id } = props;
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<CountryItem>(
      "magic-people.country",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const country = readResult.data;
    return (
      <div>
      <form>
          
    {country && <div>
        <div>
        <div className="font-bold" >Tenant</div>
        <div><input type="text" name="tenant" value={country.tenant}></input></div>
    </div>    <div>
        <div className="font-bold" >Name</div>
        <div><input type="text" name="name" value={country.name}></input></div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div><input type="text" name="description" value={country.description}></input></div>
    </div>    <div>
        <div className="font-bold" >code</div>
        <div><input type="text" name="code" value={country.code}></input></div>
    </div>
    <div>
   
    </div>
    </div>}


      <Button>Update</Button>
     </form>
      </div>
    );
  }
      
