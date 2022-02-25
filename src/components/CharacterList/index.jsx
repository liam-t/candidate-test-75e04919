import useCharacterList from "../../hooks/useCharacterList";
import styles from "./CharacterList.module.sass";

const CharacterList = () => {
    const characterList = useCharacterList();
    console.log("characterList: %o", characterList);

    return (
        <div className={styles.outer}>
            <p>hi</p>
        </div>
    );
};

export default CharacterList;
