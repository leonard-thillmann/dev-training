import { Button } from "@/components/common/button";
import Heading from "@/components/common/heading";
import type { Metadata } from "next";
import Link from "next/link";
import { env } from "../env.mjs";

export const metadata: Metadata = {
  title: "Group",
  description: "Detailed group view.",
};

const dbUrl = env.SPLIT_API_URL;

export default async function GroupDetails({
  params,
}: {
  params: { groupId: string };
}) {
  const response = await fetch(`${dbUrl}/groups/${params.groupId}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  let group = await response.json();

  return (
    <>
      <>
        <Heading text={group.name} />
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Created at: {group.createdAt}</li>
          <li>Updated at: {group.updatedAt}</li>
          <li>ID: {group.id}</li>
          <li>Currency: {group.currency}</li>
        </ul>
        <Button variant={"outline"}>
          <Link href={"../"}>Back</Link>
        </Button>
      </>
    </>
  );
}
