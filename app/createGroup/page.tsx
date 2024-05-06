import { Button } from "@/components/ui/button";
import GroupForm from "@/components/ui/form/groupForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="m-4">
      <GroupForm></GroupForm>
      <Button variant={"outline"} className="m-4">
        <Link href={"/groups"}>Cancel</Link>
      </Button>
    </div>
  );
}
