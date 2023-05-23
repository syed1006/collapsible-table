const Dates = ()=>{
    //this data will be sent from the server
    const dates = [
        {
            date: '22 May',
            day: 'Mon'
        },
        {
            date: '23 May',
            day: 'Tue'
        },
        {
            date: '24 May',
            day: 'Wed'
        },
        {
            date: '25 May',
            day: 'Thu'
        },
        {
            date: '26 May',
            day: 'Fri'
        },
        {
            date: '27 May',
            day: 'Sat'
        },
        {
            date: '28 May',
            day: 'Sun'
        },
        {
            date: '29 May',
            day: 'Mon'
        },
        {
            date: '30 May',
            day: 'Tue'
        },
        {
            date: '31 May',
            day: 'Wed'
        }
    ]
    return(
        <tr className="table-row color-data">
            <th className="bg-blue">Dates</th>
            {
                dates.map(item =>{
                    return(
                        <th key={item.date}>
                            <strong className="date">{item.date}</strong>
                            <strong className="day">{item.day}</strong>
                        </th>
                    )
                })
            }
        </tr>
    )
}

export default Dates;