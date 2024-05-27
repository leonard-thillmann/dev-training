import GroupsTable from "@/components/group/groups-table";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";

const groups = [
  {
    name: "Group 1",
    id: "1",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    currency: "CZK",
  },
  {
    name: "Group 2",
    id: "2",
    createdAt: "2021-01-02",
    updatedAt: "2021-01-02",
    currency: "USD",
  },
  {
    name: "Group 3",
    id: "3",
    createdAt: "2021-01-03",
    updatedAt: "2021-01-03",
    currency: "EUR",
  },
];

// Snapshot test (tests if the groups-table.test.tsx.snap snapshot changed)
it("should check if the GroupsTable component matches the snapshot", () => {
  const result = render(<GroupsTable data={groups} />);
  expect(result).toMatchSnapshot();
});
