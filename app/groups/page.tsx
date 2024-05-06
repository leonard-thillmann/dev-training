"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import GroupCard from "@/components/ui/card/groupCard";
import Menu from "@/components/ui/menu/menu";
import Link from "next/link";
import { useEffect, useState } from "react";

type Group = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  currency: string;
};

const Page = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/groups");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setGroups(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Menu />
      {isLoading ? (
        <p className="m-4">Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
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
                  href={`/groups/${group.id}`}
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
      )}
    </>
  );
};

export default Page;
