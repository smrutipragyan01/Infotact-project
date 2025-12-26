import { useNavigate } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";

const Admin = () => {
  const navigate = useNavigate();

  // Simulate user role (frontend-only)
  const isAdmin = true; // change to false to test non-admin view

  return (
    <div className="app-container">
      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar" style={{ marginBottom: "20px" }}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/chat")}>Chat</button>
        <button onClick={() => navigate("/admin")}>Admin</button>
      </nav>

      {/* ---------- PAGE TITLE ---------- */}
      <h1 className="app-title">Admin Panel</h1>
      <p className="app-subtitle">
        View SOP analytics and dashboard insights
      </p>

      {/* ---------- Role-based Content ---------- */}
      {isAdmin ? (
        <AdminDashboard />
      ) : (
        <p style={{ color: "#fff", fontWeight: "bold" }}>
          Access Denied. Admins only.
        </p>
      )}
    </div>
  );
};

export default Admin;
