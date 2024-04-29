import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Button variant={"outline"} className="m-4">
        <Link href={"/users"}>Users Page &rarr;</Link>
      </Button>
    </>
  );
}
