import ListEmployeeComponent from "./components/ListEmployeeComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<CreateEmployee />} />
          <Route path="/update-employee/:id" element={<CreateEmployee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
