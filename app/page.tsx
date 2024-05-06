import GroupTable from "@/components/ui/table/groupTable";
import { env } from "./env.mjs";

const dbUrl = env.NEXT_PUBLIC_DATABASE_URL;

async function Page() {
  let groups = {};
  await fetch(`${dbUrl}/groups`)
    .then((res) => res.json())
    .then((res) => (groups = res));

  return (
    <>
      <GroupTable props={groups} />
    </>
  );
}

export default Page;
