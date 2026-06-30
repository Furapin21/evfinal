import { useState } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [inputValue, setInputValue] = useState(
    itemToEdit?.value ?? ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addOrUpdateItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Escribe un elemento..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="form__button" type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

export default Form;