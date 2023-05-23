import { useState } from "react"
import TdElements from "./TableDataElements"
import { useEffect } from "react"

const Row = ({ element, level }) => {
    const [hasChild, sethasChild] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        sethasChild(element.children.length > 0);
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <tr className={`table-row ${element.type === 'StopSell' ? 'color-data': ''}`}>
                <th className={`${!hasChild ? 'bg-blue' : ''}`} style={{width: `${320 - level * 30}px`, fontSize: `${18 - level * 2}px`}}>
                    <div className="flex-box" style={{paddingLeft: `${level * 30}px`}}>
                        {
                            hasChild &&
                            <i class="fa-solid fa-arrow-down-short-wide"
                            style={{fontSize: `${24 - level * 8}px`}}
                            ></i>

                        }
                        <div className="text">
                            {
                                element?.id && <span className="top-id">#{element.id}</span>
                            }
                            <strong>{element.type}</strong>
                        </div>
                        {
                            hasChild && <button className="btn" onClick={() => setShow(show => !show)}><i className={`fas fa-angle-${show ? 'up' : 'down'}`}></i></button>
                        }
                    </div>
                </th>
                {
                    element?.data?.length > 0 && <TdElements data={element.data} className={element.type === 'CTA' || element.type === 'CTD'? 'text-green': ''}/>
                }
            </tr>
            {/* if there are children for the current element we will create rows for them recursively */}
            {
                hasChild && show &&
                element.children.map((child, idx) => {
                    return (
                        <Row element={child} key={idx} level={level + 1}/>
                    )
                })
            }
        </>
    )
}
export default Row