import { Routes, Route } from "react-router-dom";

import Mint from "./component/Mint";
import Rewards from "./component/Rewards";
import Tryme from "./component/Tryme";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Main from "./component/Main";

function App() {
  return (
    <div className="backgroundImage bg-fixed">
      <Navbar />

      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/tryme" element={<Tryme />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
