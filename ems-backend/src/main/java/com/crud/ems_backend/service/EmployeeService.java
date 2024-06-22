package com.crud.ems_backend.service;

import com.crud.ems_backend.dto.EmployeeDTO;
import com.crud.ems_backend.entity.Employee;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO getEmployeeById(Long employeeId);

    List<EmployeeDTO> getAllEmployees();

    EmployeeDTO updateEmployee(Long employeeId , EmployeeDTO updatedEmployeeDto);

    void deleteEmployee(Long employeeId);
}

