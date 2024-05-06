"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { env } from "./env.mjs";

const dbUrl = env.NEXT_PUBLIC_DATABASE_URL;

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
    const fetchGroups = async () => {
      try {
        const response = await fetch(`${dbUrl}/groups`);
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

    fetchGroups();
  }, []);

  return (
    <>
      {isLoading ? (
        <p className="m-4">Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <Table className="m-4 w-11/12">
            <TableCaption>A list of all groups.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Created at</TableHead>
                <TableHead>Updated at</TableHead>
                <TableHead className="text-right">Currency</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groups.map((group: Group) => (
                <TableRow
                  key={group.id}
                  onClick={() => (window.location.href = `./${group.id}`)}
                >
                  <TableCell>{group.name}</TableCell>
                  <TableCell>{group.id}</TableCell>
                  <TableCell>{group.createdAt}</TableCell>
                  <TableCell>{group.updatedAt}</TableCell>
                  <TableCell className="text-right">{group.currency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
};

export default Page;
