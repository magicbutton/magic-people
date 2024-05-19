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
import {CountryItem} from "../applogic/model";
import {CountrySchema} from "../applogic/model";
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

export default function UpdateCountry(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<CountryItem>(
      "magic-people.country",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const country = readResult.data;
    return (
      <div>{country && 
      <CountryForm country={country}/>}
     
      </div>
    );
}

export function CountryForm(props : {country: CountryItem}) {
    const {country} = props;
    function onSubmit(data: z.infer<typeof CountrySchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }
    const form = useForm<z.infer<typeof CountrySchema>>({
        resolver: zodResolver(CountrySchema)
      })

      useEffect(() => {
        form.reset(country);
      }, [country]);
    return (
      <div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
          
    {country && <div>
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
 name="code"
 render={({ field }) => (
   <FormItem>
     <FormLabel>code</FormLabel>
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
      
