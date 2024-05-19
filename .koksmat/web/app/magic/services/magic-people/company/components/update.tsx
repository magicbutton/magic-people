    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
"use client";
import { useService } from "@/koksmat/useservice";
import { useState,useEffect } from "react";
import {CompanyItem} from "../applogic/model";
import {CompanySchema} from "../applogic/model";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
/* marsbar */

export default function UpdateCompany(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<CompanyItem>(
      "magic-people.company",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const company = readResult.data;
    return (
      <div>{company && 
      <CompanyForm company={company}/>}
     
      </div>
    );
}

export function CompanyForm(props : {company: CompanyItem}) {
    const {company} = props;
    function onSubmit(data: z.infer<typeof CompanySchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }
    const form = useForm<z.infer<typeof CompanySchema>>({
        resolver: zodResolver(CompanySchema)
      })

      useEffect(() => {
        form.reset(company);
      }, [company]);
    return (
      <div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
          
    {company && <div>
        {/* string */}<FormField
 control={form.control}
 name="tenant"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Tenant</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* string */}<FormField
 control={form.control}
 name="name"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Name</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* string */}<FormField
 control={form.control}
 name="description"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Description</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* string */}<FormField
 control={form.control}
 name="vatnumber"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Vat Number</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* string */}<FormField
 control={form.control}
 name="phonenumber"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Phone Number</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* string */}<FormField
 control={form.control}
 name="address"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Address</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* string */}<FormField
 control={form.control}
 name="city"
 render={({ field }) => (
   <FormItem>
     <FormLabel>City</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* string */}<FormField
 control={form.control}
 name="postalcode"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Postal Code</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* reference */}<FormField
 control={form.control}
 name="country_id"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Country</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>

    <div>
   
    </div>
    </div>}


      <Button  type="submit">Update</Button>
      </form>
     </Form>
      </div>
    );
  }
      
