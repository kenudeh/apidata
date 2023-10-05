import Row from "./Row";

const Table = ({items}) => {
    return (
        <table className="Table">
            <tbody>
                {items.map(item => (
                    <Row key={item.id}
                        item = {item}
                    />
                ))}
            </tbody>
        </table>
    );
}
 
export default Table;