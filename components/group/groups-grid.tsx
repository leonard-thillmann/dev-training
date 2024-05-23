"use client";

import getGroups from "@/actions/get-groups";
import { Button } from "@/components/common/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common/card";
import GroupCard from "@/components/group/groups-card";
import type { Metadata } from "next";
import Link from "next/link";
import React, { useEffect } from "react";

export const metadata: Metadata = {
  title: "Home - Grid",
  description: "Displaying all groups in a grid.",
};

type Group = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  currency: string;
};

let groups: Group[] = [];

async function fetchData() {
  groups = await getGroups();
}

export default function GroupsGrid() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

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
              href={`./groups/${group.id}`}
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
