import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Alert variant="destructive" className="m-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Group not found</AlertTitle>
        <AlertDescription>
          The group you are looking for does not exist.
        </AlertDescription>
      </Alert>
      <Button variant={"outline"} className="m-4">
        <Link href={"/groups"}>Back to dashboard</Link>
      </Button>
    </>
  );
}
