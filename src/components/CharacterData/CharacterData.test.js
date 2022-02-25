import { render } from "@testing-library/react";
import CharacterListData from ".";
import * as hooks from "../../hooks/useCharacterData";

const testSuccessData = [{ test: 1 }, { test: 2 }];

it("renders LoadingSpinner component when request isLoading is true", () => {
    jest.spyOn(hooks, "default").mockImplementation(() => ({
        data: null,
        isLoading: true,
        error: null
    }));
    const { getByTestId } = render(<CharacterListData />);
    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
});

it("renders ErrorDisplay component when error is true", () => {
    jest.spyOn(hooks, "default").mockImplementation(() => ({
        data: null,
        isLoading: false,
        error: new Error("error")
    }));
    const { getByTestId } = render(<CharacterListData />);
    const errorDisplay = getByTestId("error-display");
    expect(errorDisplay).toBeInTheDocument();
});

it("renders correct testSuccessData when component is not loading and has no errors", () => {
    jest.spyOn(hooks, "default").mockImplementation(() => ({
        data: testSuccessData,
        isLoading: false,
        error: null
    }));
    const mockChildren = jest.fn(() => {});
    render(<CharacterListData children={mockChildren} />);
    expect(mockChildren).toHaveBeenCalledWith(testSuccessData);
});
