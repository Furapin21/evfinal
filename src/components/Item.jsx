function Item({ item, deleteItem, editItem, toggleCompleted }) {
  const handleDelete = () => {
    const confirmed = window.confirm('¿Seguro que quieres eliminar este elemento?');

    if (confirmed) {
      deleteItem(item.id);
    }
  };

  return (
    <li className={`item ${item.completed ? 'item--completed' : ''}`}>
      <div className="item__content">
        <button
          type="button"
          className={`item__check ${item.completed ? 'item__check--checked' : ''}`}
          onClick={() => toggleCompleted(item.id)}
          aria-label={item.completed ? 'Marcar como pendiente' : 'Marcar como completado'}
        >
          {item.completed ? '✓' : ''}
        </button>
        <span className={`item__text ${item.completed ? 'item__text--completed' : ''}`}>
          {item.value}
        </span>
      </div>
      <div className="item__actions">
        <button
          type="button"
          className="btn btn--edit"
          onClick={() => editItem(item)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn--delete"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Item;