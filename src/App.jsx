import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('items')) || [];
    } catch {
      return [];
    }
  });
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id ===
        itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App app-shell">
      <div className="app-card">
        <h1 className="app-title">ev final</h1>
        <Form
          key={itemToEdit?.id ?? 'new' }
          addOrUpdateItem={addOrUpdateItem}
          itemToEdit={itemToEdit}
        />
        <List
          items={items}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </div>
    </div>
  );
}

export default App;