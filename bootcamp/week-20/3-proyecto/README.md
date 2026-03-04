# 🎓 Proyecto Final: Aplicación Production-Ready

## 📋 Descripción

Este es el proyecto final del bootcamp. Debes crear una aplicación completa que demuestre todas las competencias adquiridas durante las 20 semanas del programa.

---

## 🏛️ Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único]

Recuerda que debes adaptar todos los conceptos genéricos a tu dominio específico:

- **Biblioteca**: Gestionar libros, autores, préstamos
- **Farmacia**: Gestionar medicamentos, ventas, inventario
- **Gimnasio**: Gestionar miembros, rutinas, asistencias
- **Restaurante**: Gestionar platillos, mesas, pedidos
- **Hospital**: Gestionar pacientes, citas, médicos
- **Y otros según asignación...**

---

## 🎯 Objetivos

Demostrar dominio de:

1. **React + TypeScript** - Componentes, hooks, tipado estricto
2. **Estado Global** - Zustand o Redux Toolkit
3. **Server State** - React Query
4. **Routing** - React Router con rutas protegidas
5. **Formularios** - React Hook Form + Zod
6. **Testing** - Vitest + Testing Library
7. **Docker** - Containerización multi-stage
8. **CI/CD** - GitHub Actions
9. **Documentación** - Storybook + README

---

## ✅ Requisitos Funcionales

### Mínimos (MVP)

Tu aplicación debe incluir:

1. **Autenticación**
   - [ ] Login con email/password
   - [ ] Registro de usuarios
   - [ ] Logout
   - [ ] Protección de rutas

2. **CRUD de Entidad Principal**
   - [ ] Listar items (con paginación o scroll infinito)
   - [ ] Ver detalle de item
   - [ ] Crear nuevo item
   - [ ] Editar item existente
   - [ ] Eliminar item

3. **Búsqueda y Filtros**
   - [ ] Búsqueda por texto
   - [ ] Filtros por categoría/estado

4. **UI/UX**
   - [ ] Diseño responsivo (mobile-first)
   - [ ] Estados de loading
   - [ ] Manejo de errores
   - [ ] Feedback al usuario (toasts/alerts)

### Opcionales (Bonus)

- [ ] Dashboard con estadísticas
- [ ] Dark mode
- [ ] Exportar datos a CSV/PDF
- [ ] Notificaciones
- [ ] Múltiples idiomas (i18n)

---

## 🛠️ Stack Tecnológico Requerido

| Categoría        | Tecnología                   |
| ---------------- | ---------------------------- |
| Framework        | React 18+ con TypeScript     |
| Build Tool       | Vite                         |
| Routing          | React Router v6              |
| Estado Global    | Zustand o Redux Toolkit      |
| Server State     | TanStack Query (React Query) |
| Formularios      | React Hook Form + Zod        |
| Estilos          | Tailwind CSS o CSS Modules   |
| Testing          | Vitest + Testing Library     |
| Containerización | Docker + Docker Compose      |
| CI/CD            | GitHub Actions               |
| Registry         | GitHub Container Registry    |
| Documentación    | Storybook                    |

---

## 📁 Estructura de Proyecto Recomendada

