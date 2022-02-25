import React from "react";
import PropTypes from "prop-types";
import style from "./SortAndFilter.module.sass";

const SortAndFilter = ({ data, children }) => {
    const sortingOptions = [
        {
            name: "Name",
            value: "name",
            sortingFunction: (a, b) => a.name.localeCompare(b.name)
        },
        {
            name: "Significance",
            value: "significanceIndex",
            sortingFunction: (a, b) => b - a
        }
    ];
    const uniqueCategories = [...new Set(data.map(({ category }) => category))];
    const uniqueCategoriesWithAll = ["all", ...uniqueCategories];
    const [selectedCategory, setSelectedCategory] = React.useState(uniqueCategoriesWithAll[0]);
    const [selectedSortingOption, setSelectedSortingOption] = React.useState(sortingOptions[0]);
    const filteredData = data.filter(
        (item) => selectedCategory === "all" || item.category === selectedCategory
    );
    const sortedData = filteredData.sort(selectedSortingOption.sortingFunction);

    return (
        <div className={style.outer}>
            <div className={style.uiContainer}>
                <div className={style.selectLabelWrapper}>
                    <label htmlFor="category-select">Category</label>
                    <select
                        name="category-select"
                        id="category-select"
                        data-testid="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {uniqueCategoriesWithAll.map((category) => (
                            <option
                                key={category}
                                value={category}
                                data-testid="category-select-option"
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={style.selectLabelWrapper}>
                    <label htmlFor="sorting-select">Order by</label>
                    <select
                        name="sorting-select"
                        id="sorting-select"
                        data-testid="sorting-select"
                        value={selectedSortingOption.value}
                        onChange={(e) =>
                            setSelectedSortingOption(
                                sortingOptions.find(({ value }) => value === e.target.value)
                            )
                        }
                    >
                        {sortingOptions.map(({ name, value }) => (
                            <option key={name} value={value} data-testid="sorting-select-option">
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="content">{children(sortedData)}</div>
        </div>
    );
};

export default SortAndFilter;

SortAndFilter.propTypes = {
    children: PropTypes.func,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            significanceIndex: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired
        })
    )
};
SortAndFilter.defaultProps = {};
