
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ArtisanLayout    from "./layouts/ArtisanLayout/ArtisanLayout.jsx";
import Login            from "./pages/auth/Login.jsx";
import Dashboard        from "./pages/artisan/Dashboard/Dashboard.jsx";
import Orders           from "./pages/artisan/Orders/Orders.jsx";
import OrderDetails     from "./pages/artisan/OrderDetails/OrderDetails.jsx";
import NewOrder         from "./pages/artisan/NewOrder/NewOrder.jsx";
import ClientDashboard  from "./pages/client/Dashboard/ClientDashboard.jsx";

/* Thin wrapper — keeps ArtisanLayout out of individual page files */
function ArtisanPage({ children }) {
  return <ArtisanLayout>{children}</ArtisanLayout>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default → login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* Artisan portal */}
        <Route path="/artisan/dashboard" element={<ArtisanPage><Dashboard /></ArtisanPage>} />
        <Route path="/artisan/orders"    element={<ArtisanPage><Orders /></ArtisanPage>} />
        <Route path="/artisan/orders/:id" element={<ArtisanPage><OrderDetails /></ArtisanPage>} />
        <Route path="/artisan/add-order" element={<ArtisanPage><NewOrder /></ArtisanPage>} />

        {/* Client portal */}
        <Route path="/client/dashboard"  element={<ClientDashboard />} />

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
