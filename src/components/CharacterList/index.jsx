import styles from "./CharacterList.module.sass";
import CharacterTile from "../CharacterTile";
import PropTypes from "prop-types";

const CharacterList = ({ data }) => {
    return (
        <div className={styles.outer}>
            {data.map(({ significanceIndex, ...rest }) => (
                <CharacterTile key={rest.name} {...rest} />
            ))}
        </div>
    );
};

export default CharacterList;

CharacterList.propTypes = {
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
CharacterList.defaultProps = {};
