function Item({ item, deleteItem, editItem }) {
  const handleDelete = () => {
    const confirmed = window.confirm('¿Seguro que quieres eliminar este elemento?');

    if (confirmed) {
      deleteItem(item.id);
    }
  };

  return (
    <li className="item">
      <span className="item__text">{item.value}</span>
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