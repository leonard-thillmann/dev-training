import GroupTable from "@/components/table/groupTable";
import type { Metadata } from "next";
import { env } from "./env.mjs";

export const metadata: Metadata = {
  title: "Home",
  description: "Displaying all groups in a list.",
};

const dbUrl = env.SPLIT_API_URL;

export default async function Page() {
  const response = await fetch(`${dbUrl}/groups`, { cache: "no-store" });
  let groups = await response.json();

  return <GroupTable groups={groups} />;
}
