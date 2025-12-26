import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import SearchBox from "../components/SearchBox";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navigation bar */}
      <nav className="navbar" style={{ marginBottom: "20px" }}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/chat")} style={{ marginLeft: "10px" }}>
          Chat
        </button>
        <button onClick={() => navigate("/admin")} style={{ marginLeft: "10px" }}>
          Admin
        </button>
      </nav>

      <h1 className="app-title">Welcome to OpsMind AI</h1>
      <p className="app-subtitle">Your AI-powered corporate knowledge assistant</p>
      <FileUpload />
      <SearchBox />
    </div>
  );
};

export default Home;
