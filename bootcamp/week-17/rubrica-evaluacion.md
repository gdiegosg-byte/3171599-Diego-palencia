# Rúbrica de Evaluación - Semana 17

## Code Splitting y Performance Avanzado

### 📊 Distribución de Puntaje

| Tipo de Evidencia | Porcentaje | Puntos  |
| ----------------- | ---------- | ------- |
| **Proyecto** 📦   | **100%**   | **100** |
| **Total**         | **100%**   | **100** |

---

## 📚 Recursos de Aprendizaje (No Evaluados)

La **teoría** y los **ejercicios guiados** son recursos de preparación para el proyecto:

- **Teoría**: Conceptos de code splitting, virtualización, Web Vitals y arquitectura
- **Ejercicios**: Práctica guiada de lazy loading, route splitting, virtualización y métricas

> Estos recursos te preparan para el proyecto pero **no son entregables evaluados**.

---

## 🧠 Conceptos Clave (Referencia)

Los siguientes conceptos se evalúan **a través del proyecto**, no de forma teórica separada:

| Concepto           | Cómo se evalúa en el proyecto             |
| ------------------ | ----------------------------------------- |
| **Code Splitting** | Implementación de React.lazy en rutas     |
| **Virtualización** | Uso correcto de react-window en listas    |
| **Web Vitals**     | Medición y documentación de LCP, FID, CLS |

---

## 📦 Proyecto (100 puntos)

Proyecto: **App Performance**

### Distribución de Puntos

| Aspecto                   | Porcentaje | Puntos  |
| ------------------------- | ---------- | ------- |
| **Funcionalidad**         | 40%        | 40      |
| **Adaptación al Dominio** | 35%        | 35      |
| **Calidad del Código**    | 25%        | 25      |
| **Total**                 | **100%**   | **100** |

### Funcionalidad (40 puntos)

| Requisito                | Puntos | Criterio de Aceptación                        |
| ------------------------ | ------ | --------------------------------------------- |
| Code Splitting por rutas | 10     | Mínimo 3 rutas con lazy loading               |
| Virtualización de lista  | 10     | Lista principal virtualizada con react-window |
| Web Vitals documentados  | 10     | LCP, FID, CLS medidos y reportados            |
| Loading states           | 10     | Suspense boundaries con fallbacks apropiados  |

### Adaptación al Dominio (35 puntos)

| Criterio                  | Puntos | Descripción                                   |
| ------------------------- | ------ | --------------------------------------------- |
| Coherencia con dominio    | 15     | Entidades y datos acordes al dominio asignado |
| Originalidad              | 10     | Implementación única, no copiada              |
| Documentación del dominio | 10     | README explica el contexto del dominio        |

### Calidad del Código (25 puntos)

| Criterio            | Puntos | Descripción                                |
| ------------------- | ------ | ------------------------------------------ |
| TypeScript correcto | 10     | Tipos bien definidos, sin any innecesarios |
| Organización        | 8      | Estructura de carpetas clara y escalable   |
| Buenas prácticas    | 7      | Componentes limpios, hooks bien utilizados |

### Escala de Calidad

| Nivel        | Puntos | Descripción                                                       |
| ------------ | ------ | ----------------------------------------------------------------- |
| Excelente    | 90-100 | Performance excelente, Web Vitals óptimos, código bien organizado |
| Bueno        | 70-89  | Code splitting correcto, virtualización funcional                 |
| Regular      | 50-69  | Implementaciones básicas, algunos problemas de performance        |
| Insuficiente | 0-49   | Code splitting ausente o incorrecto                               |

---

## 📋 Lista de Verificación del Proyecto

### Funcionalidad

- [ ] Aplicación con múltiples rutas/páginas
- [ ] Navegación funcional entre secciones
- [ ] Lista principal con gran cantidad de datos (500+)
- [ ] Estados de carga visibles durante lazy loading

### Code Splitting

- [ ] Todas las rutas principales usan `React.lazy`
- [ ] `Suspense` con fallbacks apropiados
- [ ] Error boundaries para manejar fallos de carga
- [ ] Bundle analyzer muestra chunks separados

### Virtualización

- [ ] Lista principal usa `react-window`
- [ ] Scroll fluido con 500+ items
- [ ] Items renderizan correctamente al hacer scroll
- [ ] Memory footprint controlado

### Web Vitals

- [ ] web-vitals configurado y midiendo
- [ ] LCP documentado (objetivo: < 2.5s)
- [ ] FID documentado (objetivo: < 100ms)
- [ ] CLS documentado (objetivo: < 0.1)

### Documentación

- [ ] README con descripción del dominio
- [ ] Métricas de Web Vitals antes y después
- [ ] Capturas de Network tab mostrando chunks
- [ ] Explicación de decisiones de arquitectura

---

## 🎯 Criterios de Aprobación

- **Mínimo 70 puntos** en el proyecto (equivalente al 70%)
- Code splitting debe reducir el **bundle inicial** de forma medible
- La virtualización debe soportar **mínimo 500 items** sin lag
- Web Vitals deben estar **documentados** con valores reales

---

## 📋 Formato de Entrega

| Entregable              | Formato                        | Obligatorio |
| ----------------------- | ------------------------------ | ----------- |
| **Proyecto Semanal** 📦 | Repositorio Git + README       | ✅ Sí       |
| Teoría                  | Solo lectura (no se entrega)   | ❌ No       |
| Ejercicios              | Solo práctica (no se entregan) | ❌ No       |

---

## ⚠️ Penalizaciones

| Situación                               | Penalización |
| --------------------------------------- | ------------ |
| Lazy loading sin Suspense boundary      | -5 puntos    |
| Lista de 1000+ items sin virtualización | -5 puntos    |
| Web Vitals no medidos/documentados      | -5 puntos    |
| Copiar implementación de otro dominio   | -15 puntos   |
| Entrega tardía (por día)                | -5 puntos    |

---

## 💡 Notas Importantes

### Sobre Code Splitting

El code splitting es esencial para aplicaciones grandes:

- **Primera carga rápida**: Solo carga el código necesario
- **Mejora TTI**: Time to Interactive más bajo
- **Mejor UX**: Usuarios no esperan por código que no usan

### Sobre Virtualización

La virtualización es crítica para listas grandes:

- **Solo renderiza lo visible**: ~10-20 items vs miles
- **Memory eficiente**: No crea miles de DOM nodes
- **Smooth scroll**: Rendimiento constante independiente del tamaño

### Cuándo Aplicar Cada Técnica

| Técnica         | Aplicar cuando...               |
| --------------- | ------------------------------- |
| Code Splitting  | Bundle > 200KB, múltiples rutas |
| Virtualización  | Lista > 100 items visibles      |
| Lazy Components | Componentes pesados no críticos |
| Route Splitting | SPA con múltiples páginas       |

---

_Semana 17 - Code Splitting y Performance Avanzado_
