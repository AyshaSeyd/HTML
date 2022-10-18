const AddItems = ({ submitHandler, newItem, handleAdd}) => {
    return (
        <form onSubmit={submitHandler}>
            <input
            placeholder="Enter Item Name:"
            type="text"
            onChange={newItem}
            />
            <button
            type="button"
            onClick={handleAdd}>
                AddItem
            </button>
        </form>
    );

}
export default AddItems;