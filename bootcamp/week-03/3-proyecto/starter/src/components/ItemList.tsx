// ============================================================
// COMPONENTE: ItemList - Lista de Servicios de Limpieza
// Muestra servicios con fetch inicial y búsqueda
// ============================================================

import React, { useState, useEffect, useCallback } from "react";
import type { CleaningService } from "../types";
import { fetchServices } from "../utils/api";

// Etiquetas visuales por tipo de servicio
const SERVICE_LABELS: Record<CleaningService["serviceType"], string> = {
  basic: "Básica",
  deep: "Profunda",
  "move-in": "Mudanza",
  office: "Oficina",
};

// Colores por estado
const STATUS_COLORS: Record<CleaningService["status"], string> = {
  pending: "#f59e0b",
  "in-progress": "#3b82f6",
  completed: "#10b981",
  cancelled: "#ef4444",
};

const STATUS_LABELS: Record<CleaningService["status"], string> = {
  pending: "Pendiente",
  "in-progress": "En curso",
  completed: "Completado",
  cancelled: "Cancelado",
};

export const ItemList: React.FC = () => {
  // ── Estados ────────────────────────────────────────────────
  const [services, setServices] = useState<CleaningService[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  // ── Debounce del término de búsqueda (300ms) ───────────────
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer); // Cleanup del timer
  }, [search]);

  // ── Fetch de servicios (se re-ejecuta al cambiar búsqueda) ─
  const loadServices = useCallback(
    async (signal: AbortSignal) => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchServices(signal, debouncedSearch);

        if (!signal.aborted) {
          setServices(data);
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("No se pudieron cargar los servicios. Intenta de nuevo.");
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    },
    [debouncedSearch]
  );

  useEffect(() => {
    const controller = new AbortController();
    loadServices(controller.signal);

    // Cleanup: cancelar petición al desmontar o cambiar búsqueda
    return () => controller.abort();
  }, [loadServices]);

  // ── Renderizado ────────────────────────────────────────────
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>🧹 Servicios del Día</h2>
        <span style={styles.badge}>{services.length} servicios</span>
      </div>

      {/* Input de búsqueda */}
      <div style={styles.searchRow}>
        <input
          type="text"
          placeholder="Buscar por cliente, dirección o empleado..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        {search && (
          <button onClick={() => setSearch("")} style={styles.clearBtn}>
            ✕
          </button>
        )}
      </div>

      {/* Estado: cargando */}
      {loading && (
        <div style={styles.center}>
          <div style={styles.spinner} />
          <p style={styles.loadingText}>Cargando servicios...</p>
        </div>
      )}

      {/* Estado: error */}
      {!loading && error && (
        <div style={styles.errorBox}>
          <p>⚠️ {error}</p>
          <button
            onClick={() => setDebouncedSearch((s) => s)}
            style={styles.retryBtn}
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Estado: sin resultados */}
      {!loading && !error && services.length === 0 && (
        <div style={styles.center}>
          <p style={styles.emptyText}>
            No se encontraron servicios{search ? ` para "${search}"` : ""}.
          </p>
        </div>
      )}

      {/* Lista de servicios */}
      {!loading && !error && services.length > 0 && (
        <ul style={styles.list}>
          {services.map((service) => (
            <li key={service.id} style={styles.card}>
              <div style={styles.cardTop}>
                <span style={styles.clientName}>{service.clientName}</span>
                <span
                  style={{
                    ...styles.statusBadge,
                    backgroundColor: STATUS_COLORS[service.status],
                  }}
                >
                  {STATUS_LABELS[service.status]}
                </span>
              </div>

              <p style={styles.address}>📍 {service.address}</p>

              <div style={styles.cardBottom}>
                <span style={styles.tag}>
                  🧽 {SERVICE_LABELS[service.serviceType]}
                </span>
                <span style={styles.tag}>👤 {service.assignedTo}</span>
                <span style={styles.price}>${service.price}</span>
              </div>

              <p style={styles.time}>
                🕐{" "}
                {new Date(service.scheduledDate).toLocaleTimeString("es-CO", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ── Estilos ────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    gridColumn: "span 2",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  title: { margin: 0, fontSize: "18px", color: "#1e293b" },
  badge: {
    backgroundColor: "#e0f2fe",
    color: "#0284c7",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: 600,
  },
  searchRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
  },
  input: {
    flex: 1,
    padding: "9px 14px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
    outline: "none",
  },
  clearBtn: {
    background: "#f1f5f9",
    border: "none",
    borderRadius: "8px",
    padding: "0 14px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#64748b",
  },
  list: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" },
  card: {
    border: "1px solid #f1f5f9",
    borderRadius: "10px",
    padding: "14px",
    backgroundColor: "#fafafa",
  },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" },
  clientName: { fontWeight: 600, fontSize: "15px", color: "#1e293b" },
  statusBadge: {
    color: "#fff",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: 600,
  },
  address: { margin: "0 0 8px", fontSize: "13px", color: "#64748b" },
  cardBottom: { display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" },
  tag: {
    backgroundColor: "#f1f5f9",
    color: "#475569",
    padding: "3px 10px",
    borderRadius: "6px",
    fontSize: "12px",
  },
  price: { marginLeft: "auto", fontWeight: 700, color: "#059669", fontSize: "15px" },
  time: { margin: "6px 0 0", fontSize: "12px", color: "#94a3b8" },
  center: { textAlign: "center", padding: "30px 0" },
  spinner: {
    width: "36px",
    height: "36px",
    border: "3px solid #e2e8f0",
    borderTop: "3px solid #0284c7",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    margin: "0 auto 12px",
  },
  loadingText: { color: "#64748b", fontSize: "14px" },
  errorBox: { textAlign: "center", padding: "20px", color: "#dc2626" },
  retryBtn: {
    marginTop: "8px",
    padding: "8px 20px",
    backgroundColor: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
  emptyText: { color: "#94a3b8", fontSize: "14px" },
};
