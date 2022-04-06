import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import DiaryPage from "./pages/DiaryPage";
import PlanPage from "./pages/PlanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />}>
          <Route index element={<h1>home</h1>} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="checklist" element={<h1>checklist</h1>} />
          <Route path="plan" element={<PlanPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
