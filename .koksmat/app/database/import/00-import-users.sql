
do $$
    declare
    arow record;

BEGIN
    FOR arow IN select id,
       "colEmployee ID (column 0)" as employee_id,
       "colFull name (column 1)" as fullname ,
       "colEmail (column 13)" as email
from public."Sheet1"
    LOOP
  
        INSERT INTO public.person(
            	id, created_at, updated_at, deleted_at, tenant, name, description, email, firstname, lastname, phonenumber, governmentid)

        VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, '', arow.fullname,'',arow.email,'','', '', arow.employee_id);
    END LOOP;
END;
$$;