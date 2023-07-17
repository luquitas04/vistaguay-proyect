
export const getFetchNodos = () => {

  const jsonURL = "../data/Silobolsas_San_Genaro.js";

  fetch(jsonURL)
    .then((response) => response.json())
    .then((data) => {

      const processedData = data.features.map((feature) => {
        const cultivo = feature.properties.cultivo;
        const startDate = feature.properties.fechastart;
        const coordinates = feature.geometry.coordinates;

        return {
          cultivo,
          startDate,
          coordinates,
        };
      });

      console.log(processedData);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });

}