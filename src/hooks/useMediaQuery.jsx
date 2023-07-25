import { useEffect, useState } from "react"

export const useMediaQuery = (query) => {

    const [matches, setMatches] = useState(false);
    const mql = window.matchMedia(query);

    const handler = (event) => {
        setMatches(mql.matches);
    };

    useEffect(() => {
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    return matches;
};
