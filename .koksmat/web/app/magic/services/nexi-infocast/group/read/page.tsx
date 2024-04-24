"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import GroupRead from "@/services/magic-people/endpoints/group/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestGroupRead() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={"app/magic/services/magic-people/group/read/page.tsx"}
      />
      <GroupRead />
    </div>
  );
}
