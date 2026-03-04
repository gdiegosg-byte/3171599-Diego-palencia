// ============================================================
// FUNCIONES DE API - Plataforma de Limpieza (datos mock)
// ============================================================

import type { CleaningService, Stats, RealTimeData } from "../types/index";

// Simula latencia de red
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ── Datos mock ───────────────────────────────────────────────

const MOCK_SERVICES: CleaningService[] = [
  {
    id: 1,
    clientName: "María González",
    address: "Calle 45 #12-30, Bogotá",
    serviceType: "deep",
    status: "in-progress",
    scheduledDate: "2026-03-04T09:00:00",
    assignedTo: "Carlos Ríos",
    price: 85,
  },
  {
    id: 2,
    clientName: "Tech Solutions S.A.",
    address: "Av. El Dorado #68-11, Bogotá",
    serviceType: "office",
    status: "pending",
    scheduledDate: "2026-03-04T11:00:00",
    assignedTo: "Ana Morales",
    price: 150,
  },
  {
    id: 3,
    clientName: "Pedro Ramírez",
    address: "Carrera 7 #127-05, Bogotá",
    serviceType: "basic",
    status: "completed",
    scheduledDate: "2026-03-04T07:00:00",
    assignedTo: "Luis Pérez",
    price: 45,
  },
  {
    id: 4,
    clientName: "Familia Martínez",
    address: "Calle 93 #14-20, Bogotá",
    serviceType: "move-in",
    status: "pending",
    scheduledDate: "2026-03-04T14:00:00",
    assignedTo: "María Torres",
    price: 120,
  },
  {
    id: 5,
    clientName: "Consultores ABC",
    address: "Cra 15 #88-64, Bogotá",
    serviceType: "office",
    status: "in-progress",
    scheduledDate: "2026-03-04T08:30:00",
    assignedTo: "Jorge Castillo",
    price: 200,
  },
  {
    id: 6,
    clientName: "Laura Díaz",
    address: "Calle 72 #10-07, Bogotá",
    serviceType: "basic",
    status: "completed",
    scheduledDate: "2026-03-04T06:00:00",
    assignedTo: "Carlos Ríos",
    price: 45,
  },
  {
    id: 7,
    clientName: "Roberto Silva",
    address: "Av. Suba #100-40, Bogotá",
    serviceType: "deep",
    status: "pending",
    scheduledDate: "2026-03-04T15:00:00",
    assignedTo: "Ana Morales",
    price: 90,
  },
];

// ── Funciones de fetch ───────────────────────────────────────

/**
 * Obtiene la lista de servicios de limpieza
 * Soporta AbortController para cancelación
 */
export const fetchServices = async (
  signal?: AbortSignal,
  search?: string
): Promise<CleaningService[]> => {
  await delay(1000); // Simular latencia de red

  // Verifica si la petición fue cancelada
  if (signal?.aborted) throw new DOMException("Aborted", "AbortError");

  let results = [...MOCK_SERVICES];

  // Filtrar por búsqueda si se provee
  if (search && search.trim() !== "") {
    const term = search.toLowerCase();
    results = results.filter(
      (s) =>
        s.clientName.toLowerCase().includes(term) ||
        s.address.toLowerCase().includes(term) ||
        s.assignedTo.toLowerCase().includes(term)
    );
  }

  return results;
};

/**
 * Obtiene las estadísticas generales del dashboard
 */
export const fetchStats = async (): Promise<Stats> => {
  await delay(800);

  return {
    totalServices: 47,
    activeServices: 5,
    completedToday: 8,
    completionRate: 94,
    revenue: 1240,
    availableStaff: 3,
  };
};

/**
 * Obtiene datos en tiempo real del estado de los equipos
 */
export const fetchRealTimeData = async (): Promise<RealTimeData> => {
  await delay(300);

  // Simula variación aleatoria para efecto "en tiempo real"
  return {
    activeTeams: Math.floor(Math.random() * 3) + 3,   // 3-5 equipos
    pendingJobs: Math.floor(Math.random() * 5) + 2,   // 2-6 trabajos
    avgRating: parseFloat((4.5 + Math.random() * 0.4).toFixed(1)), // 4.5-4.9
    lastUpdated: new Date().toLocaleTimeString("es-CO"),
  };
};
