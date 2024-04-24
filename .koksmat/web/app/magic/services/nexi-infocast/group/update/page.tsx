"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import GroupUpdate from "@/services/magic-people/endpoints/group/update/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestGroupUpdate() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={"app/magic/services/magic-people/group/update/page.tsx"}
      />
      <GroupUpdate />
    </div>
  );
}
