import Row from "./Row";

const TableBody = ()=>{
    // this is a dummy data in the format of array of trees, 
    // typically we will divide it into chunks(individual tree) and fetch one tree at a time in the child component
    //in this parent component we will just fetch the id's of the tree and pass as propo to child component
    const elements = [
        {
            id: '9576',
            type: 'Room Only',
            data: [
                9000, 7000, 9000, 8000, 7500, 9000, 8000, 9000, 8500, 8000
            ],
            children: [
                {
                    type: 'Single',
                    data: [
                        9000, 7000, 9000, 8000, 7500, 9000, 8000, 9000, 8500, 8000
                    ],
                    children: []
                },
                {
                    type: 'Double',
                    data: [
                        9000, 7000, 9000, 8000, 7500, 9000, 8000, 9000, 8500, 8000
                    ],
                    children: []
                },
                {
                    type: 'Extra Rates',
                    data: [],
                    children: [
                        {
                            type: 'Extra Adult 1',
                            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
                            children: []
                        },
                        {
                            type: 'Extra Child 1',
                            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
                            children: []
                        }
                    ]
                },
                {
                    type: 'Restrictions',
                    data: [],
                    children: [
                        {
                            type: 'StopSell',
                            data: [
                                'CLOSE', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'
                            ],
                            children: []
                        },
                        {
                            type: 'Max LOS',
                            data: new Array(10).fill(30),
                            children: []
                        },
                        {
                            type: 'Min LOS',
                            data: new Array(10).fill(1),
                            children: []
                        },
                        {
                            type: 'CTA',
                            data: new Array(10).fill('NO'),
                            children: []
                        },
                        {
                            type: 'CTD',
                            data: new Array(10).fill('NO'),
                            children: []
                        },
                    ]
                },
                
            ]
        },
        {
            id: '9581',
            type: 'Room with Breakfast',
            data: [
                9750, 7750, 9750, 8750, 10000, 9500, 9000, 9750, 9500, 9700
            ],
            children: [
                {
                    type: 'Single',
                    data: [
                        9000, 7000, 9000, 8000, 7500, 9000, 8000, 9000, 8500, 8000
                    ],
                    children: []
                },
                {
                    type: 'Double',
                    data: [
                        9000, 7000, 9000, 8000, 7500, 9000, 8000, 9000, 8500, 8000
                    ],
                    children: []
                },
                {
                    type: 'Extra Rates',
                    data: [],
                    children: [
                        {
                            type: 'Extra Adult 1',
                            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
                            children: []
                        },
                        {
                            type: 'Extra Child 1',
                            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
                            children: []
                        }
                    ]
                },
                {
                    type: 'Restrictions',
                    data: [],
                    children: [
                        {
                            type: 'StopSell',
                            data: [
                                'CLOSE', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'
                            ],
                            children: []
                        },
                        {
                            type: 'Max LOS',
                            data: new Array(10).fill(30),
                            children: []
                        },
                        {
                            type: 'Min LOS',
                            data: new Array(10).fill(1),
                            children: []
                        },
                        {
                            type: 'CTA',
                            data: new Array(10).fill('NO'),
                            children: []
                        },
                        {
                            type: 'CTD',
                            data: new Array(10).fill('NO'),
                            children: []
                        },
                    ]
                },
                
            ]
        },
        {
            id: '9586',
            type: 'Room with Breakfast & Dinner',
            data: [
                10000, 12000, 9500, 9750, 10000, 9500, 9000, 9750, 9500, 9700
            ],
            children: [
                {
                    type: 'Single',
                    data: [
                        9000, 7000, 9000, 8000, 7500, 9000, 8000, 9000, 8500, 8000
                    ],
                    children: []
                },
                {
                    type: 'Double',
                    data: [
                        9000, 7000, 9000, 8000, 7500, 9000, 8000, 9000, 8500, 8000
                    ],
                    children: []
                },
                {
                    type: 'Extra Rates',
                    data: [],
                    children: [
                        {
                            type: 'Extra Adult 1',
                            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
                            children: []
                        },
                        {
                            type: 'Extra Child 1',
                            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
                            children: []
                        }
                    ]
                },
                {
                    type: 'Restrictions',
                    data: [],
                    children: [
                        {
                            type: 'StopSell',
                            data: [
                                'CLOSE', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'
                            ],
                            children: []
                        },
                        {
                            type: 'Max LOS',
                            data: new Array(10).fill(30),
                            children: []
                        },
                        {
                            type: 'Min LOS',
                            data: new Array(10).fill(1),
                            children: []
                        },
                        {
                            type: 'CTA',
                            data: new Array(10).fill('NO'),
                            children: []
                        },
                        {
                            type: 'CTD',
                            data: new Array(10).fill('NO'),
                            children: []
                        },
                    ]
                },
                
            ]
        },
        {
            id: '9591',
            type: 'Room with All Meals',
            data: [
                10000, 12000, 13000, 12550, 11000, 10500, 12000, 10750, 12500, 10700
            ],
            children: [
                {
                    type: 'Single',
                    data: [
                        9000, 7000, 9000, 8000, 7500, 9000, 8000, 9000, 8500, 8000
                    ],
                    children: []
                },
                {
                    type: 'Double',
                    data: [
                        9000, 7000, 9000, 8000, 7500, 9000, 8000, 9000, 8500, 8000
                    ],
                    children: []
                },
                {
                    type: 'Extra Rates',
                    data: [],
                    children: [
                        {
                            type: 'Extra Adult 1',
                            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
                            children: []
                        },
                        {
                            type: 'Extra Child 1',
                            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
                            children: []
                        }
                    ]
                },
                {
                    type: 'Restrictions',
                    data: [],
                    children: [
                        {
                            type: 'StopSell',
                            data: [
                                'CLOSE', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'
                            ],
                            children: []
                        },
                        {
                            type: 'Max LOS',
                            data: new Array(10).fill(30),
                            children: []
                        },
                        {
                            type: 'Min LOS',
                            data: new Array(10).fill(1),
                            children: []
                        },
                        {
                            type: 'CTA',
                            data: new Array(10).fill('NO'),
                            children: []
                        },
                        {
                            type: 'CTD',
                            data: new Array(10).fill('NO'),
                            children: []
                        },
                    ]
                },
                
            ]
        }
    ]

    return(
        <tbody>
            {/* mapping on the elements and for each element creating a row of the table */}
            {
                elements.map((element, idx)=>{
                    return(
                        <Row element={element} key={idx} level={0}/>
                    )
                })
            }
        </tbody>
    )
}

export default TableBody;