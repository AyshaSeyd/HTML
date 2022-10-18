import { useState } from 'react';
import AddItems from './AddItems';
import ItemsList from './ItemsList';

const Items = () => {
  const [ItemName, setItemName] = useState('');
  const [Items, setItems] = useState([]);

  const newItem = ({ target }) => {
    setItemName(target.value)
  };

  const submitForm = (event) => {
    event.preventDefault();
  }

  const handleAdd = () => {
    setItems(items => [...Items, ItemName]);
  }
return(
  <>
  <AddItems submitHandler={submitForm} newItem={newItem} handleAdd={handleAdd}/>
  <ItemsList Items={Items}/>
  </>
);
}
export default Items;