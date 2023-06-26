import { localidades } from "../data/localidades";

export const getLocate = ( pueblo ) => localidades.find( localidad => localidad.pueblo === pueblo );