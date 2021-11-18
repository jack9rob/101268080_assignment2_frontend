import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeForm from './components/EmployeeForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/api/v1/employees/add"><EmployeeForm/></Route>
            <Route path="/api/v1/employees/:id"><EmployeeDetails/></Route>
            <Route path="/api/v1/employees"><EmployeeList/></Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
