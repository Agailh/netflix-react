import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <div >
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
