import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Home from "./page/Home/Home";

export const AppContext = createContext();

function App() {
  const [searchText, setSearchText] = useState("all");

  return (
    <AppContext.Provider value={[searchText, setSearchText]}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
