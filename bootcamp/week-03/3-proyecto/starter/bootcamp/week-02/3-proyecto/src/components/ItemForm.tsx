import { useState, useEffect } from 'react';
import { Item } from '../types';

interface ItemFormProps {
  onAdd: (item: Omit<Item, 'id'>) => void;
  onUpdate: (id: number, updates: Partial<Item>) => void;
  editingItem?: Item;
  onCancelEdit: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({
  onAdd,
  onUpdate,
  editingItem,
  onCancelEdit,
}) => {

  // Estado inicial del formulario
  const initialState: Omit<Item, 'id'> = {
    name: '',
    client: '',
    date: '',
    status: 'Pendiente',
    price: 0,
  };

  const [formData, setFormData] = useState(initialState);

  // Pre-llenar al editar
  useEffect(() => {
    if (editingItem) {
      const { id, ...rest } = editingItem;
      setFormData(rest);
    } else {
      setFormData(initialState);
    }
  }, [editingItem]);

  // =========================
  // HANDLERS
  // =========================

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'price' ? Number(value) : value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // =========================
  // VALIDACIÓN
  // =========================

  const validate = (): boolean => {
    if (!formData.name.trim()) {
      alert('El servicio es requerido');
      return false;
    }

    if (!formData.client.trim()) {
      alert('El cliente es requerido');
      return false;
    }

    if (!formData.date) {
      alert('La fecha es requerida');
      return false;
    }

    if (formData.price <= 0) {
      alert('El precio debe ser mayor a 0');
      return false;
    }

    return true;
  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (editingItem) {
      onUpdate(editingItem.id, formData);
      onCancelEdit();
    } else {
      onAdd(formData);
    }

    setFormData(initialState);
  };

  // =========================
  // RENDER
  // =========================

  return (
    <div className="form-container">
      <h2>{editingItem ? '✏️ Editar Servicio' : '➕ Agregar Servicio'}</h2>

      <form onSubmit={handleSubmit} className="item-form">

        {/* Servicio */}
        <div className="form-group">
          <label htmlFor="name">Servicio *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej: Limpieza profunda"
            required
          />
        </div>

        {/* Cliente */}
        <div className="form-group">
          <label htmlFor="client">Cliente *</label>
          <input
            type="text"
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            placeholder="Nombre del cliente"
            required
          />
        </div>

        {/* Fecha */}
        <div className="form-group">
          <label htmlFor="date">Fecha *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Estado */}
        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleSelectChange}
          >
            <option value="Pendiente">Pendiente</option>
            <option value="En progreso">En progreso</option>
            <option value="Completado">Completado</option>
          </select>
        </div>

        {/* Precio */}
        <div className="form-group">
          <label htmlFor="price">Precio *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        {/* Botones */}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingItem ? 'Actualizar' : 'Agregar'}
          </button>

          {editingItem && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                onCancelEdit();
                setFormData(initialState);
              }}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
