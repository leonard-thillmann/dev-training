import GroupTable from "@/components/ui/table/groupTable";
import { env } from "./env.mjs";

const dbUrl = env.NEXT_PUBLIC_SPLIT_API_URL;

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
