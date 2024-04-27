/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.person
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,email character varying COLLATE pg_catalog."default"  NOT NULL
    ,firstname character varying COLLATE pg_catalog."default"  NOT NULL
    ,lastname character varying COLLATE pg_catalog."default"  NOT NULL
    ,phonenumber character varying COLLATE pg_catalog."default" 
    ,governmentid character varying COLLATE pg_catalog."default" 


);

                CREATE TABLE public.person_m2m_relation (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,person_id int  
 
                    ,relation_id int  
 

                );
            

                ALTER TABLE public.person_m2m_relation
                ADD FOREIGN KEY (person_id)
                REFERENCES public.person (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.person_m2m_relation
                ADD FOREIGN KEY (relation_id)
                REFERENCES public.relation (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----
DROP TABLE IF EXISTS public.person_m2m_relation;
DROP TABLE public.person;

