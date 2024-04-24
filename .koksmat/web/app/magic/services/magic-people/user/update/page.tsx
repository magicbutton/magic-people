"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import UserUpdate from "@/services/magic-people/endpoints/user/update/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestUserUpdate() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-people/user/update/page.tsx"
}
/>
<UserUpdate />
</div>
);
}
    
