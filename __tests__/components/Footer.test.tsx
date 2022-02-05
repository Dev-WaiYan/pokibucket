import Footer from "@/components/Layout/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("renders a footer", () => {
    render(<Footer />);

    const link = screen.getByRole("link", {
      name: /Dev-WaiYan/i,
    });

    expect(link).toBeInTheDocument();
  });
});
