import { signOut } from "@/auth";
import { Button } from "../common/button";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" variant="link">
        Sign Out
      </Button>
    </form>
  );
}
