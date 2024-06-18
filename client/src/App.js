import './App.css';
import { BrowserRouter as Route, Routes } from "react-router-dom";
import ConditionalRoute from './routes/conditionalRoute';
import UserNavBar from './components/navigation/userNavBar';

function App() {
  return (
    <div className="App">
      <UserNavBar />
      <Routes>
        <Route path='/*' element={<ConditionalRoute />} />
      </Routes>
    </div>
  );
}

export default App;
