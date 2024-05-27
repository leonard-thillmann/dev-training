import GroupsGrid from "@/components/group/groups-grid";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

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

// Unit test (tests if the GroupsGrid gets rendered as expected)
test("groups-grid", () => {
  render(<GroupsGrid groups={groups} />);
  expect(screen.getByRole("heading", { name: "Group 1" })).toBeDefined();
});
