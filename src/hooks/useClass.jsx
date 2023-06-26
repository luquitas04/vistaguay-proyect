import { useState } from 'react'

export const useClass = (initClass) => {

    const [clase, setClase] = useState(initClass);
    const changeClass = (newClass) => setClase(newClass);
    return [ clase,changeClass ]
};
