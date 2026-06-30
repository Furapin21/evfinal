function Item({ item, deleteItem, editItem }) {
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
          onClick={() => deleteItem(item.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Item;