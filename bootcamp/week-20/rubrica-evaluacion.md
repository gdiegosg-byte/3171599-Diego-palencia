# Rúbrica de Evaluación - Semana 20

## 📊 Proyecto Final: Aplicación Production-Ready

### Distribución de la Evaluación

| Tipo        | Peso | Descripción                 |
| ----------- | ---- | --------------------------- |
| Proyecto 📦 | 100% | Aplicación Production-Ready |

> 📖 **Nota**: La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

---

## 📚 Recursos de Aprendizaje (No Evaluados)

Los siguientes materiales te ayudarán a prepararte para el proyecto:

| Recurso                    | Propósito                                |
| -------------------------- | ---------------------------------------- |
| Teoría (1-teoria/)         | Conceptos de planificación y despliegue  |
| Ejercicios (2-ejercicios/) | Práctica guiada de checklist y Storybook |

---

## 📦 Proyecto (100%)

### Distribución de Puntos (100 puntos totales)

| Criterio              | Peso | Puntos |
| --------------------- | ---- | ------ |
| Funcionalidad         | 40%  | 40     |
| Adaptación al Dominio | 35%  | 35     |
| Calidad del Código    | 25%  | 25     |

---

## 1. Funcionalidad (40 puntos)

### 1.1 Frontend React + TypeScript (20 puntos)

| Criterio                             | Excelente (20) | Bueno (16) | Suficiente (12) | Insuficiente (0-8) |
| ------------------------------------ | -------------- | ---------- | --------------- | ------------------ |
| Componentes funcionales bien tipados | ✓              |            |                 |                    |
| Estado global implementado           | ✓              |            |                 |                    |
| Routing con rutas protegidas         | ✓              |            |                 |                    |
| Formularios con validación           | ✓              |            |                 |                    |
| Diseño responsivo                    | ✓              |            |                 |                    |

**Niveles:**

- **Excelente (20)**: Todos los requisitos implementados correctamente con TypeScript estricto
- **Bueno (16)**: Funcionalidad completa con algunos tipos `any` o pequeños issues
- **Suficiente (12)**: Funcionalidad básica, tipado incompleto
- **Insuficiente (0-8)**: Aplicación incompleta o con errores críticos

### 1.2 Integración Backend (20 puntos)

| Criterio                      | Excelente (20) | Bueno (16) | Suficiente (12) | Insuficiente (0-8) |
| ----------------------------- | -------------- | ---------- | --------------- | ------------------ |
| Consumo de API funcional      | ✓              |            |                 |                    |
| Autenticación implementada    | ✓              |            |                 |                    |
| React Query para server state | ✓              |            |                 |                    |
| Manejo de errores y loading   | ✓              |            |                 |                    |
| Manejo de estados edge cases  | ✓              |            |                 |                    |

**Niveles:**

- **Excelente (20)**: Integración completa con manejo robusto de errores y caché
- **Bueno (16)**: API funcional con buen manejo de estados
- **Suficiente (12)**: API funcional con manejo básico de errores
- **Insuficiente (0-8)**: Integración incompleta o con errores frecuentes

---

## 2. Adaptación al Dominio (35 puntos)

### 2.1 Coherencia con el Dominio Asignado (20 puntos)

| Criterio                              | Excelente (20) | Bueno (16) | Suficiente (12) | Insuficiente (0-8) |
| ------------------------------------- | -------------- | ---------- | --------------- | ------------------ |
| Entidades y modelos apropiados        | ✓              |            |                 |                    |
| Flujos de negocio coherentes          | ✓              |            |                 |                    |
| Terminología del dominio correcta     | ✓              |            |                 |                    |
| Funcionalidades relevantes al dominio | ✓              |            |                 |                    |
| Validaciones de negocio implementadas | ✓              |            |                 |                    |

**Niveles:**

- **Excelente (20)**: Implementación completamente coherente y profesional para el dominio
- **Bueno (16)**: Buena adaptación con pequeños detalles mejorables
- **Suficiente (12)**: Adaptación básica al dominio asignado
- **Insuficiente (0-8)**: Poca o nula coherencia con el dominio

### 2.2 Containerización y Deployment (15 puntos)

| Criterio                          | Excelente (15) | Bueno (12) | Suficiente (9) | Insuficiente (0-5) |
| --------------------------------- | -------------- | ---------- | -------------- | ------------------ |
| Dockerfile multi-stage optimizado | ✓              |            |                |                    |
| Docker Compose funcional          | ✓              |            |                |                    |
| Variables de entorno configuradas | ✓              |            |                |                    |
| CI/CD básico funcionando          | ✓              |            |                |                    |
| Imagen publicada en GHCR          | ✓              |            |                |                    |

**Niveles:**

