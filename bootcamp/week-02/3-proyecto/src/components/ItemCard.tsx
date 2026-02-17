import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete, onEdit }) => {

  const handleDelete = () => {
    if (window.confirm(`¿Eliminar el servicio "${item.name}"?`)) {
      onDelete(item.id);
    }
  };

  const getStatusClass = () => {
    switch (item.status) {
      case "Completado":
        return "success";
      case "En progreso":
        return "info";
      case "Pendiente":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <div className="item-card">
      <div className="item-card__header">
        <h3 className="item-card__title">{item.name}</h3>

        <span className={`badge badge--${getStatusClass()}`}>
          {item.status}
        </span>
      </div>

      <div className="item-card__body">
        <p><strong>Cliente:</strong> {item.client}</p>
        <p><strong>Fecha:</strong> {item.date}</p>
        <p><strong>Precio:</strong> ${item.price.toFixed(2)}</p>
      </div>

      <div className="item-card__actions">
        <button
          className="btn btn-edit"
          onClick={() => onEdit(item.id)}
          aria-label={`Editar ${item.name}`}>
           Editar
        </button>

        <button
          className="btn btn-delete"
          onClick={handleDelete}
          aria-label={`Eliminar ${item.name}`}>
           Eliminar
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
