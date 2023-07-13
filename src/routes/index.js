import { Routes, Route } from "react-router-dom";
import AboutPages from "../pages/About";
import ContactPages from "../pages/ContactUs/index"
const Routings = () => {
    return (
        <Routes>
            <Route path="/about" element={<AboutPages />} />
            <Route path="/contact-us" element={<ContactPages />} />
        </Routes>
    )
}
export default Routings