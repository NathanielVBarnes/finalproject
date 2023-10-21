import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import NavbarComponent from "./components/NavbarComponent";  // Import NavbarComponent
import HousesList from "./components/HousesList";

function App() {
  return (
    <div>
      <NavbarComponent />  {/* Add NavbarComponent here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/houses" element={<HousesList />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
