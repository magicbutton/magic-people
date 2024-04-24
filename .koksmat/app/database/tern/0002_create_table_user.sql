/* 
 File have been automatically created. To prevent the file from getting overwritten
 set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
 ---
 keep: false
 ---
 */
CREATE TABLE public.user (
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone,
    tenant character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default" NOT NULL,
    companyname character varying COLLATE pg_catalog."default" NOT NULL,
    firstname character varying COLLATE pg_catalog."default" NOT NULL,
    lastname character varying COLLATE pg_catalog."default" NOT NULL,
    phonenumber character varying COLLATE pg_catalog."default",
    sendemail boolean,
    sendsms boolean
);

CREATE TABLE public.user_m2m_group (
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone,
    user_id int64,
    group_id int64
);

ALTER TABLE
    public.user_m2m_group
ADD
    FOREIGN KEY (user_id) REFERENCES public.user (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID;

ALTER TABLE
    public.user_m2m_group
ADD
    FOREIGN KEY (group_id) REFERENCES public.group (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID;

---- create above / drop below ----
DROP TABLE IF EXISTS public.user_m2m_group;

DROP TABLE public.user;