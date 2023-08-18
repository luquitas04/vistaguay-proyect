import { useEffect, useState } from "react";

export const getNodos = (data) => {
  const [cultivoInfo, setCultivoInfo] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const processedData = data.map((item) => {
        const features = item.features.map((feature) => ({
          tipoCultivo: feature.properties.cultivo,
          fechaInicio: feature.properties.fechastart,
          coordenadas: feature.geometry.coordinates[0],
        }));
        return features;
      });

      const flattenedData = processedData.flat();
      setCultivoInfo(flattenedData);
    }
  }, [data]);

  return cultivoInfo;
};