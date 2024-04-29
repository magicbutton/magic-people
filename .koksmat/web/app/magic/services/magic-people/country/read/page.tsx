"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import CountryRead from "@/services/magic-people/endpoints/country/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestCountryRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-people/country/read/page.tsx"
}
/>
<CountryRead />
</div>
);
}
    
