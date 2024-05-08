"use client";

import { postGroup } from "@/actions/postGroup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/common/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/common/form";
import { Input } from "@/components/common/input";
import { Toaster } from "@/components/common/toaster";
import { toast } from "@/components/common/use-toast";

// Server action in separater Datei welche Daten fetcht

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Groupname must be at least 2 characters.",
  }),
  currency: z.string().min(1, {
    message: "Currency must be at least 1 characters.",
  }),
});

export default function GroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      currency: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    postGroup(data);

    setTimeout(() => {
      window.location.href = "./";
    }, 2000);

    toast({
      title: "You created the following group:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>
                This will be the name of the group.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group currency</FormLabel>
              <FormControl>
                <Input placeholder="currency" {...field} />
              </FormControl>
              <FormDescription>
                This will be the currency of the group.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create group</Button>
        <Toaster />
      </form>
    </Form>
  );
}
