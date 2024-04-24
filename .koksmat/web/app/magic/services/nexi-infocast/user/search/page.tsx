"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import UserSearch from "@/services/magic-people/endpoints/user/search/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestUserSearch() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={"app/magic/services/magic-people/user/search/page.tsx"}
      />
      <UserSearch />
    </div>
  );
}
