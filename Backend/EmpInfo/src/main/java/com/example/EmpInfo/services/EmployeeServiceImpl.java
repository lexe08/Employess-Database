package com.example.EmpInfo.services;

import com.example.EmpInfo.entity.EmployeeEntity;
import com.example.EmpInfo.model.Employee;
import com.example.EmpInfo.repository.EmployeeRepo;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    private EmployeeRepo employeeRepo;
    @Override
    public String CreateEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepo.save(employeeEntity);
        return "saved successfully";

    }

    @Override
    public List<EmployeeEntity> ReadEmployees() {
        return employeeRepo.findAll();
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepo.findById(id).get();
        employeeRepo.delete(employee);
        return true;
    }


    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepo.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }


    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity = employeeRepo.findById(id).get();
        employeeEntity.setEmail(employee.getEmail());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeRepo.save(employeeEntity);
        return employee;
    }


}
