"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import PersonRead from "@/services/magic-people/endpoints/person/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestPersonRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-people/person/read/page.tsx"
}
/>
<PersonRead />
</div>
);
}
    
