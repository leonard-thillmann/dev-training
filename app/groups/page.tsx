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
import { Plus } from "lucide-react";
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
        const response = await fetch("http://localhost:3001/groups");
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
                <GroupCard
                  key={group.id}
                  id={group.id}
                  name={group.name}
                  createdAt={group.createdAt}
                  updatedAt={group.updatedAt}
                  currency={group.currency}
                ></GroupCard>
              ))}
              <Button className="m-4" variant="outline">
                <Link href={"../createGroup"} className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Add group
                </Link>
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Page;
