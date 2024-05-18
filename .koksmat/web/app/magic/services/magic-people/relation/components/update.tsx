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
import {RelationItem} from "../applogic/model";
import { Button } from "@/components/ui/button";

/* marsbar */

export default function UpdateRelation(props: { id: number }) {
    const { id } = props;
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<RelationItem>(
      "magic-people.relation",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const relation = readResult.data;
    return (
      <div>
      <form>
          
    {relation && <div>
        <div>
        <div className="font-bold" >Tenant</div>
        <div><input type="text" name="tenant" value={relation.tenant}></input></div>
    </div>    <div>
        <div className="font-bold" >Name</div>
        <div><input type="text" name="name" value={relation.name}></input></div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div><input type="text" name="description" value={relation.description}></input></div>
    </div>    <div>
        <div className="font-bold" >Company Relation</div>
        <div><input type="text" name="relation_id" value={relation.relation_id}></input></div>
    </div>    <div>
        <div className="font-bold" >Relation Type</div>
        <div><input type="text" name="relationtype" value={relation.relationtype}></input></div>
    </div>
    <div>
   
    </div>
    </div>}


      <Button>Update</Button>
     </form>
      </div>
    );
  }
      
