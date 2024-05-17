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
  import ReadCountry from "./read";

  export default function CountrySmallCard(props: {
    id: number;
    name: string;
    description: string;
  }) {
    const { name, description ,id} = props;
    const [isSelected, setisSelected] = useState(false);

    return (
        <div>
      <Card className="m-2 hover:shadow-lg cursor-pointer"  onClick={() => setisSelected(true)}>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Sheet open={isSelected} onOpenChange={setisSelected}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{name}</SheetTitle>
          <SheetDescription>
            {isSelected && (id>0) && <ReadCountry id={id} />}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
    );
  }
  
    
