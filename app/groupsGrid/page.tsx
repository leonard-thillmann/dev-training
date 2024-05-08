import { Button } from "@/components/button/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card/card";
import GroupCard from "@/components/card/groupCard";
import Link from "next/link";
import { env } from "../env.mjs";

const dbUrl = env.SPLIT_API_URL;

type Group = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  currency: string;
};

type groups = [];

export default async function Page() {
  const response = await fetch(`${dbUrl}/groups`, { cache: "no-store" });
  let groups = await response.json();

  return (
    <>
      {groups.length === 0 ? (
        <Card className="w-[350px] m-4">
          <CardHeader>
            <CardTitle>Create new group</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button>Create</Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="flex flex-wrap">
          {groups.map((group: Group) => (
            <Link
              key={group.id}
              href={`./${group.id}`}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 m-4"
            >
              <GroupCard
                id={group.id}
                name={group.name}
                createdAt={group.createdAt}
                updatedAt={group.updatedAt}
                currency={group.currency}
              ></GroupCard>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
