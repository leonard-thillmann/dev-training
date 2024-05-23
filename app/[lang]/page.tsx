import Groups from "@/components/group/groups-table";
import { env } from "../env.mjs";
import { getDictionary } from "./dictionaries";

const dbUrl = env.SPLIT_API_URL;

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang); // en
  const response = await fetch(`${dbUrl}/groups`, { cache: "no-store" });
  let groups = await response.json();

  return (
    <>
      <Groups groups={groups} dict={dict.groupsList} />
    </>
  );
}
