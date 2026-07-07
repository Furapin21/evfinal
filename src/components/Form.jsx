import { useState } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [inputValue, setInputValue] = useState(
    itemToEdit?.value ?? ''
  );
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      setErrorMessage('No puedes agregar un elemento vacío.');
      return;
    }

    addOrUpdateItem(trimmedValue);
    setInputValue('');
    setErrorMessage('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Escribe un elemento..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (errorMessage) {
            setErrorMessage('');
          }
        }}
      />
      <button className="form__button" type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
      {errorMessage && (
        <p className="form__message" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

export default Form;