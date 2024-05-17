do $$
    declare
    arow record;
BEGIN
    FOR arow IN 
    
          SELECT DISTINCT
       
       "Location level 2 (column 18)" as countryname

FROM excel."AllUsers"

    LOOP
      INSERT INTO public.country(id, created_at, updated_at, deleted_at, tenant,name,code)


        VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, '',
        
        arow.countryname, -- name
        arow.countryname --code

        );
      END LOOP;
END;
$$;