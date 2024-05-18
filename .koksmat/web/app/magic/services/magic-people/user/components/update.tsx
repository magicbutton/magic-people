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
import {UserItem} from "../applogic/model";
import { Button } from "@/components/ui/button";

/* marsbar */

export default function UpdateUser(props: { id: number }) {
    const { id } = props;
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<UserItem>(
      "magic-people.user",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const user = readResult.data;
    return (
      <div>
      <form>
          
    {user && <div>
        <div>
        <div className="font-bold" >Tenant</div>
        <div><input type="text" name="tenant" value={user.tenant}></input></div>
    </div>    <div>
        <div className="font-bold" >Name</div>
        <div><input type="text" name="name" value={user.name}></input></div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div><input type="text" name="description" value={user.description}></input></div>
    </div>    <div>
        <div className="font-bold" >System</div>
        <div><input type="text" name="system_id" value={user.system_id}></input></div>
    </div>    <div>
        <div className="font-bold" >FullName</div>
        <div><input type="text" name="fullname" value={user.fullname}></input></div>
    </div>
    <div>
   
    </div>
    </div>}


      <Button>Update</Button>
     </form>
      </div>
    );
  }
      
