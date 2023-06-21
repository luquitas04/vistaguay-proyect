import { useState } from "react"
import { References, Statistics, Tomos } from "../pages";

export const useToggle = () => {
    
    const [state, setState] = useState(false);

    const showWindow = () => {
        setState(!state);
    };

    const closeWindow = () => {
        setState();
    };

    const toggleTomos = () => {
        setState(!state);

        return (
            <>
                {state && (<Tomos />)}
            </>
        )
    }

    const toggleStats = () => {
        setState(!state);

        return (
            <>
                {state && (<Statistics />)}
            </>
        )
    }

    const toggleReferences = () => {
        setState(!state);

        return (
            <>
                {state && (<References />)}
            </>
        )
    }

    const closeReferences = () => {
        setState(false);

        return (
            <>
                {!state && <References />}
            </>
        );
    };

    return {
        showWindow,
        closeWindow,
        toggleTomos,
        toggleStats,
        toggleReferences,
        closeReferences
    }
}

