import { Button } from "@/components/ui/button";
import Link from "next/link";
import { env } from "../env.mjs";

const dbUrl = env.NEXT_PUBLIC_SPLIT_API_URL;

type group = {
  id: string;
  name: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
};

export default async function GroupDetails({
  params,
}: {
  params: { groupId: string };
}) {
  let group = {} as group;
  await fetch(`${dbUrl}/groups/${params.groupId}`)
    .then((res) => res.json())
    .then((res) => (group = res))
    .then((res) => console.log(res));
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
