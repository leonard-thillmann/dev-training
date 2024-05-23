import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Menu from "../components/layout/menu";

test("Menu", () => {
  render(<Menu />);
  const dashboard = screen.getByRole("link", { name: "Dashboard" });
  expect(dashboard).toBeDefined();

  // expect(screen.getByRole("link", { name: "Dashboard" })).toBeDefined();
});
