package com.crud.ems_backend.service;

import com.crud.ems_backend.dto.EmployeeDTO;
import com.crud.ems_backend.entity.Employee;
import com.crud.ems_backend.exception.ResourceNotFoundException;
import com.crud.ems_backend.mapper.EmployeeMapper;
import com.crud.ems_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository employeerepository;

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        Employee savedEmployee = employeerepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeById(Long employeeId) {
        Employee employee = employeerepository.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee doesn't exist"));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeerepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployeeDto) {
        Employee employee = employeerepository.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee doesn't exist"));
        employee.setFirstName(updatedEmployeeDto.getFirstName());
        employee.setLastName(updatedEmployeeDto.getLastName());
        employee.setEmail(updatedEmployeeDto.getEmail());
        Employee updatedEmployee = employeerepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeerepository.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee doesn't exist"));
        employeerepository.delete(employee);
    }


}
