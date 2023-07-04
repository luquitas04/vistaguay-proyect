import {siloBolsas} from "../data/Silobolsas_San_Genaro";

export const getNodos = (name) => {
    siloBolsas.find( c => c.name === name);
    return campaña ? campaña : null;
}