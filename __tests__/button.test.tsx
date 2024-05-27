import { Button } from "@/components/common/button";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("button", () => {
  render(<Button>Test</Button>);
  expect(screen.getByRole("button", { name: "Test" })).toBeDefined();
});
