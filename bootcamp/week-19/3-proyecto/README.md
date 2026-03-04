# 🏗️ Proyecto Semanal: Pipeline CI/CD Completo

## 🎯 Objetivo

Implementar un pipeline CI/CD completo para tu aplicación React containerizada, integrando tests, linting, build de imagen Docker y publicación a GHCR.

**Tiempo estimado**: 2.5 horas

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio]

Adapta el pipeline a tu aplicación del dominio asignado (la misma de semana 18).

---

## 🎯 Requisitos del Proyecto

### Funcionales

1. **Workflow CI** que:
   - Se ejecute en push y pull_request
   - Ejecute linting (ESLint)
   - Ejecute tests (Vitest)
   - Construya la aplicación

2. **Workflow CD** que:
   - Se ejecute solo en push a main y tags
   - Construya imagen Docker multi-stage
   - Publique a GitHub Container Registry
   - Use tags semánticos (latest, sha, version)

3. **Documentación** con:
   - Badges de CI/CD en README
   - Instrucciones de uso de la imagen

---

## 📁 Estructura del Proyecto

```
tu-proyecto/
├── .github/
│   └── workflows/
│       ├── ci.yml           # Pipeline de CI
│       └── cd.yml           # Pipeline de CD
├── src/
│   └── ...                  # Tu aplicación React
├── Dockerfile               # Multi-stage (semana 18)
├── nginx.conf               # Config para SPA
├── docker-compose.yml       # Para desarrollo local
├── package.json
└── README.md                # Con badges de CI/CD
```

---

## 📝 Entregables

### 1. Workflow CI (`ci.yml`) - 40 puntos

Debe incluir:

- [ ] Trigger en push y pull_request (5 pts)
- [ ] Job de linting con ESLint (10 pts)
- [ ] Job de tests con Vitest (10 pts)
- [ ] Job de build que dependa de lint y test (10 pts)
- [ ] Cache de pnpm para acelerar builds (5 pts)

### 2. Workflow CD (`cd.yml`) - 35 puntos

Debe incluir:

- [ ] Trigger en push a main y tags v\* (5 pts)
- [ ] Login a GHCR con GITHUB_TOKEN (5 pts)
- [ ] Metadata action para tags automáticos (10 pts)
- [ ] Build y push con docker/build-push-action (10 pts)
- [ ] Cache de Docker layers (5 pts)

### 3. Documentación (`README.md`) - 15 puntos

Debe incluir:

- [ ] Badge de CI (5 pts)
- [ ] Badge de CD (5 pts)
- [ ] Instrucciones para usar la imagen Docker (5 pts)

### 4. Calidad - 10 puntos

- [ ] Secrets no expuestos en logs (3 pts)
- [ ] Nombres descriptivos en jobs y steps (3 pts)
- [ ] Comentarios explicativos (2 pts)
- [ ] Coherencia con dominio asignado (2 pts)

---

## 🚀 Instrucciones

### Paso 1: Partir de Semana 18

Usa tu proyecto de la semana 18 como base. Debe tener:

- Dockerfile multi-stage funcional
- nginx.conf configurado para SPA
- Aplicación React que funcione

### Paso 2: Agregar Scripts

Verifica que `package.json` tenga:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx",
    "test": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

### Paso 3: Crear Workflows

Copia y adapta los archivos de `starter/`:

```bash
mkdir -p .github/workflows
cp starter/ci.yml .github/workflows/
cp starter/cd.yml .github/workflows/
```

### Paso 4: Completar TODOs

Abre cada archivo y completa las secciones marcadas con TODO.

### Paso 5: Actualizar README

Agrega badges y documentación según el template.

### Paso 6: Push y Verificar

```bash
git add .
git commit -m "feat: add CI/CD pipelines"
git push origin main
```

Verifica en la pestaña Actions de GitHub.

---

## 💡 Ejemplo de Badges

````markdown
# Mi App - [Dominio]

![CI](https://github.com/USUARIO/REPO/actions/workflows/ci.yml/badge.svg)
![CD](https://github.com/USUARIO/REPO/actions/workflows/cd.yml/badge.svg)

## 🐳 Docker

```bash
docker pull ghcr.io/USUARIO/REPO:latest
docker run -p 3000:80 ghcr.io/USUARIO/REPO:latest
```
````

```

---

## ✅ Criterios de Evaluación

| Componente      | Puntos | Descripción |
|-----------------|--------|-------------|
| Workflow CI     | 40     | Lint, test, build funcionales |
| Workflow CD     | 35     | Push a GHCR con tags correctos |
| Documentación   | 15     | Badges y README completo |
| Calidad         | 10     | Buenas prácticas |
| **Total**       | **100**| |

---

## 🔗 Recursos

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [GHCR Docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [docker/build-push-action](https://github.com/docker/build-push-action)

---

## 📚 Referencias

- Teoría: [1-teoria/](../1-teoria/)
- Ejercicios: [2-ejercicios/](../2-ejercicios/)

---

_Proyecto Semana 19 - Bootcamp React con TypeScript_
```
