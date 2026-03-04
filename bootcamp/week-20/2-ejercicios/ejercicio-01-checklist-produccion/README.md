# Ejercicio 01: Checklist de Producción

## 🎯 Objetivo

Aplicar un checklist completo para verificar que una aplicación React está lista para producción.

## ⏱️ Duración

30 minutos

## 📋 Descripción

En este ejercicio, utilizarás un checklist estructurado para auditar una aplicación React antes de su despliegue. Aprenderás a identificar problemas comunes y cómo solucionarlos.

---

## 📝 Checklist de Producción

### 1. Build y Compilación

```bash
# Ejecutar estos comandos y verificar que no hay errores
pnpm build
pnpm preview
```

**Verificaciones:**

- [ ] `pnpm build` ejecuta sin errores
- [ ] `pnpm preview` muestra la aplicación correctamente
- [ ] No hay warnings de TypeScript
- [ ] No hay errores de ESLint

---

### 2. Código Limpio

**Buscar y eliminar:**

```bash
# Buscar console.log en el código
grep -r "console.log" src/

# Buscar debugger statements
grep -r "debugger" src/

# Buscar TODO comments pendientes
grep -r "TODO" src/
```

**Verificaciones:**

- [ ] No hay `console.log` en producción (usar condicionales o eliminar)
- [ ] No hay `debugger` statements
- [ ] TODOs críticos resueltos
- [ ] No hay código comentado sin propósito

**Solución para console.log:**

```typescript
// src/utils/logger.ts

const isDev = import.meta.env.DEV;

export const logger = {
  log: (...args: unknown[]) => {
    if (isDev) console.log(...args);
  },
  error: (...args: unknown[]) => {
    // Los errores sí se logean en producción
    console.error(...args);
  },
  warn: (...args: unknown[]) => {
    if (isDev) console.warn(...args);
  },
};
```

---

### 3. Variables de Entorno

**Verificar archivo `.env.production`:**

```bash
# .env.production
VITE_API_URL=https://api.production.com
VITE_APP_NAME=Mi App
VITE_ENABLE_ANALYTICS=true
```

**Verificaciones:**

- [ ] Existe `.env.production` con valores correctos
- [ ] `.env` y `.env.local` están en `.gitignore`
- [ ] No hay secrets hardcodeados en el código
- [ ] Las URLs apuntan a producción

---

### 4. Testing

```bash
# Ejecutar tests
pnpm test

# Ver cobertura
pnpm test:coverage
```

**Verificaciones:**

- [ ] Todos los tests pasan
- [ ] Cobertura de código > 60%
- [ ] Tests de componentes críticos existen
- [ ] Tests de hooks personalizados existen

---

### 5. Performance

**Ejecutar Lighthouse en Chrome DevTools:**

1. Abrir DevTools (F12)
2. Ir a la pestaña "Lighthouse"
3. Seleccionar "Performance", "Accessibility", "Best Practices", "SEO"
4. Ejecutar auditoría

**Verificaciones:**

- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

**Optimizaciones comunes:**

```tsx
// Lazy loading de rutas
const Dashboard = lazy(() => import('./pages/Dashboard'));

// Optimización de imágenes
<img
  src={image}
  alt="Descripción"
  loading="lazy"
  width={300}
  height={200}
/>;

// Memoización de componentes costosos
const ExpensiveComponent = memo(({ data }) => {
  // ...
});
```

---

### 6. Accesibilidad (a11y)

**Instalar axe DevTools en Chrome y ejecutar auditoría.**

**Verificaciones manuales:**

- [ ] Navegación con Tab funciona correctamente
- [ ] Todos los inputs tienen labels asociados
- [ ] Imágenes tienen alt text
- [ ] Contraste de colores es suficiente
- [ ] Skip link presente

```tsx
// Verificar que existe skip link
<a
  href="#main-content"
  className="sr-only focus:not-sr-only">
  Saltar al contenido principal
</a>
```

---

### 7. SEO

**Verificaciones:**

- [ ] Cada página tiene `<title>` único
- [ ] Cada página tiene `<meta name="description">`
- [ ] Open Graph tags configurados
- [ ] `robots.txt` presente
- [ ] `sitemap.xml` generado (si aplica)

```tsx
// Verificar que SEO component se usa en cada página
<SEO
  title="Página de Inicio"
  description="Descripción de la página"
/>
```

---

### 8. Docker

```bash
# Construir imagen
docker build -t mi-app .

# Ejecutar contenedor
docker run -p 3000:3000 mi-app

# Verificar con Docker Compose
docker compose up
```

**Verificaciones:**

- [ ] `docker build` ejecuta sin errores
- [ ] La imagen se ejecuta correctamente
- [ ] `docker-compose.yml` funciona
- [ ] Variables de entorno se pasan correctamente

---

### 9. CI/CD

**Verificar en GitHub:**

- [ ] Workflow CI ejecuta en cada push
- [ ] Workflow CD ejecuta en push a main
- [ ] Badges de estado actualizados en README
- [ ] Imagen publicada en GHCR

---

### 10. Documentación

**Verificaciones:**

- [ ] README.md completo con instrucciones
- [ ] Instrucciones de instalación claras
- [ ] Instrucciones de desarrollo
- [ ] Instrucciones de despliegue
- [ ] Licencia incluida

---

## 📝 Template de Reporte

Copia este template y complétalo para tu proyecto:

```markdown
# Reporte de Auditoría - [Nombre del Proyecto]

**Fecha:** [Fecha]
**Versión:** [Versión]

## Resumen

| Categoría     | Estado | Puntuación |
| ------------- | ------ | ---------- |
| Build         | ✅/❌  | /10        |
| Código Limpio | ✅/❌  | /10        |
| Variables Env | ✅/❌  | /10        |
| Testing       | ✅/❌  | /10        |
| Performance   | ✅/❌  | /10        |
| Accesibilidad | ✅/❌  | /10        |
| SEO           | ✅/❌  | /10        |
| Docker        | ✅/❌  | /10        |
| CI/CD         | ✅/❌  | /10        |
| Documentación | ✅/❌  | /10        |

**Total: /100**

## Issues Encontrados

1. [Descripción del issue]
   - **Severidad:** Alta/Media/Baja
   - **Solución:** [Descripción]

## Acciones Pendientes

- [ ] [Acción 1]
- [ ] [Acción 2]
```

---

## ✅ Criterios de Éxito

- [ ] Checklist completado para tu proyecto
- [ ] Al menos 80% de verificaciones pasando
- [ ] Issues críticos identificados y documentados
- [ ] Plan de acción para issues pendientes

---

## 💡 Tips

1. **Automatiza lo que puedas**: Muchas verificaciones pueden ser scripts en `package.json`
2. **Usa pre-commit hooks**: Husky + lint-staged para verificar antes de commit
3. **CI como safety net**: El pipeline debe fallar si algo crítico no pasa
4. **Documenta excepciones**: Si algo no aplica, documenta por qué

---

_Siguiente ejercicio: [Storybook Básico](../ejercicio-02-storybook-basico/README.md)_
