import { Button } from "@/components/button/button";
import GroupForm from "@/components/form/groupForm";
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
