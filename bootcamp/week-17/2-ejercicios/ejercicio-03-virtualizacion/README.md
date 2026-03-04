# Ejercicio 03: Virtualización de Listas

## 🎯 Objetivo

Implementar virtualización de listas usando `react-window` para manejar eficientemente listas con miles de elementos.

## ⏱️ Duración

50 minutos

---

## 📋 Instrucciones

En este ejercicio aprenderás a:

1. Instalar y configurar `react-window`
2. Implementar `FixedSizeList` para items de altura fija
3. Implementar `VariableSizeList` para items de altura variable
4. Pasar datos y handlers a componentes virtualizados

---

## 🚀 Pasos

### Paso 1: Crear el proyecto

```bash
pnpm create vite@latest virtualization-demo -- --template react-ts
cd virtualization-demo
pnpm add react-window
pnpm add -D @types/react-window
pnpm install
```

### Paso 2: Generar datos de prueba

Crea un generador de 10,000 items para probar el rendimiento.

### Paso 3: Implementar FixedSizeList

Abre `starter/ProductList.tsx` y virtualiza la lista de productos.

### Paso 4: Medir el rendimiento

Compara el rendimiento con y sin virtualización usando DevTools.

### Paso 5: Implementar VariableSizeList

Para items con altura variable, usa `VariableSizeList`.

---

## 📁 Estructura de Archivos

```
ejercicio-03-virtualizacion/
├── README.md
├── starter/
│   ├── App.tsx
│   ├── ProductList.tsx
│   ├── ProductRow.tsx
│   ├── MessageList.tsx
│   └── types.ts
└── solution/
    ├── App.tsx
    ├── ProductList.tsx
    ├── ProductRow.tsx
    ├── MessageList.tsx
    └── types.ts
```

---

## ✅ Criterios de Éxito

- [ ] La lista virtualizada maneja 10,000+ items sin lag
- [ ] El scroll es fluido a 60fps
- [ ] Solo se renderizan ~10-15 items a la vez
- [ ] Los handlers funcionan correctamente (click, delete)
