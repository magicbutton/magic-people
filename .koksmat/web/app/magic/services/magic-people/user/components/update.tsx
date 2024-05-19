    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
"use client";
import { useService } from "@/koksmat/useservice";
import { useState } from "react";
import {UserItem} from "../applogic/model";
import {UserSchema} from "../applogic/model";
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

export default function UpdateUser(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<UserItem>(
      "magic-people.user",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const user = readResult.data;
    function onSubmit(data: z.infer<typeof UserSchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }
    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: user,
      })
  
    return (
      <div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
          
    {user && <div>
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
    {/* reference */}<FormField
 control={form.control}
 name="system_id"
 render={({ field }) => (
   <FormItem>
     <FormLabel>System</FormLabel>
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
 name="fullname"
 render={({ field }) => (
   <FormItem>
     <FormLabel>FullName</FormLabel>
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


      <Button>Update</Button>
      </form>
     </Form>
      </div>
    );
  }
      
