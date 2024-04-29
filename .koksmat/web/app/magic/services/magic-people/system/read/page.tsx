"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import SystemRead from "@/services/magic-people/endpoints/system/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestSystemRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-people/system/read/page.tsx"
}
/>
<SystemRead />
</div>
);
}
    
