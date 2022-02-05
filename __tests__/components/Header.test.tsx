import Header from "@/components/Layout/Header";
import { render, screen } from "@testing-library/react";
import AppInfo from "constants/appInfo";

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", {
      name: AppInfo.Title,
    });

    const logo = screen.getByAltText("logo");

    expect(heading).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
