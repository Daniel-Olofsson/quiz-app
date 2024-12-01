import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import QuizDetails from "../src/app/quizDetails/quizDetails";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          {
            question: "What is 2 + 2?",
            correct_answer: "4",
            incorrect_answers: ["3", "5", "6"],
          },
        ],
      }),
  })
);

describe("QuizDetails Component", () => {
  const settings = {
    numQuestions: 1,
    category: "9", // General Knowledge
    difficulty: "easy",
  };

  test("loads and displays the first question", async () => {
    render(<QuizDetails settings={settings} />);

    await waitFor(() => screen.getByText("What is 2 + 2?"));

    expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
  });

  test("handles a correct answer", async () => {
    render(<QuizDetails settings={settings} />);

    await waitFor(() => screen.getByText("What is 2 + 2?"));

    fireEvent.click(screen.getByText("4"));

    expect(screen.getByText("Quiz Finished!")).toBeInTheDocument();
  });

  test("navigates to results page when quiz is finished", async () => {
    render(<QuizDetails settings={settings} />);

    await waitFor(() => screen.getByText("What is 2 + 2?"));

    fireEvent.click(screen.getByText("4"));

    await waitFor(() => screen.getByText("Quiz Finished!"));

    expect(screen.getByText("Go to Results")).toBeInTheDocument();
  });
});
