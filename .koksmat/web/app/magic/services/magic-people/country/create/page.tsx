"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import CountryCreate from "@/services/magic-people/endpoints/country/create/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestCountryCreate() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-people/country/create/page.tsx"
}
/>
<CountryCreate />
</div>
);
}
    
