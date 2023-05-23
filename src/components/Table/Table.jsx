import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import './Table.css';

const Table = ()=>{
    return(
        <table className="table">
            <TableHead/>
            <TableBody/>
        </table>
    )
}

export default Table;