"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../common/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../common/form";
import { Input } from "../common/input";

const formSchema = z.object({
  sourceAmount: z.string().min(1, {
    message: "Must be at least 1 characters.",
  }),
  sourceCurr: z
    .string()
    .min(3, {
      message: "Must be 3 characters.",
    })
    .max(3),
  targetCurr: z
    .string()
    .min(3, {
      message: "Must be 3 characters.",
    })
    .max(3),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  const res = await fetch("/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
    cache: "no-store",
  });
  const data = await res.json();
  const resultContainer = document.getElementById("resultContainer");

  if (data && resultContainer) {
    resultContainer.innerHTML =
      "= " +
      data.calcResult.sourceAmount +
      " " +
      data.calcResult.sourceCurrency +
      " sind " +
      data.calcResult.targetAmount +
      " " +
      data.calcResult.targetCurrency;
  }
}

export default function ConverterForm({ session }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sourceAmount: "",
      sourceCurr: "",
      targetCurr: "",
    },
  });

  if (!session?.user) {
    return <div>Not logged in</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="sourceAmount"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Source amount</FormLabel>
                <FormControl>
                  <Input placeholder="Source amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="sourceCurr"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Source currency</FormLabel>
                <FormControl>
                  <Input placeholder="Source currency" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="targetCurr"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Target currency</FormLabel>
                <FormControl>
                  <Input placeholder="Target currency" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <p id="resultContainer">= ...</p>
        <Button type="submit">Calculate</Button>
      </form>
    </Form>
  );
}
