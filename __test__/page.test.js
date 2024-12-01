import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home Component", () => {
  test("renders the Home component correctly", () => {
    render(<Home />);

    expect(screen.getByText(/Welcome to the Quiz App!/)).toBeInTheDocument();
    expect(screen.getByText("Settings ⚙️")).toBeInTheDocument();
    expect(screen.getByText("Start Quiz")).toBeInTheDocument();
  });
});
