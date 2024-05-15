import GroupTable from "@/components/group/group-table";
import { env } from "../env.mjs";

const dbUrl = env.SPLIT_API_URL;

export default async function Page() {
  const response = await fetch(`${dbUrl}/groups`, { cache: "no-store" });
  let groups = await response.json();
  // console.log(groups);

  return (
    <>
      <GroupTable groups={groups} />
    </>
  );
}
