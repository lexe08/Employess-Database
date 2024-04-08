import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';

function AddEmp() {
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeServices.saveEmployee(employee)
            .then((response) => {
                console.log(response);
                navigate("/employeeList")
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            email: ""
        });
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow-xl border-b justify-center items-center  ">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Employee</h1>
                </div>

                <div className="justify-center items-center h-14 w-full my-2">
                    <label className="block text-gray-600 text-sm font-normal">First Name</label>
                    <input type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                        className="h-8 border-2 border-gray-300 w-96 mt-2 px-2 py-2 " />
                </div>

                <div className="justify-center items-center h-14 w-full my-2">
                    <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                    <input type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                        className="h-8 border-2 border-gray-300 w-96 mt-2 px-2 py-2 " />
                </div>

                <div className="justify-center items-center h-14 w-full my-2">
                    <label className="block text-gray-600 text-sm font-normal">Email</label>
                    <input type="text"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        className="h-8 border-2 border-gray-300 w-96 mt-2 px-2 py-2 " />
                </div>

                <div className="justify-center items-center h-14 w-full my-4 space-x-4 pt-4">
                    <button onClick={saveEmployee} className="rounded font-semibold bg-gray-600 py-2 px-6 text-gray-300 hover:bg-slate-800">Save</button>
                    <button onClick={reset} className="rounded font-semibold bg-gray-600 py-2 px-6 text-gray-300 hover:bg-slate-800">Clear</button>
                </div>
            </div>
        </div>
    );
}

export default AddEmp;
