import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from '../src/compoents/users/navigation/navbar';
import ConditionalRoute from "./routes/conditionalRouting";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/*' element={<ConditionalRoute />} />
      </Routes>
      <UseFooter/>
    </>
  );
}

export default App;
