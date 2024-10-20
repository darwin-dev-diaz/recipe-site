import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";

describe("Header component", () => {
  it("Menu isn't open when first loaded", () => {
    render(<Header />);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("Clicking menu button opens nav", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: /menu/i });
    await user.click(menuButton);
    expect(screen.queryByRole("navigation")).toBeInTheDocument();
  });

  it("Clicking most popular opens most popular items", async () => {});
});
