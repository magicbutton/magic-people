"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
/* guldbar */

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { useState } from "react";
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Button } from "@/components/ui/button";

  import ReadGroup from "./read";
  import UpdateGroup from "./update";

  export default function GroupSmallCard(props: {
    id: number;
    name: string;
    description: string;
  }) {
    const { name, description ,id} = props;
   
    const [isEditing, setisEditing] = useState(false);
    const [isViewing, setisViewing] = useState(false);


    return (
        <div>
      <Card className="m-2 hover:shadow-lg cursor-pointer"  >
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
        <Button variant="link" onClick={()=>setisViewing(true)}>View</Button>
        <Button variant="link" onClick={()=>setisEditing(true)}>Edit</Button> </CardFooter>
      </Card>
      <Sheet open={isViewing} onOpenChange={setisViewing}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{name}</SheetTitle>
          <SheetDescription>
            {isViewing && (id>0) && <ReadGroup id={id} />}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    <Sheet open={isEditing} onOpenChange={setisEditing}>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{name}</SheetTitle>
        <SheetDescription>
          {isEditing && (id>0) && <UpdateGroup id={id} />}
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  </div>
    );
  }
  
    
