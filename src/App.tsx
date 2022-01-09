import { OpenMenuProvider } from "./contexts/OpenSidebarMenu";
import { RoutesApp } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <OpenMenuProvider>
        <RoutesApp />
      </OpenMenuProvider>
    </div>
  );
}

export default App;
