import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './Components/SignIn';
import Service from './Components/service';
import HotelDetailsCard from './Components/HotelDetailsCard';
function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/services" element={<Service />} />
            <Route exact path="/details" element={<HotelDetailsCard />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