```
mi-proyecto-final/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Lint, Test, Build
│       └── cd.yml                    # Push to GHCR
├── src/
│   ├── components/
│   │   ├── ui/                       # Componentes genéricos (Button, Input, Modal)
│   │   └── features/                 # Componentes del dominio
│   ├── hooks/                        # Custom hooks
│   ├── pages/                        # Páginas/Rutas
│   ├── services/                     # API calls
│   ├── store/                        # Estado global
│   ├── types/                        # TypeScript types
│   ├── utils/                        # Utilidades
│   ├── App.tsx
│   └── main.tsx
├── tests/                            # Tests
├── .storybook/                       # Configuración Storybook
├── public/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

---

## 📝 Entregables

### 1. Repositorio GitHub

- [ ] Código fuente completo
- [ ] README.md profesional (usa el template en `starter/README-template.md`)
- [ ] .gitignore apropiado
- [ ] Licencia (MIT recomendada)

### 2. Docker

- [ ] Dockerfile multi-stage
- [ ] docker-compose.yml funcional
- [ ] .env.example con variables necesarias
- [ ] nginx.conf para producción

### 3. CI/CD

- [ ] Workflow CI (lint, test, build)
- [ ] Workflow CD (push a GHCR)
- [ ] Badges de estado en README

### 4. Testing

- [ ] Tests unitarios de componentes
- [ ] Tests de hooks
- [ ] Cobertura > 60%

### 5. Documentación

- [ ] README con instrucciones claras
- [ ] Storybook con componentes principales
- [ ] Comentarios en código donde sea necesario

### 6. Presentación (5-10 min)

- [ ] Demo de la aplicación funcionando
- [ ] Explicación de arquitectura
- [ ] Decisiones técnicas tomadas
- [ ] Retos enfrentados y soluciones
- [ ] Lecciones aprendidas

---

## 📊 Rúbrica de Evaluación

| Criterio                 | Puntos  |
| ------------------------ | ------- |
| Funcionalidad (Frontend) | 15      |
| Integración Backend      | 15      |
| Docker                   | 15      |
| CI/CD                    | 10      |
| Testing                  | 15      |
| Documentación (README)   | 10      |
| Storybook                | 5       |
| Calidad de Código        | 15      |
| **Total**                | **100** |

**Mínimo para aprobar**: 70 puntos

---

## 🚀 Guía de Inicio

### Paso 1: Crear Proyecto

```bash
# Crear proyecto con Vite
pnpm create vite mi-proyecto --template react-ts

# Entrar al directorio
cd mi-proyecto

# Instalar dependencias base
pnpm add react-router-dom @tanstack/react-query zustand react-hook-form @hookform/resolvers zod axios

# Instalar dependencias de desarrollo
pnpm add -D tailwindcss postcss autoprefixer vitest @testing-library/react @testing-library/jest-dom jsdom

# Inicializar Tailwind
pnpm dlx tailwindcss init -p

# Inicializar Storybook
pnpm dlx storybook@latest init
```

### Paso 2: Configurar Docker

Copia los archivos de `starter/` y adáptalos a tu proyecto.

### Paso 3: Configurar GitHub Actions

Copia los workflows de `starter/` a `.github/workflows/`.

### Paso 4: Desarrollar

1. Configura estructura de carpetas
2. Implementa autenticación
3. Implementa CRUD principal
4. Agrega tests
5. Documenta con Storybook

### Paso 5: Verificar

Usa el checklist de producción antes de entregar.

---

## 💡 Tips

1. **Empieza por la infraestructura**: Docker y CI/CD primero
2. **Commits frecuentes**: Pequeños y descriptivos
3. **Tests en paralelo**: Escribe tests mientras desarrollas
4. **No reinventes**: Usa librerías probadas
5. **Documenta mientras avanzas**: No dejes la documentación para el final

---

## ⏱️ Distribución del Tiempo Sugerida

| Actividad                   | Tiempo      |
| --------------------------- | ----------- |
| Setup (Vite, Docker, CI/CD) | 1.5 horas   |
| Autenticación               | 1 hora      |
| CRUD Principal              | 2 horas     |
| UI/UX y Estilos             | 1 hora      |
| Testing                     | 1 hora      |
| Documentación y Storybook   | 1 hora      |
| Revisión y Presentación     | 0.5 horas   |
| **Total**                   | **8 horas** |

---

## 🔗 Recursos Útiles

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TanStack Query](https://tanstack.com/query/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## 🎉 ¡Buena Suerte!

Este proyecto es tu oportunidad de demostrar todo lo aprendido. Tómate el tiempo necesario para planificar bien antes de codear.

¡Éxito en tu proyecto final!

---

_Proyecto Final - Bootcamp React con TypeScript_
