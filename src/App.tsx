import { OpenMenuProvider } from "./contexts/OpenSidebarMenu";
import { RoutesApp } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <OpenMenuProvider>
        <RoutesApp />
        <ToastContainer />
      </OpenMenuProvider>
    </div>
  );
}

export default App;
