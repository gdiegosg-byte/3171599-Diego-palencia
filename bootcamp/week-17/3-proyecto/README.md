# 📦 Proyecto Semana 17: App Performance

## 🎯 Objetivo

Crear una aplicación React optimizada que combine todas las técnicas aprendidas: lazy loading, virtualización y monitoreo de Web Vitals.

## ⏱️ Tiempo Estimado

2-2.5 horas

---

## 🏛️ Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio]

Adapta el proyecto a tu dominio específico. Ejemplos:

- **Biblioteca**: Catálogo de libros con búsqueda y detalles
- **Farmacia**: Inventario de medicamentos
- **Gimnasio**: Lista de miembros y rutinas
- **Restaurante**: Menú con categorías y platillos

---

## 📋 Requisitos del Proyecto

### Funcionales

1. **Dashboard principal** con navegación lazy-loaded entre secciones
2. **Lista virtualizada** de al menos 1000 items de tu dominio
3. **Panel de métricas** mostrando Web Vitals en tiempo real
4. **Búsqueda y filtrado** eficiente en lista virtualizada
5. **Detalle de item** cargado con code splitting

### Técnicos

1. **Code Splitting**:
   - Rutas cargadas con `React.lazy` y `Suspense`
   - Error Boundaries para manejo de errores
   - Loading fallbacks personalizados

2. **Virtualización**:
   - Lista principal con `FixedSizeList` o `VariableSizeList`
   - Al menos 1000 items
   - Scroll fluido a 60fps

3. **Web Vitals**:
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1
   - Panel de monitoreo visible

4. **Optimizaciones**:
   - Imágenes con dimensiones definidas
   - Skeletons para contenido async
   - Handlers no bloqueantes

---

## 📁 Estructura Sugerida

```
src/
├── main.tsx
├── App.tsx
├── reportWebVitals.ts
├── components/
│   ├── Layout.tsx
│   ├── PageLoader.tsx
│   ├── ErrorBoundary.tsx
│   ├── VitalsPanel.tsx
│   └── VirtualList.tsx
├── pages/
│   ├── Dashboard.tsx (lazy)
│   ├── ItemList.tsx (lazy)
│   └── ItemDetail.tsx (lazy)
├── hooks/
│   ├── useWebVitals.ts
│   └── useVirtualList.ts
└── types/
    └── index.ts
```

---

## 🚀 Pasos Guiados

### Paso 1: Configurar proyecto (15 min)

```bash
pnpm create vite@latest app-performance -- --template react-ts
cd app-performance
pnpm add react-router-dom react-window web-vitals
pnpm add -D @types/react-window
pnpm install
```

### Paso 2: Implementar code splitting (30 min)

- Crear Layout con navegación
- Configurar rutas lazy con Suspense
- Agregar Error Boundary

### Paso 3: Crear lista virtualizada (45 min)

- Generar datos de prueba (1000+ items)
- Implementar VirtualList con FixedSizeList
- Agregar búsqueda/filtrado

### Paso 4: Implementar Web Vitals (30 min)

- Configurar reportWebVitals
- Crear hook useWebVitals
- Mostrar panel de métricas

### Paso 5: Optimizar y pulir (30 min)

- Verificar métricas en DevTools
- Aplicar optimizaciones de CLS
- Agregar skeletons y fallbacks

---

## 📊 Rúbrica de Evaluación

| Criterio                    | Puntos  |
| --------------------------- | ------- |
| Code splitting funcional    | 20      |
| Virtualización correcta     | 25      |
| Web Vitals monitoreados     | 20      |
| Métricas dentro de umbrales | 15      |
| UX (loaders, errores)       | 10      |
| Código limpio y tipado      | 10      |
| **Total**                   | **100** |

---

## ✅ Checklist de Entrega

- [ ] Todas las rutas usan lazy loading
- [ ] Lista virtualizada con 1000+ items
- [ ] Panel de Web Vitals visible
- [ ] LCP < 2.5s medido en DevTools
- [ ] CLS < 0.1 sin layout shifts visibles
- [ ] Error Boundaries implementados
- [ ] Código TypeScript sin errores
- [ ] README con instrucciones de ejecución
