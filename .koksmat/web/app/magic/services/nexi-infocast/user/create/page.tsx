"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import UserCreate from "@/services/magic-people/endpoints/user/create/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestUserCreate() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={"app/magic/services/magic-people/user/create/page.tsx"}
      />
      <UserCreate />
    </div>
  );
}
