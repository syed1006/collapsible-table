const Inventory = ()=>{
    //this data will be sent from the server
    const data = [
        {
            available: 10,
            sold: 0
        },
        {
            available: 8,
            sold: 0
        },
        {
            available: 9,
            sold: 0
        },
        {
            available: 1,
            sold: 8
        },
        {
            available: 12,
            sold: 0
        },
        {
            available: 10,
            sold: 0
        },
        {
            available: 10,
            sold: 8
        },
        {
            available: 7,
            sold: 0
        },
        {
            available: 5,
            sold: 0
        },
        {
            available: 12,
            sold: 0
        }
    ]
    return(
        <tr className="table-row">
            <th className="bg-blue">Inventory</th>
            {
                data.map((item, idx) =>{
                    return(
                        <th key={idx}>
                            <span className="available">{item.available}</span>
                            <span className="sold">{item.sold} Sold</span>
                        </th>
                    )
                })
            }
        </tr>
    )
}

export default Inventory;