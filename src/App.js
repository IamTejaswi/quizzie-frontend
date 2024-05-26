import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage"
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Dashboard" element={<DashBoardPage />} />
        <Route path="/Analytics" element={<AnalyticsPage />} />
        <Route path="/CreateQuiz" element={<CreateQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
