"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
/* citronmåne */

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

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Ellipsis } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import {GroupItem} from "../applogic/model";
  import ReadGroup from "./read";
  import UpdateGroup from "./update";

  export default function GroupSmallCard(props: {
    item: GroupItem;
    onClick?: () => void;
  }) {
    const { item,onClick} = props;
   
    const [isEditing, setisEditing] = useState(false);
    const [isViewing, setisViewing] = useState(false);


    return (
        <div>
      <Card className="m-2 hover:shadow-lg cursor-pointer" onClick={onClick}  >
        <CardHeader>
          <CardTitle>
          <div className="flex">
          <div>
          {item.name}
          </div>
          <div className="grow">
          </div>
          <div>
          <DropdownMenu>
          <DropdownMenuTrigger  onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Ellipsis size={"18px"} />
          
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              setisViewing(true);
            }}
          >
            View
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              setisEditing(true);
            }}
          >
            Edit
          </DropdownMenuItem>          
          </DropdownMenuContent>
        </DropdownMenu>

            </div>
            </div>
        </CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Sheet open={isViewing} onOpenChange={setisViewing}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{item.name}</SheetTitle>
          <SheetDescription>
            {isViewing && (item.id>0) && <ReadGroup id={item.id} />}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    <Sheet open={isEditing} onOpenChange={setisEditing}>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{item.name}</SheetTitle>
        <SheetDescription>
          {isEditing && (item.id>0) && <UpdateGroup id={item.id} />}
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  </div>
    );
  }
  
    
