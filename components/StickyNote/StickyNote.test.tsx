import { render } from "@testing-library/react";
import { StickyNote } from "./StickyNote";

describe("StickyNote", () => {
  test("renders StickyNote component", () => {
    const { getByTestId } = render(
      <StickyNote data-testid="sticky" icon="GitHub" text="GitHub Icon" />,
    );

    const sticky = getByTestId("sticky");
    expect(sticky).toBeInTheDocument();

    expect(sticky).toHaveTextContent(/GitHub Icon/);
  });
});
