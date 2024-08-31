import React, { useState } from 'react';
import { firestore } from '../firebaseConfig';

const ItemForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firestore.collection('items').add({
      name,
      price: parseFloat(price)
    });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item Name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Item Price"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
