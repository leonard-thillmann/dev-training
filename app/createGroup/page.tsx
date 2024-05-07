import { Button } from "@/components/ui/button";
import GroupForm from "@/components/ui/form/groupForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="m-4">
      <GroupForm />
      <Button variant={"outline"}>
        <Link href={"./"}>Cancel</Link>
      </Button>
    </div>
  );
}
