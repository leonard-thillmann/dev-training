import { Button } from "@/components/ui/button";
import Link from "next/link";
import { env } from "../env.mjs";

const dbUrl = env.SPLIT_API_URL;

export default async function GroupDetails({
  params,
}: {
  params: { groupId: string };
}) {
  const response = await fetch(`${dbUrl}/groups/${params.groupId}`, {
    cache: "no-store",
  });
  let group = await response.json();

  return (
    <>
      <div className="m-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {group.name}
        </h1>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Created at: {group.createdAt}</li>
          <li>Updated at: {group.updatedAt}</li>
          <li>ID: {group.id}</li>
          <li>Currency: {group.currency}</li>
        </ul>
        <Button variant={"outline"}>
          <Link href={"../"}>Back</Link>
        </Button>
      </div>
    </>
  );
}
