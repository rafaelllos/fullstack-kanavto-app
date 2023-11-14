import './App.css';
import {Route, Routes} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Bookingpage from "./pages/Bookingpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="booking/:id" element={<Bookingpage />} />
    </Routes>
  );
}

export default App;
