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
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id ===
        itemToEdit.id ? { ...item, value, completed: item.completed } : item));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value, completed: false }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  const toggleCompleted = (id) => {
    setItems(items.map(item => item.id === id
      ? { ...item, completed: !item.completed }
      : item));
  };

  const deleteAllItems = () => {
    const confirmed = window.confirm('¿Seguro que quieres borrar todos los elementos?');

    if (confirmed) {
      setItems([]);
      setSearchText('');
    }
  };

  return (
    <div className="App app-shell">
      <div className="app-card">
        <h1 className="app-title">ev final</h1>
        <Form
          key={itemToEdit?.id ?? 'new'}
          addOrUpdateItem={addOrUpdateItem}
          itemToEdit={itemToEdit}
        />
        <List
          items={items}
          searchText={searchText}
          setSearchText={setSearchText}
          deleteItem={deleteItem}
          editItem={editItem}
          toggleCompleted={toggleCompleted}
          deleteAllItems={deleteAllItems}
        />
      </div>
    </div>
  );
}

export default App;