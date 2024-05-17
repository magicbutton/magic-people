do $$
    declare
    arow record;
BEGIN
    FOR arow IN 
    
          SELECT DISTINCT
       
       "Legal entity level 2 (column 16)" as companyname

FROM excel."AllUsers"

    LOOP
      INSERT INTO public.company(id, created_at, updated_at, deleted_at, tenant,name,vatnumber)


        VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, '',
        
        arow.companyname, -- name
        '' --vatnumber

        );
      END LOOP;
END;
$$;