import Silobolsas from "../data/Silobolsas_San_Genaro.json";
import { References } from "../pages";

export const getNodos = (features) => {
  const data = Silobolsas.filter(campaña => campaña.features.properties.cultivo === features);
  
  const processedData = data.map((datos) => {
    const cultivo = datos.features.properties.cultivo;
    const startDate = datos.features.properties.fechastart;
    const coordinates = datos.features.geometry.coordinates;

    return {
      cultivo,
      startDate,
      coordinates,
    };
  });
  
  return (
    <References data={processedData} />
  );
}
