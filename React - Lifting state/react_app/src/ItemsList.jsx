const ItemsList = ({Items}) => {
    const Display = ({ ItemName }) => <li>{ItemName}</li>
    return (
        <ul className="previousSearch">
        {Items.map ((ItemName, i) => 
            <Display
            ItemName={ItemName}
            key={i}
            />
    )}
        </ul>
    );
    }
export default ItemsList;