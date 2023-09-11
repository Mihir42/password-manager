import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import UserPasswords from "./components/Views/UserPasswords";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPasswords />} />
        <Route path="/addPassword" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
