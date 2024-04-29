"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import CountrySearch from "@/services/magic-people/endpoints/country/search/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestCountrySearch() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-people/country/search/page.tsx"
}
/>
<CountrySearch />
</div>
);
}
    
