
    "use client";

    import { Input } from "@/components/ui/input";
import { useService } from "@/koksmat/useservice";
import { useSQLSelect } from "@/koksmat/usesqlselect";
import { set } from "date-fns";
import { tr } from "date-fns/locale";
import { useMemo, useState } from "react";
import CompanySmallCard from "./smallcard";
  
    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
    /* guldbar */

   

    export interface Root {
        totalPages: number
        totalItems: number
        currentPage: number
        items: Item[]
      }
      
// Company
export interface Item  {
    id: number;
    created_at: string;
    updated_at: string;
        tenant : string ;
    name : string ;
    description : string ;
    vatnumber : string ;
    phonenumber : string ;
    address : string ;
    city : string ;
    postalcode : string ;
    country_id : number ;

}


    export default function SearchCompany() {
        const [transactionId, settransactionId] = useState(0);
        const search = useMemo(() => {
          return { text: "" };
        }, []);
        const searchResult = useService<Root>(
          "magic-people.company",
          ["search", "%" + search.text + "%"],
          "",
          6000,
          transactionId.toString()
        );
        return (
          <div>
            Search
            <Input
              type="text"
              value={search.text}
              onChange={(e) => {
                search.text = e.target.value;
                settransactionId(transactionId + 1);
              }}
            />
            {searchResult?.error && (
                <div className="text-red-500">Error: {searchResult.error}</div>
              )}
              {searchResult?.isLoading && <div>Loading</div>}
              {searchResult?.data && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                  {searchResult.data.items.map((item, index) => {
                    return <div key={index}>
                    <CompanySmallCard name={item.name} description={item.description} id={item.id} />

                    
                    
                    
                    </div>;
                  })}
                </div>
              )}
        
         
          </div>
    );
    }
        
