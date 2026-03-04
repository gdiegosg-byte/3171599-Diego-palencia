# 📖 Glosario - Semana 17

## Code Splitting y Performance Avanzado

### B

**Bundle**
Archivo JavaScript resultante de combinar múltiples módulos. El code splitting divide el bundle en chunks más pequeños.

```typescript
// Sin code splitting: todo en un bundle
import { HeavyComponent } from './HeavyComponent';

// Con code splitting: chunk separado
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

---

### C

**CLS (Cumulative Layout Shift)**
Métrica de Web Vitals que mide la estabilidad visual. Valores: bueno ≤ 0.1, mejorar 0.1-0.25, pobre > 0.25.

**Code Splitting**
Técnica para dividir el código en chunks que se cargan bajo demanda en lugar de cargar todo al inicio.

**Chunk**
Fragmento de código JavaScript generado por el bundler. Cada chunk puede cargarse independientemente.

---

### D

**Dynamic Import**
Importación de módulos en tiempo de ejecución usando `import()`. Retorna una Promise.

```typescript
// Importación dinámica
const module = await import('./module');
```

---

### E

**Error Boundary**
Componente de clase que captura errores JavaScript en su árbol de componentes hijo. Necesario para manejar errores de lazy loading.

---

### F

**FID (First Input Delay)**
Métrica que mide el tiempo desde la primera interacción del usuario hasta que el navegador responde. Bueno ≤ 100ms.

**FixedSizeList**
Componente de react-window para listas donde todos los items tienen la misma altura.

---

### L

**Lazy Loading**
Técnica para retrasar la carga de recursos hasta que sean necesarios. En React se implementa con `React.lazy()`.

**LCP (Largest Contentful Paint)**
Métrica que mide cuándo el elemento más grande se renderiza. Bueno ≤ 2.5s.

---

### O

**Overscan**
En virtualización, cantidad de items extra que se renderizan fuera del viewport visible para mejorar el scroll.

```typescript
<FixedSizeList
  overscanCount={5} // 5 items extra arriba y abajo
>
```

---

### R

**React.lazy()**
Función de React que permite definir componentes que se cargan dinámicamente.

```typescript
const LazyComponent = lazy(() => import('./Component'));
```

---

### S

**Suspense**
Componente de React que muestra un fallback mientras se cargan componentes lazy.

```typescript
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

**Skeleton**
Placeholder visual que mantiene el espacio reservado mientras carga el contenido real. Ayuda a prevenir CLS.

---

### V

**VariableSizeList**
Componente de react-window para listas donde los items pueden tener alturas diferentes.

**Virtualization (Virtualización)**
Técnica que renderiza solo los elementos visibles de una lista, mejorando rendimiento con grandes datasets.

---

### W

**Web Vitals**
Conjunto de métricas de Google que miden la experiencia del usuario: LCP, FID, CLS (Core Web Vitals).

**Windowing**
Sinónimo de virtualización. Solo se renderizan los elementos dentro de la "ventana" visible.

```typescript
// 10,000 items pero solo ~15 nodos DOM
<FixedSizeList
  height={400}
  itemCount={10000}
  itemSize={50}
>
  {Row}
</FixedSizeList>
```
