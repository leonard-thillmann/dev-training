import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Button variant={"outline"} className="m-4">
        <Link href={"/groups"}>Dashboard</Link>
      </Button>
    </>
  );
}
