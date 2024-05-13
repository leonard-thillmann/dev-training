"use client";

import { Button } from "@/components/common/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/common/form";
import { Input } from "@/components/common/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  sourceAmount: z.string().min(1, {
    message: "Username must be at least 1 characters.",
  }),
  sourceCurr: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  targetCurr: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sourceAmount: "",
      sourceCurr: "",
      targetCurr: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        const sourceCurrencyMultiplier = data.product.data[values.sourceCurr];
        const sourceCurrency = values.sourceCurr;
        const sourceAmount = values.sourceAmount;
        const targetCurrencyMultiplier = data.product.data[values.targetCurr];
        const targetCurrency = values.targetCurr;

        // Calculate targetAmount by calculating the conversion rate
        const targetAmount =
          targetCurrencyMultiplier / sourceCurrencyMultiplier;

        const calcResult = document.getElementById("calcResult");
        if (calcResult) {
          calcResult.innerHTML =
            sourceAmount +
            " " +
            sourceCurrency +
            " sind " +
            targetAmount.toFixed(2) +
            " " +
            targetCurrency;
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
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
        <p id="calcResult">Result will be printed here...</p>
        <Button type="submit">Calculate</Button>
      </form>
    </Form>
  );
}