- **Excelente (15)**: Containerización completa con CI/CD automatizado
- **Bueno (12)**: Docker y CI/CD funcionales con algunas optimizaciones
- **Suficiente (9)**: Docker básico y CI mínimo funcionando
- **Insuficiente (0-5)**: Docker o CI incompleto/no funcional

---

## 3. Calidad del Código (25 puntos)

### 3.1 Testing y Documentación (15 puntos)

| Criterio                       | Excelente (15) | Bueno (12) | Suficiente (9) | Insuficiente (0-5) |
| ------------------------------ | -------------- | ---------- | -------------- | ------------------ |
| Tests unitarios de componentes | ✓              |            |                |                    |
| Tests pasando en CI            | ✓              |            |                |                    |
| Cobertura de código > 60%      | ✓              |            |                |                    |
| README profesional y completo  | ✓              |            |                |                    |
| Storybook documentado          | ✓              |            |                |                    |

**Niveles:**

- **Excelente (15)**: Cobertura > 80%, documentación profesional
- **Bueno (12)**: Cobertura 60-80%, buena documentación
- **Suficiente (9)**: Cobertura 40-60%, documentación básica
- **Insuficiente (0-5)**: Tests insuficientes o documentación pobre

### 3.2 Buenas Prácticas (10 puntos)

| Criterio                           | Excelente (10) | Bueno (8) | Suficiente (6) | Insuficiente (0-3) |
| ---------------------------------- | -------------- | --------- | -------------- | ------------------ |
| Código limpio y organizado         | ✓              |           |                |                    |
| TypeScript estricto sin `any`      | ✓              |           |                |                    |
| Arquitectura de carpetas escalable | ✓              |           |                |                    |
| Accesibilidad básica (a11y)        | ✓              |           |                |                    |
| SEO básico configurado             | ✓              |           |                |                    |

**Niveles:**

- **Excelente (10)**: Código profesional siguiendo todas las mejores prácticas
- **Bueno (8)**: Código bien organizado con pequeñas mejoras posibles
- **Suficiente (6)**: Código funcional pero con aspectos mejorables
- **Insuficiente (0-3)**: Código desorganizado o con malas prácticas

---

## 📈 Escala de Calificación Final

| Rango  | Calificación | Descripción                                    |
| ------ | ------------ | ---------------------------------------------- |
| 95-100 | A+           | Excepcional - Listo para producción real       |
| 90-94  | A            | Excelente - Proyecto sobresaliente             |
| 85-89  | B+           | Muy Bueno - Supera expectativas                |
| 80-84  | B            | Bueno - Cumple todos los requisitos            |
| 75-79  | C+           | Satisfactorio - Cumple requisitos mínimos+     |
| 70-74  | C            | Suficiente - Cumple requisitos mínimos         |
| 60-69  | D            | Insuficiente - Requiere mejoras significativas |
| 0-59   | F            | No aprobado - No cumple requisitos mínimos     |

---

## ✅ Checklist de Entrega del Proyecto

### Repositorio y Código

- [ ] Código fuente completo y funcional
- [ ] README.md profesional con instrucciones claras
- [ ] .gitignore apropiado
- [ ] Sin secrets o credenciales expuestas
- [ ] TypeScript estricto sin `any`

### Adaptación al Dominio

- [ ] Entidades coherentes con el dominio asignado
- [ ] Flujos de negocio apropiados
- [ ] Terminología correcta del dominio

### Docker y CI/CD

- [ ] Dockerfile multi-stage funcional
- [ ] docker-compose.yml funcional
- [ ] Workflow CI ejecutándose correctamente
- [ ] Imagen publicada en GHCR

### Testing y Documentación

- [ ] Tests pasando en CI
- [ ] Cobertura de código ≥ 60%
- [ ] Storybook configurado

### Presentación

- [ ] Demo preparada (5-10 min)
- [ ] Arquitectura explicada
- [ ] Decisiones técnicas justificadas

---

## 🎯 Criterios de Aprobación

| Criterio                  | Requisito                    |
| ------------------------- | ---------------------------- |
| **Puntuación mínima**     | 70 puntos (70%)              |
| **Aplicación ejecutable** | Funcional con Docker         |
| **CI/CD**                 | Al menos CI básico funcional |
| **Adaptación al dominio** | Coherente y completa         |

---

## 📋 Formato de Entrega

| Entregable         | Formato                 | Obligatorio |
| ------------------ | ----------------------- | ----------- |
| Repositorio GitHub | URL del repositorio     | ✅          |
| Imagen Docker      | Publicada en GHCR       | ✅          |
| Storybook          | Enlace o build estático | ✅          |
| Presentación       | Demo en vivo (5-10 min) | ✅          |

---

_Rúbrica de Evaluación - Semana 20 - Bootcamp React con TypeScript_
