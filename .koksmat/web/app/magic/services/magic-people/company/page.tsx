
"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
/* guldbar */
import SearchCompany from "@/app/magic/services/magic-people/company/components/search";
import CreateCompany from "@/app/magic/services/magic-people/company/components/create";
import ReadCompany from "@/app/magic/services/magic-people/company/components/read";
import UpdateCompany from "@/app/magic/services/magic-people/company/components/update";
import DeleteCompany from "@/app/magic/services/magic-people/company/components/delete";

export default function Company() {
return (
<div>
Search:<SearchCompany />
Create: <CreateCompany />
Read: <ReadCompany />
Update: <UpdateCompany />
Delete: <DeleteCompany />
</div>
);
}
    
