import Item from './Item';

function List({ items, deleteItem, editItem }) {
  return (
    <section className="list-wrapper">
      <p className="list__counter">Total de elementos: {items.length}</p>
      {items.length === 0 ? (
        <p className="list__empty">Agrega un elemento para comenzar.</p>
      ) : (
        <ul className="list">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default List;