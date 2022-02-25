import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { useImage } from "react-image";
import { Waypoint } from "react-waypoint";
import styles from "./Avatar.module.sass";
import LoadingSpinner from "../LoadingSpinner";

const WithSuspense = (props) => (
    <Suspense fallback={<LoadingSpinner />}>
        <Avatar {...props} />
    </Suspense>
);

const Avatar = ({ avatar, alt }) => {
    const [onScreen, setOnScreen] = React.useState(false);
    const { src } = useImage({
        srcList: `/characters/${avatar}`
    });
    return (
        <Waypoint onEnter={() => setOnScreen(true)}>
            {onScreen ? (
                <div className={styles.outer}>
                    <img src={src} alt={alt} />
                </div>
            ) : null}
        </Waypoint>
    );
};

export default WithSuspense;

Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};
Avatar.defaultProps = {};
