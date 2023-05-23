import Dates from "./Dates";
import Inventory from "./Inventory";
import StopSell from "./StopSell";

const TableHead = ()=>{
    return(
        <thead>
            <Dates/>
            <StopSell/>
            <Inventory/>
        </thead>
    )
}

export default TableHead;