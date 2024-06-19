import './App.css';
import { Route, Routes } from "react-router-dom";
import ConditionalRoute from './routes/conditionalRoute';
import UserNavBar from './components/navigation/userNavBar';
import UseFooter from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <UserNavBar />
      <Routes>
        <Route path='/*' element={<ConditionalRoute />} />
      </Routes>
      <UseFooter/>
    </div>
  );
}

export default App;
