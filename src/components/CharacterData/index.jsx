import useCharacterData from "../../hooks/useCharacterData";
import styles from "./CharacterData.module.sass";
import LoadingSpinner from "../LoadingSpinner";
import ErrorDisplay from "../ErrorDisplay";
import PropTypes from "prop-types";

const CharacterData = ({ children }) => {
    const { isLoading, error, data } = useCharacterData();

    if (isLoading) {
        return (
            <div className={styles["spinner-wrap"]}>
                <LoadingSpinner absolute />
            </div>
        );
    }

    if (error) return <ErrorDisplay error={error} />;
    return <div className={styles.outer}>{children(data)}</div>;
};

export default CharacterData;

CharacterData.propTypes = {
    children: PropTypes.func
};
CharacterData.defaultProps = {};
