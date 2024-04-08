import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';
import Employee from './Employee';

function EmployeeList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeServices.getEmployee();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData(); 
  }, []);


    const deleteEmployee = (e,id) =>{
        e.preventDefault();
        EmployeeServices.deleteEmployee(id).then((Res) => {
            if(employees) {
                setEmployees((prevElement) => {
                    return prevElement.filter((employee) => employee.id !== id);
                });
            }
        });
    };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="h-12 mx-5">
          <button
            onClick={() => navigate('/addEmployee')}
            className="rounded font-semibold bg-gray-700 py-2 px-6 text-gray-300 hover:bg-slate-900"
          >
            Add Employee
          </button>
        </div>
        <div className="flex shodow-xl border-b-2 my-4">
          <table className="min-w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">First Name</th>
                <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Last Name</th>
                <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Email Id</th>
                <th className="text-right font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Actions</th>
              </tr>
            </thead>
            {!loading && employees && ( 
              <tbody>
                {employees.map((employee) => (
                  <Employee employee={employee} key={employee.id} deleteEmployee = {deleteEmployee}></Employee>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default EmployeeList;
