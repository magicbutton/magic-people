
do $$
    declare
    arow record;

BEGIN
    FOR arow IN 
    select 

       "Employee ID (column 0)" as EmployeeID, 
       "Full name (column 1)" as Fullname,
       "Email (column 13)" as Email
       
FROM excel."AllUsers"

from "excel"."identities"

    LOOP
  
        INSERT INTO public.person(
            	id, created_at, updated_at, deleted_at, tenant, name, searchindex, description, email, firstname, lastname, uniqueid)

        VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, '', arow.Fullname,'fullname:' || arow.Fullname || ' email:' || arow.Email, '',arow.Email,'','', arow.EmployeeID);
    END LOOP;
END;
$$;