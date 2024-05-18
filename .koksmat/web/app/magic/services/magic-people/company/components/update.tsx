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
import {CompanyItem} from "../applogic/model";
import { Button } from "@/components/ui/button";

/* marsbar */

export default function UpdateCompany(props: { id: number }) {
    const { id } = props;
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<CompanyItem>(
      "magic-people.company",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const company = readResult.data;
    return (
      <div>
      <form>
          
    {company && <div>
        <div>
        <div className="font-bold" >Tenant</div>
        <div><input type="text" name="tenant" value={company.tenant}></input></div>
    </div>    <div>
        <div className="font-bold" >Name</div>
        <div><input type="text" name="name" value={company.name}></input></div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div><input type="text" name="description" value={company.description}></input></div>
    </div>    <div>
        <div className="font-bold" >Vat Number</div>
        <div><input type="text" name="vatnumber" value={company.vatnumber}></input></div>
    </div>    <div>
        <div className="font-bold" >Phone Number</div>
        <div><input type="text" name="phonenumber" value={company.phonenumber}></input></div>
    </div>    <div>
        <div className="font-bold" >Address</div>
        <div><input type="text" name="address" value={company.address}></input></div>
    </div>    <div>
        <div className="font-bold" >City</div>
        <div><input type="text" name="city" value={company.city}></input></div>
    </div>    <div>
        <div className="font-bold" >Postal Code</div>
        <div><input type="text" name="postalcode" value={company.postalcode}></input></div>
    </div>    <div>
        <div className="font-bold" >Country</div>
        <div><input type="text" name="country_id" value={company.country_id}></input></div>
    </div>
    <div>
   
    </div>
    </div>}


      <Button>Update</Button>
     </form>
      </div>
    );
  }
      
