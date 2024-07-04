import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";
import { act } from "react";

describe("Spinner", () => {
    test("displays spinner", () => {
      act(() => {
        render(<Spinner />);
      });
      const elem = screen.getByTestId("spinner");
      expect(elem).toBeInTheDocument();
    });
  
    test("spinner contains 3 elements", () => {
      act(() => {
        render(<Spinner />);
      });
      const elem = screen.getByTestId("spinner");
      expect(elem.children.length).toBe(3);
    });
  });