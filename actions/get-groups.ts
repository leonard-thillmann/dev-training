"use server";

import { env } from "../app/env.mjs";

const dbUrl = env.SPLIT_API_URL;

export default async function getgroups() {
  const response = await fetch(`${dbUrl}/groups`, { cache: "no-store" });
  let groups = await response.json();
  return groups;
}
