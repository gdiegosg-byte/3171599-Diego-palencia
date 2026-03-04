// ============================================================
// COMPONENTE: Dashboard - Plataforma de Limpieza
// Componente principal que orquesta todos los demás
// ============================================================

import React from "react";
import { ItemList } from "./ItemList";
import { StatsCard } from "./StatsCard";
import { RealTimeIndicator } from "./RealTimeIndicator";

export const Dashboard: React.FC = () => {
  const today = new Date().toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={styles.page}>
      {/* ── Header ─────────────────────────────────────────── */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.logo}>🧹 CleanPro</h1>
          <span style={styles.subtitle}>Plataforma de Gestión de Limpieza</span>
        </div>
        <div style={styles.headerRight}>
          <span style={styles.date}>{today}</span>
        </div>
      </header>

      {/* ── Layout principal ───────────────────────────────── */}
      <main style={styles.main}>
        {/* Fila superior: Stats + RealTime */}
        <div style={styles.topRow}>
          <div style={styles.statsWrapper}>
            <StatsCard />
          </div>
          <div style={styles.realTimeWrapper}>
            <RealTimeIndicator />
          </div>
        </div>

        {/* Fila inferior: Lista de servicios */}
        <div style={styles.listWrapper}>
          <ItemList />
        </div>
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer style={styles.footer}>
        <span>© 2026 CleanPro · Dashboard v1.0 · React + useEffect</span>
      </footer>

      {/* ── Keyframes via style tag ────────────────────────── */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { box-sizing: border-box; }
        body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      `}</style>
    </div>
  );
};

// ── Estilos ────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#ffffff",
    padding: "16px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  headerLeft: { display: "flex", alignItems: "center", gap: "12px" },
  logo: { margin: 0, fontSize: "22px", color: "#0284c7" },
  subtitle: { fontSize: "14px", color: "#94a3b8" },
  headerRight: {},
  date: { fontSize: "13px", color: "#64748b", textTransform: "capitalize" },
  main: {
    flex: 1,
    padding: "24px 32px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "1400px",
    width: "100%",
    margin: "0 auto",
  },
  topRow: {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: "20px",
    alignItems: "start",
  },
  statsWrapper: {},
  realTimeWrapper: {},
  listWrapper: {},
  footer: {
    textAlign: "center",
    padding: "16px",
    fontSize: "12px",
    color: "#94a3b8",
    borderTop: "1px solid #e2e8f0",
  },
};
