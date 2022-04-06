import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import HomePage from "./pages/HomePage";
import DiaryPage from "./pages/DiaryPage";
import ChecklistPage from "./pages/ChecklistPage";
import PlanPage from "./pages/PlanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="checklist" element={<ChecklistPage />} />
          <Route path="plan" element={<PlanPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
