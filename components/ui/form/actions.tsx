"use server";

import { env } from "../../../app/env.mjs";

const dbUrl = env.SPLIT_API_URL;

type Group = {
  name: string;
  currency: string;
};

export async function postGroup(data: Group) {
  await fetch(`${dbUrl}/groups`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });
}
