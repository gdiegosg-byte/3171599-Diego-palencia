// ============================================================
// COMPONENTE: RealTimeIndicator - Estado en Tiempo Real
// Usa setInterval para polling cada 5 segundos
// ============================================================

import React, { useState, useEffect } from "react";
import type { RealTimeData } from "../types";
import { fetchRealTimeData } from "../utils/api";

export const RealTimeIndicator: React.FC = () => {
  // ── Estado ─────────────────────────────────────────────────
  const [data, setData] = useState<RealTimeData | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // ── Polling cada 5 segundos ────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      setIsUpdating(true); // Parpadeo visual al actualizar

      try {
        const result = await fetchRealTimeData();
        setData(result);
        setError(null);
      } catch {
        setError("Sin conexión al servidor");
      } finally {
        setIsUpdating(false);
      }
    };

    fetchData(); // Llamada inicial (no esperar 5 segundos)

    // Configurar el intervalo de polling
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup: detener polling al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  // ── Renderizado ────────────────────────────────────────────
  return (
    <div style={styles.container}>
      {/* Header con indicador de estado */}
      <div style={styles.header}>
        <h2 style={styles.title}>🔴 En Tiempo Real</h2>
        <div style={styles.statusRow}>
          <div
            style={{
              ...styles.dot,
              backgroundColor: error ? "#ef4444" : "#10b981",
              animation: !error ? "pulse 1.5s ease-in-out infinite" : "none",
            }}
          />
          <span style={styles.statusText}>
            {error ? "Desconectado" : isUpdating ? "Actualizando..." : "En vivo"}
          </span>
        </div>
      </div>

      {/* Métricas en tiempo real */}
      {data && !error && (
        <div style={styles.metricsGrid}>
          {/* Equipos activos */}
          <div style={styles.metric}>
            <span style={styles.metricIcon}>🚗</span>
            <div>
              <span style={styles.metricValue}>{data.activeTeams}</span>
              <p style={styles.metricLabel}>Equipos en ruta</p>
            </div>
          </div>

          {/* Trabajos en cola */}
          <div style={styles.metric}>
            <span style={styles.metricIcon}>📋</span>
            <div>
              <span style={styles.metricValue}>{data.pendingJobs}</span>
              <p style={styles.metricLabel}>Trabajos en cola</p>
            </div>
          </div>

          {/* Calificación promedio */}
          <div style={{ ...styles.metric, gridColumn: "span 2" }}>
            <span style={styles.metricIcon}>⭐</span>
            <div>
              <span style={{ ...styles.metricValue, color: "#f59e0b" }}>
                {data.avgRating}
              </span>
              <p style={styles.metricLabel}>Calificación promedio hoy</p>
            </div>
          </div>
        </div>
      )}

      {/* Estado de error */}
      {error && (
        <div style={styles.errorBox}>
          <p>⚠️ {error}</p>
          <p style={styles.errorSub}>Reintentando automáticamente...</p>
        </div>
      )}

      {/* Timestamp de última actualización */}
      <div style={styles.footer}>
        <span style={styles.footerText}>
          {data
            ? `🕐 Última actualización: ${data.lastUpdated}`
            : "Esperando datos..."}
        </span>
        <span style={styles.interval}>Intervalo: 5s</span>
      </div>
    </div>
  );
};

// ── Estilos ────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: "#0f172a",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    color: "#f1f5f9",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: { margin: 0, fontSize: "18px", color: "#f1f5f9" },
  statusRow: { display: "flex", alignItems: "center", gap: "8px" },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },
  statusText: { fontSize: "13px", color: "#94a3b8" },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "14px",
    marginBottom: "16px",
  },
  metric: {
    backgroundColor: "#1e293b",
    borderRadius: "10px",
    padding: "14px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  metricIcon: { fontSize: "28px" },
  metricValue: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#f1f5f9",
    display: "block",
  },
  metricLabel: { margin: "2px 0 0", fontSize: "12px", color: "#64748b" },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "12px",
    borderTop: "1px solid #1e293b",
  },
  footerText: { fontSize: "12px", color: "#64748b" },
  interval: {
    fontSize: "11px",
    backgroundColor: "#1e293b",
    padding: "3px 8px",
    borderRadius: "6px",
    color: "#94a3b8",
  },
  errorBox: {
    textAlign: "center",
    padding: "20px",
    color: "#fca5a5",
    marginBottom: "16px",
  },
  errorSub: { fontSize: "12px", color: "#64748b", marginTop: "4px" },
};
