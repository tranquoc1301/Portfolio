import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
