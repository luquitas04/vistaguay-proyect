
export const Tests = () => {

    return (
        <>
            <div style={{ zIndex: 1 }} id="points">
                {pointData.map((point, index) => (
                    <div key={index}>
                        <p>Point ID: {point.getId()}</p>
                        <p>Point Geometry: {point.getGeometry().getCoordinates()}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
