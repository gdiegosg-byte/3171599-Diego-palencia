# 📖 Glosario - Semana 19: CI/CD con Docker y GitHub Actions

## A

### Action

Componente reutilizable de GitHub Actions que realiza una tarea específica. Se usa con `uses:`.

```yaml
- uses: actions/checkout@v4
- uses: docker/build-push-action@v5
```

### Artifact

Archivo o conjunto de archivos producidos por un workflow que se pueden compartir entre jobs o descargar.

```yaml
- uses: actions/upload-artifact@v4
  with:
    name: build
    path: dist/
```

## B

### Badge

Imagen que muestra el estado de un workflow. Se añade al README.

```markdown
![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)
```

### Branch Protection

Reglas que protegen branches importantes requiriendo que CI pase antes de merge.

### Build Matrix

Estrategia para ejecutar un job con múltiples configuraciones (ej: diferentes versiones de Node).

```yaml
strategy:
  matrix:
    node-version: [18, 20, 22]
```

## C

### Cache

Almacenamiento temporal para acelerar builds reutilizando dependencias descargadas.

```yaml
- uses: actions/setup-node@v4
  with:
    cache: 'pnpm'
```

### CD (Continuous Delivery/Deployment)

Práctica de automatizar el despliegue de código a producción.

- **Delivery**: Código listo para deploy manual
- **Deployment**: Deploy automático sin intervención

### CI (Continuous Integration)

Práctica de integrar código frecuentemente con verificación automática (build, test, lint).

### Context

Variables disponibles automáticamente en workflows de GitHub Actions.

```yaml
${{ github.repository }}  # owner/repo
${{ github.ref_name }}    # branch name
${{ github.sha }}         # commit SHA
${{ github.actor }}       # who triggered
```

## E

### Environment

Entorno de deployment (staging, production) con configuraciones y secretos específicos.

```yaml
jobs:
  deploy:
    environment: production
```

## G

### GHCR (GitHub Container Registry)

Servicio de GitHub para almacenar imágenes Docker.

```
ghcr.io/owner/image:tag
```

### GITHUB_TOKEN

Token automático generado en cada workflow para autenticación con GitHub APIs.

```yaml
password: ${{ secrets.GITHUB_TOKEN }}
```

## J

### Job

Unidad de trabajo en un workflow. Los jobs pueden ejecutarse en paralelo o en secuencia.

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
  test:
    runs-on: ubuntu-latest
  build:
    needs: [lint, test] # secuencial
```

## M

### Marketplace

Repositorio de GitHub Actions reutilizables creadas por la comunidad.

URL: https://github.com/marketplace?type=actions

### Metadata Action

Action de Docker para generar tags y labels automáticamente.

```yaml
- uses: docker/metadata-action@v5
```

## N

### Needs

Palabra clave para definir dependencias entre jobs.

```yaml
build:
  needs: [lint, test] # espera a que terminen
```

## O

### On (Trigger)

Define cuándo se ejecuta un workflow.

```yaml
on:
  push:
    branches: [main]
  pull_request:
  workflow_dispatch: # manual
```

## P

### Pipeline

Secuencia de stages/jobs que procesan código desde commit hasta deploy.

### Permissions

Permisos que el workflow necesita para acceder a recursos.

```yaml
permissions:
  contents: read
  packages: write # para GHCR
```

## R

### Runner

Máquina virtual que ejecuta los jobs de un workflow.

```yaml
runs-on: ubuntu-latest  # GitHub-hosted
runs-on: self-hosted    # Auto-hospedado
```

## S

### Secrets

Variables sensibles almacenadas de forma segura en GitHub.

```yaml
${{ secrets.API_KEY }}
${{ secrets.GITHUB_TOKEN }} # automático
```

### Semver (Semantic Versioning)

Esquema de versionado: MAJOR.MINOR.PATCH (ej: v1.2.3).

### Step

Acción individual dentro de un job. Puede ser un comando o una action.

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v4
  - name: Build
    run: pnpm build
```

## T

### Tag (Docker)

Identificador de versión de una imagen Docker.

```
ghcr.io/user/app:latest
ghcr.io/user/app:v1.0.0
ghcr.io/user/app:sha-abc1234
```

### Trigger

Evento que inicia la ejecución de un workflow (push, PR, schedule, manual).

## W

### Workflow

Archivo YAML que define un proceso automatizado de CI/CD.

```
.github/workflows/ci.yml
.github/workflows/cd.yml
```

### Workflow Dispatch

Trigger que permite ejecutar un workflow manualmente desde la UI de GitHub.

```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        type: choice
        options: [staging, production]
```

---

## 📚 Referencias

- [GitHub Actions Glossary](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [GHCR Documentation](https://docs.github.com/en/packages)

---

_Última actualización: Febrero 2026_
