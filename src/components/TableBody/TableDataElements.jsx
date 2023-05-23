const TdElements = ({data, className})=>{
    return(
        <>
            {
                data.map((value, idx)=>{
                    return(
                        <td key={idx} className={className}>{value}</td>
                    )
                })
            }
        </>
    )
}

export default TdElements;