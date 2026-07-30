/**
 * src/prerender.tsx
 *
 * Módulo carregado pelo scripts/prerender.ts via vite.ssrLoadModule() em build time.
 * Nunca incluído no bundle do cliente.
 *
 * Usa StaticRouter (server-side) em vez de BrowserRouter — não depende de APIs
 * do browser (window, document, history). Importa componentes diretamente,
 * sem lazy/Suspense, pois renderToString é síncrono.
 */
import { renderToString } from 'react-dom/server';
import { StrictMode } from 'react';
import { StaticRouter, Routes, Route, Navigate } from 'react-router';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

export async function prerender() {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </StaticRouter>
    </StrictMode>,
  );

  return { html };
}
