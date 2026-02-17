import { Item } from '../types';
import ItemCard from './ItemCard';

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete, onEdit }) => {
  
  // Estado vacío
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>🧼 No hay servicios de limpieza registrados</p>
        <p className="empty-state__hint">
          Agrega tu primer servicio usando el formulario de arriba
        </p>
      </div>
    );
  }

  // Render lista
  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ItemList;

