import AppNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import Register from "./components/Register";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
