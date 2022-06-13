import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import Profile from "./Profile";
import My1 from './My1';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/my1" element={<My1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;