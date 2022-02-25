import PropTypes from "prop-types";
import styles from "./CharacterTile.module.sass";
import Avatar from "../Avatar";

const CharacterTile = ({ name, avatar, category, description }) => {
    return (
        <div className={styles.outer}>
            <div className={styles["avatar-wrap"]}>
                <Avatar avatar={avatar} alt={name} />
            </div>
            <div className={styles["text-wrap"]}>
                <p data-testid="name" className={styles.name}>
                    {name}
                </p>
                <p data-testid="category" className={styles.category}>
                    {category}
                </p>
                <p data-testid="description" className={styles.description}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CharacterTile;

CharacterTile.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
CharacterTile.defaultProps = {};
