import Item from './Item';

function List({ items, searchText, setSearchText, deleteItem, editItem, toggleCompleted, deleteAllItems }) {
  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="list-wrapper">
      <div className="list__header">
        <p className="list__counter">Total: {items.length}</p>
        <input
          className="search__input"
          type="text"
          placeholder="Buscar elementos..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {items.length > 0 && (
          <button type="button" className="btn btn--clear" onClick={deleteAllItems}>
            Borrar todo
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="list__empty">Agrega un elemento para comenzar.</p>
      ) : filteredItems.length === 0 ? (
        <p className="list__empty">No hay elementos que coincidan con tu búsqueda.</p>
      ) : (
        <ul className="list">
          {filteredItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default List;