import styles from "./ErrorDisplay.module.sass";
import PropTypes from "prop-types";

const ErrorDisplay = ({ error }) => {
    if (!error) return null;
    return (
        <div className={styles.outer} data-testid="error-display">
            <pre>{JSON.stringify(error, Object.getOwnPropertyNames(error), 2)}</pre>
        </div>
    );
};

export default ErrorDisplay;

ErrorDisplay.propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()])
};
ErrorDisplay.defaultProps = {
    error: undefined
};
