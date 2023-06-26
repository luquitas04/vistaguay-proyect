
export const Xmark = ({ fill = "#000000a8" }) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={fill}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={fill}
                className="x-icon"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </>
    )
}

