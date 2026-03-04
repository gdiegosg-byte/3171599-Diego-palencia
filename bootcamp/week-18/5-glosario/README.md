# 📖 Glosario - Semana 18: Docker Fundamentals para React

## A

### Alpine Linux

Distribución Linux ultraligera (~5MB) optimizada para contenedores. Base ideal para imágenes Docker de producción.

```dockerfile
FROM node:20-alpine  # ~150MB vs ~1GB de node:20
```

## B

### Build Context

Conjunto de archivos enviados al Docker daemon durante `docker build`. El `.dockerignore` controla qué archivos excluir.

### Build Stage

Fase en un Dockerfile multi-stage. Cada `FROM` inicia un nuevo stage.

```dockerfile
FROM node:20-alpine AS builder  # Stage "builder"
FROM nginx:alpine AS production # Stage "production"
```

## C

### Container

Instancia ejecutable de una imagen. Proceso aislado con su propio sistema de archivos, red y recursos.

```bash
docker run -d --name mi-app -p 3000:80 mi-imagen
```

### Container Registry

Servicio para almacenar y distribuir imágenes Docker. Ejemplos: Docker Hub, GitHub Container Registry.

### COPY (Dockerfile)

Instrucción para copiar archivos desde el build context al filesystem de la imagen.

```dockerfile
COPY package.json ./
COPY --from=builder /app/dist /usr/share/nginx/html
```

## D

### Daemon (Docker Daemon)

Servicio en segundo plano que gestiona objetos Docker (imágenes, contenedores, redes, volúmenes).

### Docker

Plataforma para desarrollar, empaquetar y ejecutar aplicaciones en contenedores aislados.

### Docker Compose

Herramienta para definir y ejecutar aplicaciones multi-contenedor usando archivos YAML.

```yaml
services:
  frontend:
    build: ./frontend
    ports:
      - '3000:80'
```

### Dockerfile

Archivo de texto con instrucciones para construir una imagen Docker.

## E

### ENTRYPOINT

Comando ejecutable principal del contenedor. Diferente de CMD, no puede ser sobrescrito fácilmente.

```dockerfile
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

### ENV

Instrucción para definir variables de entorno en la imagen.

```dockerfile
ENV NODE_ENV=production
```

### EXPOSE

Documenta qué puertos utiliza el contenedor. No publica puertos automáticamente.

```dockerfile
EXPOSE 80
```

## H

### Health Check

Mecanismo para verificar el estado de salud de un contenedor.

```yaml
healthcheck:
  test: ['CMD', 'curl', '-f', 'http://localhost/health']
  interval: 30s
  timeout: 10s
  retries: 3
```

## I

### Image (Imagen)

Plantilla inmutable de solo lectura con instrucciones para crear contenedores. Construida en capas.

```bash
docker images  # Lista imágenes locales
```

## L

### Layer (Capa)

Cada instrucción en un Dockerfile crea una capa. Las capas se cachean para optimizar builds.

## M

### Multi-stage Build

Técnica para usar múltiples `FROM` en un Dockerfile, reduciendo el tamaño final de la imagen.

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
RUN pnpm build

# Stage 2: Producción (solo archivos necesarios)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

## N

### Network (Docker Network)

Sistema de red virtual que permite comunicación entre contenedores.

```yaml
networks:
  app-network:
    driver: bridge
```

### Nginx

Servidor web de alto rendimiento usado para servir aplicaciones React en producción.

## P

### Port Mapping

Mapeo de puertos entre el host y el contenedor.

```bash
docker run -p 3000:80 mi-imagen  # host:container
```

## R

### RUN

Instrucción que ejecuta comandos durante el build de la imagen.

```dockerfile
RUN pnpm install --frozen-lockfile
```

## S

### Service (Compose)

Definición de un contenedor en Docker Compose, incluyendo su imagen, puertos, volúmenes, etc.

### SPA (Single Page Application)

Aplicación web de una sola página. Nginx debe configurarse con `try_files` para routing.

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## T

### Tag

Etiqueta que identifica una versión específica de una imagen.

```bash
docker build -t mi-app:1.0.0 .
docker build -t mi-app:latest .
```

### try_files

Directiva Nginx para manejar routing de SPAs. Intenta servir archivos existentes o redirige a index.html.

## V

### Volume

Mecanismo de persistencia de datos fuera del ciclo de vida del contenedor.

```yaml
volumes:
  - postgres-data:/var/lib/postgresql/data
```

## W

### WORKDIR

Define el directorio de trabajo dentro del contenedor para instrucciones posteriores.

```dockerfile
WORKDIR /app
```

---

## 📚 Referencias

- [Docker Docs](https://docs.docker.com/)
- [Docker Compose Spec](https://docs.docker.com/compose/compose-file/)
- [Nginx Docs](https://nginx.org/en/docs/)

---

_Última actualización: Enero 2026_
