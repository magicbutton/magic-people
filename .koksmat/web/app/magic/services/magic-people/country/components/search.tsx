
    "use client";

    import { Input } from "@/components/ui/input";
import { useService } from "@/koksmat/useservice";
import { useSQLSelect } from "@/koksmat/usesqlselect";
import { set } from "date-fns";
import { tr } from "date-fns/locale";
import { useMemo, useState } from "react";
    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
    /* guldbar */
    
    export default function SearchCountry() {
        const [transactionId, settransactionId] = useState(0);
        const search = useMemo(() => {
          return { text: "z" };
        }, []);
        const searchResult = useService(
          "magic-people.country",
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
            <pre>
              {JSON.stringify(
                { searchFor: search.text, transactionId, searchResult },
                null,
                2
              )}
            </pre>
          </div>
    );
    }
        
