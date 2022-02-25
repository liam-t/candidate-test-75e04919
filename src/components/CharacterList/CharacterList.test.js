import { render } from "@testing-library/react";
import CharacterList from ".";

jest.mock("../CharacterTile", () => () => <div data-testid="mock-character-tile" />);

it("renders the same number of CharacterTiles as props.data.length", () => {
    const fakeData = [
        {
            name: "test",
            category: "test",
            description: "test",
            significanceIndex: 0,
            avatar: "test"
        },
        {
            name: "2",
            category: "2",
            description: "2",
            significanceIndex: 1,
            avatar: "2"
        }
    ];
    const { getAllByTestId } = render(<CharacterList data={fakeData} />);
    const characterTiles = getAllByTestId("mock-character-tile");
    expect(characterTiles.length).toBe(fakeData.length);
});
