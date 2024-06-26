import { signIn } from "@/auth";
import { Button } from "../common/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button id="sign-in-button" type="submit" name="sign-in">
        Sign in
      </Button>
    </form>
  );
}
