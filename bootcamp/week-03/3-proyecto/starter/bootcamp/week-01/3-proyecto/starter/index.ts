// ============================================
// PROYECTO SEMANAL: MODELADO DE ENTIDADES
// ============================================

console.log('PROYECTO SEMANAL: MODELADO DE ENTIDADES\n');

// INSTRUCCIONES:
// Adapta este archivo a tu dominio asignado (ej: biblioteca, farmacia, gimnasio, restaurante, etc.)
// Implementa las entidades, tipos y funciones siguiendo los TODOs y comentarios.
// Usa interfaces, types, type unions y literales. Comenta el código con qué/para/impacto.

// ============================================
// 1. Define las entidades principales de tu dominio
// ============================================

// TODO: Define una interface para la entidad principal (ej: Book, Medicine, Member, Dish)
// interface Entity {
//   ...
// }

interface CleaningService {
  id: string; 
  type: CleaningServiceType; 
  date: Date; 
  address: string; 
  status: ServiceStatus; 
  estimatedHours: number; 
  clientId: string; 
  assignedEmployeeIds: string[];
}

// Qué: Representa a la persona o empresa que contrata el servicio
// Para: Asociar servicios a quien los solicita
// Impacto: Permite historial de servicios y facturación
 interface Client {
  id: string; 
  name: string; 
  email: string; 
  phone: string; 
  isCompany: boolean; 
}

export interface CleaningEmployee {
  id: string; 
  fullName: string; 
  skills: CleaningServiceType[]; 
  isAvailable: boolean;
}

// TODO: Define al menos otra interface relacionada (ej: Author, Sale, Routine, Table)
// interface RelatedEntity {
//   ...
// }

// ============================================
// 2. Usa type unions y literales para propiedades clave
// ============================================
type ServiceStatus = | 'programado' | 'en_progreso' | 'completado' | 'cancelado';

// TODO: Define un type union para un estado, categoría o rol relevante
// type Status = 'active' | 'inactive' | 'archived';

// TODO: Usa un type literal para limitar valores permitidos
// type Category = 'A' | 'B' | 'C';
type CleaningServiceType =
  | "hogar"
  | "oficina"
  | "industrial"
  | "post_obra";
// ============================================
// 3. Implementa funciones tipadas para operaciones básicas
// ============================================

// TODO: Implementa una función que cree una entidad
// function createEntity(/* ... */): Entity {
//   // ...
// }
function createCleaningService(
  data: Omit<CleaningService, "id" | "status">
): CleaningService {
  return {
    ...data,
    id: crypto.randomUUID(), 
    status: "programado", 
  };
}

// TODO: Implementa una función que liste entidades
// function listEntities(/* ... */): Entity[] {
//   // ...
// }
function listEntities<T>(entities: T[]): T[] {
  return [...entities]; 
}
// TODO: Implementa una función que filtre entidades por status/categoría
// function filterByStatus(/* ... */): Entity[] {
//   // ...
// }
function filterByStatus<T extends { status: ServiceStatus }>(
  entities: T[],
  status: ServiceStatus
): T[] {
  return entities.filter(entity => entity.status === status);
}

// ============================================
// 4. Prueba tus funciones con datos de ejemplo
// ============================================

// TODO: Crea algunos objetos de ejemplo y prueba las funciones
// console.log(createEntity(...));
// console.log(listEntities(...));
// console.log(filterByStatus(...));

const cleaningServices: CleaningService[] = [
  {
    id: "1",
    type: "hogar",
    date: new Date(),
    address: "Calle 123",
    status: "programado",
    estimatedHours: 3,
    clientId: "c1",
    assignedEmployeeIds: []
  },
  {
    id: "2",
    type: "oficina",
    date: new Date(),
    address: "Av. Principal 456",
    status: "completado",
    estimatedHours: 5,
    clientId: "c2",
    assignedEmployeeIds: ["e1"]
  }
];

// Probar creación de entidad
console.log(" Crear servicio:");
const newService = createCleaningService({
  type: "industrial",
  date: new Date(),
  address: "Zona Industrial",
  estimatedHours: 12,
  clientId: "c3",
  assignedEmployeeIds: []
});
console.log(newService);

// Probar listado de entidades
console.log(" Listar servicios:");
console.log(listEntities(cleaningServices));

// Probar filtrado por status
console.log(" Filtrar servicios completados:");
console.log(filterByStatus(cleaningServices, "programado"));

// ============================================
// 5. Comenta tu código explicando qué/para/impacto
// ============================================

// QUÉ: ...
// PARA: ...
// IMPACTO: ...
