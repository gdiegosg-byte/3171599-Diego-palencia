// ============================================================
// CUSTOM HOOK - useFetch
// Hook genérico para manejo de fetch con estados
// ============================================================

import { useState, useEffect, useCallback } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook genérico que maneja fetch, loading, error y refetch
 * @param fetchFn - Función async que retorna los datos
 * @param deps - Dependencias adicionales para re-ejecutar
 */
export function useFetch<T>(
  fetchFn: (signal: AbortSignal) => Promise<T>,
  deps: unknown[] = []
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState<number>(0);

  // Permite re-ejecutar el fetch manualmente
  const refetch = useCallback(() => setTrigger((n) => n + 1), []);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchFn(controller.signal);
        // Solo actualizar si el componente sigue montado
        if (!controller.signal.aborted) {
          setData(result);
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Error al cargar los datos. Intenta de nuevo.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    load();

    // Cleanup: cancelar petición al desmontar
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, ...deps]);

  return { data, loading, error, refetch };
}