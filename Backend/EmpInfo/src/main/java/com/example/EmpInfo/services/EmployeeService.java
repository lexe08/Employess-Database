package com.example.EmpInfo.services;

import com.example.EmpInfo.entity.EmployeeEntity;
import com.example.EmpInfo.model.Employee;

import java.util.List;

public interface EmployeeService {

    String CreateEmployee(Employee employee);

    List<EmployeeEntity> ReadEmployees();


    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);


}
