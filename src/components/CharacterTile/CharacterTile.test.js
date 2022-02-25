import { render } from "@testing-library/react";
import CharacterTile from ".";

jest.mock("../Avatar", () => () => <div data-testid="mock-avatar" />);

it("renders name when passed name prop", () => {
    const { getByTestId } = render(
        <CharacterTile name="name" avatar="" category="" description="" />
    );
    const element = getByTestId("name");
    expect(element).toHaveTextContent("name");
});

it("renders avatar when passed avatar prop", () => {
    const { getByTestId } = render(
        <CharacterTile name="" avatar="test-avatar" category="" description="" />
    );
    const element = getByTestId("mock-avatar");
    expect(element).toBeInTheDocument();
});

it("renders category when passed category prop", () => {
    const { getByTestId } = render(
        <CharacterTile name="" avatar="" category="category" description="" />
    );
    const element = getByTestId("category");
    expect(element).toHaveTextContent("category");
});

it("renders description when passed description prop", () => {
    const { getByTestId } = render(
        <CharacterTile name="" avatar="" category="" description="description" />
    );
    const element = getByTestId("description");
    expect(element).toHaveTextContent("description");
});
