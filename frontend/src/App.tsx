import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
