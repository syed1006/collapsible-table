const StopSell = ()=>{
    //this data we will fetch from the api
    const data = [
        'CLOSE', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'
    ]
    return(
        <tr className="table-row color-data">
            <th className="bg-blue">StopSell</th>
            {
                data.map((stat, idx) =>{
                    return(
                        <th key={idx}>
                            <strong>{stat}</strong>
                        </th>
                    )
                })
            }
        </tr>
    )
}

export default StopSell;