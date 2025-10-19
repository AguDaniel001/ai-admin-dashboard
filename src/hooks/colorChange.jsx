// src/settings/theme.js

// Default theme color
const DEFAULT_PRIMARY_COLOR = "#a78bfa";
const STORAGE_KEY = "primaryColor";

// Apply color immediately on app load
export function applyPrimaryColor() {
  const savedColor = localStorage.getItem(STORAGE_KEY) || DEFAULT_PRIMARY_COLOR;
  document.documentElement.style.setProperty("--color-primary", savedColor);
  return savedColor;
}

// Change and persist color
export function setPrimaryColor(color) {
  document.documentElement.style.setProperty("--color-primary", color);
  localStorage.setItem(STORAGE_KEY, color);
}

// Get current color (from storage or default)
export function getPrimaryColor() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_PRIMARY_COLOR;
}
