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
import {GroupItem} from "../applogic/model";
import { Button } from "@/components/ui/button";

/* marsbar */

export default function UpdateGroup(props: { id: number }) {
    const { id } = props;
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<GroupItem>(
      "magic-people.group",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const group = readResult.data;
    return (
      <div>
      <form>
          
    {group && <div>
        <div>
        <div className="font-bold" >Tenant</div>
        <div><input type="text" name="tenant" value={group.tenant}></input></div>
    </div>    <div>
        <div className="font-bold" >Name</div>
        <div><input type="text" name="name" value={group.name}></input></div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div><input type="text" name="description" value={group.description}></input></div>
    </div>    <div>
        <div className="font-bold" >Hidden</div>
        <div><input type="text" name="hidden" value={group.hidden}></input></div>
    </div>    <div>
        <div className="font-bold" >NotesId</div>
        <div><input type="text" name="notesid" value={group.notesid}></input></div>
    </div>
    <div>
   
    </div>
    </div>}


      <Button>Update</Button>
     </form>
      </div>
    );
  }
      
