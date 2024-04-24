"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import GroupsegmentRead from "@/services/magic-people/endpoints/groupsegment/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestGroupsegmentRead() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={"app/magic/services/magic-people/groupsegment/read/page.tsx"}
      />
      <GroupsegmentRead />
    </div>
  );
}
