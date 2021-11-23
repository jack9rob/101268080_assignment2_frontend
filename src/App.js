import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDelete from './components/EmployeeDelete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div class="container">
      <NavBar/>
      <BrowserRouter>
          <Routes>
            <Route path= "/" element={<EmployeeList/>} />
            <Route path="/employees/add" element={<EmployeeForm/> } />
            <Route path="/employees/add/:id" element={<EmployeeForm/> } />
            <Route path="/employees/delete/:id" element={<EmployeeDelete/>}/>
            <Route path="/employees/:id" element={<EmployeeDetails/>} />
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
