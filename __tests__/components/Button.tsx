import Button from "@/components/Button/Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders a button and click works", () => {
    let i: number = 0;
    render(<Button title="Plus One" onClick={() => i++} />);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(i).toBe(1);
  });
});
