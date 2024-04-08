import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmp from './Components/AddEmp';
import EmployeeList from './Components/EmployeeList';
import NavBar from './Components/NavBar';
import UpdateEmployee from './Components/EmployeeUpdate';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<EmployeeList />} />
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employeeList" element={<EmployeeList />} />
        <Route path="/addEmployee" element={<AddEmp />} />
        <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
