import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["HR", "IT", "Finance", "Operations"],
  datasets: [
    {
      label: "SOP Count",
      data: [5, 8, 3, 6],
      backgroundColor: "#4f46e5",
    },
  ],
};

function AdminDashboard() {
  return (
    <div className="card">
      <h2>Admin Analytics</h2>
      <Bar data={data} />
    </div>
  );
}

export default AdminDashboard;
