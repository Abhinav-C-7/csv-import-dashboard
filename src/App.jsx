import { Routes, Route } from "react-router-dom";
import ImportBilling from "./pages/ImportBilling";
import ComponentShowcase from "./pages/ComponentShowcase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ImportBilling />} />
      <Route path="/showcase" element={<ComponentShowcase />} />
    </Routes>
  );
}

export default App;
