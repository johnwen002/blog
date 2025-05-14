"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form as ReactForm, useLoaderData } from "react-router";
import { z } from "zod";
import { getAuthClient } from "~/auth/auth-client";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import Spin from "~/components/ui/spin";
import { generateRandomString } from "~/lib/utils";
const SignUpForm = () => {
  const loadData = useLoaderData();
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(50),
    name: z.string().min(1).max(50),
  });
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await getAuthClient(loadData.baseURL).signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.name,
        image: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${generateRandomString(
          5
        )}`,
      },
      {
        onRequest: (ctx) => {
          // show loading state
          console.log("loading...");
          setLoading(true);
        },
        onSuccess: (ctx) => {
          // redirect to home
          console.log("success");
          setLoading(false);
        },
        onError: (ctx) => {
          console.log(ctx.error);
          setLoading(false);
        },
      }
    );
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <Form {...form}>
        <ReactForm onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex items-center justify-center gap-3"
            disabled={loading}
          >
            Sign Up {loading && <Spin />}
          </Button>
        </ReactForm>
      </Form>
    </div>
  );
};
export default SignUpForm;
