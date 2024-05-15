"use server";

import { auth } from "@/auth";
import { env } from "../app/env.mjs";

const dbUrl = env.SPLIT_API_URL;

type Group = {
  name: string;
  currency: string;
};

export async function postGroup(data: Group) {
  const session = await auth();

  if (!session?.user) {
    throw new Error("User not logged in");
  } else {
    await fetch(`${dbUrl}/groups`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: "no-store",
    });
  }
}
