# Ejercicio 02: Code Splitting por Rutas

## 🎯 Objetivo

Implementar code splitting a nivel de rutas usando React Router v6 con `React.lazy` para que cada página sea un chunk independiente.

## ⏱️ Duración

45 minutos

---

## 📋 Instrucciones

En este ejercicio aprenderás a:

1. Configurar React Router con componentes lazy
2. Implementar un Suspense global para rutas
3. Crear loading states específicos por página
4. Verificar que cada ruta genera un chunk separado

---

## 🚀 Pasos

### Paso 1: Crear el proyecto

```bash
pnpm create vite@latest route-splitting-demo -- --template react-ts
cd route-splitting-demo
pnpm add react-router-dom
pnpm install
```

### Paso 2: Crear las páginas

Crea componentes para cada ruta: Home, Products, Profile, Settings.

### Paso 3: Configurar Router con lazy

Abre `starter/App.tsx` y convierte las importaciones de páginas a lazy.

### Paso 4: Agregar Suspense al Router

Envuelve las rutas en un Suspense con un PageLoader.

### Paso 5: Verificar chunks en Network

Navega entre rutas y verifica que se cargan chunks separados.

---

## 📁 Estructura de Archivos

```
ejercicio-02-route-splitting/
├── README.md
├── starter/
│   ├── App.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── Profile.tsx
│   │   └── Settings.tsx
│   ├── components/
│   │   ├── Layout.tsx
│   │   └── PageLoader.tsx
│   └── main.tsx
└── solution/
    ├── App.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── Products.tsx
    │   ├── Profile.tsx
    │   └── Settings.tsx
    ├── components/
    │   ├── Layout.tsx
    │   └── PageLoader.tsx
    └── main.tsx
```

---

## ✅ Criterios de Éxito

- [ ] Cada página es un chunk separado
- [ ] Se muestra PageLoader mientras carga una ruta
- [ ] La navegación entre rutas funciona correctamente
- [ ] Network tab muestra chunks cargando al navegar
