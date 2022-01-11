import { HomeProvider } from "./contexts/OpenSidebarMenu";
import { RoutesApp } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <HomeProvider>
        <RoutesApp />
        <ToastContainer />
      </HomeProvider>
    </div>
  );
}

export default App;
