import React from "react";

const useCharacterList = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const fetch = async () => {
            setIsLoading(true);
            try {
                const res = await window.fetch("./characters.json");
                if (!res.ok) throw new Error(`error in fetch: ${res.status}`);
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);
    return { isLoading, error, data };
};

export default useCharacterList;
