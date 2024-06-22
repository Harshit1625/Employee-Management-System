package com.crud.ems_backend.mapper;


import com.crud.ems_backend.dto.EmployeeDTO;
import com.crud.ems_backend.entity.Employee;

public class EmployeeMapper {
  public static EmployeeDTO mapToEmployeeDto(Employee employee){
      return new EmployeeDTO(
              employee.getId(),
              employee.getFirstName(),
              employee.getEmail(),
              employee.getLastName()
      );
  }

  public static Employee mapToEmployee(EmployeeDTO employeeDTO){
      return new Employee(
              employeeDTO.getId(),
              employeeDTO.getFirstName(),
              employeeDTO.getLastName(),
              employeeDTO.getEmail()
      );
  }
}

