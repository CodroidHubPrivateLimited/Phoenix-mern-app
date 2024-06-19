import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from '../src/compoents/users/navigation/navbar';
import ConditionalRoute from "./routes/conditionalRouting";
import Footer from "../src/components/footer/footer.js";
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/*' element={<ConditionalRoute />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
