"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import UserRead from "@/services/magic-people/endpoints/user/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestUserRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-people/user/read/page.tsx"
}
/>
<UserRead />
</div>
);
}
    
