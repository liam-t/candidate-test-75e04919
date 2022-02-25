import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortAndFilter from ".";

const testData = [
    {
        name: "Frodo Baggins",
        category: "hobbit",
        description: "test-description-1",
        significanceIndex: 0,
        avatar: "frodo_baggins.jpg"
    },
    {
        name: "Samwise Gamgee",
        category: "hobbit",
        description: "test-description-2",
        significanceIndex: 2,
        avatar: "samwise_gamgee.jpg"
    },
    {
        name: "Gandalf the Grey",
        category: "wizard",
        description: "test-description-3",
        significanceIndex: 1,
        avatar: "gandalf_the_grey.jpg"
    },
    {
        name: "Legolas",
        category: "elf",
        description: "test-description-4",
        significanceIndex: 6,
        avatar: "legolas.jpg"
    }
];

it("renders a category select element with all unique data categories listed, plus the 'all' category", () => {
    const { getByTestId, getAllByTestId } = render(
        <SortAndFilter data={testData} children={() => {}} />
    );
    const categorySelectElement = getByTestId("category-select");
    const categorySelectOptionElements = getAllByTestId("category-select-option");
    const categorySelectOptionTextContents = categorySelectOptionElements.map(
        (el) => el.textContent
    );
    expect(categorySelectElement).toBeInTheDocument();
    expect(categorySelectOptionTextContents.sort()).toEqual(
        ["hobbit", "wizard", "elf", "all"].sort()
    );
});
it("renders a sorting option select with alphabetical and significanceIndex options", () => {
    const { getByTestId, getAllByTestId } = render(
        <SortAndFilter data={testData} children={() => {}} />
    );
    const sortingSelectElement = getByTestId("sorting-select");
    const sortingSelectElementOptions = getAllByTestId("sorting-select-option");
    const sortingSelectElementOptionObjs = sortingSelectElementOptions.map((item) => ({
        name: item.textContent,
        value: item.value
    }));
    expect(sortingSelectElement).toBeInTheDocument();
    expect(sortingSelectElementOptionObjs).toEqual([
        {
            name: "Name",
            value: "name"
        },
        {
            name: "Significance",
            value: "significanceIndex"
        }
    ]);
});
it("renders all items when 'all' category is selected", () => {
    const mockChildren = jest.fn(() => {});
    const { getByTestId } = render(
        <SortAndFilter data={testData.sort()} children={mockChildren} />
    );
    const selectElement = getByTestId("category-select");
    userEvent.selectOptions(selectElement, "all");
    expect(mockChildren.mock.calls[0][0].length).toBe(testData.length);
});
it("correctly filters data based on selected category", () => {
    const mockChildren = jest.fn(() => {});
    const { getByTestId } = render(<SortAndFilter data={testData} children={mockChildren} />);
    const selectElement = getByTestId("category-select");
    userEvent.selectOptions(selectElement, "elf");
    expect(mockChildren).toBeCalledWith([testData[3]]);
    userEvent.selectOptions(selectElement, "hobbit");
    expect(mockChildren).toBeCalledWith([testData[0], testData[1]]);
});
it("correctly sorts data based on selected sorting option", () => {
    const mockChildren = jest.fn(() => {});
    const { getByTestId } = render(<SortAndFilter data={testData} children={mockChildren} />);
    const selectElement = getByTestId("sorting-select");
    userEvent.selectOptions(selectElement, "name");
    expect(mockChildren).toBeCalledWith(testData.sort((a, b) => a.name.localeCompare(b.name)));
});
