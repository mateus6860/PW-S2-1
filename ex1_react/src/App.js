import { BrowserRouter } from "react-router-dom";
import AppMenu from "./AppMenu";
import "./css/variables.css";


function App() {
  return (
    <BrowserRouter>
      <AppMenu />
    </BrowserRouter>
  );
}

export default App;
