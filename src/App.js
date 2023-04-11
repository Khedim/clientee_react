import "./App.css";
import { Navbar } from "./Parts/Navbar";
import { Footer } from "./Parts/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5 pt-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
