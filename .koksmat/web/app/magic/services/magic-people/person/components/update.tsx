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
import {PersonItem} from "../applogic/model";
import { Button } from "@/components/ui/button";

/* marsbar */

export default function UpdatePerson(props: { id: number }) {
    const { id } = props;
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<PersonItem>(
      "magic-people.person",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const person = readResult.data;
    return (
      <div>
      <form>
          
    {person && <div>
        <div>
        <div className="font-bold" >Tenant</div>
        <div><input type="text" name="tenant" value={person.tenant}></input></div>
    </div>    <div>
        <div className="font-bold" >Name</div>
        <div><input type="text" name="name" value={person.name}></input></div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div><input type="text" name="description" value={person.description}></input></div>
    </div>    <div>
        <div className="font-bold" >Email</div>
        <div><input type="text" name="email" value={person.email}></input></div>
    </div>    <div>
        <div className="font-bold" >DisplayName</div>
        <div><input type="text" name="displayname" value={person.displayname}></input></div>
    </div>    <div>
        <div className="font-bold" >FirstName</div>
        <div><input type="text" name="firstname" value={person.firstname}></input></div>
    </div>    <div>
        <div className="font-bold" >LastName</div>
        <div><input type="text" name="lastname" value={person.lastname}></input></div>
    </div>    <div>
        <div className="font-bold" >Unique Id</div>
        <div><input type="text" name="uniqueid" value={person.uniqueid}></input></div>
    </div>    <div>
        <div className="font-bold" >Nationality</div>
        <div><input type="text" name="nationality_id" value={person.nationality_id}></input></div>
    </div>
    <div>
   
    </div>
    </div>}


      <Button>Update</Button>
     </form>
      </div>
    );
  }
      
