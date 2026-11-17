import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Details from "./pages/Home/components/details";
import Header from "./layouts/Header";
import './App.css';
import Footer from "./layouts/Footer";
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer/>
    </>


  );

}

export default App;
