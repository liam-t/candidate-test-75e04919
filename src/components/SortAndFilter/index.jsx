import React from "react";
import PropTypes from "prop-types";

const SortAndFilter = ({ data, children }) => {
    const filteredData = data;
    const sortedData = filteredData;
    return (
        <div className="outer">
            <div>sort and filter ui goes here</div>
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
