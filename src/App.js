import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppNavbar } from "./components/ui/AppNavbar";
import { Products } from "./components/ui/Products";
import { Footer } from "./components/ui/Footer";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
