import { Button } from "@/components/common/button";
import GroupForm from "@/components/group/group-form";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Group",
  description: "Create a new group.",
};

export default function Page() {
  return (
    <>
      <GroupForm />
      <Button variant={"outline"}>
        <Link href={"./"}>Cancel</Link>
      </Button>
    </>
  );
}
