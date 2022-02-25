import { PuffLoader } from "react-spinners";
import styles from "./LoadingSpinner.module.sass";
import PropTypes from "prop-types";

const LoadingSpinner = ({ absolute }) => {
    return (
        <div
            data-testid="loading-spinner"
            className={[styles.outer, absolute ? styles.absolute : ""].join(" ")}
        >
            <PuffLoader color="#47d7ac" />
        </div>
    );
};

export default LoadingSpinner;

LoadingSpinner.propTypes = {
    absolute: PropTypes.bool
};
LoadingSpinner.defaultProps = {
    absolute: false
};
