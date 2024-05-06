"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GroupDetails({
  params,
}: {
  params: { groupId: string };
}) {
  const [group, setGroup] = useState({} as any);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/groups/${params.groupId}`
        );
        if (!response.ok) {
          window.location.href = "../not-found";
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setGroup(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  });
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
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
      )}
    </>
  );
}
