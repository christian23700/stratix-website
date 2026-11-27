"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { productById } from "@/lib/shop";

// The visitor's shopping list. No payment: the list is sent on WhatsApp (see ListPanel).
// It is kept in this browser (localStorage) so a visitor finds it again later.
const STORAGE_KEY = "stratix-list-v1";
const ListContext = createContext(null);

const emptyState = { lines: [], mode: "retail", city: "" };

function load() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.lines)) return emptyState;
    // Drop products that left the catalogue.
    const lines = saved.lines.filter((l) => l.custom || productById[l.productId]);
    return { ...emptyState, ...saved, lines };
  } catch {
    return emptyState;
  }
}

export const lineKey = (productId, size) => (size ? `${productId}:${size}` : productId);

export function ListProvider({ children }) {
  const [state, setState] = useState(emptyState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // private mode or storage full: the list still works for this visit
    }
  }, [state, ready]);

  const setQty = useCallback((key, qty) => {
    setState((s) => ({
      ...s,
      lines: qty > 0 ? s.lines.map((l) => (l.key === key ? { ...l, qty } : l)) : s.lines.filter((l) => l.key !== key)
    }));
  }, []);

  const add = useCallback((productId, size) => {
    const key = lineKey(productId, size);
    setState((s) => {
      const existing = s.lines.find((l) => l.key === key);
      const lines = existing
        ? s.lines.map((l) => (l.key === key ? { ...l, qty: l.qty + 1 } : l))
        : [...s.lines, { key, productId, size: size || "", qty: 1 }];
      return { ...s, lines };
    });
  }, []);

  const addCustom = useCallback((item) => {
    setState((s) => ({ ...s, lines: [...s.lines, { ...item, custom: true, key: `custom:${Date.now()}` }] }));
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      ready,
      count: state.lines.reduce((sum, l) => sum + l.qty, 0),
      qtyOf: (productId, size) => state.lines.find((l) => l.key === lineKey(productId, size))?.qty || 0,
      add,
      addCustom,
      setQty,
      remove: (key) => setQty(key, 0),
      clear: () => setState((s) => ({ ...s, lines: [] })),
      setMode: (mode) => setState((s) => ({ ...s, mode })),
      setCity: (city) => setState((s) => ({ ...s, city }))
    }),
    [state, ready, add, addCustom, setQty]
  );

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

export function useList() {
  const ctx = useContext(ListContext);
  if (!ctx) throw new Error("useList must be used inside <ListProvider>");
  return ctx;
}
