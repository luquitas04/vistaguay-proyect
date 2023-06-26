import "../data/Silobolsas_San_Genaro";

export const getNodos = () => {
    const dataMaiz = San_Genaro_Maiz_21_22.map();

    const processedData = dataMaiz.features.map((feature) => {
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
}
