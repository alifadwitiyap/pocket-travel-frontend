import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import DiaryPage from "./pages/DiaryPage";
import PlanPage from "./pages/PlanPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="checklist" element={<h1>checklist</h1>} />
          <Route path="plan" element={<PlanPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
