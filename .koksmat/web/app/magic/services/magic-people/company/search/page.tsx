"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import CompanySearch from "@/services/magic-people/endpoints/company/search/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestCompanySearch() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-people/company/search/page.tsx"
}
/>
<CompanySearch />
</div>
);
}
    
