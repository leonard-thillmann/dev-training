import GroupsGrid from "@/components/group/groups-grid";
import GroupsList from "@/components/group/groups-list";
import GroupsRadio from "@/components/group/groups-radio";
import GroupsTable from "@/components/group/groups-table";
import { env } from "../env.mjs";
import { getDictionary } from "./dictionaries";

const dbUrl = env.SPLIT_API_URL;

interface PageProps {
  params: { lang: string };
  searchParams: {
    view: "list" | "grid" | "table";
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const dict = await getDictionary(params.lang); // en
  const response = await fetch(`${dbUrl}/groups`, { cache: "no-store" });
  const groups = await response.json();
  const view = searchParams.view;

  return (
    <>
      <GroupsRadio />
      {view === "list" ? (
        <GroupsList groups={groups} dict={dict.groupsList} />
      ) : view === "grid" ? (
        <GroupsGrid groups={groups} />
      ) : view === "table" ? (
        <GroupsTable data={groups} />
      ) : (
        <GroupsList groups={groups} dict={dict.groupsList} />
      )}
    </>
  );
}
