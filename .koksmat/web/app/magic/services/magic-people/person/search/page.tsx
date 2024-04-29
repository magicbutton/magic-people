"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import PersonSearch from "@/services/magic-people/endpoints/person/search/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestPersonSearch() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-people/person/search/page.tsx"
}
/>
<PersonSearch />
</div>
);
}
    
